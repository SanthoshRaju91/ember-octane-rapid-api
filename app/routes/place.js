import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";
/* eslint-disable no-unused-vars */
import PlacesService from '../services/places';

export default class PlaceRoute extends Route {
    queryParams = {
        city: {
            refreshModel: true
        }
    }

    /**
     * @type { PlacesService }
     */
    @service places;

    async model(params) {
        const cityParam = JSON.parse(params.city);                
        const response = await this.places.getCityData(cityParam);
        return response;        
    }
}
