import Component from '@glimmer/component';
import {action  } from "@ember/object";

export default class PlaceContainerComponent extends Component {
    @action
    takeToArticle(news) {    
        window.open(news.url, "_blank");
    }
}
