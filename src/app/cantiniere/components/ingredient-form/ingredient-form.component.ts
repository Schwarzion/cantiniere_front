import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientRestControllerService } from '../../../services/ingredient-rest-controller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.scss']
})
export class IngredientFormComponent implements OnInit {

  ingredientDescription: any;
  ingredientForm: FormGroup;
  ingredient: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public ingredientData: any,
    private IngredienService: IngredientRestControllerService,
    private router: Router,
    private dialogRef: MatDialogRef<IngredientFormComponent>,
    public dialog: MatDialog
  ) {
    this.ingredientData = ingredientData.data;
    console.log(this.ingredientData);
  }

  ngOnInit() {
      this.initForm();
  }

  initForm() {
    this.ingredientForm = new FormGroup({
      label:        new FormControl(this.ingredientData.label, Validators.required),
      image:        new FormControl(this.ingredientData.image, Validators.required),
      description:  new FormControl('', Validators.required)
    });
  }

  getIngredient(id: number) {
    this.IngredienService.getIngredient(id)
      .subscribe(data => {
        console.dir(data);
        this.ingredient = data;
      });
  }

  editIngredient() {
    console.log(this.ingredientData.id);
    console.log(this.ingredientForm.value);
    this.IngredienService.editIngredient(this.ingredientForm.value, this.ingredientData.id)
      .subscribe(() => this.closeDialog()
      );
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
