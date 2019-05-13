import Component from '@glimmer/component';
import { action } from "@ember/object";
import { inject as service} from "@ember/service";
import { tracked } from "@glimmer/tracking";
import Router from "@ember/routing/router";

export default class SelectCityComponent extends Component {
    @tracked cityInput = null;
    
    /**
     * @type { Router }
     */
    @service router;
    /**
     * 
     * @param {Event & { target: HTMLInputElement }} event 
     */
    @action
    handleCityInput(event) {
        this.cityInput = event.target.value;
    }

    @action
    selectCity(city) {
        this.router.transitionTo("place", { queryParams: { city: JSON.stringify(city) }});        
    }
}
