import {
    RIGHT_DOLL_CLEAR,
    RIGHT_DOLL_DECREASE_ACCURACY,
    RIGHT_DOLL_DECREASE_AIR,
    RIGHT_DOLL_DECREASE_DEXTERITY,
    RIGHT_DOLL_DECREASE_EARTH,
    RIGHT_DOLL_DECREASE_ENDURANCE,
    RIGHT_DOLL_DECREASE_FIRE,
    RIGHT_DOLL_DECREASE_STRENGTH,
    RIGHT_DOLL_DECREASE_WATER,
    RIGHT_DOLL_INCREASE_ACCURACY,
    RIGHT_DOLL_INCREASE_AIR,
    RIGHT_DOLL_INCREASE_DEXTERITY,
    RIGHT_DOLL_INCREASE_EARTH,
    RIGHT_DOLL_INCREASE_ENDURANCE,
    RIGHT_DOLL_INCREASE_FIRE,
    RIGHT_DOLL_INCREASE_STRENGTH,
    RIGHT_DOLL_INCREASE_WATER,
    RIGHT_DOLL_SAVE_ERROR,
    RIGHT_DOLL_SAVE_START,
    RIGHT_DOLL_SAVE_SUCCESS,
    RIGHT_DOLL_SET_ACCURACY,
    RIGHT_DOLL_SET_ACCURACY_STATS,
    RIGHT_DOLL_SET_AIR,
    RIGHT_DOLL_SET_AIR_STATS,
    RIGHT_DOLL_SET_AMULET,
    RIGHT_DOLL_SET_BELT,
    RIGHT_DOLL_SET_BOOTS,
    RIGHT_DOLL_SET_BRACELET1,
    RIGHT_DOLL_SET_BRACELET2,
    RIGHT_DOLL_SET_BUFF1,
    RIGHT_DOLL_SET_BUFF10,
    RIGHT_DOLL_SET_BUFF2,
    RIGHT_DOLL_SET_BUFF3,
    RIGHT_DOLL_SET_BUFF4,
    RIGHT_DOLL_SET_BUFF5,
    RIGHT_DOLL_SET_BUFF6,
    RIGHT_DOLL_SET_BUFF7,
    RIGHT_DOLL_SET_BUFF8,
    RIGHT_DOLL_SET_BUFF9,
    RIGHT_DOLL_SET_CRYSTALMA,
    RIGHT_DOLL_SET_CRYSTALMD,
    RIGHT_DOLL_SET_CRYSTALPA,
    RIGHT_DOLL_SET_CRYSTALPD,
    RIGHT_DOLL_SET_TITLE_STATS,
    RIGHT_DOLL_SET_DEGREE_STATS,
    RIGHT_DOLL_SET_TITLE_LEVEL,
    RIGHT_DOLL_SET_DEGREE_LEVEL,
    RIGHT_DOLL_SET_DEXTERITY,
    RIGHT_DOLL_SET_DEXTERITY_STATS,
    RIGHT_DOLL_SET_EARTH,
    RIGHT_DOLL_SET_EARTH_STATS,
    RIGHT_DOLL_SET_ENDURANCE,
    RIGHT_DOLL_SET_ENDURANCE_STATS,
    RIGHT_DOLL_SET_FIRE,
    RIGHT_DOLL_SET_FIRE_STATS,
    RIGHT_DOLL_SET_GLOVES,
    RIGHT_DOLL_SET_HELMET,
    RIGHT_DOLL_SET_HP_STATS,
    RIGHT_DOLL_SET_HP,
    RIGHT_DOLL_SET_PRANA,
    RIGHT_DOLL_SET_JACKET,
    RIGHT_DOLL_SET_MA_STATS,
    RIGHT_DOLL_SET_MD_STATS,
    RIGHT_DOLL_SET_PA_STATS,
    RIGHT_DOLL_SET_PANTS,
    RIGHT_DOLL_SET_PD_STATS,
    RIGHT_DOLL_SET_PRANA_STATS,
    RIGHT_DOLL_SET_PROFESSION,
    RIGHT_DOLL_SET_RING1,
    RIGHT_DOLL_SET_RING2,
    RIGHT_DOLL_SET_RING3,
    RIGHT_DOLL_SET_RING4,
    RIGHT_DOLL_SET_SHIELD,
    RIGHT_DOLL_SET_SLOT1,
    RIGHT_DOLL_SET_SLOT10,
    RIGHT_DOLL_SET_SLOT2,
    RIGHT_DOLL_SET_SLOT3,
    RIGHT_DOLL_SET_SLOT4,
    RIGHT_DOLL_SET_SLOT5,
    RIGHT_DOLL_SET_SLOT6,
    RIGHT_DOLL_SET_SLOT7,
    RIGHT_DOLL_SET_SLOT8,
    RIGHT_DOLL_SET_SLOT9,
    RIGHT_DOLL_SET_STRENGTH,
    RIGHT_DOLL_SET_STRENGTH_STATS,
    RIGHT_DOLL_SET_WATER,
    RIGHT_DOLL_SET_WATER_STATS,
    RIGHT_DOLL_SET_WEAPON,
    RIGHT_DOLL_UNSET_AMULET,
    RIGHT_DOLL_UNSET_BELT,
    RIGHT_DOLL_UNSET_BOOTS,
    RIGHT_DOLL_UNSET_BRACELET1,
    RIGHT_DOLL_UNSET_BRACELET2,
    RIGHT_DOLL_UNSET_BUFF1,
    RIGHT_DOLL_UNSET_BUFF10,
    RIGHT_DOLL_UNSET_BUFF2,
    RIGHT_DOLL_UNSET_BUFF3,
    RIGHT_DOLL_UNSET_BUFF4,
    RIGHT_DOLL_UNSET_BUFF5,
    RIGHT_DOLL_UNSET_BUFF6,
    RIGHT_DOLL_UNSET_BUFF7,
    RIGHT_DOLL_UNSET_BUFF8,
    RIGHT_DOLL_UNSET_BUFF9,
    RIGHT_DOLL_UNSET_CRYSTALMA,
    RIGHT_DOLL_UNSET_CRYSTALMD,
    RIGHT_DOLL_UNSET_CRYSTALPA,
    RIGHT_DOLL_UNSET_CRYSTALPD,
    RIGHT_DOLL_UNSET_GLOVES,
    RIGHT_DOLL_UNSET_HELMET,
    RIGHT_DOLL_UNSET_JACKET,
    RIGHT_DOLL_UNSET_PANTS,
    RIGHT_DOLL_UNSET_PROFESSION,
    RIGHT_DOLL_UNSET_RING1,
    RIGHT_DOLL_UNSET_RING2,
    RIGHT_DOLL_UNSET_RING3,
    RIGHT_DOLL_UNSET_RING4,
    RIGHT_DOLL_UNSET_SHIELD,
    RIGHT_DOLL_UNSET_SLOT1,
    RIGHT_DOLL_UNSET_SLOT10,
    RIGHT_DOLL_UNSET_SLOT2,
    RIGHT_DOLL_UNSET_SLOT3,
    RIGHT_DOLL_UNSET_SLOT4,
    RIGHT_DOLL_UNSET_SLOT5,
    RIGHT_DOLL_UNSET_SLOT6,
    RIGHT_DOLL_UNSET_SLOT7,
    RIGHT_DOLL_REQUIRE_STRENGTH,
    RIGHT_DOLL_REQUIRE_DEXTERITY,
    RIGHT_DOLL_REQUIRE_ACCURACY,
    RIGHT_DOLL_REQUIRE_ENDURANCE,
    RIGHT_DOLL_REQUIRE_EARTH,
    RIGHT_DOLL_REQUIRE_AIR,
    RIGHT_DOLL_REQUIRE_WATER,
    RIGHT_DOLL_REQUIRE_FIRE,
    RIGHT_DOLL_REQUIRE_PROFESSION,
    RIGHT_DOLL_REQUIRE_PROFESSION_LEVEL,
    RIGHT_DOLL_UNSET_SLOT9,
    RIGHT_DOLL_UNSET_SLOT8,
    RIGHT_DOLLS_DELETE_SUCCESS,
    RIGHT_DOLLS_DELETE_ERROR,
    RIGHT_DOLLS_DELETE_START,
    RIGHT_DOLL_UNSET_WEAPON,
    RIGHT_DOLLS_ERROR,
    RIGHT_DOLLS_SUCCESS,
    RIGHT_DOLLS_START,
    RIGHT_DOLL_SET_TITLE_GREATNESS,
    RIGHT_DOLL_SET_DEGREE_GREATNESS,
    RIGHT_DOLL_SET_PREFIXES,
    RIGHT_DOLL_SET_OTHER_DOLL,
    RIGHT_DOLL_UNSET_OTHER_DOLL,
    RIGHT_DOLL_SUCCESS,
    RIGHT_DOLL_START,
    RIGHT_DOLL_ERROR,
    RIGHT_DOLL_SET_RIGHT_DOLL_NAME,
    RIGHT_DOLL_LOGOUT, RIGHT_DOLL_DETAILS_ERROR, RIGHT_DOLL_SELECT_SUCCESS, RIGHT_DOLL_DETAILS_SUCCESS, RIGHT_DOLL_DETAILS_START, RIGHT_DOLL_UNSET_RIGHT_DOLL_NAME
} from './actions';

