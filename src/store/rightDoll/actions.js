import {addError, addMessage, addNewError, addNewMessage, addNewNotification, addNotification} from "../error/actions";
import { selectToken } from '../user/selectors'; // Используем этот селектор
import {selectDefaultDolls, selectDollName, selectDolls, selectOtherDolls} from './selectors';
import { handleSelect } from "../../components/Dolls";
import { createBrowserHistory } from 'history';

export const RIGHT_DOLL_SAVE_START = "RIGHTDOLL::RIGHT_DOLL_SAVE_START";
export const RIGHT_DOLL_SAVE_SUCCESS = "RIGHTDOLL::RIGHT_DOLL_SAVE_SUCCESS";
export const RIGHT_DOLL_SAVE_ERROR = "RIGHTDOLL::RIGHT_DOLL_SAVE_ERROR";
export const RIGHT_DOLL_SELECT_START = "RIGHTDOLL::RIGHT_DOLL_SELECT_START";
export const RIGHT_DOLL_SELECT_SUCCESS = "RIGHTDOLL::RIGHT_DOLL_SELECT_SUCCESS";
export const RIGHT_DOLL_SELECT_ERROR = "RIGHTDOLL::RIGHT_DOLL_SELECT_ERROR";
export const RIGHT_DOLLS_START = "RIGHTDOLL::RIGHT_DOLLS_START";
export const RIGHT_DOLLS_SUCCESS = "RIGHTDOLL::RIGHT_DOLLS_SUCCESS";
export const RIGHT_DOLLS_ERROR = "RIGHTDOLL::RIGHT_DOLLS_ERROR";
export const RIGHT_DOLLS_LOADING = "RIGHTDOLL::RIGHT_DOLLS_LOADING";
export const RIGHT_DOLLS_DELETE_START = "RIGHTDOLL::RIGHT_DOLLS_DELETE_START";
export const RIGHT_DOLLS_DELETE_ERROR = "RIGHTDOLL::RIGHT_DOLLS_DELETE_ERROR";
export const RIGHT_DOLLS_DELETE_SUCCESS = "RIGHTDOLL::RIGHT_DOLLS_DELETE_SUCCESS";
export const RIGHT_DOLL_SET_HELMET = "RIGHTDOLL::RIGHT_DOLL_SET_HELMET";
export const RIGHT_DOLL_UNSET_HELMET = "RIGHTDOLL::RIGHT_DOLL_UNSET_HELMET";
export const RIGHT_DOLL_SET_AMULET = "RIGHTDOLL::RIGHT_DOLL_SET_AMULET";
export const RIGHT_DOLL_UNSET_AMULET = "RIGHTDOLL::RIGHT_DOLL_UNSET_AMULET";
export const RIGHT_DOLL_SET_GLOVES = "RIGHTDOLL::RIGHT_DOLL_SET_GLOVES";
export const RIGHT_DOLL_UNSET_GLOVES = "RIGHTDOLL::RIGHT_DOLL_UNSET_GLOVES";
export const RIGHT_DOLL_SET_JACKET = "RIGHTDOLL::RIGHT_DOLL_SET_JACKET";
export const RIGHT_DOLL_UNSET_JACKET = "RIGHTDOLL::RIGHT_DOLL_UNSET_JACKET";
export const RIGHT_DOLL_SET_SHIELD = "RIGHTDOLL::RIGHT_DOLL_SET_SHIELD";
export const RIGHT_DOLL_UNSET_SHIELD = "RIGHTDOLL::RIGHT_DOLL_UNSET_SHIELD";
export const RIGHT_DOLL_SET_BRACELET1 = "RIGHTDOLL::RIGHT_DOLL_SET_BRACELET1";
export const RIGHT_DOLL_UNSET_BRACELET1 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BRACELET1";
export const RIGHT_DOLL_SET_BRACELET2 = "RIGHTDOLL::RIGHT_DOLL_SET_BRACELET2";
export const RIGHT_DOLL_UNSET_BRACELET2 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BRACELET2";
export const RIGHT_DOLL_SET_BELT = "RIGHTDOLL::RIGHT_DOLL_SET_BELT";
export const RIGHT_DOLL_UNSET_BELT = "RIGHTDOLL::RIGHT_DOLL_UNSET_BELT";
export const RIGHT_DOLL_SET_RING1 = "RIGHTDOLL::RIGHT_DOLL_SET_RING1";
export const RIGHT_DOLL_UNSET_RING1 = "RIGHTDOLL::RIGHT_DOLL_UNSET_RING1";
export const RIGHT_DOLL_SET_RING2 = "RIGHTDOLL::RIGHT_DOLL_SET_RING2";
export const RIGHT_DOLL_UNSET_RING2 = "RIGHTDOLL::RIGHT_DOLL_UNSET_RING2";
export const RIGHT_DOLL_SET_RING3 = "RIGHTDOLL::RIGHT_DOLL_SET_RING3";
export const RIGHT_DOLL_UNSET_RING3 = "RIGHTDOLL::RIGHT_DOLL_UNSET_RING3";
export const RIGHT_DOLL_SET_RING4 = "RIGHTDOLL::RIGHT_DOLL_SET_RING4";
export const RIGHT_DOLL_UNSET_RING4 = "RIGHTDOLL::RIGHT_DOLL_UNSET_RING4";
export const RIGHT_DOLL_SET_PANTS = "RIGHTDOLL::RIGHT_DOLL_SET_PANTS";
export const RIGHT_DOLL_UNSET_PANTS = "RIGHTDOLL::RIGHT_DOLL_UNSET_PANTS";
export const RIGHT_DOLL_SET_BOOTS = "RIGHTDOLL::RIGHT_DOLL_SET_BOOTS";
export const RIGHT_DOLL_UNSET_BOOTS = "RIGHTDOLL::RIGHT_DOLL_UNSET_BOOTS";
export const RIGHT_DOLL_SET_WEAPON = "RIGHTDOLL::RIGHT_DOLL_SET_WEAPON";
export const RIGHT_DOLL_UNSET_WEAPON = "RIGHTDOLL::RIGHT_DOLL_UNSET_WEAPON";
export const RIGHT_DOLL_SET_PROFESSION = "RIGHTDOLL::RIGHT_DOLL_SET_PROFESSION";
export const RIGHT_DOLL_UNSET_PROFESSION = "RIGHTDOLL::RIGHT_DOLL_UNSET_PROFESSION";
export const RIGHT_DOLL_SET_BUFF1 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF1";
export const RIGHT_DOLL_UNSET_BUFF1 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF1";
export const RIGHT_DOLL_SET_BUFF2 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF2";
export const RIGHT_DOLL_UNSET_BUFF2 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF2";
export const RIGHT_DOLL_SET_BUFF3 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF3";
export const RIGHT_DOLL_UNSET_BUFF3 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF3";
export const RIGHT_DOLL_SET_BUFF4 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF4";
export const RIGHT_DOLL_UNSET_BUFF4 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF4";
export const RIGHT_DOLL_SET_BUFF5 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF5";
export const RIGHT_DOLL_UNSET_BUFF5 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF5";
export const RIGHT_DOLL_SET_BUFF6 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF6";
export const RIGHT_DOLL_UNSET_BUFF6 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF6";
export const RIGHT_DOLL_SET_BUFF7 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF7";
export const RIGHT_DOLL_UNSET_BUFF7 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF7";
export const RIGHT_DOLL_SET_BUFF8 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF8";
export const RIGHT_DOLL_UNSET_BUFF8 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF8";
export const RIGHT_DOLL_SET_BUFF9 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF9";
export const RIGHT_DOLL_UNSET_BUFF9 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF9";
export const RIGHT_DOLL_SET_BUFF10 = "RIGHTDOLL::RIGHT_DOLL_SET_BUFF10";
export const RIGHT_DOLL_UNSET_BUFF10 = "RIGHTDOLL::RIGHT_DOLL_UNSET_BUFF10";
export const RIGHT_DOLL_SET_CRYSTALPD = "RIGHTDOLL::RIGHT_DOLL_SET_CRYSTALPD";
export const RIGHT_DOLL_UNSET_CRYSTALPD = "RIGHTDOLL::RIGHT_DOLL_UNSET_CRYSTALPD";
export const RIGHT_DOLL_SET_CRYSTALMD = "RIGHTDOLL::RIGHT_DOLL_SET_CRYSTALMD";
export const RIGHT_DOLL_UNSET_CRYSTALMD = "RIGHTDOLL::RIGHT_DOLL_UNSET_CRYSTALMD";
export const RIGHT_DOLL_SET_CRYSTALPA = "RIGHTDOLL::RIGHT_DOLL_SET_CRYSTALPA";
export const RIGHT_DOLL_UNSET_CRYSTALPA = "RIGHTDOLL::RIGHT_DOLL_UNSET_CRYSTALPA";
export const RIGHT_DOLL_SET_CRYSTALMA = "RIGHTDOLL::RIGHT_DOLL_SET_CRYSTALMA";
export const RIGHT_DOLL_UNSET_CRYSTALMA = "RIGHTDOLL::RIGHT_DOLL_UNSET_CRYSTALMA";
export const RIGHT_DOLL_SET_SLOT1 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT1";
export const RIGHT_DOLL_UNSET_SLOT1 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT1";
export const RIGHT_DOLL_SET_SLOT2 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT2";
export const RIGHT_DOLL_UNSET_SLOT2 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT2";
export const RIGHT_DOLL_SET_SLOT3 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT3";
export const RIGHT_DOLL_UNSET_SLOT3 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT3";
export const RIGHT_DOLL_SET_SLOT4 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT4";
export const RIGHT_DOLL_UNSET_SLOT4 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT4";
export const RIGHT_DOLL_SET_SLOT5 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT5";
export const RIGHT_DOLL_UNSET_SLOT5 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT5";
export const RIGHT_DOLL_SET_SLOT6 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT6";
export const RIGHT_DOLL_UNSET_SLOT6 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT6";
export const RIGHT_DOLL_SET_SLOT7 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT7";
export const RIGHT_DOLL_UNSET_SLOT7 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT7";
export const RIGHT_DOLL_SET_SLOT8 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT8";
export const RIGHT_DOLL_UNSET_SLOT8 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT8";
export const RIGHT_DOLL_SET_SLOT9 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT9";
export const RIGHT_DOLL_UNSET_SLOT9 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT9";
export const RIGHT_DOLL_SET_SLOT10 = "RIGHTDOLL::RIGHT_DOLL_SET_SLOT10";
export const RIGHT_DOLL_UNSET_SLOT10 = "RIGHTDOLL::RIGHT_DOLL_UNSET_SLOT10";
export const RIGHT_DOLL_CLEAR = "RIGHTDOLL::RIGHT_DOLL_CLEAR";
export const RIGHT_DOLL_SET_STRENGTH = "RIGHTDOLL::RIGHT_DOLL_SET_STRENGTH";
export const RIGHT_DOLL_SET_DEXTERITY = "RIGHTDOLL::RIGHT_DOLL_SET_DEXTERITY";
export const RIGHT_DOLL_SET_ACCURACY = "RIGHTDOLL::RIGHT_DOLL_SET_ACCURACY";
export const RIGHT_DOLL_SET_ENDURANCE = "RIGHTDOLL::RIGHT_DOLL_SET_ENDURANCE";
export const RIGHT_DOLL_SET_EARTH = "RIGHTDOLL::RIGHT_DOLL_SET_EARTH";
export const RIGHT_DOLL_SET_AIR = "RIGHTDOLL::RIGHT_DOLL_SET_AIR";
export const RIGHT_DOLL_SET_WATER = "RIGHTDOLL::RIGHT_DOLL_SET_WATER";
export const RIGHT_DOLL_SET_FIRE = "RIGHTDOLL::RIGHT_DOLL_SET_FIRE";
export const RIGHT_DOLL_SET_STRENGTH_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_STRENGTH_STATS";
export const RIGHT_DOLL_SET_DEXTERITY_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_DEXTERITY_STATS";
export const RIGHT_DOLL_SET_ACCURACY_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_ACCURACY_STATS";
export const RIGHT_DOLL_SET_ENDURANCE_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_ENDURANCE_STATS";
export const RIGHT_DOLL_SET_EARTH_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_EARTH_STATS";
export const RIGHT_DOLL_SET_AIR_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_AIR_STATS";
export const RIGHT_DOLL_SET_WATER_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_WATER_STATS";
export const RIGHT_DOLL_SET_FIRE_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_FIRE_STATS";
export const RIGHT_DOLL_SET_HP_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_HP_STATS";
export const RIGHT_DOLL_SET_PRANA_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_PRANA_STATS";
export const RIGHT_DOLL_SET_HP = "RIGHTDOLL::RIGHT_DOLL_SET_HP";
export const RIGHT_DOLL_SET_PRANA = "RIGHTDOLL::RIGHT_DOLL_SET_PRANA";
export const RIGHT_DOLL_SET_PD_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_PD_STATS";
export const RIGHT_DOLL_SET_MD_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_MD_STATS";
export const RIGHT_DOLL_SET_PA_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_PA_STATS";
export const RIGHT_DOLL_SET_MA_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_MA_STATS";
export const RIGHT_DOLL_SET_TITLE_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_TITLE_STATS";
export const RIGHT_DOLL_SET_DEGREE_STATS = "RIGHTDOLL::RIGHT_DOLL_SET_DEGREE_STATS";
export const RIGHT_DOLL_SET_TITLE_LEVEL = "RIGHTDOLL::RIGHT_DOLL_SET_TITLE_LEVEL";
export const RIGHT_DOLL_SET_DEGREE_LEVEL = "RIGHTDOLL::RIGHT_DOLL_SET_DEGREE_LEVEL";
export const RIGHT_DOLL_SET_TITLE_GREATNESS = "RIGHTDOLL::RIGHT_DOLL_SET_TITLE_GREATNESS";
export const RIGHT_DOLL_SET_DEGREE_GREATNESS = "RIGHTDOLL::RIGHT_DOLL_SET_DEGREE_GREATNESS";
export const RIGHT_DOLL_INCREASE_STRENGTH = "RIGHTDOLL::RIGHT_DOLL_INCREASE_STRENGTH";
export const RIGHT_DOLL_INCREASE_DEXTERITY = "RIGHTDOLL::RIGHT_DOLL_INCREASE_DEXTERITY";
export const RIGHT_DOLL_INCREASE_ACCURACY = "RIGHTDOLL::RIGHT_DOLL_INCREASE_ACCURACY";
export const RIGHT_DOLL_INCREASE_ENDURANCE = "RIGHTDOLL::RIGHT_DOLL_INCREASE_ENDURANCE";
export const RIGHT_DOLL_INCREASE_EARTH = "RIGHTDOLL::RIGHT_DOLL_INCREASE_EARTH";
export const RIGHT_DOLL_INCREASE_AIR = "RIGHTDOLL::RIGHT_DOLL_INCREASE_AIR";
export const RIGHT_DOLL_INCREASE_WATER = "RIGHTDOLL::RIGHT_DOLL_INCREASE_WATER";
export const RIGHT_DOLL_INCREASE_FIRE = "RIGHTDOLL::RIGHT_DOLL_INCREASE_FIRE";
export const RIGHT_DOLL_DECREASE_STRENGTH = "RIGHTDOLL::RIGHT_DOLL_DECREASE_STRENGTH";
export const RIGHT_DOLL_DECREASE_DEXTERITY = "RIGHTDOLL::RIGHT_DOLL_DECREASE_DEXTERITY";
export const RIGHT_DOLL_DECREASE_ACCURACY = "RIGHTDOLL::RIGHT_DOLL_DECREASE_ACCURACY";
export const RIGHT_DOLL_DECREASE_ENDURANCE = "RIGHTDOLL::RIGHT_DOLL_DECREASE_ENDURANCE";
export const RIGHT_DOLL_DECREASE_EARTH = "RIGHTDOLL::RIGHT_DOLL_DECREASE_EARTH";
export const RIGHT_DOLL_DECREASE_AIR = "RIGHTDOLL::RIGHT_DOLL_DECREASE_AIR";
export const RIGHT_DOLL_DECREASE_WATER = "RIGHTDOLL::RIGHT_DOLL_DECREASE_WATER";
export const RIGHT_DOLL_DECREASE_FIRE = "RIGHTDOLL::RIGHT_DOLL_DECREASE_FIRE";
export const RIGHT_DOLL_REQUIRE_STRENGTH = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_STRENGTH";
export const RIGHT_DOLL_REQUIRE_DEXTERITY = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_DEXTERITY";
export const RIGHT_DOLL_REQUIRE_ACCURACY = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_ACCURACY";
export const RIGHT_DOLL_REQUIRE_ENDURANCE = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_ENDURANCE";
export const RIGHT_DOLL_REQUIRE_EARTH = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_EARTH";
export const RIGHT_DOLL_REQUIRE_AIR = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_AIR";
export const RIGHT_DOLL_REQUIRE_WATER = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_WATER";
export const RIGHT_DOLL_REQUIRE_FIRE = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_FIRE";
export const RIGHT_DOLL_REQUIRE_PROFESSION = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_PROFESSION";
export const RIGHT_DOLL_REQUIRE_PROFESSION_LEVEL = "RIGHTDOLL::RIGHT_DOLL_REQUIRE_PROFESSION_LEVEL";
export const RIGHT_DOLL_SET_PREFIXES = "RIGHTDOLL::RIGHT_DOLL_SET_PREFIXES";
export const RIGHT_DOLL_SET_OTHER_DOLL = "RIGHTDOLL::RIGHT_DOLL_SET_OTHER_DOLL";
export const RIGHT_DOLL_UNSET_OTHER_DOLL = "RIGHTDOLL::RIGHT_DOLL_UNSET_OTHER_DOLL";
export const RIGHT_DOLL_START = "RIGHTDOLL::RIGHT_DOLL_START";
export const RIGHT_DOLL_SUCCESS = "RIGHTDOLL::RIGHT_DOLL_SUCCESS";
export const RIGHT_DOLL_ERROR = "RIGHTDOLL::RIGHT_DOLL_ERROR";
export const RIGHT_DOLL_SET_RIGHT_DOLL_NAME = "RIGHTDOLL::RIGHT_DOLL_SET_RIGHT_DOLL_NAME";
export const RIGHT_DOLL_UNSET_RIGHT_DOLL_NAME = "RIGHTDOLL::RIGHT_DOLL_UNSET_RIGHT_DOLL_NAME";
export const RIGHT_DOLL_LOGOUT = "RIGHTDOLL::RIGHT_DOLL_LOGOUT"
export const RIGHT_DOLL_DETAILS_START = "RIGHTDOLL::RIGHT_DOLL_DETAILS_START";
export const RIGHT_DOLL_DETAILS_SUCCESS = "RIGHTDOLL::RIGHT_DOLL_DETAILS_SUCCESS";
export const RIGHT_DOLL_DETAILS_ERROR = "RIGHTDOLL::RIGHT_DOLL_DETAILS_ERROR";

