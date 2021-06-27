import React from 'react'
import {observer} from "mobx-react";
import getRank from "./ExcelRankCalc";

interface RankProps {
    pbs: number[] | string[][],
    benches: number[][],
    rankNames: string[][],
}

const Rank = (props: RankProps) => {
    const currentRank = getRank(props.pbs, props.benches,  props.rankNames) as string;

    const nextRankIndex = props.rankNames[0].findIndex((f) => f == currentRank) + 1;
    const nextRank = nextRankIndex >= props.rankNames[0].length ? props.rankNames[0][nextRankIndex-1] : props.rankNames[0][nextRankIndex];

    return (
        <div className="flex flex-col justify-center text-center mt-5 mb-5">
            <div className={`text-4xl text-${currentRank} mt-5 mb-5`}>
                {capitalizeFirstLetter(currentRank)}
            </div>
            <div className="flex justify-between items-center">
                <span>{currentRank}</span>
                <span>{nextRank}</span>
            </div>
        </div>
    )
};

function capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


export default observer(Rank);
