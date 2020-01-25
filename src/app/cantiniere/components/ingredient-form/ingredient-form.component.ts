import { Component, OnInit, Inject }                from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators }       from '@angular/forms';
import { IngredientRestControllerService }          from '../../../services/ingredient-rest-controller.service';
import { Router }                                   from '@angular/router';


@Component({
  selector:     'app-ingredient-form',
  templateUrl:  './ingredient-form.component.html',
  styleUrls:    ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {

  ingredientId:             any;
  ingredientLabel:          any;
  ingredientImage:          any;
  ingredientDescription:    any;
  ingredientForm:           FormGroup;
  ingredient:               any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public ingredientData: any,
     private  IngredienService: IngredientRestControllerService,
     private  router:           Router,
     private  dialogRef:        MatDialogRef<IngredientFormComponent>,
     public   dialog:           MatDialog
     ){

    this.ingredientId           = ingredientData.data['ingredientId'];
    this.ingredientLabel        = ingredientData.data['label'];
    this.ingredientImage        = ingredientData.data['image'];
    this.ingredientDescription  = ingredientData.data['description'];
    console.log(ingredientData.data);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.ingredientForm = new FormGroup({
      label:        new FormControl(this.ingredientLabel,       Validators.required),
      image:        new FormControl(this.ingredientImage,       Validators.required),
      description:  new FormControl(this.ingredientDescription, Validators.required)
    });
  }

  getIngredient(id: number) {
    this.IngredienService.getIngredient(id)
      .subscribe(data => {
        console.dir(data);
        this.ingredient = data;
      });
  }

  editIngredient(id) {
    console.log(id);
    console.log(this.ingredientForm.value);
    this.IngredienService.editIngredient(this.ingredientForm.value, id)
      .subscribe(() => 
        this.closeDialog()
      );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
