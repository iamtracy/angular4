import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Grand Mac', 
        'Ermagerd', 
        'http://static.highsnobiety.com/wp-content/uploads/2016/04/03195756/mcdonalds-giga-big-mac-japan-0.jpg', 
        [
            new Ingredient('Mac Sauce', 2),
            new Ingredient('Bun', 1),
            new Ingredient('Meat', 4),
        ]),
        new Recipe('Chicked Salad', 
        'Not as delicious as a Grand Mac', 
        'http://2.bp.blogspot.com/-NDFJVOU83ew/VXquFlKF0rI/AAAAAAAAnjM/vBD_jPEmF4Q/s1600/Mcdonalds-Asian-Salad-with-Grilled-Chicken.jpg',
         [
            new Ingredient('Lettuce', 2),
            new Ingredient('Vegetables', 5),
            new Ingredient('Dressing', 1),
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}