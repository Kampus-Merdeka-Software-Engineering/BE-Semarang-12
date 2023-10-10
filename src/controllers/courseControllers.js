const Course = require('../models/course');
const shortid = require('shortid');

const courseController = {

  showAllCourse: (req, res) => {
    Course.allCourse((error, courses) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan.' });
      }
      res.status(200).json(courses);
    });
  },

  createCourse: (req, res) => {
    const { nama, email, course, tanggal } = req.body;

    if (!nama || !email || !course || !tanggal) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    function generateCustomToken() {
      const awalan = 'edUTBK-';
      const token = shortid.generate();
      const strip = '-';
      return awalan + nama + strip + token;
    }
    // Membuat token pendaftaran unik menggunakan shortid
    const tokenPendaftaran = generateCustomToken();
    const data = { nama, email, course, tanggal, tokenCourse: tokenPendaftaran, status: 'Terdaftar'};
    console.log(data);

    Course.create(data, (error, hasil) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan.' });
      }
      res.status(201).json({ message: 'Pendaftaran berhasil!', course:hasil, token: tokenPendaftaran });
    });
  },

  deleteCourse: (req, res) => {
    const { id } = req.params;

    Course.delete(id, (error, success) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan.' });
      }
      if (!success) {
        return res.status(404).json({ message: 'Data tidak ditemukan.' });
      }
      res.status(204).json();
    });
  },

  courseByToken: (req, res) => {
    const { tokenPendaftaran } = req.params;

    Course.showByID(tokenPendaftaran, (error, courses) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Terjadi kesalahan.' });
      }
      res.status(200).json(courses);
    });
  },

};


module.exports = courseController;