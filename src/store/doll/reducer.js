import React from "react";
import {
    DOLL_CLEAR,
    DOLL_DECREASE_ACCURACY,
    DOLL_DECREASE_AIR,
    DOLL_DECREASE_DEXTERITY,
    DOLL_DECREASE_EARTH,
    DOLL_DECREASE_ENDURANCE,
    DOLL_DECREASE_FIRE,
    DOLL_DECREASE_STRENGTH,
    DOLL_DECREASE_WATER,
    DOLL_INCREASE_ACCURACY,
    DOLL_INCREASE_AIR,
    DOLL_INCREASE_DEXTERITY,
    DOLL_INCREASE_EARTH,
    DOLL_INCREASE_ENDURANCE,
    DOLL_INCREASE_FIRE,
    DOLL_INCREASE_STRENGTH,
    DOLL_INCREASE_WATER,
    DOLL_SAVE_ERROR,
    DOLL_SAVE_START,
    DOLL_SAVE_SUCCESS,
    DOLL_SET_ACCURACY,
    DOLL_SET_ACCURACY_STATS,
    DOLL_SET_AIR,
    DOLL_SET_AIR_STATS,
    DOLL_SET_AMULET,
    DOLL_SET_BELT,
    DOLL_SET_BOOTS,
    DOLL_SET_BRACELET1,
    DOLL_SET_BRACELET2,
    DOLL_SET_BUFF1,
    DOLL_SET_BUFF10,
    DOLL_SET_BUFF2,
    DOLL_SET_BUFF3,
    DOLL_SET_BUFF4,
    DOLL_SET_BUFF5,
    DOLL_SET_BUFF6,
    DOLL_SET_BUFF7,
    DOLL_SET_BUFF8,
    DOLL_SET_BUFF9,
    DOLL_SET_CRYSTALMA,
    DOLL_SET_CRYSTALMD,
    DOLL_SET_CRYSTALPA,
    DOLL_SET_CRYSTALPD,
    DOLL_SET_TITLE_STATS,
    DOLL_SET_DEGREE_STATS,
    DOLL_SET_TITLE_LEVEL,
    DOLL_SET_DEGREE_LEVEL,
    DOLL_SET_DEXTERITY,
    DOLL_SET_DEXTERITY_STATS,
    DOLL_SET_EARTH,
    DOLL_SET_EARTH_STATS,
    DOLL_SET_ENDURANCE,
    DOLL_SET_ENDURANCE_STATS,
    DOLL_SET_FIRE,
    DOLL_SET_FIRE_STATS,
    DOLL_SET_GLOVES,
    DOLL_SET_HELMET,
    DOLL_SET_HP_STATS,
    DOLL_SET_HP,
    DOLL_SET_PRANA,
    DOLL_SET_JACKET,
    DOLL_SET_MA_STATS,
    DOLL_SET_MD_STATS,
    DOLL_SET_PA_STATS,
    DOLL_SET_PANTS,
    DOLL_SET_PD_STATS,
    DOLL_SET_PRANA_STATS,
    DOLL_SET_PROFESSION,
    DOLL_SET_RING1,
    DOLL_SET_RING2,
    DOLL_SET_RING3,
    DOLL_SET_RING4,
    DOLL_SET_SHIELD,
    DOLL_SET_SLOT1,
    DOLL_SET_SLOT10,
    DOLL_SET_SLOT2,
    DOLL_SET_SLOT3,
    DOLL_SET_SLOT4,
    DOLL_SET_SLOT5,
    DOLL_SET_SLOT6,
    DOLL_SET_SLOT7,
    DOLL_SET_SLOT8,
    DOLL_SET_SLOT9,
    DOLL_SET_STRENGTH,
    DOLL_SET_STRENGTH_STATS,
    DOLL_SET_WATER,
    DOLL_SET_WATER_STATS,
    DOLL_SET_WEAPON,
    DOLL_UNSET_AMULET,
    DOLL_UNSET_BELT,
    DOLL_UNSET_BOOTS,
    DOLL_UNSET_BRACELET1,
    DOLL_UNSET_BRACELET2,
    DOLL_UNSET_BUFF1,
    DOLL_UNSET_BUFF10,
    DOLL_UNSET_BUFF2,
    DOLL_UNSET_BUFF3,
    DOLL_UNSET_BUFF4,
    DOLL_UNSET_BUFF5,
    DOLL_UNSET_BUFF6,
    DOLL_UNSET_BUFF7,
    DOLL_UNSET_BUFF8,
    DOLL_UNSET_BUFF9,
    DOLL_UNSET_CRYSTALMA,
    DOLL_UNSET_CRYSTALMD,
    DOLL_UNSET_CRYSTALPA,
    DOLL_UNSET_CRYSTALPD,
    DOLL_UNSET_GLOVES,
    DOLL_UNSET_HELMET,
    DOLL_UNSET_JACKET,
    DOLL_UNSET_PANTS,
    DOLL_UNSET_PROFESSION,
    DOLL_UNSET_RING1,
    DOLL_UNSET_RING2,
    DOLL_UNSET_RING3,
    DOLL_UNSET_RING4,
    DOLL_UNSET_SHIELD,
    DOLL_UNSET_SLOT1,
    DOLL_UNSET_SLOT10,
    DOLL_UNSET_SLOT2,
    DOLL_UNSET_SLOT3,
    DOLL_UNSET_SLOT4,
    DOLL_UNSET_SLOT5,
    DOLL_UNSET_SLOT6,
    DOLL_UNSET_SLOT7,
    DOLL_REQUIRE_STRENGTH,
    DOLL_REQUIRE_DEXTERITY,
    DOLL_REQUIRE_ACCURACY,
    DOLL_REQUIRE_ENDURANCE,
    DOLL_REQUIRE_EARTH,
    DOLL_REQUIRE_AIR,
    DOLL_REQUIRE_WATER,
    DOLL_REQUIRE_FIRE,
    DOLL_REQUIRE_PROFESSION,
    DOLL_REQUIRE_PROFESSION_LEVEL,
    DOLL_UNSET_SLOT9,
    DOLL_UNSET_SLOT8,
    DOLLS_DELETE_SUCCESS,
    DOLLS_DELETE_ERROR,
    DOLLS_DELETE_START,
    DOLL_UNSET_WEAPON,
    DOLLS_ERROR,
    DOLLS_SUCCESS,
    DOLLS_START,
    DOLL_SET_TITLE_GREATNESS,
    DOLL_SET_DEGREE_GREATNESS,
    DOLL_SET_PREFIXES, DOLL_SET_OTHER_DOLL, DOLL_UNSET_OTHER_DOLL, DOLL_SUCCESS, DOLL_START, DOLL_ERROR
} from './actions';

