import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";
// eslint-disable-next-line no-unused-vars
import PlacesService from '../services/places';

export default class SelectRoute extends Route {
    /**
     * @type { PlacesService }
     */
    @service places;

    model() {
        return {
            cities: this.places.getCities()
        }
    }
}
