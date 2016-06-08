import {Component, ChangeDetectorRef} from "@angular/core";
import {Challenge} from "../challenge";
import {ChallengeConfig} from "../challengeConfig";
import {Objective} from "../objective";
import {ChallengeService} from "../challengeService";

@Component({
    template: ''
})

export class JSPrototypesComponent extends Challenge {

    constructor(challengeService: ChallengeService) {
        super(
            new ChallengeConfig(
                'js-prototypes',
                'JavaScript - Prototypes',
                `
                    This challenge covers how prototypes work.
                `,
                '/challenges/js-prototypes.js',
                [
                    new Objective(1, '<span>The first address should be N16W23217 Stone Ridge Drive, Pewaukee, WI</span>', 'N16W23217 Stone Ridge Drive, Pewaukee, WI'),
                    new Objective(2, '<span>The address with the new city should be N16W23217 Stone Ridge Drive, Waukesha, WI.</span>', 'N16W23217 Stone Ridge Drive, Waukesha, WI'),
                    new Objective(3, '<span>The ZIP Code shown should be 53188.</span>', 53188),
                    new Objective(4, '<span>The second address should be 901 Pasadena Parkway, Waunakee, WI</span>', '901 Pasadena Parkway, Waunakee, WI'),
                    new Objective(5, '<span>The first city/state combo should be Waukesha, WI</span>', 'Waukesha, WI'),
                    new Objective(6, '<span>The second city/state combo should be Waunakee, WI</span>', 'Waunakee, WI')
                ]
            ),
            challengeService
        );
    }

    checkChallenge(challengeConfig : ChallengeConfig) {
        let prototypes = require('/challenges/js-prototypes.js');

        let answers = prototypes.prototyping();

        challengeConfig.objectives[0].actual = answers['pke-addr'];
        challengeConfig.objectives[1].actual = answers['wau-addr'];
        challengeConfig.objectives[2].actual = answers['zip-code'];
        challengeConfig.objectives[3].actual = answers['wauna-addr'];
        challengeConfig.objectives[4].actual = answers['city-state-1'];
        challengeConfig.objectives[5].actual = answers['city-state-2'];        
    }
}
