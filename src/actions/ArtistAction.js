const { signJwt } = require('../lib/jwt');

module.exports = {

  GetArtistPastEventList: function (req, res) {
    res.json({
      status: 200,
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
      status: 200,
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
  },

  GetArtistDetail: function (req, res) {
    res.json({
      success_code: 200,
      eventData: {
        mainImage: "url",
        subImage: "url",
        artistId: "123",
        artistName: "BEYONCE",
        eventType: [
          'Rock',
          'Pop',
          'Punk',
          'Rock'
        ], 
        followArtist: 0,
        artistFollower: "30K",
        artistRating: 4.7
      }

    });
  },
  GetArtistGallery: function (req, res) {
    res.json({

      success_code: 200,
      artistGalary: [
        {
          Image: "https://thegigs.live/sites/default/files/styles/340x340/public/uploads/arists/artist-headshot_1.png?itok=CdKWEZR-",
          imageID: "152(optional)"
        },
        {
          Image: "https://thegigs.live/sites/default/files/styles/340x340/public/uploads/arists/artist-headshot_1.png?itok=CdKWEZR-",
          imageID: "152(optional)"
        },
        {
          Image: "https://thegigs.live/sites/default/files/styles/340x340/public/uploads/arists/artist-headshot_1.png?itok=CdKWEZR-",
          imageID: "152(optional)"
        },
        {
          Image: "https://thegigs.live/sites/default/files/styles/340x340/public/uploads/arists/artist-headshot_1.png?itok=CdKWEZR-",
          imageID: "152(optional)"
        },
        {
          Image: "https://thegigs.live/sites/default/files/styles/340x340/public/uploads/arists/artist-headshot_1.png?itok=CdKWEZR-",
          imageID: "152(optional)"
        },
      ]
    });
  },
  GetMerchandiseGalery: function (req, res) {
    res.json({

      success_code: 200,
      getMerchandiseData: [
        {
          merchandiseID: 122,
          merchandiseImageUrl: "https://thegigs.live/sites/default/files/styles/148x156/public/uploads/shop/save-the-rock-tee.png?itok=YntzQME7",
          merchandiseName: "AWG - All Concert Gear Men's Regular fit T-Shirt",
          merchandisePrice: 49,
        },
        {
          merchandiseID: 122,
          merchandiseImageUrl: "https://thegigs.live/sites/default/files/styles/148x156/public/uploads/shop/tye-dye-tee.png?itok=AFSjCZNV",
          merchandiseName: "AWG - All Concert Gear Men's Regular fit T-Shirt",
          merchandisePrice: 49,
        },
        {
          merchandiseID: 122,
          merchandiseImageUrl: "https://thegigs.live/sites/default/files/styles/148x156/public/uploads/shop/black-exit-in-logo-tshirt.png?itok=v_V2tkH7",
          merchandiseName: "AWG - All Concert Gear Men's Regular fit T-Shirt",
          merchandisePrice: 49,
        },
        {
          merchandiseID: 122,
          merchandiseImageUrl: "https://thegigs.live/sites/default/files/styles/148x156/public/uploads/shop/face-mask.png?itok=5wOjtUeL",
          merchandiseName: "AWG - All Concert Gear Men's Regular fit T-Shirt",
          merchandisePrice: 9,
        },
      ]
    });
  },


  GetArtistAboutUs: function (req, res) {
    res.json({

      success_code: 200,
      aboutUs: {
        merchandiseImageId: "ImageURL",
        merchandiseDescription: "Oneofthemostrecognizablefiguresincontemporarymusic,Beyoncérosetofameinthelate'90s as the central member of pop-R&B group Destiny'sChild,andthefollowingdecadeembarkedonmulti-platinum,record-breakingsolocareerwithDangerouslyinLove(2003),herfirstinanunbrokenstringofnumberonepopsoloalbums."
      }
    });
  },

  GetArtistSimilarEvents: function (req, res) {
    res.json({
      success_code: 200,
      similarEvents: [
        {
          artistProfileImage: "https://thegigs.live/sites/default/files/styles/300x300/public/uploads/arists/yi-artist-headshot.png?itok=c5d-JRmF",
          artistName: "Taylor Swift",
          eventName: "Parachute",
          eventTime: "“Aug 25 4:30 pm (PST)",
          isBuyTicket: "0 (or) 1"
        },
        {
          artistProfileImage: "https://thegigs.live/sites/default/files/styles/300x300/public/uploads/arists/bt-artist-headshot.png?itok=V4c4n0Cw",
          artistName: "Taylor Swift",
          eventName: "Parachute",
          eventTime: "“Aug 25 4:30 pm (PST)",
          isBuyTicket: "0 (or) 1"
        },
        {
          artistProfileImage: "https://thegigs.live/sites/default/files/styles/300x300/public/uploads/arists/l3-artist-headshot.png?itok=Apty1Qud",
          artistName: "Taylor Swift",
          eventName: "Parachute",
          eventTime: "“Aug 25 4:30 pm (PST)",
          isBuyTicket: "0 (or) 1"
        },
        {
          artistProfileImage: "https://thegigs.live/sites/default/files/styles/300x300/public/uploads/arists/aaa-artist-headshot.png?itok=jnLHib1c",
          artistName: "Taylor Swift",
          eventName: "Parachute",
          eventTime: "“Aug 25 4:30 pm (PST)",
          isBuyTicket: "0 (or) 1"
        }
      ]
    });
  },
};






