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
  ingredientForm: FormGroup;
  dialogRef;

  constructor(
    private Ingredients:  IngredientRestControllerService,
    private route:        ActivatedRoute,
    private router:       Router,
    public dialog:        MatDialog
  ) {
    this.route.params
      .subscribe(params => this.id = params.id);
    console.log(this.id)

  }

  ngOnInit() {
    this.getIngredient(this.id);

  }

  initForm() {
    this.ingredientForm = new FormGroup({
      label:        new FormControl('', Validators.required),
      image:        new FormControl('', Validators.required),
      description:  new FormControl('', Validators.required)
    });
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

    this.dialogRef = this.dialog.open(ValidateComponent, dialogConfig);

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
          label:        this.ingredient.label,
          image:        this.ingredient.image,
          description:  this.ingredient.description,
        }

    this.dialogRef = this.dialog.open(IngredientFormComponent, {data: dialogConfig});

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }

/* 
  editIngredient(id: number) {
    console.log(this.ingredientForm.value);
    this.Ingredients.editIngredient(this.ingredientForm.value, id)
      .subscribe(() => console.dir(this.ingredientForm.value)
        //this.getIngredient(id)
      );
  } */


}