export const selectDoll = (doll) => ({
    type: RIGHT_DOLL_SELECT_SUCCESS,
    payload: doll
});

export const dollDetailsStart = () => ({
    type: RIGHT_DOLL_DETAILS_START
})

export const dollDetailsSuccess = (data) => ({
    type: RIGHT_DOLL_DETAILS_SUCCESS,
    payload: data
})

export const dollDetailsError = (error) => ({
    type: RIGHT_DOLL_DETAILS_ERROR,
    payload: error
})

export const dollLogout = () => ({
    type: RIGHT_DOLL_LOGOUT
})
export const dollSetDollName = (name) => ({
    type: RIGHT_DOLL_SET_RIGHT_DOLL_NAME,
    payload: name
})

export const dollUnetDollName = () => ({
    type: RIGHT_DOLL_UNSET_RIGHT_DOLL_NAME
})

export const setOtherDoll = (data) => ({
    type: RIGHT_DOLL_SET_OTHER_DOLL,
    payload: data
})

export const unsetOtherDoll = () => ({
    type: RIGHT_DOLL_UNSET_OTHER_DOLL
})

export const setRequireStrength = (num) => ({
    type: RIGHT_DOLL_REQUIRE_STRENGTH,
    payload: num
})

export const setRequireDexterity = (num) => ({
    type: RIGHT_DOLL_REQUIRE_DEXTERITY,
    payload: num
})

