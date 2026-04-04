import React, {useEffect} from 'react';
import Item from './Item';
import Button from '@mui/material/Button';
import '../styles/Items.css';
import {selectPrefix} from '../store/items/selectors';
import {setPrefix, unsetPrefix} from '../store/items/actions';
import {useDispatch, useSelector} from 'react-redux';
import {selectLang} from "../store/lang/selectors";
import {useLang} from "../use/lang";
import {toRoman} from "../utils/romanNumerals";
import useHorizontalScrollShadows from "../use/horizontalScrollShadows";
import ItemRight from "./ItemRight";

function HandleOthers({viewItems, eng, isRight}) {
    const {gridRef, showLeftShadow, showRightShadow, hasHorizontalScroll} = useHorizontalScrollShadows();

    const othersNames = Array.from(new Set(eng ? viewItems.map(item => item.typeNameEng) : viewItems.map(item => item.typeNameRu)));

    othersNames.sort();

    return (<div className="items__container">
        <div className="items__aside">
            {othersNames.map(othersName => {
                return (<div key={othersName} className="numbers numbers-other">
                    {othersName}
                </div>);
            })}
        </div>

        <div className="scroll-left-shadow scrollable">
            <div className='visible'></div>
        </div>

        <div className="items__items-grid"
        >
            <div className="items__scrollable-content" ref={gridRef}>
                {othersNames.map(othersName => {
                    const currentTypeItems = viewItems.filter(item => (eng ? item.typeNameEng === othersName : item.typeNameRu === othersName));

                    return (<div key={othersName}
                                 className="items-row-group"
                    >
                        {currentTypeItems.map((item, index) => (<div
                            className="items-item-slot contains-item"
                            key={item.id}
                            style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`,
                            }}
                        >
                            {!isRight ? <Item item={item} index={index}/> : <ItemRight item={item} index={index}/>}

                        </div>))}
                    </div>);
                })}
            </div>
        </div>

        <div className="scroll-right-shadow scrollable">
            <div className='visible'></div>
        </div>
    </div>);
}

function HandleCrystals({viewItems, isRight}) {
    const {gridRef, showLeftShadow, showRightShadow, hasHorizontalScroll} = useHorizontalScrollShadows();

    const numericCastleLevels = ['15', '30', '45', '60', '75', '90'];
    const finalRowLabels = [...numericCastleLevels, 'SpacerRow', 'Old'];

    const sortedCrystals = [...viewItems].sort((a, b) => {
        const levelA = a.level === null || a.level === undefined ? Infinity : a.level;
        const levelB = b.level === null || b.level === undefined ? Infinity : b.level;

        if (levelA !== levelB) {
            return levelA - levelB;
        }

        return a.id - b.id;
    });

    const itemsGroupedByRowLabel = {};
    let currentItemIndex = 0;

    numericCastleLevels.forEach(label => {
        const itemsForThisRow = sortedCrystals.slice(currentItemIndex, currentItemIndex + 4);
        itemsGroupedByRowLabel[label] = itemsForThisRow;
        currentItemIndex += 4;
    });

    itemsGroupedByRowLabel['Old'] = sortedCrystals.slice(currentItemIndex);

    itemsGroupedByRowLabel['SpacerRow'] = Array(4).fill(null);


    return (<div className="items__container">
        <div className="items__aside">
            {finalRowLabels.map(label => (<div key={`crystal-aside-${label}`} className="numbers numbers-35">
                {label === 'SpacerRow' ? '' : label}
            </div>))}
        </div>

        <div className="scroll-left-shadow scrollable">
            <div className='visible'></div>
        </div>

        <div className="items__items-grid row"
        >
            <div className="items__scrollable-content items__scrollable-content--row" ref={gridRef}>
                {[0, 1, 2, 3].map(slotIndex => (<div key={`crystal-slot-column-${slotIndex}`}

                >
                    {finalRowLabels.map(rowLabel => {
                        const itemsInCurrentRow = itemsGroupedByRowLabel[rowLabel] || [];
                        const itemToRender = itemsInCurrentRow[slotIndex];

                        const isSpacerSlot = rowLabel === 'SpacerRow';
                        const isEmptySlotInOldRow = rowLabel === 'Old' && !itemToRender;

                        return itemToRender ? (<div
                            key={itemToRender.id}
                            className="items-item-slot contains-item"
                            style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`, // Здесь нет специальных марджинов, т.к. SpacerRow обеспечивает визуальный отступ
                            }}
                        >
                            {!isRight ? <Item opacity={1} item={itemToRender} index={slotIndex}/> :
                                <ItemRight opacity={1} item={itemToRender} index={slotIndex}/>}
                        </div>) : (<div
                            key={`Crystal-none-${rowLabel}-${slotIndex}`}
                            className="items-item-slot"
                            style={{
                                opacity: (isSpacerSlot || isEmptySlotInOldRow) ? 0 : 0, minHeight: 34, minWidth: 34
                            }}
                        />);
                    })}
                </div>))}
            </div>
        </div>

        <div className="scroll-right-shadow scrollable">
            <div className='visible'></div>
        </div>
    </div>);
}

