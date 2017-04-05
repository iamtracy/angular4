import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipes.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()

export class DataStorageService {
    constructor(private http: Http, 
        private recipeService: RecipeService,
        private authService: AuthService) { }

    storeRecipes() {
       return this.http.put(
            'https://ng-recipe-book-e9223.firebaseio.com/recipes.json',
            this.recipeService.getRecipes());
    }

    getRecipes() {
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-e9223.firebaseio.com/recipes.json?auth=' + token)
            .map((response: Response) => {
                const recipes: Recipe[] = response.json();
                for( let recipe of recipes ) {
                    if(!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;          
            })
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }

}