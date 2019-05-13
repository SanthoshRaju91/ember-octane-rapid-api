import Service from '@ember/service';
import { inject as service } from "@ember/service";
import Router from "@ember/routing/router";
const CITY_KEY = "selected_city_key";

export default class StorageService extends Service {
    /**
     * @type { Router }
     */
    @service router;
    /**
     * 
     * @param {String} city 
     */
    setSelectedCity(city) {
        window.localStorage.setItem(CITY_KEY, city);
        this.router.transitionTo("select");
    }

    checkIfCitySelected() {
        return !!window.localStorage.getItem(CITY_KEY);
    }

    getSelectedCity() {
        return window.localStorage.getItem(CITY_KEY);
    }
}