function HandlePowder({viewItems, isRight}) {
    const {gridRef, showLeftShadow, showRightShadow, hasHorizontalScroll} = useHorizontalScrollShadows();

    const powderNames = Array.from(new Set(viewItems.map(item => item.nameEng)));

    const maxPowderLevel = viewItems.length > 0 ? Math.max(...viewItems.map(item => item.level)) : 0;
    const actualMaxPowderLevel = Math.min(maxPowderLevel, 15);
    const levelsToDisplay = Array.from({length: actualMaxPowderLevel}, (_, i) => i + 1);

    return (<div className="items__container">
        <div className="items__aside">
            {levelsToDisplay.map(level => (<div key={`powder-level-${level}`} className="numbers numbers-35">
                {toRoman(level)}
            </div>))}
        </div>

        <div className="scroll-left-shadow scrollable">
            <div className='visible'></div>
        </div>

        <div className="items__items-grid row">
            <div className="items__scrollable-content items__scrollable-content--row" ref={gridRef}>
                {powderNames.map(powderName => {
                    const thisItems = viewItems.filter(item => powderName === item.nameEng);
                    const filledItems = [];

                    for (let i = 1; i <= 15; i++) {
                        const itemAtLevel = thisItems.find(item => item.level === i);
                        if (itemAtLevel) {
                            filledItems.push(itemAtLevel);
                        } else {
                            filledItems.push({level: i, _empty: true});
                        }
                    }

                    filledItems.sort((a, b) => a.level - b.level);

                    return (<div key={powderName} style={{
                        display: 'flex', flexDirection: 'column', flexWrap: 'wrap'
                    }}>
                        {filledItems.map((item, index) => (item._empty ? (<div
                            key={`Powder-none-${powderName}-${item.level}`}
                            style={{
                                opacity: 0,
                                maxHeight: '35px',
                                maxWidth: '35px',
                                minHeight: '35px',
                                minWidth: '35px',
                                boxSizing: 'border-box',
                                border: '1px solid black',
                                borderRadius: '2px',
                                margin: '0 1px 1px 0'
                            }}
                        />) : (<div className="items-item-slot contains-item" key={item.id} style={{
                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                        }}>
                            {!isRight ? <Item opacity={1} item={item} index={index}/> :
                                <ItemRight opacity={1} item={item} index={index}/>}
                        </div>)))}
                    </div>);
                })}
            </div>
        </div>

        <div className="scroll-right-shadow scrollable">
            <div className='visible'></div>
        </div>
    </div>);
}

