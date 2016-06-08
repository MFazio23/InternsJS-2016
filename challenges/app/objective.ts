export class Objective {
    id: number;
    description: string;
    expected: any;
    actual: any;

    constructor(id: number, description: string, expected?: any) {
        this.id = id;
        this.description = description;
        this.expected = expected === 0 ? 0 : expected || true;
    }

    isCorrect(): boolean {
        return this.expected === this.actual;
    }
}