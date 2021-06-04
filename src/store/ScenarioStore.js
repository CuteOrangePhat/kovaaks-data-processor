import {makeAutoObservable} from 'mobx';
import voltInter from "../config/voltaic-intermediate.json"

export class ScenarioStore {
    scenarios = {}

    constructor() {
        makeAutoObservable(this)
        window.api.response("addScenario", (data) => this.addScenario(data));
    }

    addScenario(file) {
        if (!this.scenarios[file.data.Scenario]) {
            this.scenarios[file.data.Scenario] = []
        }
        this.scenarios[file.data.Scenario].push(file.data);
    }

    getVoltaicScenarios() {
        return voltInter.scenarioList
            .map(s => s.name)
            .map((name) => ({[name]: this.scenarios[name]}))
            .reduce((acc, curr) => {
                return {...acc, ...curr}
            }, {});
    }

    getVoltaricReqs() {
        return voltInter
    }
}


export default ScenarioStore;
