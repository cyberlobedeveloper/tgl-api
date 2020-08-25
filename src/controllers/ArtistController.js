const express = require('express');
const router = express.Router();
const ArtistAction = require('../actions/ArtistAction');
const validateBody = require('../helpers/validate-body');


router.post('/GetArtistPastEventList', ArtistAction.GetArtistPastEventList);
router.post('/SimilarArtist', ArtistAction.SimilarArtist);
module.exports = router;
