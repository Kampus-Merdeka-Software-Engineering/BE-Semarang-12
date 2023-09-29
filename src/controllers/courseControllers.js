const Course = require('../models/course');

const courseController = {

  showAllCourse: (req, res) => {
    Course.showCourse((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil Course:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  
  createCourse: (req, res) => {
    const { email } = req.body;
  
    if (!email ) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
  
    const newCourse = { email, status: 'Terkirim' };
  
    Course.create(newCourse, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat Course:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Course berhasil dibuat', Course: hasil });
    });
  },
  
  editCourse: (req, res) => {
    const idCourse = req.params.id;
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const courseEdited = { email, status: 'Terkirim dan Teredit' };

    Course.edit(idCourse, courseEdited, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit Course:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Course berhasil diperbarui', Course: hasil });
    });
  },

  hapusCourse: (req, res) => {
    const idCourse = req.params.id;

    Course.delete(idCourse, (err) => {
      if (err) {
        console.error('Error saat menghapus Course:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Course berhasil dihapus' });
    });
  },

  showCourseByID: (req, res) => {
    const idCourse = req.params.id;

    Course.showByID(idCourse, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data Course:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Course tidak ditemukan' });
      }
    });
  },

};


module.exports = courseController;