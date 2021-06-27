import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import Badge from "../Badge/Badge";
import ProgressDrawer from "../ProgressDrawer/ProgressDrawer";
import {PlayList} from "../../models/play-list.model";

interface ProgressBarProps {
    highScore: number
    playList: PlayList,
    scenarioName: string,
    scores: []
}

const ProgressBar = (props: ProgressBarProps) => {
    const [isOpen, toggleOpen] = useState(false);

    const highScore = props.highScore;
    const reqs = props.playList.scenarioList.find(s => s.name === props.scenarioName).reqs;
    const [nextRank, nextRankReq] = highScore > 0 ?
        Object.entries(reqs).find(req => req[1] > highScore) || ["max", highScore]
        : ["silver", reqs["silver"]];
    const [currentRank, currentRankReq] = Object.entries(reqs).filter(req => req[1] <= highScore).pop() || ["unranked", 0];
    const percentToLevel = 100 * (highScore / +nextRankReq) || 0

    return (
        <button className="bg-gray-200 p-1 rounded-lg shadow-navigation w-full">
            <div className="flex" onClick={() => toggleOpen(!isOpen)}>
                <Badge rank={currentRank} req={currentRankReq.toString()} rounding={'rounded-l-lg'}/>
                <div className="w-full relative">
                    <div style={{width: percentToLevel + "%"}}
                        className={`absolute top-0 left-0 h-full bg-${currentRank}`}/>
                    <div className="relative ml-2">
                        <div>{props.scenarioName}</div>
                        <div className="text-xs ml-1">{highScore} ({percentToLevel.toFixed(1)}%)</div>
                    </div>
                </div>
                <Badge rank={nextRank} req={nextRankReq.toString()} rounding={'rounded-r-lg'}/>
            </div>
            {isOpen && <ProgressDrawer scores={props.scores}/>}
        </button>
    )
};

export default observer(ProgressBar);
