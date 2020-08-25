const moment = require('moment');

module.exports = {
  getAllByUserId: async function (req, res) {
    res.json({
      status: true, data: [{
        id: 1,
        notification: 'Your account verified successfully.',
        createAt: moment()
      },
        {
          id: 2,
          notification: 'New friend request.',
          createAt: moment()
        }]
    });
  },

  deleteById: async function (req, res) {
    res.json({status: true, message: 'Notification deleted.'});
  }
};
