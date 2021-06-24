import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";

const TimeLine = observer((props) => {

    /* https://codepen.io/cjl750/pen/mXbMyo?editors=1100 */
    return (
        <div className="flex justify-between items-center">
            <span>{props.rank}</span>
            {props.scenarioPassList.map(spl => {
                return (
                    <div className="w-3 h-3 bg-red-900 rounded-full relative">
                        <span className="absolute top-2/4 transform -translate-y-1/2 w-8 h-1 bg-red-900 block -left-5"/>
                        <span className="absolute top-2/4 transform -translate-y-1/2 w-8 h-1 bg-red-900 block"/>
                    </div>
                )})
            }
            <span>{props.nextRank}</span>

        </div>
    )
});


TimeLine.propTypes = {
    rank: PropTypes.array,
    nextRank: PropTypes.array,
    scenarioPassList: PropTypes.array
};


export default TimeLine;
