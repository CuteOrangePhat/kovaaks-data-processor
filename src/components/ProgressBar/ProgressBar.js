import PropTypes from "prop-types";
import {observer} from "mobx-react-lite";

const ProgressBar = observer((props) => {
    const reqs = props.reqs.scenarioList.find(s => s.name === props.scenario).reqs;
    const highScore = props.scores?.map((score) => score.Score).reduce((acc, curr) => curr > acc ? curr : acc);
    const [nextRank, nextRankReq] = highScore > 0 ?
        Object.entries(reqs).find(req => req[1] > highScore) || ["max", highScore]
        : ["silver", reqs["silver"]];
    const [currentRank, currentRankReq] = Object.entries(reqs).filter(req => req[1] <= highScore).pop() || ["unranked", 0];
    const percentToLevel = 100 * (highScore / nextRankReq) || 0

    return (
        <div className="flex">
            <div className={`bg-${currentRank} pl-2 pr-2`}>{currentRankReq}</div>
            <div className="bg-gray-200 w-96 relative ">
                <div
                    style={{width: percentToLevel + "%"}}
                    className={`absolute top-0 left-0 h-full bg-${currentRank}`}/>
                <div className="relative ml-2">
                    <span>{props.scenario}</span>
                    <span className="text-xs ml-1">{highScore} ({percentToLevel.toFixed(1)}%)</span>
                </div>
            </div>
            <div className={`bg-${nextRank} pl-2 pr-2`}>{nextRankReq}</div>
        </div>
    )
});

ProgressBar.propTypes = {
    scenario: PropTypes.string.isRequired,
    scores: PropTypes.array.isRequired
};

export default ProgressBar;
