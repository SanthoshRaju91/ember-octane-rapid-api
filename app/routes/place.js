import Route from '@ember/routing/route';

export default class PlaceRoute extends Route {
    queryParams = {
        city: {
            refreshModel: true
        }
    }

    model(params) {        
        console.log(JSON.parse(params.city));
    }
}
