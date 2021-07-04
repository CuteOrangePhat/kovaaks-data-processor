import {makeAutoObservable} from 'mobx';

export class SettingsStore {
    defaultStatsLocation = "C:/Program Files (x86)/Steam/steamapps/common/FPSAimTrainer/FPSAimTrainer/stats/";
    statsPath = localStorage.statsPath;

    constructor() {
        makeAutoObservable(this)
        this.setStatsPath(this.statsPath || this.defaultStatsLocation);
    }

    setStatsPath(statsPath) {
        localStorage.statsPath = statsPath;
        this.statsPath = statsPath;
        window.api.request('updateStatsPath', this.statsPath);
    }
}

export default SettingsStore;
