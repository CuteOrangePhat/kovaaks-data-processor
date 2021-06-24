import {observer} from "mobx-react-lite";
import PropTypes from "prop-types";
import Badge from "../Badge/Badge";
import TimeLine from "../TimeLine/TimeLine";

const Rank = observer((props) => {
    function getPasses(pbs, benches) {
        const scenarioCategories = [[0, 1, 2],  // dynamic
            [3, 4, 5],  // static
            [6, 7, 8],  // precise
            [9, 10, 11], // reactive
            [12, 13, 14], // speed
            [15, 16, 17]] // evasive

        // number of passes in each category at each tier (... plat, dia, m, etc)
        const passes = []
        for (let cat = 0; cat < scenarioCategories.length; cat++) {
            const p = [5]
            for (let i = 0; i < benches[0].length; i++)
                p.push(0)
            passes.push(p)

            for (const scen of scenarioCategories[cat]) {
                for (let rank = 0; rank < benches.length; rank++) {
                    if (pbs[scen] >= benches[scen][rank])
                        passes[cat][rank + 1]++
                }
            }
        }

        return passes
    }
    function getRank(pbs, benches, rankNames, extra) {
        const MIN_I = 1
        const MIN_II = 2
        const MIN_C = 3

        const numRanks = rankNames[0].length
        const ranks1 = ["unranked"]
        const ranks2 = ["unranked"]
        const ranks3 = ["unranked"]
        for (let i = 0; i < numRanks; i++) {
            const name = rankNames[0][i]
            ranks1[i + 1] = name
            ranks2[i + 1] = (name == "Ascended" ? "Eclipse" : name) + " II"
            ranks3[i + 1] = (name == "Ascended" ? "Eclipse" : name) + " Complete"
        }

        const category_passes = getPasses(pbs, benches)

        let r1 = 0
        let r2 = 0
        let r3 = 0
        for (let i = 1; i <= numRanks; i++) {
            if (category_passes.every((cat) => cat[i] >= MIN_I)) r1 = i
            if (category_passes.every((cat) => cat[i] >= MIN_II)) r2 = i
            if (category_passes.every((cat) => cat[i] >= MIN_C)) r3 = i
        }

        const rets = []
        if (r3 == r1) rets.push(ranks3[r3])
        else if (r2 == r1) rets.push(ranks2[r2])
        else rets.push(ranks1[r1])
        if (extra) {
            rets.push(0)
            rets.push(Math.min(r1, numRanks - 1))
            rets.push(Math.min(r2, numRanks - 1))
            rets.push(Math.min(r3, numRanks - 1))
        }

        return rets[0]
    }

    const rank = getRank(props.pbs, props.benches,  props.rankNames);

    const nextRankIndex = props.rankNames[0].findIndex((f) => f == rank) + 1;
    const nextRank = nextRankIndex >= props.rankNames[0].length ? props.rankNames[0][nextRankIndex-1] : props.rankNames[0][nextRankIndex];

    return (
        <div className="flex flex-col justify-center text-center mt-5 mb-5">
            <div className={`text-4xl text-${rank} mt-5 mb-5`}>
                {capitalizeFirstLetter(rank)}
            </div>
            <div className="flex justify-between items-center">
                <span>{rank}</span>
                <span>{nextRank}</span>
            </div>
        </div>
    )
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


Rank.propTypes = {
    benches: PropTypes.array,
    rankNames: PropTypes.array,
    pbs: PropTypes.array
};


export default Rank;
