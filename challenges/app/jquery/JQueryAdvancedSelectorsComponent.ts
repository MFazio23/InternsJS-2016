import {Component} from "@angular/core";
import {Challenge} from "../challenge";
import {ChallengeConfig} from "../challengeConfig";
import {Objective} from "../objective";
import {ChallengeService} from "../challengeService";

@Component({
    selector: 'jquery-advanced-selectors',
    template: `
<div class="container-fluid">
    <div class="inner-a"><a href="/jquery/advanced-selectors">This is an inner link.</a></div>

    <div class="class-div">This div has a class.</div>
    <div class="class-div">This div has the same class as above.</div>

    <div class="multiple-spans">
        <span>Span 1</span>
        <span>Span 2</span>
        <span>Span 3</span>
        <span>Span 4</span>
    </div>

    <div class="embedded">
        <div>
            <span>
                <a href="javascript:;" class="embedded-link">This is an embedded link.</a>
            </span>
        </div>
        <div>
            <span>
                <div>
                    <span>This is four levels down.</span>
                </div>
            </span>
        </div>
    </div>

</div>
`
})

export class JQueryAdvancedSelectorsComponent extends Challenge {

    constructor(challengeService:ChallengeService) {
        super(
            new ChallengeConfig(
                'jquery-advanced-selectors',
                'jQuery - Advanced Selectors',
                `
                    This will show you some more advanced ways to use jQuery's selectors.
                `,
                '/challenges/jquery-advanced-selectors.js',
                [
                    new Objective(1, 'Grab the text from the inner link.', 'This is an inner link.'),
                    new Objective(2, 'Grab the text from the second div with the class "class-div"', 'This div has the same class as above.'),
                    new Objective(3, 'Grab the text from the first span in the "multiple-spans" div.', 'Span 1'),
                    new Objective(4, 'Grab the text from the third span in the "multiple-spans" div.', 'Span 3'),
                    new Objective(5, 'Grab the embedded link text', 'This is an embedded link.'),
                    new Objective(6, 'Grab the embedded span that\'s four levels down.', 'This is four levels down.'),
                ]
            ),
            challengeService
        );
    }

    checkChallenge(challengeConfig:ChallengeConfig) {
        let selectors = require('/challenges/jquery-advanced-selectors.js');

        challengeConfig.objectives[0].actual = selectors.getInnerLinkText();
        challengeConfig.objectives[1].actual = selectors.getSecondDivText();
        challengeConfig.objectives[2].actual = selectors.getTextFromFirstSpan();
        challengeConfig.objectives[3].actual = selectors.getTextFromThirdSpan();
        challengeConfig.objectives[4].actual = selectors.getEmbeddedLinkText();
        challengeConfig.objectives[5].actual = selectors.getFourLevelsDownText();
    }
}
