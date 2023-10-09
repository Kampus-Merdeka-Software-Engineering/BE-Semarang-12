const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  tanggal: {
    type: Date,
    required: true,
  },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;