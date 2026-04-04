import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import {selectChosen} from "../store/recipe/selectors";
import RecipeItem from "./RecipeItem";
import Recipe from "./Recipe";
import {useLang} from "../use/lang";

const Recipes = () => {
    const recipes = useSelector(selectChosen)
    const {texts} = useLang();

    return (<div className="recipes">
        <div className="tables--no__h2">
            {texts.chosenRecipes}
        </div>
        <div className="recipes-chosen__content">
            {
                recipes && recipes.length > 0 ? (recipes?.map((recipe, index) => <Recipe key={'chosen-'+recipe.id} recipe={recipe} index={index}/>))
                : (<div>{texts.noChosenRecipesYet}</div>)
            }
        </div>
    </div>);
};

export default Recipes;