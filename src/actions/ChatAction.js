const {signJwt} = require('../lib/jwt');

module.exports = {

  CommentList: function (req, res) {
    res.json({
      status: 200,
      comments: [
        {
            commentUserProfilePic: "imageUrl",
            latestComment: "Nice Artist",
            latestTime: "2020-08-14 12:45"
        }
      ]
    });
  },

  SendComment: function (req, res) {
    res.json({
      status: 200,
      message: 'Message send successfully.'
    });
  },

  GetRoomInfo: function (req, res) {
    res.json({
      status: 200,
      room_details: {
        room_name: 'Global Chat',
        room_profile_picture: 'Imageurl',
        created_by: '2020-08-14 12:45',
        created_time: '2020-08-14 12:45',
        participants: [
            {
                user_id: '1',
                user_name: 'Anuja',
                userProfilePicture: '',
                badges: 19,
                address: 'Tennessey, USA',
                is_vip: 1,
                isFollowing: 0,
                hasUpdate: 0,
                is_admin: 1
            },
            {
                user_id: '2',
                user_name: 'Bruce',
                userProfilePicture: '',
                badges: 21,
                address: 'Kolkata, India',
                is_vip: 0,
                isFollowing: 1,
                hasUpdate: 1,
                is_admin: 0
            }
        ]
    }
    });
  },

  GetListofRoom: function (req, res) {
    res.json({
      status: 200,
      chatRooms: [
        {
            roomName: 'Beyonce Club',
            roomId: '125',
            hasNewMessages: 1,
            isAdmin: 0
        },
        {
            roomName: 'Fireflies',
            roomId: '128',
            hasNewMessages: 0,
            isAdmin: 1
        }
    ]
    });
  },

  GetPendingRequest: function (req, res) {
    res.json({
      status: 200,
      pendingRequests:[
        {
            requestId: '456',
            userId: 12,
            userName: 'Anuja',
            groupName: 'FreeFiles',
            groupId: '128',
            roomImage: 'RoomImageURL',
        },
        {
            requestId: 567,
            userId: 15,
            userName: 'Bruce',
            groupName: 'FreeFiles',
            groupId: '128',
            roomImage: 'RoomImageURL',
        }
    ]
    });
  },

  AcceptorRejectRequest: function (req, res) {
    res.json({
      status: 200,
      message: 'accepted / rejected request successfully.'
    });
  },

  GetChat: function (req, res) {
    res.json({
      status: 200,
      chatData: [
        {
            userName: 'Keith',
            userId: '120',
            userProfilePicture: 'UserProfileImageURL',
            comment: 'She is a great example of humanity, perfect in every way. ❤️🌹❤️ Beyonce.. Thank you.',
            commentTime: 'Feb 28 2010 05:30:00 GMT+0530 (IST)'
        },
        {
            userName: 'Georgey',
            userId: '',
            userProfilePicture: '',
            comment: "I just missed her @beyoncé 🌹🌹🌹 , came here to watched one of my favourite song ever!Omg, watched this again, I'm still in tears, watched how everyone were happy to see",
            commentTime: 'Feb 28 2010 05:30:00 GMT+0530 (IST)'
        }
    ]
    });
  },

  LeaveRoom: function (req, res) {
    res.json({
      status: 200,
      message: 'You  left from the room successfully.'
    });
  },

  DeleteRoom: function (req, res) {
    res.json({
      status: 200,
      message: 'Room removed successfully.'
    });
  },

  CreateRoom: function (req, res) {
    res.json({
      status: 200,
      message: 'Room created successfully.'
    });
  },
  EditRoomDetail: function (req, res) {
    res.json({
      status: 200,
      message: 'Room updated successfully.'
    });
  },

  AddParticipants: function (req, res) {
    res.json({
      status: 200,
      message: 'Users added successfully.'
    });
  },
  RemoveUser: function (req, res) {
    res.json({
      status: 200,
      message: 'User removed successfully.'
    });
  },
  GetAllPaticipantsList: function (req, res) {
    res.json({
      status: 200,
      participants: [
        {
            userId: '130',
            userName: 'Anuja',
            userProfilePicture: 'ProfileImageURL',
            badges: 19,
            address: 'Tennessey, USA',
            isVip: 1,
            isFollowing: 0,
            hasUpdate: 0,
            isAdmin: 1,
            isFollowing: 1
        },
        {
            userId: '130',
            userName: 'Bruce',
            userProfilePicture: 'ProfileImageURL',
            badges: 19,
            address: 'Kolkata, India',
            isVip: 1,
            isFollowing: 0,
            hasUpdate: 0,
            isAdmin: 1,
            isFollowing: 0
        }
    ]
    });
  }

};






