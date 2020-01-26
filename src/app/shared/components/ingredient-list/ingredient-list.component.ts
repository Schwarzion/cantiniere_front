import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IngredientRestControllerService } from 'src/app/services/ingredient-rest-controller.service';

@Component({
  selector: 'app-ingredient-list',
  templateUrl: './ingredient-list.component.html',
  styleUrls: ['./ingredient-list.component.scss']
})
export class IngredientListComponent implements OnInit {

  ingredients = [];

  selectedIngredients = [];
  selectedIds = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ingredientListDialog: MatDialogRef<IngredientListComponent>,
    private ingredientService: IngredientRestControllerService
  ) { }

  ngOnInit() {
    this.getAllIngredients();
    this.selectedIds = this.data.ingredientIds;
    this.selectedIngredients = this.data.ingredients;
  }

  getAllIngredients() {
    this.ingredientService.getAllIngredients().subscribe(ingredients => this.ingredients = ingredients);
  }

  addIngredient(ingredient) {
    this.selectedIngredients.push(ingredient);
    this.selectedIds.push(ingredient.id);
  }

  isSelected(ingredientId) {
    return this.selectedIds.includes(ingredientId);
  }

  close(sendIngredients?) {
    this.ingredientListDialog.close(sendIngredients && this.selectedIngredients);
  }

  removeIngredient(ingredient) {
    const index = this.selectedIngredients.findIndex(selectedIngredient => selectedIngredient === ingredient);
    this.selectedIngredients.splice(index, 1);
    const indexId = this.selectedIds.findIndex(selectedIngredient => selectedIngredient === ingredient);
    this.selectedIds.splice(indexId, 1);
  }
}
