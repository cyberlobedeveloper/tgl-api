
const express = require('express');
const router = express.Router();
const TicketingAction = require('../actions/TicketingAction');
const validateBody = require('../helpers/validate-body');


router.post('/GetSelectTicketQuantity', TicketingAction.GetSelectTicketQuantity);
router.post('/GetVipTicket', TicketingAction.GetVipTicket);
router.post('/AddUserAddress', TicketingAction.AddUserAddress);
router.post('/GetUserAddress', TicketingAction.GetUserAddress);
router.post('/GetPaymentMethod', TicketingAction.GetPaymentMethod);
module.exports = router;
