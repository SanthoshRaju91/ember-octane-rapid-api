import Route from '@ember/routing/route';

export default class SelectRoute extends Route {
    model() {
        return {
            cities: [{
                id: "bangkok",
                name: "Bangkok, TH",
                img: "https://lonelyplanetimages.imgix.net/a/g/hi/t/cfa1576a48fa4bad04a586438daba57a-bangkok.jpg?sharp=10&vib=20&w=1200",
                currency: "THB"
            }, {
                id: "london",
                name: "London, UK",
                img: "https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg",
                currency: "GBP"
            }, {
                id: "paris",
                name: "Paris, FR",
                img: "https://cdn2.tourmontparnasse56.com/wp-content/uploads/2018/07/@david_fossa-2.jpg",
                currency: "EUR"
            }, {
                id: "dubai",
                name: "Dubai, UAE",
                img: "https://www.boatshowdubai.com/__media/libraries/news--trends/Dubai-SkylineNCW.jpg",
                currency: "AED"
            }, {
                id: "singapore",
                name: "Singapore, SG",
                img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Singapore_CBD_Dusk.JPG",
                currency: "SGD"
            }, {
                id: "new york",
                name: "New York, USA",
                img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/CASSINO-NEW-YORK-NEW-YORK.JPG",
                currency: "USD"
            }, {
                id: "kuala lumpur",
                name: "Kuala Lumpur, MY",
                img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Moonrise_over_kuala_lumpur.jpg",
                currency: "MMK"
            }, {
                id: "tokyo",
                name: "Tokyo, JP",
                img: "https://japantripmutsumihazen.files.wordpress.com/2013/09/japan-tokyo-city.jpg",
                currency: "JPY"
            },{
                id: "istanbul",
                name: "Istanbul, TR",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Zm9-1_VZTHZsxQV-aOhVmcxfObLtY4U6VO8C3L_6gnU_GHuUVg",
                currency: "TRY"
            }]
        }
    }
}
