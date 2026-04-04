import React, {useEffect, useRef} from 'react';
import RecipeItem from "./RecipeItem";

const Recipe = ({recipe, index, idx = 1}) => {
    const recipeRef = useRef();

    useEffect(() => {
        recipeRef.current.style.animationDelay = `${index * 50 + (idx * 100)}ms`;
    }, [])

    return (
        <div ref={recipeRef} className="recipe"  key={"chosen-" + recipe.id}>
            <RecipeItem item={recipe.item} recipe={recipe} parentRef={recipeRef}/>

            <div className="recipe-item-ingredients">
                <RecipeItem item={recipe.stone} parentRef={recipeRef}/>
                <RecipeItem item={recipe.flower} parentRef={recipeRef}/>
                <RecipeItem item={recipe.metal} parentRef={recipeRef}/>
                <RecipeItem item={recipe.catalyst} parentRef={recipeRef}/>
            </div>
        </div>
    );
};

export default Recipe;