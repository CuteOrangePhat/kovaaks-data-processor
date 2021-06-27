import bronze from "../../assets/images/bronze.png"
import silver from "../../assets/images/silver.png"
import gold from "../../assets/images/gold.png"
import platinum from "../../assets/images/platinum.png"
import diamond from "../../assets/images/diamond.png"

import React from "react"

interface BadgeProps {
    req: string,
    rank: string
    rounding: string,
}

const badges: { [index: string]: any } = {
    unranked: bronze,
    silver,
    gold,
    platinum,
    diamond
}

const Badge = (props: BadgeProps) => (
    <div className={`bg-${props.rank} relative text-center ${props.rounding}`}>
        <img className="h-10" src={badges[props.rank]}/>
        <div className="absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 font-bold">
            {props.req}
        </div>
    </div>
);

export default Badge;
