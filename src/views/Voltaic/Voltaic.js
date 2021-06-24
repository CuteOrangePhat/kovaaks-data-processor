import {useStore} from "../../hooks/hooks";
import {observer} from "mobx-react-lite";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ProgressDrawer from "../../components/ProgressDrawer/ProgressDrawer";
import Rank from "../../components/Rank/Rank";

const Voltaic = observer(() => {
        const scenarioStore = useStore("scenarioStore");

        const voltaicScenarios = scenarioStore.getVoltaicScenarios()
        const voltaicReqs = scenarioStore.getVoltaricReqs()

        const rankNames = [voltaicReqs.scenarioList.map((r) => Object.keys(r.reqs))[0]];
        const rankBenches = voltaicReqs.scenarioList.map((r) => Object.values(r.reqs));
        const rankPbs = voltaicReqs.scenarioList.map(sl => sl.name)
            .map(scenarioName => [scenarioStore.getHighScore(scenarioName) || 0])

        return (
            <div className="flex flex-col items-center w-full ">
                <div className="w-96">
                    <Rank rankNames={rankNames}
                          benches={rankBenches}
                          pbs={rankPbs}/>
                </div>

                {Object.keys(voltaicScenarios)
                        .map(
                            (scenario) =>
                                <div className="mt-1 w-full pl-10 pr-10" key={scenario}>
                                    <ProgressBar scenario={scenario} reqs={voltaicReqs}
                                                 scores={scenarioStore.scenarios[scenario]}
                                                 highScore={scenarioStore.getHighScore(scenario)}
                                    />
                                </div>
                        )}
            </div>
        );
    }
);

export default Voltaic;
