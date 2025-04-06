// models/resume.js
import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  resume: {
    type: String,
    required: true,
  },
  avtar: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const resume = mongoose.model('Resume', resumeSchema);
