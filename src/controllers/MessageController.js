const express = require('express');
const router = express.Router();
const MessageAction = require('../actions/MessageAction');
const authMiddleware = require('../middleware/auth-middleware');

router.get('/room/:roomId', authMiddleware.checkToken, MessageAction.getAllByRoomId);
router.post('/room/:roomId/image', authMiddleware.checkToken, MessageAction.uploadChatImage);

module.exports = router;
