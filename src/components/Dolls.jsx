import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Doll from './Doll';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {
    dollsInitiate,
    setAccuracy,
    setAir,
    setAmulet,
    setBelt,
    setBoots,
    setBracelet1,
    setBracelet2,
    setBuff1,
    setBuff10,
    setBuff2,
    setBuff3,
    setBuff4,
    setBuff5,
    setBuff6,
    setBuff7,
    setBuff8,
    setBuff9, setCrystalMA, setCrystalMD, setCrystalPA,
    setCrystalPD,
    setDegreeGreatness,
    setDegreeLevel,
    setDexterity,
    setEarth,
    setEndurance,
    setFire,
    setGloves,
    setHelmet,
    setJacket,
    setPants,
    setProfession,
    setRing1,
    setRing2,
    setRing3,
    setRing4,
    setShield, setSlot1, setSlot2, setSlot3, setSlot4, setSlot5, setSlot6, setSlot7, setSlot8,
    setStrength,
    setTitleGreatness,
    setTitleLevel,
    setWater,
    setWeapon
} from '../store/doll/actions.js';
import {selectToken} from '../store/user/selectors';
import {selectLoading} from '../store/doll/selectors';
import {selectTexts} from "../store/lang/selectors";
import {Pagination, ThemeProvider} from "@mui/material";
import Stack from "@mui/material/Stack";
import { createTheme } from '@mui/material/styles';
import '../styles/Dolls.css';

export const handleSelect = (dispatch, chosenDoll) => {
    const setSlot = (item, string) => {
        if (item) {
            item.slot = string;
            return item;
        } else {
            return null;
        }
    }

    dispatch(setStrength(chosenDoll.strength));
    dispatch(setDexterity(chosenDoll.dexterity));
    dispatch(setAccuracy(chosenDoll.accuracy));
    dispatch(setEndurance(chosenDoll.endurance));
    dispatch(setEarth(chosenDoll.earth));
    dispatch(setAir(chosenDoll.air));
    dispatch(setWater(chosenDoll.water));
    dispatch(setFire(chosenDoll.fire));
    dispatch(setTitleLevel(chosenDoll.titleLevel));
    dispatch(setDegreeLevel(chosenDoll.degreeLevel));
    dispatch(setTitleGreatness(String(chosenDoll.titleGreatness)));
    dispatch(setDegreeGreatness(String(chosenDoll.degreeGreatness)));

    if (chosenDoll.helmet) {
        chosenDoll.helmet.prefix = chosenDoll.helmetPrefix;
    }
    dispatch(setHelmet(setSlot(chosenDoll.helmet, 'Helmet')));
    if (chosenDoll.amulet) {
        chosenDoll.amulet.prefix = chosenDoll.amuletPrefix;
    }
    dispatch(setAmulet(setSlot(chosenDoll.amulet, 'Amulet')));
    if (chosenDoll.gloves) {
        chosenDoll.gloves.prefix = chosenDoll.glovesPrefix;
    }
    dispatch(setGloves(setSlot(chosenDoll.gloves, 'Gloves')));
    if (chosenDoll.chest) {
        chosenDoll.chest.prefix = chosenDoll.chestPrefix;
    }
    dispatch(setJacket(setSlot(chosenDoll.chest, 'Jacket')));
    if (chosenDoll.shield) {
        chosenDoll.shield.prefix = chosenDoll.shieldPrefix;
    }
    dispatch(setShield(setSlot(chosenDoll.shield, 'Shield')));
    if (chosenDoll.bracer1) {
        chosenDoll.bracer1.prefix = chosenDoll.bracer1Prefix;
    }
    dispatch(setBracelet1(setSlot(chosenDoll.bracer1, 'Bracelet1')));
    if (chosenDoll.bracer2) {
        chosenDoll.bracer2.prefix = chosenDoll.bracer2Prefix;
    }
    dispatch(setBracelet2(setSlot(chosenDoll.bracer2, 'Bracelet2')));
    if (chosenDoll.belt) {
        chosenDoll.belt.prefix = chosenDoll.beltPrefix;
    }
    dispatch(setBelt(setSlot(chosenDoll.belt, 'Belt')));
    if (chosenDoll.ring1) {
        chosenDoll.ring1.prefix = chosenDoll.ring1Prefix;
    }
    dispatch(setRing1(setSlot(chosenDoll.ring1, 'Ring1')));
    if (chosenDoll.ring2) {
        chosenDoll.ring2.prefix = chosenDoll.ring2Prefix;
    }
    dispatch(setRing2(setSlot(chosenDoll.ring2, 'Ring2')));
    if (chosenDoll.ring3) {
        chosenDoll.ring3.prefix = chosenDoll.ring3Prefix;
    }
    dispatch(setRing3(setSlot(chosenDoll.ring3, 'Ring3')));
    if (chosenDoll.ring4) {
        chosenDoll.ring4.prefix = chosenDoll.ring4Prefix;
    }
    dispatch(setRing4(setSlot(chosenDoll.ring4, 'Ring4')));
    if (chosenDoll.pants) {
        chosenDoll.pants.prefix = chosenDoll.pantsPrefix;
    }
    dispatch(setPants(setSlot(chosenDoll.pants, 'Pants')));
    if (chosenDoll.boots) {
        chosenDoll.boots.prefix = chosenDoll.bootsPrefix;
    }
    dispatch(setBoots(setSlot(chosenDoll.boots, 'Boots')));
    if (chosenDoll.weapon) {
        chosenDoll.weapon.prefix = chosenDoll.weaponPrefix;
    }
    dispatch(setWeapon(setSlot(chosenDoll.weapon, 'Weapon')));
    dispatch(setProfession(setSlot(chosenDoll.professionItem, 'Guild')));
    dispatch(setBuff1(setSlot(chosenDoll.buff1, 'Buff1')));
    dispatch(setBuff2(setSlot(chosenDoll.buff2, 'Buff2')));
    dispatch(setBuff3(setSlot(chosenDoll.buff3, 'Buff3')));
    dispatch(setBuff4(setSlot(chosenDoll.buff4, 'Buff4')));
    dispatch(setBuff5(setSlot(chosenDoll.buff5, 'Buff5')));
    dispatch(setBuff6(setSlot(chosenDoll.buff6, 'Buff6')));
    dispatch(setBuff7(setSlot(chosenDoll.buff7, 'Buff7')));
    dispatch(setBuff8(setSlot(chosenDoll.buff8, 'Buff8')));
    dispatch(setBuff9(setSlot(chosenDoll.buff9, 'Buff9')));
    dispatch(setBuff10(setSlot(chosenDoll.buff10, 'Buff10')));
    dispatch(setCrystalPD(setSlot(chosenDoll.crystalPd, 'CrystalPD')));
    dispatch(setCrystalMD(setSlot(chosenDoll.crystalMd, 'CrystalMD')));
    dispatch(setCrystalPA(setSlot(chosenDoll.crystalPa, 'CrystalPA')));
    dispatch(setCrystalMA(setSlot(chosenDoll.crystalMa, 'CrystalMA')));
    if (chosenDoll.additional_slot1) {
        chosenDoll.additional_slot1.prefix = chosenDoll.additional_slot1Prefix;
    }
    dispatch(setSlot1(setSlot(chosenDoll.additional_slot1, 'Slot1')));

    if (chosenDoll.additional_slot2) {
        chosenDoll.additional_slot2.prefix = chosenDoll.additional_slot2Prefix;
    }
    dispatch(setSlot2(setSlot(chosenDoll.additional_slot2, 'Slot2')));

    if (chosenDoll.additional_slot3) {
        chosenDoll.additional_slot3.prefix = chosenDoll.additional_slot3Prefix;
    }
    dispatch(setSlot3(setSlot(chosenDoll.additional_slot3, 'Slot3')));

    if (chosenDoll.additional_slot4) {
        chosenDoll.additional_slot4.prefix = chosenDoll.additional_slot4Prefix;
    }
    dispatch(setSlot4(setSlot(chosenDoll.additional_slot4, 'Slot4')));

    if (chosenDoll.additional_slot5) {
        chosenDoll.additional_slot5.prefix = chosenDoll.additional_slot5Prefix;
    }
    dispatch(setSlot5(setSlot(chosenDoll.additional_slot5, 'Slot5')));

    if (chosenDoll.additional_slot6) {
        chosenDoll.additional_slot6.prefix = chosenDoll.additional_slot6Prefix;
    }
    dispatch(setSlot6(setSlot(chosenDoll.additional_slot6, 'Slot6')));

    if (chosenDoll.additional_slot7) {
        chosenDoll.additional_slot7.prefix = chosenDoll.additional_slot7Prefix;
    }
    dispatch(setSlot7(setSlot(chosenDoll.additional_slot7, 'Slot7')));

    if (chosenDoll.additional_slot8) {
        chosenDoll.additional_slot8.prefix = chosenDoll.additional_slot8Prefix;
    }
    dispatch(setSlot8(setSlot(chosenDoll.additional_slot8, 'Slot8')));
}

