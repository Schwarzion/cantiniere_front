import { Component, OnInit } from '@angular/core';
import { IngredientRestControllerService } from '../../../services/ingredient-rest-controller.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  dialogRef: MatDialogRef<unknown, any>;

  constructor(
    private Ingredients:IngredientRestControllerService,
    public  dialog: MatDialog
    ) { }

  ingredients: any;
  ingredientsImage;

  ngOnInit() {

    this.getIngredients();
    console.log(this.ingredients.ingredients[0].id);
    this.getImageIngredient(this.ingredients.id);
    
  }

  getIngredients(){
    this.Ingredients.getIngredients()
    .subscribe(data => {
      console.dir(Object.values(data));
      this.ingredients = Object.values(data);
    });
  }
  getImageIngredient(id){
    this.Ingredients.getImageIngredient(id)
      .subscribe(data => {
        console.dir(data);
        var ing = this.ingredients.id;
        this.ingredientsImage[this.ingredients.id].push(data.imagePath);
        console.dir(this.ingredientsImage);
      })
  }
  
  openAddDialog() {
    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          'formType': 'add'
        }

    this.dialogRef = this.dialog.open(IngredientFormComponent, dialogConfig);

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
/*   addIngredient(data: []){
    this.Ingredients.addIngredient(data)
    .subscribe(() => this.getIngredients());
  } */
}
