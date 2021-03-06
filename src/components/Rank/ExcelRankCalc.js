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
export default function getRank(pbs, benches, rankNames, extra) {
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

