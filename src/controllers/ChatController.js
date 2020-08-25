const express = require('express');
const router = express.Router();
const ChatAction = require('../actions/ChatAction');
const validateBody = require('../helpers/validate-body');


router.post('/SendComment', ChatAction.SendComment);
router.post('/CommentList', ChatAction.CommentList);
router.post('/GetRoomInfo', ChatAction.GetRoomInfo);
router.post('/GetListofRoom', ChatAction.GetListofRoom);
router.post('/GetPendingRequest', ChatAction.GetPendingRequest);
router.post('/AcceptorRejectRequest', ChatAction.AcceptorRejectRequest);
router.post('/GetChat', ChatAction.GetChat);
router.post('/LeaveRoom', ChatAction.LeaveRoom);
router.post('/DeleteRoom', ChatAction.DeleteRoom);
router.post('/CreateRoom', ChatAction.CreateRoom);
router.post('/EditRoomDetail', ChatAction.EditRoomDetail);
router.post('/AddParticipants', ChatAction.AddParticipants);
router.post('/RemoveUser', ChatAction.RemoveUser);
router.post('/GetAllPaticipantsList', ChatAction.GetAllPaticipantsList);
module.exports = router;
