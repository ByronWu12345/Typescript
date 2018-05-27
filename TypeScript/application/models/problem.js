var app;
(function (app) {
    (function (Difficulty) {
        Difficulty[Difficulty["Easy"] = 1] = "Easy";
        Difficulty[Difficulty["Medium"] = 2] = "Medium";
        Difficulty[Difficulty["Hard"] = 3] = "Hard";
    })(app.Difficulty || (app.Difficulty = {}));
    var Difficulty = app.Difficulty;
    var problem = (function () {
        function problem(id, title, solutionId, acceptance, difficultyLevel) {
            this.Id = id + 1;
            this.Title = title;
            this.SolutionId = solutionId;
            this.Acceptance = acceptance;
            this.DifficultyLevel = difficultyLevel;
        }
        return problem;
    }());
    app.problem = problem;
})(app || (app = {}));
//# sourceMappingURL=problem.js.map