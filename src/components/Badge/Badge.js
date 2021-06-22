import bronze from "../../images/bronze.png"
import silver from "../../images/silver.png"
import gold from "../../images/gold.png"
import platinum from "../../images/platinum.png"
import diamond from "../../images/diamond.png"
import PropTypes from "prop-types";

const badges = {
    unranked: bronze,
    silver,
    gold,
    platinum,
    diamond,
    max: diamond
}

const Badge = (props) => {
    return (
        <div className={`bg-${props.rank} relative text-center ${props.rounding}`}>
            <img className="h-10" src={badges[props.rank]}/>
            <div className="absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 font-bold">
                {props.req}
            </div>
        </div>
    )
};

Badge.propTypes = {
    rank: PropTypes.string.isRequired,
    req: PropTypes.string.isRequired,
    rounding: PropTypes.oneOf(['rounded-l-lg', 'rounded-r-lg', 'rounded-lg'])
};

Badge.defaultProps = {
    rounding: ''
};

export default Badge;
