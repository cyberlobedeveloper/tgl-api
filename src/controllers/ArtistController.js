const express = require('express');
const router = express.Router();
const ArtistAction = require('../actions/ArtistAction');
const validateBody = require('../helpers/validate-body');


router.post('/GetArtistPastEventList', ArtistAction.GetArtistPastEventList);
router.post('/SimilarArtist', ArtistAction.SimilarArtist);
router.post('/GetArtistDetail', ArtistAction.GetArtistDetail);
router.post('/GetArtistGallery', ArtistAction.GetArtistGallery);
router.post('/GetMerchandiseGalery', ArtistAction.GetMerchandiseGalery);
router.post('/GetArtistAboutUs', ArtistAction.GetArtistAboutUs);
router.post('/GetArtistSimilarEvents', ArtistAction.GetArtistSimilarEvents);
module.exports = router;
