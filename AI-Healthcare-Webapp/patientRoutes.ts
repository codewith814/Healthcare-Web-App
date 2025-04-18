import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/patients", async (req, res) => {
  const { name, age, gender, phone, condition } = req.body;

  try {
    const newPatient = await prisma.patients.create({
      data: {
        Name: name,
        Age: age,
        Gender: gender,
        ContactInfo: phone,
        MedicalNotes: condition,
      },
    });

    res.status(200).json(newPatient);
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(500).json({ error: "Failed to store data" });
  }
});

export default router;