module.exports = {

  getAllByRoomId: async function (req, res) {
    res.json({status: true, data: [{id:1, message:'test'}]});
  },

  // Upload Image in Chat
  uploadChatImage: async function(req,res) {
    res.json({status: true, message: 'Image uploaded successfully'});
  }

};
