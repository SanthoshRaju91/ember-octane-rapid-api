import Route from '@ember/routing/route';


export default class ApplicationRoute extends Route {    
    beforeModel(transition) {
        super.beforeModel(transition);
        this.transitionTo("select");        
    }
}