export const setRequireAccuracy = (num) => ({
    type: RIGHT_DOLL_REQUIRE_ACCURACY,
    payload: num
})

export const setRequireEndurance = (num) => ({
    type: RIGHT_DOLL_REQUIRE_ENDURANCE,
    payload: num
})

export const setRequireEarth = (num) => ({
    type: RIGHT_DOLL_REQUIRE_EARTH,
    payload: num
})

export const setRequireAir = (num) => ({
    type: RIGHT_DOLL_REQUIRE_AIR,
    payload: num
})

export const setRequireWater = (num) => ({
    type: RIGHT_DOLL_REQUIRE_WATER,
    payload: num
})

export const setRequireFire = (num) => ({
    type: RIGHT_DOLL_REQUIRE_FIRE,
    payload: num
})

export const setRequireProfession = (num) => ({
    type: RIGHT_DOLL_REQUIRE_PROFESSION,
    payload: num
})

export const setRequireProfessionLevel = (num) => ({
    type: RIGHT_DOLL_REQUIRE_PROFESSION_LEVEL,
    payload: num
})

export const dollsStart = () => ({
    type: RIGHT_DOLLS_START
})

export const dollsSuccess = (data) => ({
    type: RIGHT_DOLLS_SUCCESS,
    payload: data
})

