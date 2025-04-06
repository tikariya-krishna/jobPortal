// // routes/resume.js
// import express from "express";
// import { resume } from "../models/resume.js";

// const router = express.Router();

// // GET all uploaded resumes
// router.get('/', async (req, res) => {
//   try {
//     const resumes = await resume.find({});
//     res.status(200).json(resumes);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // POST upload resume (base64)
// router.post('/uploads', async (req, res) => {
//   try {
//     const newResume = await resume.create({
//       resume: req.body.resume,
//     });
//     res.status(201).json({ message: "Resume uploaded successfully", data: newResume });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;


// resume.routes.js
import express from "express";
import { resume } from "../models/resume.js";

const router = express.Router();

// router.get('/', async (req, res) => {
//   try {
//     const resumes = await resume.find({});
//     res.status(200).json(resumes);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// });

router.get('/uploads/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const latestResume = await resume.findOne({ userId }).sort({ createdAt: -1 });

    if (!latestResume) {
      return res.status(404).json({ message: "Avatar not found for this user" });
    }

    res.status(200).json({ avtar: latestResume.avtar });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/uploads', async (req, res) => {
  try {
    const { resume: resumeData, avtar: avtarData, userId } = req.body;

    if (!resumeData || !avtarData || !userId) {
      return res.status(400).json({ message: "Resume, Avatar, and User ID are required" });
    }

    const newResume = await resume.create({
      resume: resumeData,
      avtar: avtarData,
      userId: userId,
    });

    res.status(201).json({ message: "Resume and Avatar uploaded successfully", data: newResume });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default router;
