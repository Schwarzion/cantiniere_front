import { Component, OnInit } from '@angular/core';
import { IngredientRestControllerService } from '../../../services/ingredient-rest-controller.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor(private Ingredients:IngredientRestControllerService) { }

  ingredients: any;

  ngOnInit() {

    this.getIngredients();
    
  }

  getIngredients(){
    this.Ingredients.getIngredients()
    .subscribe(data => {
      console.dir(data);
      this.ingredients = data;
    });
  }

  
/*   addIngredient(data: []){
    this.Ingredients.addIngredient(data)
    .subscribe(() => this.getIngredients());
  } */
}