export const dollsError = (error) => ({
    type: RIGHT_DOLLS_ERROR,
    payload: error
})

export const dollsDeleteStart = () => ({
    type: RIGHT_DOLLS_DELETE_START
})

export const dollsDeleteSuccess = (data) => ({
    type: RIGHT_DOLLS_DELETE_SUCCESS,
    payload: data
})

export const dollsDeleteError = (error) => ({
    type: RIGHT_DOLLS_DELETE_ERROR,
    payload: error
})

export const dollSaveStart = () => ({
    type: RIGHT_DOLL_SAVE_START
})

export const dollSaveSuccess = (data) => ({
    type: RIGHT_DOLL_SAVE_SUCCESS,
    payload: data
})

export const dollSaveError = (error) => ({
    type: RIGHT_DOLL_SAVE_ERROR,
    payload: error
})

export const setHelmet = (item) => ({
    type: RIGHT_DOLL_SET_HELMET,
    payload: item
});

export const unsetHelmet = () => ({
    type: RIGHT_DOLL_UNSET_HELMET
});

export const setAmulet = (item) => ({
    type: RIGHT_DOLL_SET_AMULET,
    payload: item
});

export const unsetAmulet = () => ({
    type: RIGHT_DOLL_UNSET_AMULET
});

export const setGloves = (item) => ({
    type: RIGHT_DOLL_SET_GLOVES,
    payload: item
});

