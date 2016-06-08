import {Component} from "@angular/core";
import {ChallengeConfig} from "../challengeConfig";
import {Objective} from "../objective";
import {ChallengeService} from "../challengeService";
import {Challenge} from "../challenge";

@Component({
    selector: 'js-events',
    template: `
<ul id='event-block'>
    <li><span #cSpan id="clickable-span" class="js-event-task" style="color: black; background-color: white;">Clicking this span will invert the colors.</span></li>
    <br/>
    <li><span #hSpan id="hoverable-span" class="js-event-task" (mouseenter)="checkMouseEnter($event, hSpan, 'span')" (mouseleave)="checkMouseLeave($event, hSpan, 'span')">Hovering over this span will temporarily turn the background blue and text white.</span></li>
    <br/>
    <li>
        <div id="multiple-boxes">
            <span>These boxes will become green when hovered over.</span>
            <div #div1 class="hover-event-box js-event-task" (mouseenter)="checkMouseEnter($event, div1, 'box-1')" (mouseleave)="checkMouseLeave($event, div1, 'box-1')"></div>
            <div #div2 class="hover-event-box js-event-task" (mouseenter)="checkMouseEnter($event, div2, 'box-2')" (mouseleave)="checkMouseLeave($event, div2, 'box-2')"></div>
            <div #div3 class="hover-event-box js-event-task" (mouseenter)="checkMouseEnter($event, div3, 'box-3')" (mouseleave)="checkMouseLeave($event, div3, 'box-3')"></div>
            <div #div4 class="hover-event-box js-event-task" (mouseenter)="checkMouseEnter($event, div4, 'box-4')" (mouseleave)="checkMouseLeave($event, div4, 'box-4')"></div>
            <div #div5 class="hover-event-box js-event-task" (mouseenter)="checkMouseEnter($event, div5, 'box-5')" (mouseleave)="checkMouseLeave($event, div5, 'box-5')"></div>
        </div>
    </li>
</ul>
    `
})

export class JSEventsComponent extends Challenge {

    challengeConfig: ChallengeConfig;
    internalEvents: any;
    divs: boolean[] = [
        false,
        false,
        false,
        false,
        false
    ];

    constructor(challengeService: ChallengeService) {
        super(
            new ChallengeConfig(
                'js-events',
                'JavaScript - Events',
                `This challenge covers how event handling in JavaScript works.<br><js-events></js-events>`,
                '/challenges/js-events.js',
                [
                    new Objective(1, 'The first element should have inverted colors on click.'),
                    new Objective(2, 'The middle element should turn blue with white text only when the mouse is over it.<br><small>You must actually hover over the field for credit.</small>', 'blue->white'),
                    new Objective(3, 'The row of boxes should each turn green when the mouse is over them.<br><small>You must actually hover over <i>all</i> of the boxes for credit.</small>'),
                ]
            ),
            challengeService
        );

        this.internalEvents = require('/internal/js/challenges/js-events-internal.js');
    }

    checkMouseEnter(event: any, div: any, type: string) {
        if(type === 'span') {
            this.internalEvents.getElementColor(div);
            this.challengeConfig.objectives[1].actual = div.style.backgroundColor;
        } else {
            let id: number = +type.replace("box-", "") - 1;
            this.divs[id] = div.style.backgroundColor === 'green';
            this.checkDivs();
        }
    }
    checkMouseLeave(event: any, div: any, type: string) {
        if(type === 'span') {
            this.challengeConfig.objectives[1].actual += `->${div.style.backgroundColor}`;
        } else {
            let id: number = +type.replace("box-", "") - 1;
            this.divs[id] = this.divs[id] && div.style.backgroundColor === 'white';
            this.checkDivs();
        }
    }

    checkDivs() : void {
        let success: boolean = true;
        for(let div of this.divs) {
            success = success && div;
        }

        this.challengeConfig.objectives[2].actual = success;
    }

    checkChallenge(challengeConfig: ChallengeConfig) {
        this.challengeConfig = challengeConfig;

        var events = require('/challenges/js-events.js');
        if(document.getElementById('event-block')) {
            events.assignEvents();

            this.internalEvents = this.internalEvents || require('/internal/js/challenges/js-events-internal.js');

            this.challengeConfig.objectives[0].actual = this.internalEvents.verifyClickableSpan();
            
        }
    }
}
