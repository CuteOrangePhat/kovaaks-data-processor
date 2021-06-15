import {useStore} from "../../hooks/hooks";
import {observer} from "mobx-react-lite";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const Voltaic = observer(() => {
    const scenarioStore = useStore("scenarioStore");

    const voltaicScenarios = scenarioStore.getVoltaicScenarios()

    return (
        <div className="flex flex-col">
            {
                Object.keys(voltaicScenarios)
                    .filter((scenario) => voltaicScenarios[scenario])
                    .map(
                    (scenario) =>
                        <ProgressBar key={scenario} scenario={scenario} scores={scenarioStore.scenarios[scenario]}/>
                )
            }
        </div>
    );
});

export default Voltaic;