const initialState = {
    dolls: [],
    otherDolls: [],
    defaultDolls: [],
    doll: '',
    dollError: null,
    dollItems: [],
    saveError: null,
    dollsError: null,
    dollsLoading: false,
    titleLevel: 1,
    degreeLevel: 1,
    titleGreatness: '1',
    degreeGreatness: '1',
    strength: 0,
    dexterity: 0,
    accuracy: 0,
    endurance: 0,
    earth: 0,
    air: 0,
    water: 0,
    fire: 0,
    strengthStats: 0,
    dexterityStats: 0,
    accuracyStats: 0,
    enduranceStats: 0,
    earthStats: 0,
    airStats: 0,
    waterStats: 0,
    fireStats: 0,
    hpStats: 0,
    pranaStats: 0,
    hp: 0,
    prana: 0,
    pdStats: 0,
    mdStats: 0,
    paStats: 0,
    maStats: 0,
    titleStats: 4,
    degreeStats: 4,
    helmet: null,
    amulet: null,
    gloves: null,
    jacket: null,
    shield: null,
    bracelet1: null,
    bracelet2: null,
    belt: null,
    ring1: null,
    ring2: null,
    ring3: null,
    ring4: null,
    pants: null,
    boots: null,
    weapon: null,
    profession: null,
    buff1: null,
    buff2: null,
    buff3: null,
    buff4: null,
    buff5: null,
    buff6: null,
    buff7: null,
    buff8: null,
    buff9: null,
    buff10: null,
    crystalpd: null,
    crystalmd: null,
    crystalpa: null,
    crystalma: null,
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null,
    slot5: null,
    slot6: null,
    slot7: null,
    slot8: null,
    slot9: null,
    slot10: null,
    reqStrength: 0,
    reqDexterity: 0,
    reqAccuracy: 0,
    reqEndurance: 0,
    reqEarth: 0,
    reqAir: 0,
    reqWater: 0,
    reqFire: 0,
    reqProfession: null,
    reqProfessionLevel: 0,
    prefixes: [],
    otherDoll: null,
    dollName: '',
    dollDetailsLoading: false
}

