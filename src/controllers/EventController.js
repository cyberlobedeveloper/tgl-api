const express = require('express');
const router = express.Router();
const EventAction = require('../actions/EventAction');
const validateBody = require('../helpers/validate-body');


router.post('/GetEventDetails', EventAction.GetEventDetails);
router.post('/BuyTicket', EventAction.BuyTicket);
router.post('/GetTicket', EventAction.GetTicket);
router.post('/GetEventSchedule', EventAction.GetEventSchedule);
router.post('/VipSupporter', EventAction.VipSupporter);
router.post('/GetUserByAlbum', EventAction.GetUserByAlbum);
router.post('/EventsForYou', EventAction.EventsForYou);

module.exports = router;
