import {useStore} from "../../hooks/hooks";
import {observer} from "mobx-react-lite";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ProgressDrawer from "../../components/ProgressDrawer/ProgressDrawer";

const Voltaic = observer(() => {
        const scenarioStore = useStore("scenarioStore");

        const voltaicScenarios = scenarioStore.getVoltaicScenarios()
        const voltaicReqs = scenarioStore.getVoltaricReqs()

        return (
            <div className="flex flex-col w-full items-center">
                {
                    Object.keys(voltaicScenarios)
                        .map(
                            (scenario) =>
                                <div className="mt-1 w-96" key={scenario}>
                                    <ProgressBar scenario={scenario} reqs={voltaicReqs}
                                                 scores={scenarioStore.scenarios[scenario]}/>
                                </div>
                        )
                }
            </div>
        );
    }
);

export default Voltaic;
