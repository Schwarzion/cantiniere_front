import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientRestControllerService } from '../../../services/ingredient-rest-controller.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ValidateComponent } from '../validate/validate.component';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';


@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {

  ingredient;
  id;
  dialogRef;

  constructor(
    private Ingredients:  IngredientRestControllerService,
    private route:        ActivatedRoute,
    private router:       Router,
    public  dialog:       MatDialog
  ) {
    this.route.params
      .subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.getIngredient(this.id);

  }

  getIngredient(id: number) {
    this.Ingredients.getIngredient(id)
      .subscribe(data => {
        console.dir(data);
        this.ingredient = data;
      });
  }


  delete(id: number) {
    this.Ingredients.deleteIngredient(id)
      .subscribe(() => this.router.navigate(['/cantiniere/ingredients']));
  }

  openDeleteDialog(id) {

    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          ingredienId: id
        }
        
    this.dialogRef = this.dialog.open(ValidateComponent, {data: dialogConfig});

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result == true) {
        this.delete(id);
      }
    });
  }

  openEditDialog(id) {

    const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
          ingredientId: id,
          ...this.ingredient
        }

    this.dialogRef = this.dialog.open(IngredientFormComponent, {data: dialogConfig});

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }

}
