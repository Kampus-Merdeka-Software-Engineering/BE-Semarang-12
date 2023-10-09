const newsletter = require('../models/newsletter');

const newsletterControllers = {

  showAllNewsletter: (req, res) => {
    newsletter.allNewsletter((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil newsletter:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  
  createNewsletter: (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
  
    const newsletterBaru = { email, status: 'Terkirim' };
  
    newsletter.create(newsletterBaru, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat newsletter:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Newsletter berhasil dibuat', newsletter: hasil });
    });
  },

  editNewsletter: (req, res) => {
    const idNewsletter = req.params.id;
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const newsletterEdited = { email, status: 'Terkirim dan Teredit' };

    newsletter.edit(idNewsletter, newsletterEdited, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit info news:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Newsletter berhasil diperbarui', newsletter: hasil });
    });
  },

  deleteNewsletter: (req, res) => {
    const idNewsletter = req.params.id;

    newsletter.hapus(idNewsletter, (err) => {
      if (err) {
        console.error('Error saat menghapus newsletter:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Newsletter berhasil dihapus' });
    });
  },

  showNewsletterByID: (req, res) => {
    const idNewsletter = req.params.id;

    newsletter.showByID(idNewsletter, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil newsletter:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Newsletter tidak ditemukan' });
      }
    });
  },

};

module.exports = newsletterControllers;