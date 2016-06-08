import {Objective} from "./objective";
export class ChallengeConfig {
    id: string;
    title: string;
    description: string;
    filePath: string;
    objectives: Objective[];
    checkChallenge: Function;

    constructor(id: string, title: string, description: string, filePath: string, objectives: Objective[], checkChallenge?: Function) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.filePath = filePath;
        this.objectives = objectives;
        this.checkChallenge = checkChallenge;
    }

    static DEFAULT: ChallengeConfig = {id: null, title: null, description: null, filePath: null, objectives: null, checkChallenge: function(){}};
}