const setSlot = (item, string) => {
    if (item) {
        item.slot = string; // Добавляем свойство 'slot' к предмету
        return item;
    } else {
        return null;
    }
}

const dollReducer = (state = initialState, action) => {
    switch (action.type) {
        case RIGHT_DOLLS_START:

            return {
                ...state,
                dollsError: null,
                dolls: [],
                dollsLoading: true
            }
        case RIGHT_DOLLS_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
                dolls: action.payload.dolls,
                otherDolls: action.payload.shared,
                defaultDolls: action.payload.default,
                dollsLoading: false
            }
        case RIGHT_DOLLS_ERROR:
            return {
                ...state,
                dollsError: action.payload,
                dollsLoading: false
            }
        case RIGHT_DOLL_START:
            return {
                ...state,
                dollError: null,
                doll: null
            }
        case RIGHT_DOLL_SUCCESS:
            return {
                ...state,
                doll: action.payload.singleshared
            }
        case RIGHT_DOLL_ERROR:
            return {
                ...state,
                dollError: action.payload
            }
        case RIGHT_DOLL_SAVE_START:

            return {
                ...state,
                saveError: null,
                dollsLoading: true
            }
        case RIGHT_DOLL_SAVE_SUCCESS:

            return {
                ...state,
                currentUser: action.payload.user,
                dollsLoading: false
            }
        case RIGHT_DOLL_SAVE_ERROR:

            return {
                ...state,
                saveError: action.payload,
                dollsLoading: false
            }
        case RIGHT_DOLLS_DELETE_START:

            return {
                ...state,
                dollsError: null,
                dolls: [],
                dollsLoading: true
            }
        case RIGHT_DOLLS_DELETE_SUCCESS:

            return {
                ...state,
                currentUser: action.payload.user,
                dolls: action.payload.dolls,
                otherDolls: action.payload.shared,
                dollsLoading: false
            }
        case RIGHT_DOLLS_DELETE_ERROR:

            return {
                ...state,
                dollsError: action.payload,
                dollsLoading: false
            }
        case RIGHT_DOLL_SET_HELMET:

            return {
                ...state,
                helmet: action.payload
            }
        case RIGHT_DOLL_UNSET_HELMET:

            return {
                ...state,
                helmet: null
            }
        case RIGHT_DOLL_SET_AMULET:

            return {
                ...state,
                amulet: action.payload
            }
        case RIGHT_DOLL_UNSET_AMULET:

            return {
                ...state,
                amulet: null
            }
        case RIGHT_DOLL_SET_GLOVES:

            return {
                ...state,
                gloves: action.payload
            }
        case RIGHT_DOLL_UNSET_GLOVES:

            return {
                ...state,
                gloves: null
            }
        case RIGHT_DOLL_SET_JACKET:

            return {
                ...state,
                jacket: action.payload
            }
        case RIGHT_DOLL_UNSET_JACKET:

            return {
                ...state,
                jacket: null
            }
        case RIGHT_DOLL_SET_SHIELD:
            return {
                ...state,
                shield: action.payload
            }
        case RIGHT_DOLL_UNSET_SHIELD:

            return {
                ...state,
                shield: null
            }
        case RIGHT_DOLL_SET_BRACELET1:

            return {
                ...state,
                bracelet1: action.payload
            }
        case RIGHT_DOLL_UNSET_BRACELET1:

            return {
                ...state,
                bracelet1: null
            }
        case RIGHT_DOLL_SET_BRACELET2:

            return {
                ...state,
                bracelet2: action.payload
            }
        case RIGHT_DOLL_UNSET_BRACELET2:

            return {
                ...state,
                bracelet2: null
            }
        case RIGHT_DOLL_SET_BELT:

            return {
                ...state,
                belt: action.payload
            }
        case RIGHT_DOLL_UNSET_BELT:

            return {
                ...state,
                belt: null
            }
        case RIGHT_DOLL_SET_RING1:

            return {
                ...state,
                ring1: action.payload
            }
        case RIGHT_DOLL_UNSET_RING1:

            return {
                ...state,
                ring1: null
            }
        case RIGHT_DOLL_SET_RING2:

            return {
                ...state,
                ring2: action.payload
            }
        case RIGHT_DOLL_UNSET_RING2:

            return {
                ...state,
                ring2: null
            }
        case RIGHT_DOLL_SET_RING3:

            return {
                ...state,
                ring3: action.payload
            }
        case RIGHT_DOLL_UNSET_RING3:

            return {
                ...state,
                ring3: null
            }
        case RIGHT_DOLL_SET_RING4:

            return {
                ...state,
                ring4: action.payload
            }
        case RIGHT_DOLL_UNSET_RING4:

            return {
                ...state,
                ring4: null
            }
        case RIGHT_DOLL_SET_PANTS:

            return {
                ...state,
                pants: action.payload
            }
        case RIGHT_DOLL_UNSET_PANTS:

            return {
                ...state,
                pants: null
            }
        case RIGHT_DOLL_SET_BOOTS:

            return {
                ...state,
                boots: action.payload
            }
        case RIGHT_DOLL_UNSET_BOOTS:

            return {
                ...state,
                boots: null
            }
        case RIGHT_DOLL_SET_WEAPON:

            return {
                ...state,
                weapon: action.payload
            }
        case RIGHT_DOLL_UNSET_WEAPON:

            return {
                ...state,
                weapon: null
            }
        case RIGHT_DOLL_SET_PROFESSION:

            return {
                ...state,
                profession: action.payload
            }
        case RIGHT_DOLL_UNSET_PROFESSION:

            return {
                ...state,
                profession: null
            }
        case RIGHT_DOLL_SET_BUFF1:

            return {
                ...state,
                buff1: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF1:

            return {
                ...state,
                buff1: null
            }
        case RIGHT_DOLL_SET_BUFF2:

            return {
                ...state,
                buff2: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF2:

            return {
                ...state,
                buff2: null
            }
        case RIGHT_DOLL_SET_BUFF3:

            return {
                ...state,
                buff3: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF3:

            return {
                ...state,
                buff3: null
            }
        case RIGHT_DOLL_SET_BUFF4:

            return {
                ...state,
                buff4: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF4:

            return {
                ...state,
                buff4: null
            }
        case RIGHT_DOLL_SET_BUFF5:

            return {
                ...state,
                buff5: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF5:

            return {
                ...state,
                buff5: null
            }
        case RIGHT_DOLL_SET_BUFF6:

            return {
                ...state,
                buff6: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF6:

            return {
                ...state,
                buff6: null
            }
        case RIGHT_DOLL_SET_BUFF7:

            return {
                ...state,
                buff7: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF7:

            return {
                ...state,
                buff7: null
            }
        case RIGHT_DOLL_SET_BUFF8:

            return {
                ...state,
                buff8: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF8:

            return {
                ...state,
                buff8: null
            }
        case RIGHT_DOLL_SET_BUFF9:

            return {
                ...state,
                buff9: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF9:

            return {
                ...state,
                buff9: null
            }
        case RIGHT_DOLL_SET_BUFF10:

            return {
                ...state,
                buff10: action.payload
            }
        case RIGHT_DOLL_UNSET_BUFF10:

            return {
                ...state,
                buff10: null
            }
        case RIGHT_DOLL_SET_CRYSTALPD:

            return {
                ...state,
                crystalpd: action.payload
            }
        case RIGHT_DOLL_UNSET_CRYSTALPD:

            return {
                ...state,
                crystalpd: null
            }
        case RIGHT_DOLL_SET_CRYSTALMD:

            return {
                ...state,
                crystalmd: action.payload
            }
        case RIGHT_DOLL_UNSET_CRYSTALMD:

            return {
                ...state,
                crystalmd: null
            }
        case RIGHT_DOLL_SET_CRYSTALPA:

            return {
                ...state,
                crystalpa: action.payload
            }
        case RIGHT_DOLL_UNSET_CRYSTALPA:

            return {
                ...state,
                crystalpa: null
            }
        case RIGHT_DOLL_SET_CRYSTALMA:

            return {
                ...state,
                crystalma: action.payload
            }
        case RIGHT_DOLL_UNSET_CRYSTALMA:

            return {
                ...state,
                crystalma: null
            }
        case RIGHT_DOLL_SET_SLOT1:

            return {
                ...state,
                slot1: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT1:

            return {
                ...state,
                slot1: null
            }
        case RIGHT_DOLL_SET_SLOT2:

            return {
                ...state,
                slot2: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT2:

            return {
                ...state,
                slot2: null
            }
        case RIGHT_DOLL_SET_SLOT3:

            return {
                ...state,
                slot3: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT3:

            return {
                ...state,
                slot3: null
            }
        case RIGHT_DOLL_SET_SLOT4:

            return {
                ...state,
                slot4: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT4:

            return {
                ...state,
                slot4: null
            }
        case RIGHT_DOLL_SET_SLOT5:

            return {
                ...state,
                slot5: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT5:

            return {
                ...state,
                slot5: null
            }
        case RIGHT_DOLL_SET_SLOT6:

            return {
                ...state,
                slot6: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT6:

            return {
                ...state,
                slot6: null
            }
        case RIGHT_DOLL_SET_SLOT7:

            return {
                ...state,
                slot7: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT7:

            return {
                ...state,
                slot7: null
            }
        case RIGHT_DOLL_SET_SLOT8:

            return {
                ...state,
                slot8: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT8:

            return {
                ...state,
                slot8: null
            }
        case RIGHT_DOLL_SET_SLOT9:

            return {
                ...state,
                slot9: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT9:

            return {
                ...state,
                slot9: null
            }
        case RIGHT_DOLL_SET_SLOT10:

            return {
                ...state,
                slot10: action.payload
            }
        case RIGHT_DOLL_UNSET_SLOT10:

            return {
                ...state,
                slot10: null
            }
        case RIGHT_DOLL_SET_STRENGTH:

            return {
                ...state,
                strength: action.payload
            }
        case RIGHT_DOLL_SET_DEXTERITY:

            return {
                ...state,
                dexterity: action.payload
            }
        case RIGHT_DOLL_SET_ACCURACY:

            return {
                ...state,
                accuracy: action.payload
            }
        case RIGHT_DOLL_SET_ENDURANCE:

            return {
                ...state,
                endurance: action.payload
            }
        case RIGHT_DOLL_SET_EARTH:

            return {
                ...state,
                earth: action.payload
            }
        case RIGHT_DOLL_SET_AIR:

            return {
                ...state,
                air: action.payload
            }
        case RIGHT_DOLL_SET_WATER:

            return {
                ...state,
                water: action.payload
            }
        case RIGHT_DOLL_SET_FIRE:

            return {
                ...state,
                fire: action.payload
            }
        case RIGHT_DOLL_SET_STRENGTH_STATS:

            return {
                ...state,
                strengthStats: action.payload
            }
        case RIGHT_DOLL_SET_DEXTERITY_STATS:

            return {
                ...state,
                dexterityStats: action.payload
            }
        case RIGHT_DOLL_SET_ACCURACY_STATS:

            return {
                ...state,
                accuracyStats: action.payload
            }
        case RIGHT_DOLL_SET_ENDURANCE_STATS:

            return {
                ...state,
                enduranceStats: action.payload
            }
        case RIGHT_DOLL_SET_EARTH_STATS:

            return {
                ...state,
                earthStats: action.payload
            }
        case RIGHT_DOLL_SET_AIR_STATS:

            return {
                ...state,
                airStats: action.payload
            }
        case RIGHT_DOLL_SET_WATER_STATS:

            return {
                ...state,
                waterStats: action.payload
            }
        case RIGHT_DOLL_SET_FIRE_STATS:

            return {
                ...state,
                fireStats: action.payload
            }
        case RIGHT_DOLL_SET_HP_STATS:

            return {
                ...state,
                hpStats: action.payload
            }
        case RIGHT_DOLL_SET_PRANA_STATS:

            return {
                ...state,
                pranaStats: action.payload
            }
        case RIGHT_DOLL_SET_HP:

            return {
                ...state,
                hp: action.payload
            }
        case RIGHT_DOLL_SET_PRANA:

            return {
                ...state,
                prana: action.payload
            }
        case RIGHT_DOLL_SET_PD_STATS:

            return {
                ...state,
                pdStats: action.payload
            }
        case RIGHT_DOLL_SET_MD_STATS:

            return {
                ...state,
                mdStats: action.payload
            }
        case RIGHT_DOLL_SET_PA_STATS:

            return {
                ...state,
                paStats: action.payload
            }
        case RIGHT_DOLL_SET_MA_STATS:

            return {
                ...state,
                maStats: action.payload
            }
        case RIGHT_DOLL_SET_TITLE_STATS:

            return {
                ...state,
                titleStats: action.payload
            }
        case RIGHT_DOLL_SET_DEGREE_STATS:

            return {
                ...state,
                degreeStats: action.payload
            }
        case RIGHT_DOLL_SET_TITLE_LEVEL:

            return {
                ...state,
                titleLevel: action.payload
            }
        case RIGHT_DOLL_SET_DEGREE_LEVEL:

            return {
                ...state,
                degreeLevel: action.payload
            }
        case RIGHT_DOLL_SET_TITLE_GREATNESS:

            return {
                ...state,
                titleGreatness: action.payload
            }
        case RIGHT_DOLL_SET_DEGREE_GREATNESS:

            return {
                ...state,
                degreeGreatness: action.payload
            }
        case RIGHT_DOLL_INCREASE_STRENGTH:

            return {
                ...state,
                strength: ++state.strength
            }
        case RIGHT_DOLL_INCREASE_DEXTERITY:

            return {
                ...state,
                dexterity: ++state.dexterity
            }
        case RIGHT_DOLL_INCREASE_ACCURACY:

            return {
                ...state,
                accuracy: ++state.accuracy
            }
        case RIGHT_DOLL_INCREASE_ENDURANCE:

            return {
                ...state,
                endurance: ++state.endurance
            }
        case RIGHT_DOLL_INCREASE_EARTH:

            return {
                ...state,
                earth: ++state.earth
            }
        case RIGHT_DOLL_INCREASE_AIR:

            return {
                ...state,
                air: ++state.air
            }
        case RIGHT_DOLL_INCREASE_WATER:

            return {
                ...state,
                water: ++state.water
            }
        case RIGHT_DOLL_INCREASE_FIRE:

            return {
                ...state,
                fire: ++state.fire
            }
        case RIGHT_DOLL_DECREASE_STRENGTH:

            return {
                ...state,
                strength: --state.strength
            }
        case RIGHT_DOLL_DECREASE_DEXTERITY:

            return {
                ...state,
                dexterity: --state.dexterity
            }
        case RIGHT_DOLL_DECREASE_ACCURACY:

            return {
                ...state,
                accuracy: --state.accuracy
            }
        case RIGHT_DOLL_DECREASE_ENDURANCE:

            return {
                ...state,
                endurance: --state.endurance
            }
        case RIGHT_DOLL_DECREASE_EARTH:

            return {
                ...state,
                earth: --state.earth
            }
        case RIGHT_DOLL_DECREASE_AIR:

            return {
                ...state,
                air: --state.air
            }
        case RIGHT_DOLL_DECREASE_WATER:

            return {
                ...state,
                water: --state.water
            }
        case RIGHT_DOLL_DECREASE_FIRE:

            return {
                ...state,
                fire: --state.fire
            }
        case RIGHT_DOLL_REQUIRE_STRENGTH:

            return {
                ...state,
                reqStrength: action.payload
            }
        case RIGHT_DOLL_REQUIRE_DEXTERITY:

            return {
                ...state,
                reqDexterity: action.payload
            }
        case RIGHT_DOLL_REQUIRE_ACCURACY:

            return {
                ...state,
                reqAccuracy: action.payload
            }
        case RIGHT_DOLL_REQUIRE_ENDURANCE:

            return {
                ...state,
                reqEndurance: action.payload
            }
        case RIGHT_DOLL_REQUIRE_EARTH:

            return {
                ...state,
                reqEarth: action.payload
            }
        case RIGHT_DOLL_REQUIRE_AIR:

            return {
                ...state,
                reqAir: action.payload
            }
        case RIGHT_DOLL_REQUIRE_WATER:

            return {
                ...state,
                reqWater: action.payload
            }
        case RIGHT_DOLL_REQUIRE_FIRE:

            return {
                ...state,
                reqFire: action.payload
            }
        case RIGHT_DOLL_REQUIRE_PROFESSION:

            return {
                ...state,
                reqProfession: action.payload
            }
        case RIGHT_DOLL_REQUIRE_PROFESSION_LEVEL:

            return {
                ...state,
                reqProfessionLevel: action.payload
            }

        case RIGHT_DOLL_SET_PREFIXES:

            return {
                ...state,
                prefixes: action.payload
            }
        case RIGHT_DOLL_SET_OTHER_DOLL:

            return {
                ...state,
                otherDoll: action.payload
            }
        case RIGHT_DOLL_UNSET_OTHER_DOLL:

            return {
                ...state,
                otherDoll: null
            }
        case RIGHT_DOLL_SET_RIGHT_DOLL_NAME:
            return {
                ...state,
                dollName: action.payload
            }

        case RIGHT_DOLL_UNSET_RIGHT_DOLL_NAME:
            return {
                ...state,
                dollName: ''
            }

        case RIGHT_DOLL_CLEAR:

            return {
                ...state,
                helmet: null,
                amulet: null,
                gloves: null,
                jacket: null,
                shield: null,
                bracelet1: null,
                bracelet2: null,
                belt: null,
                ring1: null,
                ring2: null,
                ring3: null,
                ring4: null,
                pants: null,
                boots: null,
                weapon: null,
                profession: null,
                buff1: null,
                buff2: null,
                buff3: null,
                buff4: null,
                buff5: null,
                buff6: null,
                buff7: null,
                buff8: null,
                buff9: null,
                buff10: null,
                crystalpd: null,
                crystalmd: null,
                crystalpa: null,
                crystalma: null,
                slot1: null,
                slot2: null,
                slot3: null,
                slot4: null,
                slot5: null,
                slot6: null,
                slot7: null,
                slot8: null,
                slot9: null,
                slot10: null
            }
        case RIGHT_DOLL_LOGOUT:
            return {
                ...state,
                dolls: [],
                doll: '',
                dollError: null,
                otherDolls: []
            }
        case RIGHT_DOLL_DETAILS_START:
            return {
                ...state,
                dollDetailsLoading: true,
                dollDetailsError: null,
                selectedDollDetails: null // Очищаем предыдущие детали при начале загрузки
            }
        case RIGHT_DOLL_DETAILS_SUCCESS:
            const chosenDoll = action.payload;

            const processItem = (item, prefixValue, slotName) => {
                if (item) {
                    const processedItem = { ...item };

                    if (prefixValue !== undefined) {
                        processedItem.prefix = prefixValue;
                    }

                    processedItem.slot = slotName;

                    return processedItem;
                }
                return null;
            };

            return {
                ...state,
                dollDetailsLoading: false,
                dollDetailsError: null,
                selectedDollDetails: action.payload, // selectedDollDetails может хранить "сырой" payload, если хотите
                dollName: chosenDoll.name,
                strength: chosenDoll.strength,
                dexterity: chosenDoll.dexterity,
                accuracy: chosenDoll.accuracy,
                endurance: chosenDoll.endurance,
                earth: chosenDoll.earth,
                air: chosenDoll.air,
                water: chosenDoll.water,
                fire: chosenDoll.fire,
                titleLevel: chosenDoll.titleLevel,
                degreeLevel: chosenDoll.degreeLevel,
                titleGreatness: String(chosenDoll.titleGreatness), // Приводим к строке
                degreeGreatness: String(chosenDoll.degreeGreatness), // Приводим к строке
                profession: setSlot(chosenDoll.professionItem, 'Guild'), // Предполагая, что professionItem это guild

                // Обработка предметов со слотами и префиксами
                helmet: processItem(chosenDoll.helmet, chosenDoll.helmetPrefix, 'Helmet'),
                amulet: processItem(chosenDoll.amulet, chosenDoll.amuletPrefix, 'Amulet'),
                gloves: processItem(chosenDoll.gloves, chosenDoll.glovesPrefix, 'Gloves'),
                jacket: processItem(chosenDoll.chest, chosenDoll.chestPrefix, 'Jacket'), // 'chest' в API, 'jacket' в state
                shield: processItem(chosenDoll.shield, chosenDoll.shieldPrefix, 'Shield'),
                bracelet1: processItem(chosenDoll.bracer1, chosenDoll.bracer1Prefix, 'Bracelet1'),
                bracelet2: processItem(chosenDoll.bracer2, chosenDoll.bracer2Prefix, 'Bracelet2'),
                belt: processItem(chosenDoll.belt, chosenDoll.beltPrefix, 'Belt'),
                ring1: processItem(chosenDoll.ring1, chosenDoll.ring1Prefix, 'Ring1'),
                ring2: processItem(chosenDoll.ring2, chosenDoll.ring2Prefix, 'Ring2'),
                ring3: processItem(chosenDoll.ring3, chosenDoll.ring3Prefix, 'Ring3'),
                ring4: processItem(chosenDoll.ring4, chosenDoll.ring4Prefix, 'Ring4'),
                pants: processItem(chosenDoll.pants, chosenDoll.pantsPrefix, 'Pants'),
                boots: processItem(chosenDoll.boots, chosenDoll.bootsPrefix, 'Boots'),
                weapon: processItem(chosenDoll.weapon, chosenDoll.weaponPrefix, 'Weapon'),

                // Дополнительные слоты
                slot1: processItem(chosenDoll.additional_slot1, chosenDoll.additional_slot1Prefix, 'Slot1'),
                slot2: processItem(chosenDoll.additional_slot2, chosenDoll.additional_slot2Prefix, 'Slot2'),
                slot3: processItem(chosenDoll.additional_slot3, chosenDoll.additional_slot3Prefix, 'Slot3'),
                slot4: processItem(chosenDoll.additional_slot4, chosenDoll.additional_slot4Prefix, 'Slot4'),
                slot5: processItem(chosenDoll.additional_slot5, chosenDoll.additional_slot5Prefix, 'Slot5'),
                slot6: processItem(chosenDoll.additional_slot6, chosenDoll.additional_slot6Prefix, 'Slot6'),
                slot7: processItem(chosenDoll.additional_slot7, chosenDoll.additional_slot7Prefix, 'Slot7'),
                slot8: processItem(chosenDoll.additional_slot8, chosenDoll.additional_slot8Prefix, 'Slot8'),

                // Баффы (предполагаем, что у них нет префиксов)
                buff1: setSlot(chosenDoll.buff1, 'Buff1'),
                buff2: setSlot(chosenDoll.buff2, 'Buff2'),
                buff3: setSlot(chosenDoll.buff3, 'Buff3'),
                buff4: setSlot(chosenDoll.buff4, 'Buff4'),
                buff5: setSlot(chosenDoll.buff5, 'Buff5'),
                buff6: setSlot(chosenDoll.buff6, 'Buff6'),
                buff7: setSlot(chosenDoll.buff7, 'Buff7'),
                buff8: setSlot(chosenDoll.buff8, 'Buff8'),
                buff9: setSlot(chosenDoll.buff9, 'Buff9'),
                buff10: setSlot(chosenDoll.buff10, 'Buff10'),

                // Кристаллы (предполагаем, что у них нет префиксов)
                crystalpd: setSlot(chosenDoll.crystalPd, 'CrystalPD'),
                crystalmd: setSlot(chosenDoll.crystalMd, 'CrystalMD'),
                crystalpa: setSlot(chosenDoll.crystalPa, 'CrystalPA'),
                crystalma: setSlot(chosenDoll.crystalMa, 'CrystalMA'),
            };
        case RIGHT_DOLL_DETAILS_ERROR:
            return {
                ...state,
                dollDetailsLoading: false,
                dollDetailsError: action.payload
            }
        case RIGHT_DOLL_SELECT_SUCCESS:
            return {
                ...state,
                selectedDollDetails: action.payload
            }

        default:
            return state
    }
}

export default dollReducer;