import Service from '@ember/service';
import {  htmlSafe } from "@ember/template";
import axios from 'axios';

const cities = [{
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
}];

export default class PlacesService extends Service {
    getCities() {
        return cities
    }

    /**
     * 
     * @param {String} city 
     */
    async getCityData(city) {
        const locale = "en-US";
        const cityDetails = await axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${city.id}`, {
            headers: {
                "X-RapidAPI-Host":  "wft-geo-db.p.rapidapi.com",
                "X-RapidAPI-Key": "c10543db94msh6a938fa633caad1p170e58jsn4ff13d3fbb22"
            }
        });
        const cityDetail = cityDetails.data.data[0];
        const currentWeather = await axios.get(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${cityDetail.longitude}&lat=${cityDetail.latitude}`, {
            headers: {
                "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
                "X-RapidAPI-Key": "c10543db94msh6a938fa633caad1p170e58jsn4ff13d3fbb22"
            }
        });
        const weather = currentWeather.data.data[0];               
        const news = await axios.get(`https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?mkt=${locale}&q=${city.name}`, {
            headers: {
                "X-RapidAPI-Host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "c10543db94msh6a938fa633caad1p170e58jsn4ff13d3fbb22"
            }
        });
        return {
            weather,                        
            news: news.data,
            city: cityDetail,                        
            photo: new htmlSafe(`background: linear-gradient(180deg, #000000 2%, rgba(255, 255, 255, 0) 100%), url('https://lonelyplanetimages.imgix.net/a/g/hi/t/cfa1576a48fa4bad04a586438daba57a-bangkok.jpg?sharp=10&vib=20&w=1200'); 
            background-repeat: no-repeat;
            background-size: contain;`)
        };
    }
}
