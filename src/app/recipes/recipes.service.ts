import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: "1",
      title: 'salad',
      imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201011-xl-jordons-romaine-salad.jpg%3Fitok%3DqJtn-6eZ',
      ingredients: ['chocomber', 'onion', 'tomatos']
    },
    {
      id: "2",
      title: 'pizaa',
      imageUrl: 'https://top10cairo.com/wp-content/uploads/2015/12/best-pizza-pizzas-restaurants-cairo-696x364.jpg',
      ingredients: ['cheese', 'papreno', 'pepper']
    },
  ];
  
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find( recipe => {
      return recipe.id === recipeId;
    }) };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter( recipe => {
      return recipe.id !== recipeId;
    });
  }



}
