import { useState } from "react";
import axios from "axios";

function CloudStorage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contactInfo: "",
    medicalNotes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/patients", {
        ...formData,
        age: parseInt(formData.age)  // Ensure age is a number
      });
      alert("✅ Patient record saved!");

      // Optional: reset form
      setFormData({
        name: "",
        age: "",
        gender: "",
        contactInfo: "",
        medicalNotes: ""
      });
    } catch (err) {
      console.error("❌ Error saving data:", err);
      alert("Failed to save data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold">Add Patient Record</h2>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <input
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <input
        name="contactInfo"
        placeholder="Contact Info"
        value={formData.contactInfo}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <textarea
        name="medicalNotes"
        placeholder="Medical Notes"
        value={formData.medicalNotes}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default CloudStorage;