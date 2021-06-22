import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import {toJS} from "mobx";

const ProgressDrawer = observer((props) => {
    const numAttempts = props.scores?.length || 0
    const avgScore = props.scores
        ?.map(s => s.Score)
        .reduce((acc, curr) => acc + +curr, 0) / numAttempts || "No Attempts Made";

    const todayAvgScores = props.scores
        ?.filter(score => isToday(score.date))
        ?.map(s => s.Score)

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
                <div className="text-sm">Today: </div>
                <div className="text-sm">Average: <b>{avgScoreToday}</b></div>
                <div className="text-sm">Total Attempts: <b>{numAttemptsToday}</b></div>
            </div>
        </div>
    )
});

const isToday = (someDate) => {
    const today = new Date()
    return someDate.getDate() == today.getDate() &&
        someDate.getMonth() == today.getMonth() &&
        someDate.getFullYear() == today.getFullYear()
}

ProgressDrawer.propTypes = {
    scores: PropTypes.array,
};


export default ProgressDrawer;
