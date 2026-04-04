export const MAP_TOGGLE_CHOSEN = "MAP::MAP_TOGGLE_CHOSEN";
export const MAP_UNSET_ALL = "MAP::MAP_UNSET_ALL";
export const MAP_SET_ALL = "MAP::MAP_SET_ALL";

export const mapToggleChosen = (data) => ({
    type: MAP_TOGGLE_CHOSEN,
    payload: data
})

export const mapUnsetAll = () => ({
    type: MAP_UNSET_ALL
})

export const mapSetAll = (data) => ({
    type: MAP_SET_ALL,
    payload: data
})