const Dolls = ({user, dolls, list}) => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const loading = useSelector(selectLoading);
    const texts = useSelector(selectTexts);
    const [page, setPage] = useState(1);
    let count = dolls ? Math.ceil(dolls.length / 7) : null;

    useEffect(() => {
        if (user && token) {
            dispatch(dollsInitiate(token));
        }
    }, [user, token, dispatch]);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgb(234, 201, 136)',
                secondary: 'white',
                contrastText: 'black'
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 740}}>
                {!loading ? (
                    <div>
                        {dolls?.length > 0 ? (
                                dolls.map((doll, index) => {
                                    let counter = count < page ? count : page;

                                    if (Math.ceil((index + 1) / 7) === counter) {
                                        return <Doll key={doll.id} doll={doll} index={index} token={token} list={list}/>
                                    }
                                    return true;
                                }))
                            : (<div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                                <div style={{textAlign: 'center', color: 'white'}}>{texts.noDollsYet}</div>
                                <div style={{textAlign: 'center', color: 'white'}}>{texts.firstTime}</div>
                            </div>)}
                    </div>
                ) : (
                    <Box sx={{display: 'flex', justifyContent: 'space-around', p: 3}}>
                        <CircularProgress sx={{selfAlign: 'center'}}/>
                    </Box>
                )
                }
                {
                    dolls?.length > 7 && (
                        <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: 10}}>
                            <Stack spacing={2}>
                                <Pagination sx={{color: 'primary'}} color="primary" count={count} page={page} size="small" onChange={handleChangePage}/>
                            </Stack>
                        </div>
                    )
                }
            </div>
        </ThemeProvider>
    );
};

export default Dolls;