function HandleMantras({viewItems, isRight}) {
    const {gridRef, showLeftShadow, showRightShadow, hasHorizontalScroll} = useHorizontalScrollShadows();

    let allMantraNames = [];
    const firstItemType = viewItems[0]?.getType; // Используем firstItemType для определения набора мантр

    if (firstItemType === 'mantra-radiant') {
        allMantraNames = ['Djatra', 'Dhana', 'Shaprah', 'Jadumba', 'Badra', 'Pranah', 'Idhara', 'Farnah', 'Jola', 'Jolja', 'Dsharan', 'dhana', 'parla', 'ilan', 'rashna', 'Dalmahash', 'Fadahal', 'Faradja', 'Tarte'];
    } else if (firstItemType === 'mantra-dire') {
        allMantraNames = ['Ezhankah', 'Arnala', 'Trasha', 'opakha', 'razhhak', 'Dahadja', 'Tazhhaphar', 'Orapah', 'Yokatha', 'rashna', 'ilan', 'parla', 'dhana'];
    } else {
        const uniqueFirstWords = new Set();
        viewItems.forEach(item => {
            const firstWord = item.nameEng.split(" ")[0];
            uniqueFirstWords.add(firstWord);
        });
        allMantraNames = Array.from(uniqueFirstWords);
    }

    const groupedItemsByLevel = viewItems.reduce((acc, item) => {
        const level = item.level;
        if (!acc[level]) {
            acc[level] = [];
        }
        acc[level].push(item);
        return acc;
    }, {});

    const maxMantraLevel = viewItems.length > 0 ? Math.max(...viewItems.map(item => item.level)) : 0;
    const actualMaxMantraLevel = Math.min(maxMantraLevel, 12);
    const levelsToDisplay = Array.from({length: actualMaxMantraLevel}, (_, i) => i + 1);

    const orderedLevels = Array.from({length: actualMaxMantraLevel}, (_, i) => i + 1);

    return (<div className="items__container">
        <div className="items__aside">
            {levelsToDisplay.map(level => (<div key={`mantra-level-${level}`} className="numbers numbers-35">
                {toRoman(level)}
            </div>))}
        </div>

        <div className="scroll-left-shadow scrollable">
            <div className='visible'></div>
        </div>

        <div className="items__items-grid"
        >
            <div className="items__scrollable-content" ref={gridRef}>
                {orderedLevels.map(level => (// Каждый из этих div'ов - это горизонтальный ряд для определенного уровня
                    <div key={`level-group-${level}`} className="items-row-group">
                        {allMantraNames.map((mantraName, index) => { // Проходим по всем типам мантр, чтобы создать слоты в этом ряду
                            const itemAtCurrentLevelAndMantra = (groupedItemsByLevel[level] || []).find(item => {
                                // Логика поиска мантры по имени (аналогично предыдущей версии)
                                if (item.nameEng.includes(mantraName)) return true;

                                if (item.getType === 'mantra-radiant') {
                                    if (mantraName === 'Pranah' && (item.nameEng.includes('Saptak') || item.nameEng.includes('prata'))) return true;
                                    if (mantraName === 'Badra' && item.nameEng.includes('Jadar')) return true;
                                    if (mantraName === 'Idhara' && item.nameEng.includes('mayha')) return true;
                                    if (mantraName === 'Dalmahash' && item.nameEng.includes('raspana')) return true;
                                }
                                return false;
                            });

                            return itemAtCurrentLevelAndMantra ? (
                                <div className="items-item-slot contains-item" style={{
                                    borderRadius: '2px', margin: '1px 0 0 0', // Отступы для слота
                                    background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                }} key={itemAtCurrentLevelAndMantra.id}>
                                    {!isRight ? <Item opacity={1} item={itemAtCurrentLevelAndMantra} index={index}/> :
                                        <ItemRight opacity={1} item={itemAtCurrentLevelAndMantra} index={index}/>}
                                </div>) : (<div
                                key={`Mantra-none-${mantraName}-${level}`}
                                style={{
                                    opacity: 0, // Невидимый, но занимает место
                                    maxHeight: 34,
                                    maxWidth: 34,
                                    minHeight: 34,
                                    minWidth: 34,
                                    borderRadius: '2px',
                                    margin: '1px 1px 0 0' // Отступы для пустого слота
                                }}
                                className="items-item-slot" // Добавляем класс для единообразного размера
                            />);
                        })}
                    </div>))}
            </div>
        </div>

        <div className="scroll-right-shadow scrollable">
            <div className='visible'></div>
        </div>
    </div>);
}

