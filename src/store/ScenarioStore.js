import {makeAutoObservable} from 'mobx';
import voltInter from "../config/voltaic-intermediate.json"

export class ScenarioStore {
    scenarios = {}
    highScores = {}

    constructor() {
        makeAutoObservable(this)
        window.api.response("addScenario", (data) => this.addScenario(data));
    }

    addScenario(file) {
        const scenarioName = file.data.Scenario;
        if (!this.scenarios[scenarioName]) {
            this.scenarios[scenarioName] = []
        }
        this.scenarios[scenarioName].push(file.data);
        this.highScores[scenarioName] = this.scenarios[file.data.Scenario].map((score) => score.Score).reduce((acc, curr) => curr > acc ? curr : acc);
    }

    getVoltaicScenarios() {
        return voltInter.scenarioList
            .map(s => s.name)
            .map((name) => ({[name]: this.scenarios[name]}))
            .reduce((acc, curr) => ({...acc, ...curr}), {});
    }

    getVoltaricReqs() {
        return voltInter
    }

    getHighScore(scenarioName) {
        return this.highScores[scenarioName];
    }
}

export default ScenarioStore;
