import "./ProgressBar.css"
import PropTypes from "prop-types";
import { observer } from "mobx-react-lite";
import {useStore} from "../../hooks/hooks";

const ProgressBar = observer((props) => {
    const scenarioStore = useStore("scenarioStore");

    const reqs = scenarioStore.getVoltaricReqs().scenarioList.find(s => s.name === props.scenario).reqs;
    const highScore = props.scores.map((score) => score.Score).reduce((acc, curr) => curr > acc ? curr : acc);
    const [nextRank, nextRankReq] = Object.entries(reqs).find(req => req[1] > highScore) || [1,1];
    const [currentRank, currentRankReq] = Object.entries(reqs).filter(req => req[1] <= highScore).pop() || ["unranked", 0];
    const percentToLevel = 100*(highScore/nextRankReq)

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div>{currentRank + " - " + currentRankReq}</div>
            <div className="progress-bar">
                <div
                    style={{width: percentToLevel + "%"}}
                    className="percentage-bar"/>
                <div className="percentage-text">{props.scenario+ " " + highScore}</div>
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
