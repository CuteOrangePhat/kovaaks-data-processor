import {observer} from "mobx-react-lite";
import React from "react";
import {ScenarioAttempt} from "../../models/scenario-attempts.model";

interface ProgressDrawerProps {
    scores: ScenarioAttempt[]
}

const ProgressDrawer = (props: ProgressDrawerProps) => {
    const numAttempts = props.scores?.length || 0
    const avgScore = props.scores
        ?.map(s => s.score)
        .reduce((acc, curr) => acc + +curr, 0) / numAttempts || "No Attempts Made";

    const todayAvgScores = props.scores
        ?.filter(score => isToday(score.date))
        ?.map(s => s.score)

    const numAttemptsToday = todayAvgScores?.length;
    const avgScoreToday = todayAvgScores?.reduce((acc, curr) => acc + +curr, 0) / numAttempts || "No Attempts Made";

    return (
        <div className="grid grid-cols-2 bg-gray-200 divide-x-2 h-32 p-5 rounded-b-lg">
            <div className="flex">
                <div className="flex flex-col pl-2">
                    <div className="text-sm">All Time:</div>
                    <div className="text-sm">Average: <b>{avgScore}</b></div>
                    <div className="text-sm">Total Attempts: <b>{numAttempts}</b></div>
                </div>
            </div>
            <div className="flex flex-col pl-4">
                <div className="text-sm">Today:</div>
                <div className="text-sm">Average: <b>{avgScoreToday}</b></div>
                <div className="text-sm">Total Attempts: <b>{numAttemptsToday}</b></div>
            </div>
        </div>
    )
};

const isToday = (someDate: Date) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
}


export default observer(ProgressDrawer);
