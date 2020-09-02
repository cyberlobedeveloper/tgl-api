const {signJwt} = require('../lib/jwt');

module.exports = {

  GetEventDetails: function (req, res) {
    res.json({
      status: 200,
      eventData: [
        {
            statusCode: 200,
            mainImage: "https://beta.thegigs.live/sites/default/files/styles/1440x810/public/uploads/events/hero/event-hero-2880w.png",
            subImage: "https://beta.thegigs.live/sites/default/files/styles/460x690/public/uploads/event/artist-event-desktop_0.png",
            artistId: "123",
            eventStartDateandTime: "2020/08/14",
            eventName: "The Mrs. Carter Show World Tour",
            eventType: ['Rock', 'Pop', 'Punk Rock'],
            ticketPrice: 10,
            remainingTicket: 10,
            listOfGroup: [
                { 'name': 'Global Chat', 'isAdmin': 0, 'hasNotification': 0 },
                { 'name': 'FireFiles', 'isAdmin': 1, 'hasNotification': 0 },
                { 'name': 'Beyonce Firefiles', 'isAdmin': 0, 'hasNotification': 1 },
                { 'name': 'Sparkles', 'isAdmin': 0, 'hasNotification': 0 }
            ],
            IsTicket: 0,
            followArtist: 0,
            artistFollower: 1,
            artistRating: 3
        }
      ]
    });
  },

  BuyTicket: function (req, res) {
    res.json({
      status: 200,
      message: 'Ticket generated successfully.'
    });
  },

  GetTicket: function (req, res) {
    res.json({
      status: 200,
      IsTicket: 1//Desctiption   0 = no or 1 =yes,
    });
  },

  GetEventSchedule: function (req, res) {
    res.json({
      status: 200,
      getEventSchedule: [
        {
        eventId:125,
            eventName:"Single Ladies",
            artistName: "Beyonce",
            eventDate: "2020-08-14 12:45"
        },
        {
          eventId:125,
                    eventName:"Single Ladies",
                    artistName: "Beyonce",
                    eventDate: "2020-08-14 12:45"
                },
        {
          eventId:125,
                    eventName:"Single Ladies",
                    artistName: "Beyonce",
                    eventDate: "2020-08-14 12:45"
                },
        {
          eventId:125,
            eventName:"Single Ladies",
            artistName: "Beyonce",
            eventDate: "2020-08-14 12:45"
        },
    ]
    });
  },
  VipSupporter: function (req, res) {
    res.json({
      status: 200,
      no_participants: 100,
    vip_supporters: [
        {
            userId: 12,
            userImage: 'userProfileImageURL',
            hasUpdate: 1
        },
        {
            userId: 13,
            userImage: 'userProfileImageURL',
            hasUpdate: 0
        }
    ]
    });
  },

  GetUserByAlbum: function (req, res) {
    res.json({
      status: 200,
      getUserBuyAlbum: [
        {
            evetBuyId: 123,
            eventName: "Single Ladies",
            Image: 'https://beta.thegigs.live/sites/default/files/styles/216x216/public/uploads/shop/lowdown-cd_0.jpeg'
        },
        {
            evetBuyId: 456,
            eventName: "Single Ladies",
            Image: 'https://beta.thegigs.live/sites/default/files/styles/216x216/public/uploads/shop/lowdown-cd_0.jpeg'
        },
        {
            evetBuyId: 156,
            eventName: "Single Ladies",
            Image: 'https://beta.thegigs.live/sites/default/files/styles/216x216/public/uploads/shop/lowdown-cd_0.jpeg'
        },
        {
            evetBuyId: 485,
            eventName: "Single Ladies",
            Image: 'https://beta.thegigs.live/sites/default/files/styles/216x216/public/uploads/shop/lowdown-cd_0.jpeg'
        }
    ]
    });
  },

  EventsForYou: function (req, res) {
    res.json({
      status: 200,
      eventForYou: [
        {
            BuyArtitsID: 132,
            artistName: "Lady Gaga's",
            eventName: "Engima",
            artistEventPoster: "https://beta.thegigs.live/sites/default/files/styles/657x371/public/uploads/events/hero/event-hero-desktop.png",
            artistProfile: "https://beta.thegigs.live/sites/default/files/styles/152x152/public/uploads/arists/l3-artist-headshot.png",
            EventDateandTime: "2020-08-20 04:00 PM",
            IsBuyTicket: 0
        },
        {
            BuyArtitsID: 125,
            artistName: "Bruno Marse",
            eventName: "Finess Worl Tour",
            artistEventPoster: "https://beta.thegigs.live/sites/default/files/styles/657x371/public/uploads/events/hero/event-hero-desktop.png",
            artistProfile: "https://beta.thegigs.live/sites/default/files/styles/152x152/public/uploads/arists/l3-artist-headshot.png",
            EventDateandTime: "2020-08-20 04:00 PM",
            IsBuyTicket: 0
        },

    ]
    });
  }

};






