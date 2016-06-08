import {Component, ChangeDetectorRef} from "@angular/core";
import {Challenge} from "../challenge";
import {ChallengeConfig} from "../challengeConfig";
import {Objective} from "../objective";
import {ChallengeService} from "../challengeService";

@Component({
    template: ''
})

export class JSNamespacingComponent extends Challenge {

    constructor(challengeService: ChallengeService) {
        super(
            new ChallengeConfig(
                'js-namespacing',
                'JavaScript - Namespacing',
                `
                    This challenge covers how namespacing works.  You'll see how namespacing allows you to avoid conflicts and make sure the functions you call are the ones you expect.
                    Namespacing especially comes in handy when dealing with external libraries, as they may add custom methods in which could interfere with your own code.
                `,
                '/challenges/js-namespacing.js',
                [
                    new Objective(1, '<span>The namespace "skyline" exists.</span>'),
                    new Objective(2, '<span>The variable "skyline.location" exists and has the value "Wisconsin".</span>', 'Wisconsin'),
                    new Objective(3, '<span>The global namespace has a method called "getName()" which returns "Browser".</span>', 'Browser'),
                    new Objective(4, '<span>The "skyline" namespace has a method called "getName()" which returns "Skyline Technologies".</span>', 'Skyline Technologies'),
                    new Objective(5, '<span>The global namespace has a method called "getFullName(first, last)" which returns the entered name.</span>', 'John Ptacek'),
                    new Objective(6, '<span>The "skyline" namespace has a method called "getFullName(first, last)" which returns the entered name with "Dr." at the front.</span>', 'Dr. John Ptacek')
                ]
            ),
            challengeService
        );
    }

    checkChallenge(challengeConfig : ChallengeConfig) {
        require('/challenges/js-namespacing.js');
        let nsInternal = require('/internal/js/challenges/js-namespacing-internal.js');

        challengeConfig.objectives[0].actual = nsInternal.doesSkylineNSExist();
        challengeConfig.objectives[1].actual = nsInternal.getSkylineLocation();
        challengeConfig.objectives[2].actual = nsInternal.getGlobalName();
        challengeConfig.objectives[3].actual = nsInternal.getSkylineName();
        challengeConfig.objectives[4].actual = nsInternal.getGlobalFullName('John', 'Ptacek');
        challengeConfig.objectives[5].actual = nsInternal.getSkylineFullName('John', 'Ptacek');

    }
}
