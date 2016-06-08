
import {Injectable} from "@angular/core";
import {ChallengeConfig} from "./challengeConfig";
import {Subject} from "rxjs/Rx";

@Injectable()
export class ChallengeService {
    private challengeConfig = new Subject<ChallengeConfig>();

    challengeConfig$ = this.challengeConfig.asObservable();

    challengeSelected() {
        
    }
    
    selectChallenge(challengeConfig: ChallengeConfig) {
        this.challengeConfig.next(challengeConfig);
    }
}