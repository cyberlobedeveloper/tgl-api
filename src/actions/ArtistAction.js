const {signJwt} = require('../lib/jwt');

module.exports = {

  GetArtistPastEventList: function (req, res) {
    res.json({
      status: true,
      pastEvents: [
        {
            EventPastId: 123,
            Name: "The Omen show",
            Url: "https://beta.thegigs.live/sites/default/files/styles/216x117/public/video_embed_field_thumbnails/youtube/uL_gPFw6yzk.jpg"
        },
        {
            EventPastId: 123,
            Name: "The Omen show",
            Url: "https://beta.thegigs.live/sites/default/files/styles/216x117/public/video_embed_field_thumbnails/youtube/uL_gPFw6yzk.jpg"
        }
    ]

    });
  },

  SimilarArtist: function (req, res) {
    res.json({
      status: true,
      similerArtist: [
        {
            artistId: 123,
            artistName: "Slash",
            artistProfileImage: "https://beta.thegigs.live/sites/default/files/styles/300x300/public/uploads/arists/yi-artist-headshot.png",
        },
        {
            artistId: 123,
            artistName: "Slash",
            artistProfileImage: "https://beta.thegigs.live/sites/default/files/styles/300x300/public/uploads/arists/l3-artist-headshot.png"
        },
    ]
    });
  }
};






