const express = require('express');
const router = express.Router();

const komikController = require('../controller/komikController');
const userController = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
const genreController = require('../controller/genreController');

// User routes
router.post('/register', userController.register);
router.post('/login', userController.login);

//public
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.get('/genre', genreController.getAllGenres);
router.get('/genre/:id', genreController.getGenreById);

//protected
router.post('/komik', komikController.createKomik);
router.put('/komik/:id', komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);
router.post('/genre', genreController.createGenre);
router.put('/genre/:id', genreController.updateGenre);
router.delete('/genre/:id', genreController.deleteGenre);

module.exports = router;