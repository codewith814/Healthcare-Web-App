import { useState } from "react";
import axios from "axios";

export default function PatientForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    contactInfo: "",
    medicalNotes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/patients", {
        name: form.name,
        age: parseInt(form.age),
        gender: form.gender,
        phone: form.contactInfo,         // ✅ mapped to "contact" in DB
        condition: form.medicalNotes,    // ✅ mapped to "diagnosis" in DB
      });

      if (response.status >= 200 && response.status < 300) {
        alert("✅ Patient data stored successfully!");
        setForm({ name: "", age: "", gender: "", contactInfo: "", medicalNotes: "" });
      } else {
        alert("❌ Failed to store data. Server returned " + response.status);
      }
    } catch (error: any) {
      console.error("Submission error:", error?.response || error.message);
      alert("❌ Failed to store data.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4 mt-6"
    >
      <h2 className="text-xl font-bold mb-4 text-center">Store Patient Data</h2>

      <input
        className="w-full p-2 border rounded"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        className="w-full p-2 border rounded"
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <select
        className="w-full p-2 border rounded"
        name="gender"
        value={form.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        className="w-full p-2 border rounded"
        name="contactInfo"
        value={form.contactInfo}
        onChange={handleChange}
        placeholder="Contact Info"
        required
      />
      <textarea
        className="w-full p-2 border rounded"
        name="medicalNotes"
        value={form.medicalNotes}
        onChange={handleChange}
        placeholder="Medical Notes"
        required
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