const express = require('express');
const router = express.Router();
const UserAction = require('../actions/UserAction');
const validateBody = require('../helpers/validate-body');


router.post('/login', validateBody('login'), UserAction.login);

router.post('/signup', validateBody('signUp'), UserAction.signUp);

router.post('/forgot-password', validateBody('forgotPassword'), UserAction.forgotPassword);

router.post('/reset-password', validateBody('resetPassword'), UserAction.resetPassword);

router.post('/FollowArtist', UserAction.FollowArtist);
router.post('/FollowUser', UserAction.FollowUser);

module.exports = router;
