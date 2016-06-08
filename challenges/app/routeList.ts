/**
 * Created by MFazio on 6/2/2016.
 */

import {Injectable} from "@angular/core";
import {JSAdditionComponent} from "./js/JSAdditionComponent";
import {JSPrototypesComponent} from "./js/JSPrototypesComponent";
import {JSNamespacingComponent} from "./js/JSNamespacingComponent";
import {JSStringCounterComponent} from "./js/JSStringCountComponent";
import {JSEventsComponent} from "./js/JSEventsComponent";

let routes = [
    {path: '/js/addition', component: JSAdditionComponent, title:"JavaScript - Addition"},
    {path: '/js/prototypes', component: JSPrototypesComponent, title:"JavaScript - Prototypes"},
    {path: '/js/namespacing', component: JSNamespacingComponent, title: "JavaScript - Namespacing"},
    {path: '/js/string-counter', component: JSStringCounterComponent, title: "JavaScript - String Counter"},
    {path: '/js/events', component: JSEventsComponent, title: "JavaScript - Events"}
];

@Injectable()
export class RouteListService {
    static getRoutes() {
        return routes;
    }
}