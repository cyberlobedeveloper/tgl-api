module.exports = {

  getAllByRoomId: async function (req, res) {
    res.json({status: 200, data: [{id:1, message:'test'}]});
  },

  // Upload Image in Chat
  uploadChatImage: async function(req,res) {
    res.json({status: 200, message: 'Image uploaded successfully'});
  }

};