export const unsetGloves = () => ({
    type: RIGHT_DOLL_UNSET_GLOVES
});

export const setJacket = (item) => ({
    type: RIGHT_DOLL_SET_JACKET,
    payload: item
});

export const unsetJacket = () => ({
    type: RIGHT_DOLL_UNSET_JACKET
});

export const setShield = (item) => ({
    type: RIGHT_DOLL_SET_SHIELD,
    payload: item
});

export const unsetShield = () => ({
    type: RIGHT_DOLL_UNSET_SHIELD
});

export const setBracelet1 = (item) => ({
    type: RIGHT_DOLL_SET_BRACELET1,
    payload: item
});

export const unsetBracelet1 = () => ({
    type: RIGHT_DOLL_UNSET_BRACELET1
});

export const setBracelet2 = (item) => ({
    type: RIGHT_DOLL_SET_BRACELET2,
    payload: item
});

export const unsetBracelet2 = () => ({
    type: RIGHT_DOLL_UNSET_BRACELET2
});

export const setBelt = (item) => ({
    type: RIGHT_DOLL_SET_BELT,
    payload: item
});

export const unsetBelt = () => ({
    type: RIGHT_DOLL_UNSET_BELT
});

export const setRing1 = (item) => ({
    type: RIGHT_DOLL_SET_RING1,
    payload: item
});

export const unsetRing1 = () => ({
    type: RIGHT_DOLL_UNSET_RING1
});

export const setRing2 = (item) => ({
    type: RIGHT_DOLL_SET_RING2,
    payload: item
});

export const unsetRing2 = () => ({
    type: RIGHT_DOLL_UNSET_RING2
});

export const setRing3 = (item) => ({
    type: RIGHT_DOLL_SET_RING3,
    payload: item
});

export const unsetRing3 = () => ({
    type: RIGHT_DOLL_UNSET_RING3
});

export const setRing4 = (item) => ({
    type: RIGHT_DOLL_SET_RING4,
    payload: item
});

export const unsetRing4 = () => ({
    type: RIGHT_DOLL_UNSET_RING4
});

export const setPants = (item) => ({
    type: RIGHT_DOLL_SET_PANTS,
    payload: item
});

export const unsetPants = () => ({
    type: RIGHT_DOLL_UNSET_PANTS
});

export const setBoots = (item) => ({
    type: RIGHT_DOLL_SET_BOOTS,
    payload: item
});

export const unsetBoots = () => ({
    type: RIGHT_DOLL_UNSET_BOOTS
});

export const setWeapon = (item) => ({
    type: RIGHT_DOLL_SET_WEAPON,
    payload: item
});

export const unsetWeapon = () => ({
    type: RIGHT_DOLL_UNSET_WEAPON
});

export const setProfession = (item) => ({
    type: RIGHT_DOLL_SET_PROFESSION,
    payload: item
});

export const unsetProfession = () => ({
    type: RIGHT_DOLL_UNSET_PROFESSION
});

export const setBuff1 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF1,
    payload: item
});

export const unsetBuff1 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF1
});

export const setBuff2 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF2,
    payload: item
});

export const unsetBuff2 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF2
});

export const setBuff3 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF3,
    payload: item
});

export const unsetBuff3 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF3
});

export const setBuff4 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF4,
    payload: item
});

export const unsetBuff4 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF4
});

export const setBuff5 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF5,
    payload: item
});

export const unsetBuff5 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF5
});

export const setBuff6 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF6,
    payload: item
});

export const unsetBuff6 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF6
});

export const setBuff7 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF7,
    payload: item
});

export const unsetBuff7 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF7
});

export const setBuff8 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF8,
    payload: item
});

export const unsetBuff8 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF8
});

export const setBuff9 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF9,
    payload: item
});

export const unsetBuff9 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF9
});

export const setBuff10 = (item) => ({
    type: RIGHT_DOLL_SET_BUFF10,
    payload: item
});

export const unsetBuff10 = () => ({
    type: RIGHT_DOLL_UNSET_BUFF10
});

export const setCrystalPD = (item) => ({
    type: RIGHT_DOLL_SET_CRYSTALPD,
    payload: item
});

export const unsetCrystalPD = () => ({
    type: RIGHT_DOLL_UNSET_CRYSTALPD
});

export const setCrystalMD = (item) => ({
    type: RIGHT_DOLL_SET_CRYSTALMD,
    payload: item
});

export const unsetCrystalMD = () => ({
    type: RIGHT_DOLL_UNSET_CRYSTALMD
});

export const setCrystalPA = (item) => ({
    type: RIGHT_DOLL_SET_CRYSTALPA,
    payload: item
});

export const unsetCrystalPA = () => ({
    type: RIGHT_DOLL_UNSET_CRYSTALPA
});

export const setCrystalMA = (item) => ({
    type: RIGHT_DOLL_SET_CRYSTALMA,
    payload: item
});

export const unsetCrystalMA = () => ({
    type: RIGHT_DOLL_UNSET_CRYSTALMA
});

export const setSlot1 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT1,
    payload: item
});

export const unsetSlot1 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT1
});

export const setSlot2 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT2,
    payload: item
});

export const unsetSlot2 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT2
});

export const setSlot3 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT3,
    payload: item
});

export const unsetSlot3 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT3
});

export const setSlot4 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT4,
    payload: item
});

export const unsetSlot4 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT4
});

export const setSlot5 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT5,
    payload: item
});

