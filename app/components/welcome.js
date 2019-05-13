import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service } from "@ember/service";
import StorageService from '../services/storage';

export default class WelcomeComponent extends Component {
    selectedCity = null;

    /**
     * @type { StorageService }
     */
    @service storage
    /**
     * 
     * @param {Event & { target: HTMLInputElement }} event 
     */
    @action
    handleChangeInput(event) {        
        this.selectedCity = event.target.value;
    }

    /**
     * 
     * @param {Event & { target: HTMLFormElement}} event 
     */
    @action
    submit(event) {
        event.preventDefault();  
        this.storage.setSelectedCity(this.selectedCity);              
    }    
}
