module app {
    export enum Difficulty {
        Easy = 1,
        Medium = 2,
        Hard = 3
    }

    export class problem {
        public Id: Number;
        public Title: string;
        public SolutionId: Number;
        public Acceptance: string;
        public DifficultyLevel: Difficulty;
        public Frequency: Number;

        public constructor(id: number, title: string, solutionId: number, acceptance: string, difficultyLevel: Difficulty) {
            this.Id = id+1;
            this.Title = title;
            this.SolutionId = solutionId;
            this.Acceptance = acceptance;
            this.DifficultyLevel = difficultyLevel;
        }
    }
}