export const unsetSlot5 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT5
});

export const setSlot6 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT6,
    payload: item
});

export const unsetSlot6 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT6
});


export const setSlot7 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT7,
    payload: item
});

export const unsetSlot7 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT7
});


export const setSlot8 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT8,
    payload: item
});

export const unsetSlot8 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT8
});


export const setSlot9 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT9,
    payload: item
});

export const unsetSlot9 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT9
});


export const setSlot10 = (item) => ({
    type: RIGHT_DOLL_SET_SLOT10,
    payload: item
});

export const unsetSlot10 = () => ({
    type: RIGHT_DOLL_UNSET_SLOT10
});

export const setStrength = (num) => ({
    type: RIGHT_DOLL_SET_STRENGTH,
    payload: num
});

export const setDexterity = (num) => ({
    type: RIGHT_DOLL_SET_DEXTERITY,
    payload: num
});

export const setAccuracy = (num) => ({
    type: RIGHT_DOLL_SET_ACCURACY,
    payload: num
});

export const setEndurance = (num) => ({
    type: RIGHT_DOLL_SET_ENDURANCE,
    payload: num
});

export const setEarth = (num) => ({
    type: RIGHT_DOLL_SET_EARTH,
    payload: num
});

export const setAir = (num) => ({
    type: RIGHT_DOLL_SET_AIR,
    payload: num
});

export const setWater = (num) => ({
    type: RIGHT_DOLL_SET_WATER,
    payload: num
});

export const setFire = (num) => ({
    type: RIGHT_DOLL_SET_FIRE,
    payload: num
});

export const setStrengthStats = (num) => ({
    type: RIGHT_DOLL_SET_STRENGTH_STATS,
    payload: num
});

export const setDexterityStats = (num) => ({
    type: RIGHT_DOLL_SET_DEXTERITY_STATS,
    payload: num
});

export const setAccuracyStats = (num) => ({
    type: RIGHT_DOLL_SET_ACCURACY_STATS,
    payload: num
});

export const setEnduranceStats = (num) => ({
    type: RIGHT_DOLL_SET_ENDURANCE_STATS,
    payload: num
});

export const setEarthStats = (num) => ({
    type: RIGHT_DOLL_SET_EARTH_STATS,
    payload: num
});

export const setAirStats = (num) => ({
    type: RIGHT_DOLL_SET_AIR_STATS,
    payload: num
});

export const setWaterStats = (num) => ({
    type: RIGHT_DOLL_SET_WATER_STATS,
    payload: num
});

export const setFireStats = (num) => ({
    type: RIGHT_DOLL_SET_FIRE_STATS,
    payload: num
});

export const setHPStats = (num) => ({
    type: RIGHT_DOLL_SET_HP_STATS,
    payload: num
});

export const setPranaStats = (num) => ({
    type: RIGHT_DOLL_SET_PRANA_STATS,
    payload: num
});

export const setHP = (num) => ({
    type: RIGHT_DOLL_SET_HP,
    payload: num
});

export const setPrana = (num) => ({
    type: RIGHT_DOLL_SET_PRANA,
    payload: num
});

export const setPDStats = (num) => ({
    type: RIGHT_DOLL_SET_PD_STATS,
    payload: num
});

export const setMDStats = (num) => ({
    type: RIGHT_DOLL_SET_MD_STATS,
    payload: num
});

export const setPAStats = (num) => ({
    type: RIGHT_DOLL_SET_PA_STATS,
    payload: num
});

export const setMAStats = (num) => ({
    type: RIGHT_DOLL_SET_MA_STATS,
    payload: num
});

export const setTitleStats = (num) => ({
    type: RIGHT_DOLL_SET_TITLE_STATS,
    payload: num
});

export const setDegreeStats = (num) => ({
    type: RIGHT_DOLL_SET_DEGREE_STATS,
    payload: num
});

export const setTitleLevel = (num) => ({
    type: RIGHT_DOLL_SET_TITLE_LEVEL,
    payload: num
});

export const setDegreeLevel = (num) => ({
    type: RIGHT_DOLL_SET_DEGREE_LEVEL,
    payload: num
});

export const setTitleGreatness = (num) => ({
    type: RIGHT_DOLL_SET_TITLE_GREATNESS,
    payload: num
});

export const setDegreeGreatness = (num) => ({
    type: RIGHT_DOLL_SET_DEGREE_GREATNESS,
    payload: num
});

export const increaseStrength = () => ({
    type: RIGHT_DOLL_INCREASE_STRENGTH
});

export const increaseDexterity = () => ({
    type: RIGHT_DOLL_INCREASE_DEXTERITY
});

export const increaseAccuracy = () => ({
    type: RIGHT_DOLL_INCREASE_ACCURACY
});

export const increaseEndurance = () => ({
    type: RIGHT_DOLL_INCREASE_ENDURANCE
});

export const increaseEarth = () => ({
    type: RIGHT_DOLL_INCREASE_EARTH
});

export const increaseAir = () => ({
    type: RIGHT_DOLL_INCREASE_AIR
});

export const increaseWater = () => ({
    type: RIGHT_DOLL_INCREASE_WATER
});

export const increaseFire = () => ({
    type: RIGHT_DOLL_INCREASE_FIRE
});

export const decreaseStrength = () => ({
    type: RIGHT_DOLL_DECREASE_STRENGTH
});

export const decreaseDexterity = () => ({
    type: RIGHT_DOLL_DECREASE_DEXTERITY
});

export const decreaseAccuracy = () => ({
    type: RIGHT_DOLL_DECREASE_ACCURACY
});

export const decreaseEndurance = () => ({
    type: RIGHT_DOLL_DECREASE_ENDURANCE
});

export const decreaseEarth = () => ({
    type: RIGHT_DOLL_DECREASE_EARTH
});

