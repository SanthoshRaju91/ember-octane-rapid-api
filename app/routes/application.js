import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";
import StorageService from '../services/storage';


export default class ApplicationRoute extends Route {
    /**
     * 
     * @type {StorageService}
     */
    @service storage;
    
    beforeModel(transition) {
        super.beforeModel(transition);
        
        if(this.storage.checkIfCitySelected()) {
            this.transitionTo("select");
        } else {
            this.transitionTo("welcome")
        }
    }
}
