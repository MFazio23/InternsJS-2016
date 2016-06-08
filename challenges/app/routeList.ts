/**
 * Created by MFazio on 6/2/2016.
 */

import {Injectable} from "@angular/core";
import {JSAdditionComponent} from "./js/JSAdditionComponent";
import {JSPrototypesComponent} from "./js/JSPrototypesComponent";
import {JSNamespacingComponent} from "./js/JSNamespacingComponent";
import {JSStringCounterComponent} from "./js/JSStringCountComponent";
import {JSEventsComponent} from "./js/JSEventsComponent";
import {JQuerySelectorsComponent} from "./jquery/JQuerySelectorsComponent";
import {JQueryAdvancedSelectorsComponent} from "./jquery/JQueryAdvancedSelectorsComponent";
import {JQueryEventsComponent} from "./jquery/JQueryEventsComponent";

let routes = [
    {path: '/js/addition', component: JSAdditionComponent, title:"JavaScript - Addition"},
    {path: '/js/prototypes', component: JSPrototypesComponent, title:"JavaScript - Prototypes"},
    {path: '/js/namespacing', component: JSNamespacingComponent, title: "JavaScript - Namespacing"},
    {path: '/js/string-counter', component: JSStringCounterComponent, title: "JavaScript - String Counter"},
    {path: '/js/events', component: JSEventsComponent, title: "JavaScript - Events"},
    {path: '/jquery/events', component: JQueryEventsComponent, title: "jQuery - Events"},
    {path: '/jquery/selectors', component: JQuerySelectorsComponent, title: "jQuery - Selectors"},
    {path: '/jquery/advanced-selectors', component: JQueryAdvancedSelectorsComponent, title: "jQuery - Advanced Selectors"},
    {path: '/jquery/modifications', component: JQuerySelectorsComponent, title: "jQuery - Modifications"},
    {path: '/jquery/ajax', component: JQuerySelectorsComponent, title: "jQuery - AJAX"},
];

@Injectable()
export class RouteListService {
    static getRoutes() {
        return routes;
    }
}