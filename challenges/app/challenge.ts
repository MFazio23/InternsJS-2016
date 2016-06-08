import {ChallengeConfig} from "./challengeConfig";
import {ChallengeService} from "./challengeService";

export abstract class Challenge {
    challengeConfig: ChallengeConfig;

    constructor(challengeConfig: ChallengeConfig, challengeService: ChallengeService) {
        this.challengeConfig = challengeConfig;

        this.challengeConfig.checkChallenge = this.checkChallenge;

        challengeService.selectChallenge(challengeConfig);
    }

    abstract checkChallenge(challengeConfig : ChallengeConfig) : void;
}