export const decreaseAir = () => ({
    type: RIGHT_DOLL_DECREASE_AIR
});

export const decreaseWater = () => ({
    type: RIGHT_DOLL_DECREASE_WATER
});

export const decreaseFire = () => ({
    type: RIGHT_DOLL_DECREASE_FIRE
});

export const dollClear = () => ({
    type: RIGHT_DOLL_CLEAR
})

export const dollStart = () => ({
    type: RIGHT_DOLL_START
})

export const dollSuccess = (data) => ({
    type: RIGHT_DOLL_SUCCESS,
    payload: data
})

export const dollError = (err) => ({
    type: RIGHT_DOLL_ERROR,
    payload: err
})

export const dollSaveInitiate = (payload, token) => {
    return async dispatch => {
        dispatch(dollSaveStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls`, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    'doll-stats': {
                        'name': payload.name,
                        'profession': payload.profession,
                        'title-level': payload.titleLevel,
                        'degree-level': payload.degreeLevel,
                        'title-greatness': payload.titleGreatness,
                        'degree-greatness': payload.degreeGreatness,
                        'crystal-ma': payload.crystalMA,
                        'crystal-pa': payload.crystalPA,
                        'crystal-md': payload.crystalMD,
                        'crystal-pd': payload.crystalPD,
                        'helmet': payload.helmet,
                        'helmet-prefix': payload.helmet && payload.helmet.prefix ? payload.helmet.prefix.id : null,
                        'amulet': payload.amulet,
                        'amulet-prefix': payload.amulet && payload.amulet.prefix ? payload.amulet.prefix.id : null,
                        'shield': payload.shield,
                        'shield-prefix': payload.shield && payload.shield.prefix ? payload.shield.prefix.id : null,
                        'gloves': payload.gloves,
                        'gloves-prefix': payload.gloves && payload.gloves.prefix ? payload.gloves.prefix.id : null,
                        'chest': payload.jacket,
                        'chest-prefix': payload.jacket && payload.jacket.prefix ? payload.jacket.prefix.id : null,
                        'bracer1': payload.bracelet1,
                        'bracer1-prefix': payload.bracelet1 && payload.bracelet1.prefix ? payload.bracelet1.prefix.id : null,
                        'bracer2': payload.bracelet2,
                        'bracer2-prefix': payload.bracelet2 && payload.bracelet2.prefix ? payload.bracelet2.prefix.id : null,
                        'belt': payload.belt,
                        'belt-prefix': payload.belt && payload.belt.prefix ? payload.belt.prefix.id : null,
                        'ring1': payload.ring1,
                        'ring1-prefix': payload.ring1 && payload.ring1.prefix ? payload.ring1.prefix.id : null,
                        'ring2': payload.ring2,
                        'ring2-prefix': payload.ring2 && payload.ring2.prefix ? payload.ring2.prefix.id : null,
                        'ring3': payload.ring3,
                        'ring3-prefix': payload.ring3 && payload.ring3.prefix ? payload.ring3.prefix.id : null,
                        'ring4': payload.ring4,
                        'ring4-prefix': payload.ring4 && payload.ring4.prefix ? payload.ring4.prefix.id : null,
                        'pants': payload.pants,
                        'pants-prefix': payload.pants && payload.pants.prefix ? payload.pants.prefix.id : null,
                        'boots': payload.boots,
                        'boots-prefix': payload.boots && payload.boots.prefix ? payload.boots.prefix.id : null,
                        'weapon': payload.weapon,
                        'weapon-prefix': payload.weapon && payload.weapon.prefix ? payload.weapon.prefix.id : null,
                        'profession-item': payload.professionItem,
                        'buff1': payload.buff1,
                        'buff2': payload.buff2,
                        'buff3': payload.buff3,
                        'buff4': payload.buff4,
                        'buff5': payload.buff5,
                        'buff6': payload.buff6,
                        'buff7': payload.buff7,
                        'buff8': payload.buff8,
                        'buff9': payload.buff9,
                        'buff10': payload.buff10,
                        'additional-slot1': payload.slot1,
                        'additional-slot1-prefix': payload.slot1 && payload.slot1.prefix ? payload.slot1.prefix.id : null,
                        'additional-slot2': payload.slot2,
                        'additional-slot2-prefix': payload.slot2 && payload.slot2.prefix ? payload.slot2.prefix.id : null,
                        'additional-slot3': payload.slot3,
                        'additional-slot3-prefix': payload.slot3 && payload.slot3.prefix ? payload.slot3.prefix.id : null,
                        'additional-slot4': payload.slot4,
                        'additional-slot4-prefix': payload.slot4 && payload.slot4.prefix ? payload.slot4.prefix.id : null,
                        'additional-slot5': payload.slot5,
                        'additional-slot5-prefix': payload.slot5 && payload.slot5.prefix ? payload.slot5.prefix.id : null,
                        'additional-slot6': payload.slot6,
                        'additional-slot6-prefix': payload.slot6 && payload.slot6.prefix ? payload.slot6.prefix.id : null,
                        'additional-slot7': payload.slot7,
                        'additional-slot7-prefix': payload.slot7 && payload.slot7.prefix ? payload.slot7.prefix.id : null,
                        'additional-slot8': payload.slot8,
                        'additional-slot8-prefix': payload.slot8 && payload.slot8.prefix ? payload.slot8.prefix.id : null,
                        'strength': payload.strength,
                        'dexterity': payload.dexterity,
                        'accuracy': payload.accuracy,
                        'endurance': payload.endurance,
                        'earth': payload.earth,
                        'air': payload.air,
                        'water': payload.water,
                        'fire': payload.fire
                    }
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(dollSaveError(data.reason))
            } else {
                dispatch(addNewMessage(`Кукла ${payload.name} сохранена`))
                dispatch(dollSaveSuccess(data));
                dispatch(dollsInitiate(token));
            }
        } catch (e) {
            dispatch(dollSaveError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const dollsInitiate = (token) => {
    return async dispatch => {
        dispatch(dollsStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls`, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(dollsError(data.reason))
            } else {
                dispatch(dollsSuccess(data.data));
            }
        } catch (e) {
            dispatch(dollsError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const dollSetShare = (token, id, payload, name) => {
    return async dispatch => {
        dispatch(dollsStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls/` + id, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    "share": payload === false ? 'private' : 'public'
                })
            })

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(dollsError(data.reason))
            } else {
                dispatch(addMessage(`Кукле ${name} установлена видимость ${payload}`))
                dispatch(dollsSuccess(data.data));
            }
        } catch (e) {
            dispatch(dollsError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const dollGetShare = (payload) => {
    return async dispatch => {
        dispatch(dollStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls/` + payload, {
                method: 'GET'
            })

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(dollError(data.reason))
            } else {
                dispatch(dollSuccess(data.data));
            }
        } catch (e) {
            dispatch(dollError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const dollSetShareString = (token, payload) => {
    return async dispatch => {
        dispatch(dollsStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls/` + payload, {
                method: 'POST',
                headers: {
                    "Authorization": "Bearer " + token
                }
            })

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(dollsError(data.reason))
            } else {
                dispatch(dollsSuccess(data.data));
                dispatch(addMessage(`Кукла добавлена в список прочих кукол`))
            }
        } catch (e) {
            dispatch(dollsError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const dollSetName = (token, id, payload, name) => {
    return async dispatch => {
        dispatch(dollsStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls/` + id + '/new-name', {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    "new-name": payload
                })
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(dollsError(data.reason))
            } else {
                dispatch(addMessage(`Кукле ${name} установлено новое имя ${payload}`))
                dispatch(dollsSuccess(data.data));
            }
        } catch (e) {
            dispatch(dollsError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const dollDeleteInitiate = (token, id, name) => {
    return async dispatch => {
        dispatch(dollsDeleteStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls/` + id, {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer " + token
                }
            });
            const data = await response.json();
            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(dollsDeleteError(data.reason))
            } else {
                dispatch(addMessage(`Ваша кукла ${name} удалена`))
                dispatch(dollsDeleteSuccess(data.data));
            }
        } catch (e) {
            dispatch(dollsDeleteError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const dollDeleteOther = (token, string, name) => {
    return async dispatch => {
        dispatch(dollsDeleteStart());
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls/` + string, {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason))
                dispatch(dollsDeleteError(data.reason))
            } else {
                dispatch(dollsDeleteSuccess(data.data));
                dispatch(addMessage(`Кукла ${name} удалена из списка прочих кукол`))
            }
        } catch (e) {
            dispatch(dollsDeleteError(e.toString()));
            console.log(e.toString());
        }
    }
}

export const dollDetailsInitiate = (token, dollId, defaultDoll = '') => {
    return async (dispatch, getState) => {
        dispatch(dollDetailsStart());

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dolls/${defaultDoll}${dollId}`, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token
                }
            });

            const data = await response.json();

            if (!data.success) {
                dispatch(addError(data.reason));
                dispatch(dollDetailsError(data.reason));
                return null;
            } else {
                dispatch(dollDetailsSuccess(data.data.doll));
                return data.data.doll;
            }
        } catch (e) {
            dispatch(dollDetailsError(e.toString()));
            console.log(e.toString());
            return null;
        }
    }
};

const history = createBrowserHistory();

export const loadDollByRouteName = (name, dollType) => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = selectToken(state);

        if (!token && dollType !== 'default') {
            dispatch(addNewNotification('Для просмотра куклы необходима авторизация'));
            dispatch(dollDetailsError('Нет авторизации.'));
            return;
        }

        const dolls = selectDolls(state);
        const otherDolls = selectOtherDolls(state);
        const defaultDolls = selectDefaultDolls(state);
        const selectedDollName = selectDollName(state);

        if (!dolls || !otherDolls) {
            dispatch(addError('Списки кукол не загружены. Пожалуйста, попробуйте позже.'));
            dispatch(dollDetailsError('Списки кукол не загружены.'));
            return;
        }

        const normalizedName = name.replaceAll(' ', '-').replaceAll('\\', '-').replaceAll('/', '-').toLowerCase();

        let targetDoll = null;
        let searchSource = '';

        if (dollType === 'my') {
            targetDoll = dolls.find(d => d.name.replaceAll(' ', '-').replaceAll('/', '-').toLowerCase() === normalizedName);
            searchSource = 'ваших';
        } else if (dollType === 'shared') {
            targetDoll = otherDolls.find(d => d.name.replaceAll(' ', '-').replaceAll('\\', '-').replaceAll('/', '-').toLowerCase() === normalizedName);
            searchSource = 'чужих';
        } else if (dollType === 'default') {
            targetDoll = defaultDolls.find(d => d.name.replaceAll(' ', '-').replaceAll('\\', '-').replaceAll('/', '-').toLowerCase() === normalizedName);
            searchSource = 'стандартных';
        }

        if (targetDoll) {
            if (selectedDollName !== targetDoll.name) {
                handleSelect(dispatch, targetDoll);

                await dispatch(dollDetailsInitiate(token, targetDoll.id, dollType === 'default' ? 'default/' : ''));

            }
        } else {
            dispatch(dollDetailsError(`Кукла с именем "${name}" не найдена среди ${searchSource} кукол.`));
            dispatch(addError(`Кукла с именем "${name}" не найдена среди ${searchSource} кукол.`));
            history.push('/doll')
        }
    };
};