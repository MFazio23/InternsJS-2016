import {Component, ChangeDetectorRef} from "@angular/core";
import {Challenge} from "../challenge";
import {ChallengeConfig} from "../challengeConfig";
import {Objective} from "../objective";
import {ChallengeService} from "../challengeService";

@Component({
    template: ''
})

export class JSAdditionComponent extends Challenge {

    constructor(challengeService: ChallengeService) {
        super(
            new ChallengeConfig(
                'js-addition',
                'JavaScript - Basic Addition',
                `
                    This is a basic introduction to JavaScript.
                    Complete the <code>addTogether(a, b)</code> method in /challenges/js-addition.js.
                `,
                '/challenges/js-addition.js',
                [
                    new Objective(1, '<span>The call to <code>addTogether(4, 5)</code> should return 9.</span>', 9),
                    new Objective(2, '<span>The call to <code>addTogether(10, 10)</code> should return 20.</span>', 20),
                    new Objective(3, '<span>The call to <code>addTogether(5)</code> should return 5.</span>', 5),
                    new Objective(4, '<span>The call to <code>addTogether()</code> should return 0.</span>', 0),
                    new Objective(5, '<span>The call to <code>addTogether(-3, 7)</code> should return 4.</span>', 4)
                ]
            ),
            challengeService
        );
    }

    checkChallenge(challengeConfig : ChallengeConfig) {
        let userInput = require('/challenges/js-addition.js');

        challengeConfig.objectives[0].actual = userInput.addTogether(4, 5);
        challengeConfig.objectives[1].actual = userInput.addTogether(10, 10);
        challengeConfig.objectives[2].actual = userInput.addTogether(5);
        challengeConfig.objectives[3].actual = userInput.addTogether();
        challengeConfig.objectives[4].actual = userInput.addTogether(-3, 7);
    }
}
