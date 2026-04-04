import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Doll from './Doll';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {dollDetailsInitiate, dollSetDollName, dollsInitiate, selectDoll} from '../store/doll/actions.js';
import {dollDetailsInitiate as rightDollDetailsInitiate,
    dollSetDollName as rightDollSetDollName,
    dollsInitiate as rightDollsInitiate,
    selectDoll as rightSelectDoll
} from '../store/rightDoll/actions.js';

import {
    selectDefaultDolls,
    selectDollName,
    selectDolls,
    selectLoading,
    selectOtherDolls
} from '../store/doll/selectors';
import {
    selectDollName as selectRightDollName
} from '../store/rightDoll/selectors';
import {Pagination, ThemeProvider} from "@mui/material";
import Stack from "@mui/material/Stack";
import {createTheme} from '@mui/material/styles';
import '../styles/dolls.css';
import {useLang} from "../use/lang";
import Button from "@mui/material/Button";
import DollsFilter from "./DollsFilter";

export const handleSelect = (dispatch, chosenDoll) => {
    dispatch(selectDoll(chosenDoll));
    dispatch(dollSetDollName(chosenDoll.name));
}

const Dolls = ({user, token, isUtils = false, setUtils = null, side = ''}) => {
    const dispatch = useDispatch();
    const dolls = useSelector(selectDolls);
    const otherDolls = useSelector(selectOtherDolls);
    const defaultDolls = useSelector(selectDefaultDolls);
    const loading = useSelector(selectLoading);
    const [page, setPage] = useState(1);
    const [pageOthers, setPageOthers] = useState(1);
    const [pageDefault, setPageDefault] = useState(1);
    const selectedDollName = useSelector(selectDollName);
    const selectedRightDollName = useSelector(selectRightDollName);
    const [list, setList] = useState('');
    const [selectedDolls, setSelectedDolls] = useState('');

    const {buttons, texts} = useLang();

    useEffect(() => {
        if (user && token) {
            dispatch(dollsInitiate(token));

            setList('dolls');
        } else {
            setList('default-dolls');
        }
    }, [user, token, dispatch]);

    const filteredDefaultDolls = useMemo(() => {
        if (!defaultDolls) return [];
        if (!selectedDolls) return defaultDolls;

        return defaultDolls.filter(doll =>
            doll.professionNameEng && doll.professionNameEng.toLowerCase().replaceAll(" ", "-") === selectedDolls
        );
    }, [defaultDolls, selectedDolls]);

    const countDefault = filteredDefaultDolls ? Math.ceil(filteredDefaultDolls.length / 10) : null;

    // Сбрасываем страницу пагинации при изменении фильтра
    useEffect(() => {
        setPageOthers(1);
        setPageDefault(1);
        setPage(1);
    }, [selectedDolls]);

    const filteredDolls = useMemo(() => {
        if (!dolls) return [];
        if (!selectedDolls) return dolls; // Если фильтр не выбран, возвращаем весь список

        return dolls.filter(doll =>
            doll.professionNameEng && doll.professionNameEng.toLowerCase() === selectedDolls
        );
    }, [dolls, selectedDolls]);

    const count = filteredDolls ? Math.ceil(filteredDolls.length / 10) : null;

    const filteredOtherDolls = useMemo(() => {
        if (!otherDolls) return [];
        if (!selectedDolls) return otherDolls;

        return otherDolls.filter(doll =>
            doll.professionNameEng && doll.professionNameEng.toLowerCase() === selectedDolls
        );
    }, [otherDolls, selectedDolls]);

    const countOthers = filteredOtherDolls ? Math.ceil(filteredOtherDolls.length / 10) : null;

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleChangeOthersPage = (event, value) => {
        setPageOthers(value);
    };

    const handleChangeDefaultPage = (event, value) => {
        setPageDefault(value);
    };

    const handleSelectDolls = (e) => {
        let string = '';

        if (e.target.id) {
            string = e.target.id.split('default-').join("");
        }
        if (e.target.parentNode.id) {
            string = e.target.parentNode.childNodes[0].id.split('default-').join("");
        }

        if (selectedDolls === string) {
            setSelectedDolls('')
        } else {
            setSelectedDolls(string);
        }
    }

    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgb(234, 201, 136)', secondary: 'white', contrastText: 'black'
            }
        }
    });

    const handleClick = (e) => {
        if (e.target.id === 'own-dolls') {
            setList('dolls');
        } else if (e.target.id === 'other-dolls') {
            setList('other-dolls');
        } else {
            setList('default-dolls');
        }
    }

    const unsetDefault = () => {
        setSelectedDolls('');
    }

    const handleSelectBySide = (id, side, isDefault = false) => {
        if (side === 'right') {
            dispatch(rightDollDetailsInitiate(token, id));
        } else {
            dispatch(dollDetailsInitiate(token, id));
        }
    }

    const handleSelectDefault = (id) => {
        side === 'right' ? dispatch(rightDollDetailsInitiate(token, id, true)) : dispatch(dollDetailsInitiate(token, id, 'default/'))
    }

    return (<ThemeProvider theme={theme}>
        <div className="dolls__selected-doll">
            {
                side === 'right' ? <span>{selectedRightDollName ? selectedRightDollName : texts.chooseDoll}</span>
                    : <span>{selectedDollName ? selectedDollName : texts.chooseDoll}</span>
            }
        </div>
        <div className="dolls__menu">
            {!!token && !!user &&
                <>
                    <Button className={list === 'dolls' ? "content content--selected" : "button primary content"}
                            id="own-dolls" onClick={handleClick}>
                        {buttons.yourDolls}
                    </Button>
                    <Button className={list === 'other-dolls' ? "content content--selected" : "button primary content"}
                            id="other-dolls" onClick={handleClick}>
                        {buttons.otherDolls}
                    </Button>
                </>
            }

            <Button className={list === 'default-dolls' ? "content content--selected" : "button primary content"}
                    id="default-dolls" onClick={handleClick}>
                {buttons.defaultDolls}
            </Button>
        </div>
        <div className="dolls__list">
            {!loading ? (<>
                    {!!token && !!user && list === 'dolls' && <>
                        <div className="dolls__default-dolls">
                            <DollsFilter click={handleSelectDolls} selected={selectedDolls} unset={unsetDefault}/>

                            {filteredDolls?.length > 0 ? (<div className="dolls__dolls-container">
                                {filteredDolls.map((doll, index) => {
                                    let counter = count < page ? count : page;

                                    if (Math.ceil((index + 1) / 10) === counter) {
                                        let delayIndex = (index + 1) - (counter * 10) + 10;

                                        return <Doll key={doll.id} doll={doll} index={index} token={token}
                                                     list={list} delayIndex={delayIndex}
                                                     onSelect={() => handleSelectBySide(doll.id, side)}
                                                     isUtils={isUtils} setUtils={setUtils} side={side}/>
                                    }

                                    return true;
                                })}</div>) : (<div className="dolls--no-list">
                                <div className="dolls--no-list__text">{texts.noDollsYet}</div>
                                <div className="dolls--no-list__text">{texts.firstTime}</div>
                            </div>)}
                        </div>
                        {filteredDolls?.length > 10 && (
                            <div className="table__footer">
                                <div className="pagination">
                                    <Stack spacing={2}>
                                        <Pagination count={count} page={page}
                                                    size="small" onChange={handleChangePage}/>
                                    </Stack>
                                </div>
                            </div>)}</>}
                    {!!token && !!user && list === 'other-dolls' && <>
                        <div className="dolls__default-dolls">
                            <DollsFilter click={handleSelectDolls} selected={selectedDolls} unset={unsetDefault}/>

                            {filteredOtherDolls?.length > 0 ? (
                                <div className="dolls__dolls-container">
                                    {filteredOtherDolls.map((doll, index) => {
                                        const startIndex = (pageOthers - 1) * 10;
                                        const endIndex = startIndex + 10;

                                        if (index >= startIndex && index < endIndex) {
                                            let delayIndex = (index % 10) + 1;

                                            return (
                                                <Doll key={doll.id}
                                                      doll={doll}
                                                      index={index}
                                                      delayIndex={delayIndex}
                                                      token={token}
                                                      list={list}
                                                      onSelect={side === 'right' ? () =>  dispatch(rightDollDetailsInitiate(token, doll.id)) : () => dispatch(dollDetailsInitiate(token, doll.id))}
                                                      isUtils={isUtils}
                                                      setUtils={setUtils}
                                                      side={side}
                                                />
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            ) : (
                                <div className="dolls--no-list">
                                    <div className="dolls--no-list__text">{texts.noDollsYet}</div>
                                    <div className="dolls--no-list__text">{texts.firstTime}</div>
                                </div>
                            )}
                        </div>
                        {filteredOtherDolls?.length > 10 && (
                            <div className="table__footer">
                                <div className="pagination">
                                    <Stack spacing={2}>
                                        <Pagination count={countOthers}
                                                    page={pageOthers}
                                                    size="small" onChange={handleChangeOthersPage}/>
                                    </Stack>
                                </div>
                            </div>
                        )}
                    </>}
                    {list === 'default-dolls' && <>
                        <div className="dolls__default-dolls">
                            <DollsFilter click={handleSelectDolls} selected={selectedDolls} unset={unsetDefault}/>

                            {
                                filteredDefaultDolls && filteredDefaultDolls.length > 0 ? (
                                    <div className="dolls__dolls-container">
                                        {filteredDefaultDolls?.map((doll, index) => {
                                            const startIndex = (pageDefault - 1) * 10;
                                            const endIndex = startIndex + 10;

                                            if (index >= startIndex && index < endIndex) {
                                                let delayIndex = (index % 10) + 1; // Задержка для элементов на текущей странице

                                                return (
                                                    <Doll key={doll.id}
                                                          doll={doll}
                                                          index={index}
                                                          delayIndex={delayIndex}
                                                          token={token}
                                                          list={list}
                                                          onSelect={handleSelectDefault}
                                                          isDefault={true}
                                                          isUtils={isUtils}
                                                          setUtils={setUtils}
                                                          side={side}
                                                    />
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>) : (<div className="dolls--no-list">
                                    Кукол пока нет
                                </div>)
                            }
                        </div>

                        {filteredDefaultDolls?.length > 10 && (
                            <div className="table__footer">
                                <div className="pagination">
                                    <Stack spacing={2}>
                                        <Pagination count={countDefault}
                                                    page={pageDefault}
                                                    size="small" onChange={handleChangeDefaultPage}/>
                                    </Stack>
                                </div>
                            </div>)}
                    </>}
                    {list === 'default-dolls' && <>

                    </>}
                </>
            ) : (<Box className="loader">
                <CircularProgress/>
            </Box>)}
        </div>
    </ThemeProvider>)
        ;
};

export default Dolls;