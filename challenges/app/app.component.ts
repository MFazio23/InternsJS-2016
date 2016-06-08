import {Component} from "@angular/core";
import {Routes, Router, ROUTER_DIRECTIVES} from "@angular/router";
import {SideNavComponent} from "./sidenav.component";
import {ObjectivesComponent} from "./objectives.component";
import {RouteListService} from "./routeList";
import {ChallengeService} from "./challengeService";
import {ChallengeConfig} from "./challengeConfig";

@Routes(RouteListService.getRoutes())

@Component({
    selector: 'js-ts-ng',
    directives: [ROUTER_DIRECTIVES, SideNavComponent, ObjectivesComponent],
    providers: [ChallengeService],
    template: `<div id="wrapper">
    <side-nav></side-nav>
    <div id="page-content-wrapper">
        <div id="challenges" class="container-fluid">
            <div id="title" class="page-header" *ngIf="challengeConfig.title"><h1>{{challengeConfig.title}}</h1></div>
            <div id="description" class="list-group-item" *ngIf="challengeConfig.description"
                 [innerHTML]="challengeConfig.description"></div>
            <div class="list-group-item" *ngIf="challengeConfig.filePath">
                <span id="file-path"> File Path: <i>{{challengeConfig.filePath}}</i></span>
                <button id="check-challenge" class="btn btn-primary" *ngIf="challengeConfig.filePath"
                        (click)="challengeConfig.checkChallenge(challengeConfig)">
                    Check Challenge Objectives
                </button>
            </div>
            <router-outlet></router-outlet>
            <objective *ngIf="challengeConfig.objectives" [objectives]="challengeConfig.objectives"></objective>
        </div>
    </div>
</div>
    `
})

export class AppComponent {
    challengeConfig: ChallengeConfig;
    ccText: string;

    constructor(private router: Router, challengeService: ChallengeService) {
        this.challengeConfig = ChallengeConfig.DEFAULT;

        challengeService.challengeConfig$.subscribe(config => {
            this.challengeConfig = config;
            this.ccText = JSON.stringify(config);
        });
    }
}
