const {signJwt} = require('../lib/jwt');

module.exports = {
  login: async function (req, res) {
    const {username, password} = req.body;
    if (username == 'test' && password == 'test') {
      res.json({
        status: 200, message: 'Login success.', data: {
          username: 'test',
          token: await signJwt({id: 1, username: 'test'})
        }
      });
    } else {
      res.json({status: false, message: 'Invalid login!'});
    }
  },

  signUp: function (req, res) {
    res.json({
      status: 200,
      message: 'Sign up success! Please verify your account!'
    });
  },

  forgotPassword: function (req, res) {
    res.json({
      status: 200,
      message: 'Forgot password link has been sent to your registered mail!'
    });
  },

  resetPassword: function (req, res) {
    res.json({status: 200, message: 'Your password has been updated successfully'});
  },

  FollowArtist: function (req, res) {
    res.json({status: 200, message: 'Follow successfully'});
  },
  FollowUser: function (req, res) {
    res.json({status: 200, message: 'Successfully followed / unfollowed the user.'});
  }
};
