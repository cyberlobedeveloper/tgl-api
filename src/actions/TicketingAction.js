const { signJwt } = require('../lib/jwt');

module.exports = {

    GetSelectTicketQuantity: function (req, res) {
        res.json({
            status: 200,
            getTicketQuantity: [
                {
                    eventName: "The Mrs. Carter Show World Tour",
                    eventDateTIme: "25 Aug, 6:30 PST",
                    earlyBird: {
                        eventPrice: 5,
                        Included: [
                            {
                                description: "Live Concert Pass"
                            },
                            {
                                description: "Early Bird Discount"
                            }
                        ],
                        isAvailable: 0
                    },
                    regular: {
                        eventPrice: 7,
                        Included: [
                            {
                                description: "Live Concert Pass"
                            }
                        ],
                        isAvailable: 0
                    }
                }
            ]
        });
    },
    GetVipTicket: function (req, res) {
        res.json({
            status: 200,
            listVipTickets: {
                ticketType: [
                    {
                        type: "VIP + TICKET",
                        option: [
                            "Live Concert Pass",
                            "Zoom Chat with the Artist after the show",
                            "48 hours VOD access"
                        ],
                        ticketNo: 1,
                        isTshirt: 1,
                        tshirtUrl: "image URL",
                        tshirtSizes: [
                            "S",
                            "M",
                            "L",
                            "XL",
                            "XXL"
                        ]
                    },
                    {
                        type: "VIP + TICKET",
                        option: [
                            "Live Concert Pass",
                            "Zoom Chat with the Artist after the show",
                            "48 hours VOD access"
                        ],
                        ticketNo: 1,
                        isTshirt: 1,
                        tshirtUrl: "image URL",
                        tshirtSizes: [
                            "S",
                            "M",
                            "L",
                            "XL",
                            "XXL"
                        ]
                    },
                    {
                        type: "Regular",
                        option: [
                            "Live Concert Pass",
                            "Zoom Chat with the Artist after the show",
                            "48 hours VOD access"
                        ],
                        ticketNo: 3
                    }
                ]
            }
        });
    },
    AddUserAddress: function (req, res) {
        res.json({
            status : 200,
            Message: "Address Added Successfully"        
        });
    },
    GetUserAddress: function (req, res) {
        res.json({
            status: 200,
            userAddress: {
                userName: "Dev",
                AddressType: [
                    {
                        type: 1,
                        flatNo: "A - 916 ,Siddhivinayak Tower",
                        area: "Makarba",
                        landmark: "Near Kataria House",
                        town: "Ahmedabad",
                        state: "Gujarat",
                        country: "India",
                        contectName: "Yash",
                        isSelected: 1
                    },
                    {
                        type: 0,
                        flatNo: "B - 916 ,Siddhivinayak Tower",
                        area: "Makarba",
                        landmark: "Near Kataria House",
                        town: "Ahemedabad",
                        state: "Gujarat",
                        country: "India",
                        contectName: "Yash",
                        isSelected: 0
                    }
                ]
            }
        });
    },
    GetPaymentMethod: function (req, res) {
        res.json({
            status: 200,
            paymentMethod: {
                paymentTypes: [
                    "CreditCard",
                    "Paypal"
                ],
                creditCard: [
                    {
                        id: 1,
                        cardNo: 1020,
                        cardName: "VAIBHAV KHARAT",
                        cardBank: "Bank of America",
                        cardType: "Visa"
                    },
                    {
                        id: 2,
                        cardNo: 1020,
                        cardName: "VAIBHAV KHARAT",
                        cardBank: "Bank of America",
                        cardType: "Visa"
                    },
                    {
                        id: 3,
                        cardNo: 1020,
                        cardName: "VAIBHAV KHARAT",
                        cardBank: "Bank of America",
                        cardType: "Visa"
                    }
                ]
            }
        });
    },
};






