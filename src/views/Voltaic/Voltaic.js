import {useStore} from "../../hooks/hooks";
import {observer} from "mobx-react-lite";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Voltaic = observer(() => {
    const scenarioStore = useStore("scenarioStore");

    const voltaicScenarios = scenarioStore.getVoltaicScenarios()
    const voltaicReqs = scenarioStore.getVoltaricReqs()

    return (
        <div className="flex flex-col w-full items-center overflow-y-scroll">
            {
                Object.keys(voltaicScenarios)
                    .map(
                        (scenario) =>
                            <div className="mt-2">
                                <ProgressBar key={scenario} scenario={scenario} reqs={voltaicReqs}
                                             scores={scenarioStore.scenarios[scenario]}/>
                            </div>
                    )
            }
        </div>
    );
}
);

export default Voltaic;
