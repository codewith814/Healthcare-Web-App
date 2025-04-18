import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const app = express();
const port = 5000;

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ API Server is Running');
});

app.get('/api/ping', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

app.post('/api/patients', async (req, res) => {
  try {
    console.log("📥 Incoming data:", req.body);

    const { name, age, gender, contactInfo, medicalNotes } = req.body;

    if (!name || !age || !gender || !contactInfo || !medicalNotes) {
      return res.status(400).json({
        success: false,
        message: '❌ Missing required patient fields',
      });
    }

    const patient = await prisma.patients.create({
      data: {
        id: uuidv4(),
        Name: name,
        Age: parseInt(age),
        Gender: gender,
        Contact: contactInfo,
        Diagnosis: medicalNotes,
      },
    });

    console.log("✅ Patient saved:", patient);

    res.status(201).json({ success: true, patient });
  } catch (error) {
    console.error("❌ Error saving patient:", error);
    res.status(500).json({
      success: false,
      message: 'Failed to save patient record',
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
