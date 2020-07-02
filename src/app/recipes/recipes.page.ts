import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: '1',
      title: 'salad',
      imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201011-xl-jordons-romaine-salad.jpg%3Fitok%3DqJtn-6eZ',
      ingredients: ['chocomber', 'onion', 'tomatos']
    },
    {
      id: '2',
      title: 'pizaa',
      imageUrl: 'https://top10cairo.com/wp-content/uploads/2015/12/best-pizza-pizzas-restaurants-cairo-696x364.jpg',
      ingredients: ['cheese', 'papreno', 'pepper']
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
