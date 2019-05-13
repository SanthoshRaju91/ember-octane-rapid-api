import Route from '@ember/routing/route';

export default class SelectRoute extends Route {
    model() {
        return {
            cities: [{
                id: "bangkok",
                name: "Bangkok, TH",
                img: ""
            }, {
                id: "london",
                name: "London, UK",
                img: ""
            }, {
                id: "paris",
                name: "Paris, FR",
                img: ""
            }, {
                id: "dubai",
                name: "Dubai, UAE",
                img: ""
            }, {
                id: "singapore",
                name: "Singapore, SG",
                img: ""
            }, {
                id: "new york",
                name: "New York, USA",
                img: ""
            }, {
                id: "kuala lumpur",
                name: "Kuala Lumpur, ML",
                img: ""
            }, {
                id: "tokyo",
                name: "Tokyo, JP",
                img: ""
            },{
                id: "istanbul",
                name: "Istanbul, TU",
                img: ""
            }]
        }
    }
}
