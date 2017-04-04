import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.id);
                }
            );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteItem() {

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
