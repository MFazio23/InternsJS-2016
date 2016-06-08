import {Component, ChangeDetectorRef} from "@angular/core";
import {Challenge} from "../challenge";
import {ChallengeConfig} from "../challengeConfig";
import {Objective} from "../objective";
import {ChallengeService} from "../challengeService";

@Component({
    selector: 'jquery-selectors',
    template:
`
<div class="container-fluid">
    <div id="id-div">This div has an ID.</div>
    <div class="class-div">This div has a class.</div>
    <div class="class-two second-class">This div has two classes.</div>
    <div id="class-id-div" class="class-id">This div has an ID and a class.</div>
</div>
`
})

export class JQuerySelectorsComponent extends Challenge {

    constructor(challengeService: ChallengeService) {
        super(
            new ChallengeConfig(
                'jquery-selectors',
                'jQuery - Selectors',
                `
                    This will show you how to use jQuery's selectors to grab and modify values on a page.
                `,
                '/challenges/jquery-selectors.js',
                [
                    new Objective(1, 'The div with the ID "id-div" should have its text returned.', 'This div has an ID.'),
                    new Objective(2, 'The div with the class "class-div" should have its text returned.', 'This div has a class.'),
                    new Objective(3, 'The div with the classes "class-two" and "second-class" should have its text returned.', 'This div has two classes.'),
                    new Objective(4, 'The div with the ID "class-id-div" and class "class-id" should have its text returned.', 'This div has an ID and a class.')
                ]
            ),
            challengeService
        );
    }

    checkChallenge(challengeConfig : ChallengeConfig) {
        let selectors = require('/challenges/jquery-selectors.js');

        challengeConfig.objectives[0].actual = selectors.getIDDivValue();
        challengeConfig.objectives[1].actual = selectors.getClassDivValue();
        challengeConfig.objectives[2].actual = selectors.getTwoClassDivValue();
        challengeConfig.objectives[3].actual = selectors.getIDClassDivValue();
    }
}