function HandleProfession({viewItems, isRight}) {
    const {gridRef, showLeftShadow, showRightShadow, hasHorizontalScroll} = useHorizontalScrollShadows();

    let maxProfessionLevelFound = 0;
    viewItems.forEach(item => {
        let currentItemLevel = 0;
        // Приоритет: item.professionLvl
        if (item.professionLvl !== undefined && item.professionLvl !== null) {
            currentItemLevel = item.professionLvl;
        }
        // Если это Ability, используем item.level
        else if (item.typeNameEng === 'Ability' && item.level !== undefined && item.level !== null) {
            currentItemLevel = item.level;
        }
        // Для остальных profession-related items, используем item.reqProfessionLvl
        else if (item.reqProfessionLvl !== undefined && item.reqProfessionLvl !== null) {
            currentItemLevel = item.reqProfessionLvl;
        }

        if (currentItemLevel > maxProfessionLevelFound) {
            maxProfessionLevelFound = currentItemLevel;
        }
    });

    const finalMaxProfessionLevel = Math.max(1, maxProfessionLevelFound);
    const levelsToDisplay = Array.from({length: finalMaxProfessionLevel}, (_, i) => i + 1);

    const guilds = viewItems.filter(item => item.typeNameEng === 'Guild');
    const abilities = viewItems.filter(item => item.typeNameEng === 'Ability');
    const otherItems = viewItems.filter(item => item.typeNameEng !== 'Ability' && item.typeNameEng !== 'Guild');

    const abilityNames = Array.from(new Set(abilities.map(ability => ability.nameEng)));
    const otherNames = Array.from(new Set(otherItems.map(item => item.typeNameEng)));

    return (<div className="items__container">
        <div className="items__aside">
            {levelsToDisplay.map(level => (<div key={`profession-level-${level}`} className="numbers numbers-35">
                {toRoman(level)}
            </div>))}
        </div>

        <div className="scroll-left-shadow scrollable">
            <div className='visible'></div>
        </div>

        <div className="items__items-grid"
        >
            <div className="items__scrollable-content items__scrollable-content--row" ref={gridRef}>
                <div style={{display: 'flex', flexDirection: 'row', marginRight: 14, flexShrink: 0}}>
                    <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
                        {guilds.map((guild, index) => (
                            <div className="items-item-slot contains-item" key={guild.id} style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                            }}>
                                {!isRight ? <Item item={guild} index={index}/> :
                                    <ItemRight item={guild} index={index}/>}

                            </div>))}
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'row', marginRight: 14, flexShrink: 0}}>
                    {abilityNames.map(abilityName => (<div key={abilityName} style={{ // Ключ по abilityName, т.к. он уникален для колонки
                        display: 'flex', flexDirection: 'column', flexWrap: 'wrap', marginRight: 1 // Небольшой отступ между колонками способностей
                    }}>
                        {abilities.filter(ability => ability.nameEng === abilityName).map((ability, index) => (
                            <div className="items-item-slot contains-item" key={ability.id} style={{
                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                            }}>
                                {!isRight ? <Item item={ability} index={index}/> :
                                    <ItemRight item={ability} index={index}/>}
                            </div>))}
                    </div>))}
                </div>

                <div style={{display: 'flex', flexDirection: 'row', flexShrink: 0}}>
                    {otherNames.map(otherName => {
                        const isSpecificType = ['Cuirass/Robe', 'Helmet', 'Belt', 'Shield', 'Mantra', 'Ring'].includes(otherName) || (otherName === 'Weapon' && (otherItems.some(item => item.typeNameEng === otherName && item.reqProfessionNameEng === 'Armorer') || otherItems.some(item => item.typeNameEng === otherName && item.reqProfessionNameEng === 'Necromancer')));

                        const currentOtherItems = otherItems.filter(item => item.typeNameEng === otherName);

                        if (isSpecificType) {
                            const filledItems = [];

                            for (let i = 1; i <= finalMaxProfessionLevel; i++) {
                                const itemAtLevel = currentOtherItems.find(item => item.reqProfessionLvl === i);
                                if (itemAtLevel) {
                                    let shouldAddItem = true;

                                    if (shouldAddItem) {
                                        filledItems.push(itemAtLevel);
                                    } else {
                                        filledItems.push({reqProfessionLvl: i, _empty: true, _hidden: true});
                                    }
                                } else {
                                    filledItems.push({reqProfessionLvl: i, _empty: true});
                                }
                            }

                            filledItems.sort((a, b) => a.reqProfessionLvl - b.reqProfessionLvl);

                            return (<div key={otherName} style={{
                                display: 'flex', flexDirection: 'column', flexWrap: 'wrap', marginRight: 1
                            }}>
                                {filledItems.map((item, index) => (item._empty ? (<div
                                    style={{
                                        opacity: item._hidden ? 0 : 0
                                    }}
                                    className="items-item-slot"
                                    key={`Profession-none-${otherName}-${item.reqProfessionLvl}`}
                                />) : (<div className="items-item-slot contains-item" key={'Profession' + item.id}
                                            style={{
                                                background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                            }}>
                                    {!isRight ? <Item opacity={1} item={item} index={index}/> :
                                        <ItemRight opacity={1} item={item} index={index}/>}
                                </div>)))}
                            </div>);
                        } else {
                            const words = Array.from(new Set(currentOtherItems.map(item => {
                                const name = item.nameEng.split(' ');
                                return name[name.length - 1];
                            })));

                            return (<div style={{display: 'flex', flexDirection: 'row', marginRight: 1}}
                                         key={otherName}>
                                {words.map(word => {
                                    const thisThisItems = currentOtherItems.filter(item => item.nameEng.includes(word));

                                    const filledItems = [];
                                    for (let i = 1; i <= finalMaxProfessionLevel; i++) { // Итерируем до finalMaxProfessionLevel
                                        const itemAtLevel = thisThisItems.find(item => item.reqProfessionLvl === i);
                                        if (itemAtLevel) {
                                            filledItems.push(itemAtLevel);
                                        } else {
                                            filledItems.push({reqProfessionLvl: i, _empty: true});
                                        }
                                    }

                                    filledItems.sort((a, b) => a.reqProfessionLvl - b.reqProfessionLvl);

                                    return (<div key={word + otherName} style={{
                                        display: 'flex', flexDirection: 'column', flexWrap: 'wrap', marginRight: 1 // Отступ между подколонками
                                    }}>
                                        {filledItems.map((thisItem, index) => (thisItem._empty ? (<div
                                            key={`profession-${otherName}-${word}-${thisItem.reqProfessionLvl}`}
                                            style={{
                                                opacity: 0
                                            }}
                                            className="items-item-slot"
                                        />) : (<div className="items-item-slot contains-item" key={thisItem.id}
                                                    style={{
                                                        background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                                    }}>
                                            {!isRight ? <Item opacity={1} item={thisItem} index={index}/> :
                                                <ItemRight opacity={1} item={thisItem} index={index}/>}
                                        </div>)))}
                                    </div>);
                                })}
                            </div>);
                        }
                    })}
                </div>
            </div>
        </div>

        <div className="scroll-right-shadow scrollable">
            <div className='visible'></div>
        </div>
    </div>);
}

