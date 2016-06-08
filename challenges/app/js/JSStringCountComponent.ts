import {Component, ChangeDetectorRef} from "@angular/core";
import {Challenge} from "../challenge";
import {ChallengeConfig} from "../challengeConfig";
import {Objective} from "../objective";
import {ChallengeService} from "../challengeService";

@Component({
    template: ''
})

export class JSStringCounterComponent extends Challenge {

    constructor(challengeService: ChallengeService) {
        super(
            new ChallengeConfig(
                'js-string-counter',
                'JavaScript - String Counter',
                `
                    This challenge requires you to create a method to count the number of vowels in an entered string.
                `,
                '/challenges/js-string-counter.js',
                [
                    new Objective(1, '<span>Entered value: "".</span>', 0),
                    new Objective(2, '<span>Entered value: "Skyline".</span>', 2),
                    new Objective(3, '<span>Entered value: "Reflection".</span>', 4),
                    new Objective(4, '<span>Entered value: "Google Chrome".</span>', 5),
                    new Objective(5, '<span>Entered value: "AngularJS - One framework. Mobile and desktop.".</span>', 14),
                    new Objective(6, '<span>Entered value: "Angular2, Now with TypeScript!".</span>', 7),
                    new Objective(7, '<span>Entered value: "7891357764681".</span>', 0),
                    new Objective(8, '<span>Entered value: "null".</span>', 0),
                    new Objective(9, '<span>Entered value: "undefined".</span>', 0)
                ]
            ),
            challengeService
        );
    }

    checkChallenge(challengeConfig : ChallengeConfig) {
        require('/challenges/js-namespacing.js');
        let stringCounter = require('/challenges/js-string-counter.js');

        var values = [
            '',
            'Skyline',
            'Reflection',
            'Google Chrome',
            'AngularJS - One framework. Mobile and desktop.',
            'Angular2, Now with TypeScript!',
            '7891357764681',
            null
        ];

        for(let v in values) {
            if(values.hasOwnProperty(v)) {
                challengeConfig.objectives[v].actual = stringCounter.getVowelCount(values[v]);
            }
        }

        challengeConfig.objectives[8].actual = stringCounter.getVowelCount();        
    }
}
