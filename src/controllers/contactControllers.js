const contact = require('../models/contact');

const contactControllers = {

  showAllContact: (req, res) => {
    contact.allContact((err, hasil) => {
      if (err) {
        console.error('Error saat mengambil kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json(hasil);
    });
  },
  
  createContact: (req, res) => {
    const { nama, email, subject, pesan } = req.body;
  
    if (!nama || !email || !subject || !pesan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }
  
    const data = { nama, email, subject, pesan, status: 'Terkirim' };
  
    contact.create(data, (err, hasil) => {
      if (err) {
        console.error('Error saat membuat kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(201).json({ pesan: 'Kontak berhasil dibuat', contact: hasil });
    });
  },
  
  editContact: (req, res) => {
    const idContact = req.params.id;
    const { nama, email, pesan } = req.body;

    if (!nama || !email || !pesan) {
      res.status(400).json({ error: 'Form isi diperlukan' });
      return;
    }

    const contactEdited = { nama, email, subject, pesan, status: 'Terkirim dan Teredit' };

    contact.edit(idContact, contactEdited, (err, hasil) => {
      if (err) {
        console.error('Error saat mengedit kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Kontak berhasil diperbarui', kontak: hasil });
    });
  },

  deleteContact: (req, res) => {
    const idContact = req.params.id;

    contact.delete(idContact, (err) => {
      if (err) {
        console.error('Error saat menghapus kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }
      res.status(200).json({ pesan: 'Kontak berhasil dihapus' });
    });
  },

  showContactByID: (req, res) => {
    const idContact = req.params.id;

    contact.tampilkanByID(idContact, (err, hasil) => {
      if (err) {
        console.error('Error saat mengambil data kontak:', err);
        res.status(500).json({ error: 'Kesalahan Internal Server' });
        return;
      }

      if (hasil) {
        res.status(200).json(hasil);
      } else {
        res.status(404).json({ error: 'Kontak tidak ditemukan' });
      }
    });
  },

};


module.exports = contactControllers;