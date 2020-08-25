const express = require('express');
const router = express.Router();
const NotificationAction = require('../actions/NotificationAction');
const authMiddleware = require('../middleware/auth-middleware');

router.get('/me' , authMiddleware.checkToken, NotificationAction.getAllByUserId);

router.delete('/:id' , authMiddleware.checkToken, NotificationAction.deleteById);

module.exports = router;
