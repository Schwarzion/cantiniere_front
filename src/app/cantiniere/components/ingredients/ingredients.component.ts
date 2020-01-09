import { Component, OnInit } from '@angular/core';
import { IngredientRestControllerService } from '../../../services/ingredient-rest-controller.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor(private Ingredients:IngredientRestControllerService) { }

  ingredients;

  ngOnInit() {

    this.getIngredients();
    
  }

  getIngredients(){
    this.Ingredients.getIngredients()
    .subscribe(data => {
      this.ingredients = data;
    });
  }

}
