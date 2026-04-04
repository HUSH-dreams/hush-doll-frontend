import React, {useEffect, useRef, useState} from 'react';
import '../styles/RecipesPage.css'
import {useDispatch, useSelector} from "react-redux";
import {recipesInitiate} from "../store/recipe/actions";
import {selectChosen, selectRecipes} from "../store/recipe/selectors";
import RecipeItem from "./RecipeItem";
import {recipeType} from "../use/recipeType";
import {selectLang} from "../store/lang/selectors";
import {getGroupImg} from "../use/getGroupImg";
import {getGroupName} from "../use/getGroupName";
import {useLang} from "../use/lang";
import Recipe from "./Recipe";
import {scroll} from "../utils/scrollIntoView";

const RecipesContainer = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(selectRecipes);
    const eng = useSelector(selectLang);
    const [groupedItems, setGroupedItems] = useState([]);
    const {texts} = useLang();
    const chosen = useSelector(selectChosen);
    const chosenRef = useRef();
    const recipesContainerRef = useRef(null);

    useEffect(() => {
        dispatch(recipesInitiate())
    }, [])

    useEffect(() => {
        if (recipesContainerRef) {
            scroll(recipesContainerRef, 'instant')
        }
    }, [recipesContainerRef])

    useEffect(() => {
        if (recipes && recipes.length > 0) { // Добавлена проверка на recipes.length > 0
            const rawGroupedItems = recipes.reduce((acc, recipe) => {
                if (!acc[recipe.group]) {
                    acc[recipe.group] = {};
                }

                if (!acc[recipe.group][recipe.type]) {
                    acc[recipe.group][recipe.type] = [];
                }

                acc[recipe.group][recipe.type].push(recipe);

                return acc;
            }, {});

            const finalGroupedItems = {};

            for (const groupName in rawGroupedItems) {
                if (Object.hasOwnProperty.call(rawGroupedItems, groupName)) {
                    finalGroupedItems[groupName] = {};

                    if (groupName === 'professions') {
                        const sortedProfessions = {
                            druid1: rawGroupedItems[groupName].druid1,
                            druid2: rawGroupedItems[groupName].druid2,
                            thief: rawGroupedItems[groupName].thief,
                            inquisitor: rawGroupedItems[groupName].inquisitor,
                            blacksmith: rawGroupedItems[groupName].blacksmith,
                            necromancer: rawGroupedItems[groupName].necromancer,
                            sorcerer: rawGroupedItems[groupName].sorcerer,
                            armorer: rawGroupedItems[groupName].armorer,
                        }

                        rawGroupedItems[groupName] = sortedProfessions;
                    }

                    for (const typeName in rawGroupedItems[groupName]) {
                        if (Object.hasOwnProperty.call(rawGroupedItems[groupName], typeName)) {
                            let recipesOfType = [...rawGroupedItems[groupName][typeName]]; // Копируем массив, чтобы не мутировать оригинал

                            if (groupName === 'professions') {
                                recipesOfType.sort((a, b) => {
                                    const aElement = a.item?.element;
                                    const aFactor = a.item?.factor;

                                    // Получаем значения element и factor для B
                                    const bElement = b.item?.element;
                                    const bFactor = b.item?.factor;

                                    if (aElement > 0 && bElement > 0) {
                                        return aElement - bElement;
                                    }

                                    if (aElement > 0 && !(bElement > 0)) {
                                        return -1; // a идет перед b
                                    }
                                    if (!(aElement > 0) && bElement > 0) {
                                        return 1; // b идет перед a
                                    }

                                    const factorA = typeof aFactor === 'number' ? aFactor : 0;
                                    const factorB = typeof bFactor === 'number' ? factorB : 0;

                                    return factorA - factorB;
                                });
                            } else {

                                recipesOfType.sort((a, b) => (a.id || 0) - (b.id || 0));
                            }

                            finalGroupedItems[groupName][typeName] = recipesOfType;
                        }
                    }
                }
            }

            setGroupedItems(finalGroupedItems);
        } else {
            setGroupedItems({});
        }
    }, [recipes])

    let idx = -1;

    return (<div className="recipes-container">
        <div className="container--indicator" ref={recipesContainerRef}></div>
        <div className="recipes-container__header"
             style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
            {texts.recipes}
        </div>
        <div className="recipes__content">
            {Object.keys(groupedItems).map(group => {
                return <div key={group}
                            className="recipe-group">
                    <header>
                        <div className="recipe-group__separator"></div>
                        <span>{getGroupName(group, eng)}</span>
                        <div className="recipe-group__separator"></div>
                    </header>
                    <div className="recipe-group__body">
                        {Object.keys(groupedItems[group])
                            .map((type, index) => {
                                idx++

                                return <div key={type}
                                            style={{animationDelay: index * 100 + 'ms'}}
                                            className="recipe-group-container">
                                    <div className="recipe-group--content">
                                        <header
                                            style={{background: `url(${process.env.REACT_APP_BACKEND_URL}/image/background) center repeat`}}>
                                            {<img
                                                src={`${process.env.REACT_APP_BACKEND_URL}/image/${getGroupImg(type)}`}
                                                alt=""/>}
                                            {recipeType(type, eng)}
                                        </header>
                                        {groupedItems[group][type].map((recipe, index) => <Recipe recipe={recipe}
                                                                                                  key={"recipe-container-" + recipe.id}
                                                                                                  index={index} idx={idx}/>)}
                                    </div>
                                </div>
                            })}
                    </div>
                </div>
            })}
        </div>
        <div className="recipes__chosen" ref={chosenRef}>
            {chosen?.map(recipe => <RecipeItem item={recipe.item} recipe={recipe} chosen={true}/>)}
        </div>
    </div>);
};

export default RecipesContainer;