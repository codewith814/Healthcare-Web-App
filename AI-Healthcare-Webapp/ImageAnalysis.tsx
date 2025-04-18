import React, { useState } from "react";

const ImageAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<number[] | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setPrediction(data.predictions);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Fracture Detection</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Analyze X-ray
      </button>

      {prediction && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Predictions:</h3>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
      
    </div>
  );
};

export default ImageAnalysis;
