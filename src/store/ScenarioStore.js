import {makeAutoObservable} from 'mobx';
import voltInter from "../config/voltaic-intermediate.json"

export class ScenarioStore {
    scenarios = {}
    highScores = {}

    constructor() {
        makeAutoObservable(this)
        window.api.response('initScenarioStore', () => this.resetScenarios());
        window.api.response('addScenario', (data) => this.addScenario(data));
    }

    addScenario(file) {
        const scenarioName = file.name;
        if (!this.scenarios[scenarioName]) {
            this.scenarios[scenarioName] = []
        }
        this.scenarios[scenarioName].push(file);
        this.highScores[scenarioName] = this.scenarios[file.name].map((score) => score.score).reduce((acc, curr) => curr > acc ? curr : acc);
    }

    resetScenarios() {
        this.scenarios = {}
        this.highScores = {}
    }

    getVoltaicScenarios() {
        return voltInter.scenarioList
            .map(s => s.name)
            .map((name) => ({[name]: this.scenarios[name]}))
            .reduce((acc, curr) => ({...acc, ...curr}), {});
    }

    getVoltaicReqs() {
        return voltInter
    }

    getHighScore(scenarioName) {
        return this.highScores[scenarioName];
    }
}

export default ScenarioStore;