function HandleRegular({viewItems, prefix, isRight}) {
    const {gridRef, hasVerticalScroll} = useHorizontalScrollShadows();

    const groupedItems = viewItems.reduce((acc, item) => {
        const level = item.level;
        if (!acc[level]) {
            acc[level] = [];
        }
        acc[level].push(item);
        return acc;
    }, {});

    const orderedLevels = Object.keys(groupedItems).sort((a, b) => parseInt(a) - parseInt(b));

    const maxLevel = viewItems.length > 0 ? Math.max(...viewItems.map(item => item.level)) : 0;
    const actualMaxLevel = Math.min(maxLevel, 15);
    const levelsToDisplay = Array.from({length: actualMaxLevel}, (_, i) => i + 1);
    const isRing = viewItems[0]?.typeNameEng === 'Ring';

    return (<>
        {hasVerticalScroll && <div className="items__container-shadow"></div>}
        <div className="items__container">
            <div className="items__aside">
                {levelsToDisplay.map(level => (<div key={`level-${level}`} className="numbers numbers-35">
                    {toRoman(level)}
                </div>))}
            </div>

            <div className="scroll-left-shadow scrollable">
                <div className='visible'></div>
            </div>

            <div className="items__items-grid" ref={gridRef}>
                <div className="items__scrollable-content">
                    {orderedLevels.map(level => (<div key={`level-group-${level}`}
                                                      className="items-row-group"> {/* Горизонтальный контейнер для группы */}
                        {groupedItems[level].map((item, index) => {
                            item.prefix = prefix ? prefix : null;

                            return <div key={item.id} className="items-item-slot contains-item"
                                        style={{
                                            // Удаляем динамический marginRight отсюда
                                            background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat`
                                        }}>
                                {!isRight ? <Item item={item} prefix={prefix} isRing={isRing} index={index}/> :
                                    <ItemRight item={item} prefix={prefix} isRing={isRing} index={index}/>}
                            </div>
                        })}
                    </div>))}
                </div>
            </div>

            <div className="scroll-right-shadow scrollable">
                <div className='visible'></div>
            </div>
        </div>
        {hasVerticalScroll && <div className="items__container-shadow"></div>}
    </>)
}

function HandleCastle({viewItems, eng, isRight}) {
    const uniqueCastles = [...new Map(viewItems.map(item => [item.castleNameEng, {
        castleNameRu: item.castleNameRu,
        castleNameEng: item.castleNameEng,
        castleLvl: item.castleLvl
    }])).values()];

    // 2. Сортируем замки по уровню
    uniqueCastles.sort((a, b) => a.castleLvl - b.castleLvl);

    const othersNames = eng ? ['Katana/Robe', 'Armor', 'Jewelry'] : ['Катана/Роба', 'Броня', 'Бижутерия'];

    // Разделяем предметы на три группы
    const weaponAndRobeItems = viewItems
        .filter(item => item.typeNameEng === 'Weapon' || (item.typeNameEng === 'Cuirass/Robe' && item.prefix?.nameRu === 'правления'))
        .sort((a, b) => {
            if (a.typeNameEng === 'Weapon' && b.typeNameEng !== 'Weapon') return -1;
            if (a.typeNameEng !== 'Weapon' && b.typeNameEng === 'Weapon') return 1;
            return 0;
        });

    const jewelryItems = viewItems.filter(item => item.typeNameEng === 'Ring' || item.typeNameEng === 'Amulet' || item.typeNameEng === 'Bracelet');

    // Определяем порядок для предметов брони
    const armorOrder = ['Helmet', 'Shield', 'Gloves', 'Belt', 'Pants', 'Boots'];

    // Фильтруем и сортируем предметы брони
    const sortedArmorItems = viewItems
        .filter(item =>
            !['Weapon', 'Ring', 'Amulet', 'Bracelet'].includes(item.typeNameEng) && item.prefix?.nameRu !== 'правления'
        )
        .sort((a, b) => {
            const indexA = armorOrder.indexOf(a.typeNameEng);
            const indexB = armorOrder.indexOf(b.typeNameEng);
            return indexA - indexB;
        });

    return (<>
        <div className="items__container castle-container">
            <div className="items__aside">
                {/* Используем отсортированный массив для рендеринга сайдбара */}
                {uniqueCastles.map(castle => (<div key={`level-${castle.castleNameEng}`} className="numbers numbers-other">
                    {eng ? castle.castleNameEng : castle.castleNameRu}
                </div>))}
            </div>
            <div className="items__container">
                <div className="items__container">
                    <div className="scroll-left-shadow scrollable">
                        <div className='visible'></div>
                    </div>

                    <div className="items__items-grid">
                        <div className="items__scrollable-content">
                            {/* Используем отсортированный массив для рендеринга групп предметов */}
                            {uniqueCastles.map(castle => (
                                <div key={castle.castleNameEng} className="castle-group">
                                    {othersNames.map((categoryName, index) => (
                                        <div key={`${castle.castleNameEng}-${categoryName}`} className="items-column">
                                            {/* Колонка "Катана/Роба" */}
                                            {index === 0 && weaponAndRobeItems
                                                .filter(item => (eng ? item.castleNameEng : item.castleNameRu) === (eng ? castle.castleNameEng : castle.castleNameRu))
                                                .map((item, itemIndex) => {
                                                    const prefix = item.prefix;
                                                    return (<div className="items-item-slot contains-item" key={item.id}
                                                                 style={{ background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat` }}>
                                                        {!isRight ? <Item item={item} prefix={prefix} index={itemIndex}/> :
                                                            <ItemRight item={item} prefix={prefix} index={itemIndex}/>}
                                                    </div>);
                                                })}

                                            {/* Колонка "Броня" */}
                                            {index === 1 && sortedArmorItems
                                                .filter(item => (eng ? item.castleNameEng : item.castleNameRu) === (eng ? castle.castleNameEng : castle.castleNameRu))
                                                .map((item, itemIndex) => {
                                                    const prefix = item.prefix;
                                                    return (<div className="items-item-slot contains-item" key={item.id}
                                                                 style={{ background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat` }}>
                                                        {!isRight ? <Item item={item} prefix={prefix} index={itemIndex}/> :
                                                            <ItemRight item={item} prefix={prefix} index={itemIndex}/>}
                                                    </div>);
                                                })}

                                            {/* Колонка "Бижутерия" */}
                                            {index === 2 && jewelryItems
                                                .filter(item => (eng ? item.castleNameEng : item.castleNameRu) === (eng ? castle.castleNameEng : castle.castleNameRu))
                                                .map((item, itemIndex) => {
                                                    const prefix = item.prefix;
                                                    return (<div className="items-item-slot contains-item" key={item.id}
                                                                 style={{ background: `url(${process.env.REACT_APP_BACKEND_URL}/image/block-brown) center no-repeat` }}>
                                                        {!isRight ? <Item item={item} prefix={prefix} index={itemIndex}/> :
                                                            <ItemRight item={item} prefix={prefix} index={itemIndex}/>}
                                                    </div>);
                                                })}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="scroll-right-shadow scrollable">
                        <div className='visible'></div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

function HandlePrefixes({eng, currentPrefix, prefixes}) {
    const {buttons} = useLang();
    const dispatch = useDispatch();

    const checkPrefixList = () => {
        // Улучшаем производительность и читаемость с помощью .some()
        const isInPrefixList = prefixes.some(prefix => currentPrefix?.id === prefix.id);

        if (!isInPrefixList && currentPrefix) { // Проверяем currentPrefix, чтобы не сбрасывать его, если он уже null
            dispatch(unsetPrefix());
        }
    };

    useEffect(() => {
        checkPrefixList();
    }, [currentPrefix, prefixes]);

    const sortedPrefixes = React.useMemo(() => {
        const prefixesCopy = [...prefixes];

        if (eng) {
            return prefixesCopy.sort((a, b) => a.nameEng.localeCompare(b.nameEng));
        } else {
            return prefixesCopy.sort((a, b) => a.nameRu.localeCompare(b.nameRu));
        }
    }, [prefixes, eng]);

    const handlePrefixSelect = (e) => {
        const selectedPrefix = prefixes.find((prefix) => 'prefix-id-' + prefix.id === e.target.id);

        if (selectedPrefix) {
            dispatch(setPrefix(selectedPrefix));
        }
    }

    const handleUnset = () => {
        dispatch(unsetPrefix());
    }

    return <div className="items-prefixes">
        <Button
            className={currentPrefix ? "button primary content" : "content content--selected"}
            onClick={handleUnset}
        >
            {buttons.noPrefix}
        </Button>

        {sortedPrefixes.map(prefix => (<Button
            className={prefix.id === currentPrefix?.id ? "content content--selected" : "button primary content"}
            key={'prefix-id-' + prefix.id}
            id={'prefix-id-' + prefix.id}
            sx={{p: 3, pt: 0, pb: 0, fontWeight: 'bold'}}
            onClick={handlePrefixSelect}
        >
            {eng ? prefix.nameEng : prefix.nameRu}
        </Button>))}
    </div>
}

const Items = ({items, prefixes, isRight}) => {
    const eng = useSelector(selectLang);
    const prefix = useSelector(selectPrefix);

    const makeObjectCopy = (object) => {
        const newObject = {};
        Object.assign(newObject, object);

        return newObject;
    }

    const handleMap = () => {
        const viewItems = [];

        items.forEach(item => {
            viewItems.push(makeObjectCopy(item))
        })

        switch (viewItems[0].getType) {
            case 'assassin':
            case 'barbarian':
            case 'blacksmith':
            case 'thief':
            case 'archmage':
            case 'druid':
            case 'inquisitor':
            case 'sorcerer':
            case 'necromancer':
            case 'bandier':
            case 'crusader':
            case 'steel-master':
            case 'armorer':
            case 'hunter':
                return (<HandleProfession viewItems={viewItems} isRight={isRight}/>);
            case 'mantra-radiant':
            case 'mantra-dire':
            case 'radiant-useless':
            case 'dire-useless':
                return (<HandleMantras viewItems={viewItems} isRight={isRight}/>);
            case 'powder-earth':
            case 'powder-air':
            case 'powder-water':
            case 'powder-fire':
                return (<HandlePowder viewItems={viewItems} isRight={isRight}/>);
            case 'crystals':
                return (<HandleCrystals viewItems={viewItems} isRight={isRight}/>);
            case 'castle15':
            case 'castle30':
            case 'castle45':
            case 'castle60':
            case 'castle75':
            case 'castle90':
            case 'castle120':
                return (<HandleCastle viewItems={viewItems} eng={eng} prefix={prefix} prefixes={prefixes}
                                      isRight={isRight}/>);
            case 'event':
            case 'elixir':
            case 'premium':
                return (<HandleOthers viewItems={viewItems} eng={eng} isRight={isRight}/>);
            case 'jewerly-set':
            case 'armor-set':
            default:
                return (<HandleRegular viewItems={viewItems} prefix={prefix} isRight={isRight}/>);
        }
    }

    return (<div className="items-list__container">
        {handleMap()}
        {(prefixes && prefixes.length > 0) && (<HandlePrefixes eng={eng} currentPrefix={prefix} prefixes={prefixes}/>)}
    </div>)
};

export default Items;