const initialState = {
    dolls: [],
    doll: null,
    dollError: null,
    otherDolls: [],
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
    otherDoll: null
}

const dollReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOLLS_START:
            
            return {
                ...state,
                dollsError: null,
                dolls: [],
                dollsLoading: true
            }
        case DOLLS_SUCCESS:
            
            return {
                ...state,
                currentUser: action.payload.user,
                dolls: action.payload.dolls,
                otherDolls: action.payload.shared,
                dollsLoading: false
            }
        case DOLLS_ERROR:
            return {
                ...state,
                dollsError: action.payload,
                dollsLoading: false
            }
        case DOLL_START:
            return {
                ...state,
                dollError: null,
                doll: null
            }
        case DOLL_SUCCESS:
            return {
                ...state,
                doll: action.payload.singleshared
            }
        case DOLL_ERROR:
            return {
                ...state,
                dollError: action.payload
            }
        case DOLL_SAVE_START:
            
            return {
                ...state,
                saveError: null,
                dollsLoading: true
            }
        case DOLL_SAVE_SUCCESS:
            
            return {
                ...state,
                currentUser: action.payload.user,
                dollsLoading: false
            }
        case DOLL_SAVE_ERROR:
            
            return {
                ...state,
                saveError: action.payload,
                dollsLoading: false
            }
        case DOLLS_DELETE_START:
            
            return {
                ...state,
                dollsError: null,
                dolls: [],
                dollsLoading: true
            }
        case DOLLS_DELETE_SUCCESS:
            
            return {
                ...state,
                currentUser: action.payload.user,
                dolls: action.payload.dolls,
                otherDolls: action.payload.shared,
                dollsLoading: false
            }
        case DOLLS_DELETE_ERROR:
            
            return {
                ...state,
                dollsError: action.payload,
                dollsLoading: false
            }
        case DOLL_SET_HELMET:
            
            return {
                ...state,
                helmet: action.payload
            }
        case DOLL_UNSET_HELMET:
            
            return {
                ...state,
                helmet: null
            }
        case DOLL_SET_AMULET:
            
            return {
                ...state,
                amulet: action.payload
            }
        case DOLL_UNSET_AMULET:
            
            return {
                ...state,
                amulet: null
            }
        case DOLL_SET_GLOVES:
            
            return {
                ...state,
                gloves: action.payload
            }
        case DOLL_UNSET_GLOVES:
            
            return {
                ...state,
                gloves: null
            }
        case DOLL_SET_JACKET:
            
            return {
                ...state,
                jacket: action.payload
            }
        case DOLL_UNSET_JACKET:
            
            return {
                ...state,
                jacket: null
            }
        case DOLL_SET_SHIELD:
            return {
                ...state,
                shield: action.payload
            }
        case DOLL_UNSET_SHIELD:
            
            return {
                ...state,
                shield: null
            }
        case DOLL_SET_BRACELET1:
            
            return {
                ...state,
                bracelet1: action.payload
            }
        case DOLL_UNSET_BRACELET1:
            
            return {
                ...state,
                bracelet1: null
            }
        case DOLL_SET_BRACELET2:
            
            return {
                ...state,
                bracelet2: action.payload
            }
        case DOLL_UNSET_BRACELET2:
            
            return {
                ...state,
                bracelet2: null
            }
        case DOLL_SET_BELT:
            
            return {
                ...state,
                belt: action.payload
            }
        case DOLL_UNSET_BELT:
            
            return {
                ...state,
                belt: null
            }
        case DOLL_SET_RING1:
            
            return {
                ...state,
                ring1: action.payload
            }
        case DOLL_UNSET_RING1:
            
            return {
                ...state,
                ring1: null
            }
        case DOLL_SET_RING2:
            
            return {
                ...state,
                ring2: action.payload
            }
        case DOLL_UNSET_RING2:
            
            return {
                ...state,
                ring2: null
            }
        case DOLL_SET_RING3:
            
            return {
                ...state,
                ring3: action.payload
            }
        case DOLL_UNSET_RING3:
            
            return {
                ...state,
                ring3: null
            }
        case DOLL_SET_RING4:
            
            return {
                ...state,
                ring4: action.payload
            }
        case DOLL_UNSET_RING4:
            
            return {
                ...state,
                ring4: null
            }
        case DOLL_SET_PANTS:
            
            return {
                ...state,
                pants: action.payload
            }
        case DOLL_UNSET_PANTS:
            
            return {
                ...state,
                pants: null
            }
        case DOLL_SET_BOOTS:
            
            return {
                ...state,
                boots: action.payload
            }
        case DOLL_UNSET_BOOTS:
            
            return {
                ...state,
                boots: null
            }
        case DOLL_SET_WEAPON:
            
            return {
                ...state,
                weapon: action.payload
            }
        case DOLL_UNSET_WEAPON:
            
            return {
                ...state,
                weapon: null
            }
        case DOLL_SET_PROFESSION:
            
            return {
                ...state,
                profession: action.payload
            }
        case DOLL_UNSET_PROFESSION:
            
            return {
                ...state,
                profession: null
            }
        case DOLL_SET_BUFF1:
            
            return {
                ...state,
                buff1: action.payload
            }
        case DOLL_UNSET_BUFF1:
            
            return {
                ...state,
                buff1: null
            }
        case DOLL_SET_BUFF2:
            
            return {
                ...state,
                buff2: action.payload
            }
        case DOLL_UNSET_BUFF2:
            
            return {
                ...state,
                buff2: null
            }
        case DOLL_SET_BUFF3:
            
            return {
                ...state,
                buff3: action.payload
            }
        case DOLL_UNSET_BUFF3:
            
            return {
                ...state,
                buff3: null
            }
        case DOLL_SET_BUFF4:
            
            return {
                ...state,
                buff4: action.payload
            }
        case DOLL_UNSET_BUFF4:
            
            return {
                ...state,
                buff4: null
            }
        case DOLL_SET_BUFF5:
            
            return {
                ...state,
                buff5: action.payload
            }
        case DOLL_UNSET_BUFF5:
            
            return {
                ...state,
                buff5: null
            }
        case DOLL_SET_BUFF6:
            
            return {
                ...state,
                buff6: action.payload
            }
        case DOLL_UNSET_BUFF6:
            
            return {
                ...state,
                buff6: null
            }
        case DOLL_SET_BUFF7:
            
            return {
                ...state,
                buff7: action.payload
            }
        case DOLL_UNSET_BUFF7:
            
            return {
                ...state,
                buff7: null
            }
        case DOLL_SET_BUFF8:
            
            return {
                ...state,
                buff8: action.payload
            }
        case DOLL_UNSET_BUFF8:
            
            return {
                ...state,
                buff8: null
            }
        case DOLL_SET_BUFF9:
            
            return {
                ...state,
                buff9: action.payload
            }
        case DOLL_UNSET_BUFF9:
            
            return {
                ...state,
                buff9: null
            }
        case DOLL_SET_BUFF10:
            
            return {
                ...state,
                buff10: action.payload
            }
        case DOLL_UNSET_BUFF10:
            
            return {
                ...state,
                buff10: null
            }
        case DOLL_SET_CRYSTALPD:
            
            return {
                ...state,
                crystalpd: action.payload
            }
        case DOLL_UNSET_CRYSTALPD:
            
            return {
                ...state,
                crystalpd: null
            }
        case DOLL_SET_CRYSTALMD:
            
            return {
                ...state,
                crystalmd: action.payload
            }
        case DOLL_UNSET_CRYSTALMD:
            
            return {
                ...state,
                crystalmd: null
            }
        case DOLL_SET_CRYSTALPA:
            
            return {
                ...state,
                crystalpa: action.payload
            }
        case DOLL_UNSET_CRYSTALPA:
            
            return {
                ...state,
                crystalpa: null
            }
        case DOLL_SET_CRYSTALMA:
            
            return {
                ...state,
                crystalma: action.payload
            }
        case DOLL_UNSET_CRYSTALMA:
            
            return {
                ...state,
                crystalma: null
            }
        case DOLL_SET_SLOT1:
            
            return {
                ...state,
                slot1: action.payload
            }
        case DOLL_UNSET_SLOT1:
            
            return {
                ...state,
                slot1: null
            }
        case DOLL_SET_SLOT2:
            
            return {
                ...state,
                slot2: action.payload
            }
        case DOLL_UNSET_SLOT2:
            
            return {
                ...state,
                slot2: null
            }
        case DOLL_SET_SLOT3:
            
            return {
                ...state,
                slot3: action.payload
            }
        case DOLL_UNSET_SLOT3:
            
            return {
                ...state,
                slot3: null
            }
        case DOLL_SET_SLOT4:
            
            return {
                ...state,
                slot4: action.payload
            }
        case DOLL_UNSET_SLOT4:
            
            return {
                ...state,
                slot4: null
            }
        case DOLL_SET_SLOT5:
            
            return {
                ...state,
                slot5: action.payload
            }
        case DOLL_UNSET_SLOT5:
            
            return {
                ...state,
                slot5: null
            }
        case DOLL_SET_SLOT6:
            
            return {
                ...state,
                slot6: action.payload
            }
        case DOLL_UNSET_SLOT6:
            
            return {
                ...state,
                slot6: null
            }
        case DOLL_SET_SLOT7:
            
            return {
                ...state,
                slot7: action.payload
            }
        case DOLL_UNSET_SLOT7:
            
            return {
                ...state,
                slot7: null
            }
        case DOLL_SET_SLOT8:
            
            return {
                ...state,
                slot8: action.payload
            }
        case DOLL_UNSET_SLOT8:
            
            return {
                ...state,
                slot8: null
            }
        case DOLL_SET_SLOT9:
            
            return {
                ...state,
                slot9: action.payload
            }
        case DOLL_UNSET_SLOT9:
            
            return {
                ...state,
                slot9: null
            }
        case DOLL_SET_SLOT10:
            
            return {
                ...state,
                slot10: action.payload
            }
        case DOLL_UNSET_SLOT10:
            
            return {
                ...state,
                slot10: null
            }
        case DOLL_SET_STRENGTH:
            
            return {
                ...state,
                strength: action.payload
            }
        case DOLL_SET_DEXTERITY:
            
            return {
                ...state,
                dexterity: action.payload
            }
        case DOLL_SET_ACCURACY:
            
            return {
                ...state,
                accuracy: action.payload
            }
        case DOLL_SET_ENDURANCE:
            
            return {
                ...state,
                endurance: action.payload
            }
        case DOLL_SET_EARTH:
            
            return {
                ...state,
                earth: action.payload
            }
        case DOLL_SET_AIR:
            
            return {
                ...state,
                air: action.payload
            }
        case DOLL_SET_WATER:
            
            return {
                ...state,
                water: action.payload
            }
        case DOLL_SET_FIRE:
            
            return {
                ...state,
                fire: action.payload
            }
        case DOLL_SET_STRENGTH_STATS:

            return {
                ...state,
                strengthStats: action.payload
            }
        case DOLL_SET_DEXTERITY_STATS:
            
            return {
                ...state,
                dexterityStats: action.payload
            }
        case DOLL_SET_ACCURACY_STATS:
            
            return {
                ...state,
                accuracyStats: action.payload
            }
        case DOLL_SET_ENDURANCE_STATS:
            
            return {
                ...state,
                enduranceStats: action.payload
            }
        case DOLL_SET_EARTH_STATS:
            
            return {
                ...state,
                earthStats: action.payload
            }
        case DOLL_SET_AIR_STATS:
            
            return {
                ...state,
                airStats: action.payload
            }
        case DOLL_SET_WATER_STATS:
            
            return {
                ...state,
                waterStats: action.payload
            }
        case DOLL_SET_FIRE_STATS:
            
            return {
                ...state,
                fireStats: action.payload
            }
        case DOLL_SET_HP_STATS:
            
            return {
                ...state,
                hpStats: action.payload
            }
        case DOLL_SET_PRANA_STATS:
            
            return {
                ...state,
                pranaStats: action.payload
            }
        case DOLL_SET_HP:
            
            return {
                ...state,
                hp: action.payload
            }
        case DOLL_SET_PRANA:
            
            return {
                ...state,
                prana: action.payload
            }
        case DOLL_SET_PD_STATS:
            
            return {
                ...state,
                pdStats: action.payload
            }
        case DOLL_SET_MD_STATS:
            
            return {
                ...state,
                mdStats: action.payload
            }
        case DOLL_SET_PA_STATS:
            
            return {
                ...state,
                paStats: action.payload
            }
        case DOLL_SET_MA_STATS:
            
            return {
                ...state,
                maStats: action.payload
            }
        case DOLL_SET_TITLE_STATS:
            
            return {
                ...state,
                titleStats: action.payload
            }
        case DOLL_SET_DEGREE_STATS:
            
            return {
                ...state,
                degreeStats: action.payload
            }
        case DOLL_SET_TITLE_LEVEL:
            
            return {
                ...state,
                titleLevel: action.payload
            }
        case DOLL_SET_DEGREE_LEVEL:
            
            return {
                ...state,
                degreeLevel: action.payload
            }
        case DOLL_SET_TITLE_GREATNESS:
            
            return {
                ...state,
                titleGreatness: action.payload
            }
        case DOLL_SET_DEGREE_GREATNESS:
            
            return {
                ...state,
                degreeGreatness: action.payload
            }
        case DOLL_INCREASE_STRENGTH:
            
            return {
                ...state,
                strength: ++state.strength
            }
        case DOLL_INCREASE_DEXTERITY:
            
            return {
                ...state,
                dexterity: ++state.dexterity
            }
        case DOLL_INCREASE_ACCURACY:
            
            return {
                ...state,
                accuracy: ++state.accuracy
            }
        case DOLL_INCREASE_ENDURANCE:
            
            return {
                ...state,
                endurance: ++state.endurance
            }
        case DOLL_INCREASE_EARTH:
            
            return {
                ...state,
                earth: ++state.earth
            }
        case DOLL_INCREASE_AIR:
            
            return {
                ...state,
                air: ++state.air
            }
        case DOLL_INCREASE_WATER:
            
            return {
                ...state,
                water: ++state.water
            }
        case DOLL_INCREASE_FIRE:
            
            return {
                ...state,
                fire: ++state.fire
            }
        case DOLL_DECREASE_STRENGTH:
            
            return {
                ...state,
                strength: --state.strength
            }
        case DOLL_DECREASE_DEXTERITY:
            
            return {
                ...state,
                dexterity: --state.dexterity
            }
        case DOLL_DECREASE_ACCURACY:
            
            return {
                ...state,
                accuracy: --state.accuracy
            }
        case DOLL_DECREASE_ENDURANCE:
            
            return {
                ...state,
                endurance: --state.endurance
            }
        case DOLL_DECREASE_EARTH:
            
            return {
                ...state,
                earth: --state.earth
            }
        case DOLL_DECREASE_AIR:
            
            return {
                ...state,
                air: --state.air
            }
        case DOLL_DECREASE_WATER:
            
            return {
                ...state,
                water: --state.water
            }
        case DOLL_DECREASE_FIRE:
            
            return {
                ...state,
                fire: --state.fire
            }
        case DOLL_REQUIRE_STRENGTH:
            
            return {
                ...state,
                reqStrength: action.payload
            }
        case DOLL_REQUIRE_DEXTERITY:
            
            return {
                ...state,
                reqDexterity: action.payload
            }
        case DOLL_REQUIRE_ACCURACY:
            
            return {
                ...state,
                reqAccuracy: action.payload
            }
        case DOLL_REQUIRE_ENDURANCE:
            
            return {
                ...state,
                reqEndurance: action.payload
            }
        case DOLL_REQUIRE_EARTH:
            
            return {
                ...state,
                reqEarth: action.payload
            }
        case DOLL_REQUIRE_AIR:
            
            return {
                ...state,
                reqAir: action.payload
            }
        case DOLL_REQUIRE_WATER:
            
            return {
                ...state,
                reqWater: action.payload
            }
        case DOLL_REQUIRE_FIRE:
            
            return {
                ...state,
                reqFire: action.payload
            }
        case DOLL_REQUIRE_PROFESSION:
            
            return {
                ...state,
                reqProfession: action.payload
            }
        case DOLL_REQUIRE_PROFESSION_LEVEL:
            
            return {
                ...state,
                reqProfessionLevel: action.payload
            }

        case DOLL_SET_PREFIXES:
            
            return {
                ...state,
                prefixes: action.payload
            }
        case DOLL_SET_OTHER_DOLL:
            
            return {
                ...state,
                otherDoll: action.payload
            }
        case DOLL_UNSET_OTHER_DOLL:
            
            return {
                ...state,
                otherDoll: null
            }

        case DOLL_CLEAR:
            
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

        default:
            return state
    }
}

export default dollReducer;