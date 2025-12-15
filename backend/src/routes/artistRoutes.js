const express =require ('express');
const router = express.Router();
const { getAllArtists,getArtistById } = require('../controllers/artistController');

//get all artists
router.get('/', getAllArtists);
//get single artist by id 
router.get('/:id', getArtistById);
 
module.exports = router;