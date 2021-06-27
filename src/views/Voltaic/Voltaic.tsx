import {observer} from "mobx-react";
import React from "react";
import {useStore} from "../../hooks/hooks";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Rank from "../../components/Rank/Rank";
import {PlayListScenario} from "../../models/play-list.model";

const Voltaic = () => {
        const scenarioStore = useStore("scenarioStore");

        const voltaicScenarios = scenarioStore.getVoltaicScenarios()
        const voltaicReqs = scenarioStore.getVoltaicReqs()

        const rankNames = [voltaicReqs.scenarioList.map((sl: PlayListScenario) => Object.keys(sl.reqs))[0]];
        const rankBenches = voltaicReqs.scenarioList.map((sl: PlayListScenario) => Object.values(sl.reqs));
        const rankPbs = voltaicReqs.scenarioList.map((sl: PlayListScenario) => sl.name)
            .map((scenarioName: string) => [scenarioStore.getHighScore(scenarioName) || 0])

        return (
            <div className="flex flex-col items-center w-full ">
                <div className="w-96">
                    <Rank
                        rankNames={rankNames}
                        benches={rankBenches}
                        pbs={rankPbs}/>
                </div>

                {Object.keys(voltaicScenarios)
                    .map(
                        (scenarioName) =>
                            <div className="mt-1 w-full pl-10 pr-10" key={scenarioName}>
                                <ProgressBar
                                    scenarioName={scenarioName}
                                    playList={voltaicReqs}
                                    scores={scenarioStore.scenarios[scenarioName]}
                                    highScore={scenarioStore.getHighScore(scenarioName)}
                                />
                            </div>
                    )}
            </div>
        );
    }
;

export default observer(Voltaic);
