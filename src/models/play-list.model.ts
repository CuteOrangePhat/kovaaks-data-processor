
export interface PlayList {
    playlistName: string,
    scenarioList: PlayListScenario[]
}

export interface PlayListScenario {
    name: string
    reqs: {
        silver: number,
        gold: number,
        platinum: number,
        diamond: number
    }
}
