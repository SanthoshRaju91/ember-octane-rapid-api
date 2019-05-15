import Route from '@ember/routing/route';
import axios from "axios";
import {  htmlSafe } from "@ember/template";

export default class PlaceRoute extends Route {
    queryParams = {
        city: {
            refreshModel: true
        }
    }

    async model(params) {
        const cityParam = JSON.parse(params.city);        
        const user = {
            country: "India",
            city: "Bangalore",
            currency: "INR"
        };
        const cityDetails = await axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${cityParam.id}`, {
            headers: {
                "X-RapidAPI-Host":  "wft-geo-db.p.rapidapi.com",
                "X-RapidAPI-Key": "c10543db94msh6a938fa633caad1p170e58jsn4ff13d3fbb22"
            }
        });
        const city = cityDetails.data.data[0];       
        const currentWeather = await axios.get(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=${city.longitude}&lat=${city.latitude}`, {
            headers: {
                "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
                "X-RapidAPI-Key": "c10543db94msh6a938fa633caad1p170e58jsn4ff13d3fbb22"
            }
        });      
        const weather = currentWeather.data.data[0]; 
        const currency = await axios.get(`https://currency-exchange.p.rapidapi.com/exchange?q=1.0&from=${cityParam.currency}&to=${user.currency}`, {
            headers: {
                "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
                "X-RapidAPI-Key": "c10543db94msh6a938fa633caad1p170e58jsn4ff13d3fbb22"
            }
        });        
        const locale = "ja-JP";        
        const news = await axios.get(`https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?mkt=${locale}&q=${cityParam.name}`, {
            headers: {
                "X-RapidAPI-Host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "c10543db94msh6a938fa633caad1p170e58jsn4ff13d3fbb22"
            }
        });
        return {
            weather,                        
            news: news.data,
            city,
            currency: {
                conversion: currency.data,
                format: cityParam.currency
            },
            user,
            photo: new htmlSafe(`background: linear-gradient(180deg, #000000 14.58%, rgba(255, 255, 255, 0) 100%), url('https://lonelyplanetimages.imgix.net/a/g/hi/t/cfa1576a48fa4bad04a586438daba57a-bangkok.jpg?sharp=10&vib=20&w=1200'); 
            background-repeat: no-repeat;
            background-size: contain;`)
        };        
    }
}
