import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectLang} from "../store/lang/selectors";
import '../styles/RecipeItem.css';
import {getElement} from "../use/getElement";
import {toRoman} from "../utils/romanNumerals";
import {useLang} from "../use/lang";
import {recipesToggleChosen} from "../store/recipe/actions";
import ModalPortal from "./ModalPortal";

const RecipeItem = ({item, recipe = null, type = null, chosen = false, parentRef = null}) => {
    const eng = useSelector(selectLang);
    const {texts} = useLang()
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);
    const nodeRef = useRef(null);
    const thisRef = useRef(null);

    const handleClick = () => {
        if (item.type !== 0) return

        dispatch(recipesToggleChosen(recipe));
    }

    const getModalPosition = () => {
        const ref = parentRef ? parentRef : thisRef;

        if (ref.current) {
            const rect = ref.current?.getBoundingClientRect();

            return {
                left: rect.left + rect.width / 2,
                bottom: `calc(100vh - ${rect.top}px + 15px)`,
                transform: `translateX(-50%)`,
                position: 'fixed',
                top: 'auto',
            };
        }
        return {};
    };

    return (<div className={chosen ? "recipe-item-chosen" : "recipe-item"}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
                 onClick={handleClick}
                 ref={thisRef}>
        {
            isHovered && <ModalPortal>
                <div className="recipe-item__modal"
                     ref={nodeRef}
                     style={{
                         ...getModalPosition(), zIndex: 9999
                     }}>
                    <div className="recipe-item__modal-header"
                         style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) repeat center`}}>
                        {eng ? item.nameEng : item.nameRu}
                        {!!recipe && type === 'professions' &&
                            <span>{recipe.item.element ? <span>&nbsp;({recipe.item.element})</span> :
                                <span>&nbsp;({Math.ceil(recipe.item.factor / 2)})</span>}</span>}
                    </div>
                    <div className="recipe-item__modal-content">
                        {item.type === 0 && <>
                            <div className="recipe-item__content-row">
                                <span>{texts.cook} </span>
                                <span><b>{eng ? recipe.flower.typeEng : recipe.flower.typeRu}</b></span>
                            </div>

                            <div className="recipe-item__content-row">
                                <span>{texts.consumption}: </span>
                                {recipe.stone.element === recipe.flower.element ? (<>
                            <span><img
                                src={`${process.env.REACT_APP_BACKEND_URL}/image/${getElement(recipe.stone.element, eng, 'img')}`}
                                alt="" className="recipe-icon"/></span>
                                    <span><b>{(recipe.stone.factor + recipe.flower.factor) * recipe.metal.factor}</b></span>
                                </>) : (<>
                                <span>
                                    <img
                                        src={`${process.env.REACT_APP_BACKEND_URL}/image/${getElement(recipe.stone.element, eng, 'img')}`}
                                        alt="" className="recipe-icon"/>
                                </span>
                                    <span><b>{recipe.stone.factor * recipe.metal.factor}</b></span>

                                    <span><img
                                        src={`${process.env.REACT_APP_BACKEND_URL}/image/${getElement(recipe.flower.element, eng, 'img')}`}
                                        alt="" className="recipe-icon"/></span>
                                    <span><b>{recipe.flower.factor * recipe.metal.factor}</b></span>
                                </>)}
                            </div>
                        </>}
                        {item.type === 1 && <>
                            <div className="recipe-item__content-row">
                                <span>{texts.consumption}: </span>
                                <span><img
                                    src={`${process.env.REACT_APP_BACKEND_URL}/image/${getElement(item.element, eng, 'img')}`}
                                    alt="" className="recipe-icon"/></span>
                                <span><b>{item.factor}</b></span>
                            </div>
                            <div className="recipe-item__content-row">
                                <span>{texts.class}: </span>
                                <span>&nbsp;<b>{eng ? item.typeEng : item.typeRu}</b></span>
                            </div>
                        </>}
                        {item.type === 2 && <>
                            <div className="recipe-item__content-row">
                                <span>{texts.consumption}: </span>
                                <span><img
                                    src={`${process.env.REACT_APP_BACKEND_URL}/image/${getElement(item.element, eng, 'img')}`}
                                    alt="" className="recipe-icon"/></span>
                                <span><b>{item.factor}</b></span>
                            </div>
                            <div className="recipe-item__content-row">
                                <span>{texts.active}: </span>
                                <span> &nbsp;<b>{eng ? item.typeEng : item.typeRu}</b></span>
                            </div>
                        </>}
                        {item.type === 3 && <>
                            <div className="recipe-item__content-row">
                                <span>{texts.multiplier}: </span>
                                <span>&nbsp;<b>{item.factor}</b></span>
                            </div>
                        </>}
                        {item.type === 4 && <>
                            <div className="recipe-item__content-row">
                                <span>{texts.cookingIn} </span>
                                <span>&nbsp;
                                    <b>{item.nameRu.startsWith('Порошок', 0) ? texts.cauldron : texts.furnace}</b></span>
                            </div>
                        </>}
                    </div>
                </div>
            </ModalPortal>
        }
        <div className={"slot special contains-item"}>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/block-brown`} className="item-before" loading="lazy"
                 alt=""/>
            <img src={`${process.env.REACT_APP_BACKEND_URL}/image/${item?.icon}`} alt="" className="recipe-icon"
                 loading="lazy"/>
            {!!recipe && type === 'professions' && <span className="recipe-item__right-bottom">{recipe.item.element ?
                <span>&nbsp;{toRoman(recipe.item.element)}</span> :
                <span>&nbsp;{toRoman(Math.ceil(recipe.item.factor / 2))}</span>}</span>}
        </div>
    </div>);
};

export default RecipeItem;