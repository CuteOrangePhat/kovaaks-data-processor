import PropTypes from "prop-types";
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/hooks";

const ProgressBar = observer((props) => {
    const scenarioStore = useStore("scenarioStore");

    const reqs = scenarioStore.getVoltaricReqs().scenarioList.find(s => s.name === props.scenario).reqs;
    const highScore = props.scores.map((score) => score.Score).reduce((acc, curr) => curr > acc ? curr : acc);
    const [nextRank, nextRankReq] = Object.entries(reqs).find(req => req[1] > highScore) || [1, 1];
    const [currentRank, currentRankReq] = Object.entries(reqs).filter(req => req[1] <= highScore).pop() || ["unranked", 0];
    const percentToLevel = 100 * (highScore / nextRankReq)

    return (
        <div className="flex">
            <div>{currentRank + " - " + currentRankReq}</div>
            <div className="bg-gray-300 w-96 relative text-white h-7">
                <div
                    style={{width: percentToLevel + "%"}}
                    className="absolute top-0 left-0 h-full bg-green-600"/>
                <div className="relative">{props.scenario + " " + highScore}</div>
            </div>
            <div>{nextRank + " - " + nextRankReq}</div>
        </div>
    )
});

ProgressBar.propTypes = {
    scenario: PropTypes.string.isRequired,
    scores: PropTypes.array.isRequired
};

export default ProgressBar;
