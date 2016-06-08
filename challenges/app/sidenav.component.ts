/**
 * Created by MFazio on 6/2/2016.
 */
import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {RouteListService} from "./routeList";

@Component({
    selector: 'side-nav',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#">JS/TS/NG Challenges</a>
            </li>
            <div id="challenge-link-list">
                <li *ngFor="let route of allRoutes">
                    <a [routerLink]="[route.path]" [ngClass]="{'currentChallenge': isCurrentPath(route)}">{{route.title}}</a>
                </li>
            </div>
        </ul>
    </div>
`
})

export class SideNavComponent {
    isCurrentPath = function(route: any) {
        return route ? route.path === document.location.pathname : false;
    };
    allRoutes = RouteListService.getRoutes();
}
