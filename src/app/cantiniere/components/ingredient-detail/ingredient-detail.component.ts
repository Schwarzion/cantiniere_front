import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientRestControllerService } from '../../../services/ingredient-rest-controller.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ValidateComponent } from '../validate/validate.component';
import { IngredientFormComponent } from '../ingredient-form/ingredient-form.component';


@Component({
  selector: 'app-ingredient-detail',
  templateUrl: './ingredient-detail.component.html',
  styleUrls: ['./ingredient-detail.component.scss']
})
export class IngredientDetailComponent implements OnInit {

  ingredient
  key;
  ingredientForm: FormGroup;
  dialogRef;

  constructor(
    private Ingredients: IngredientRestControllerService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.route.params
      .subscribe(params => this.key = params.key);

  }

  ngOnInit() {
    this.getIngredient(this.key);

  }

  initForm() {
    this.ingredientForm = new FormGroup({
      label: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
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
/* 
  openDeleteDialog(id) {
    this.dialogRef = this.dialog.open(ValidateComponent, {
      data: { ingredienId: id }
    });

      this.dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        if (result == true) {
            this.delete(id);
        }
      });
    } */

    /* openFormDialog(id) {
      this.dialogRef = this.dialog.open(IngredientFormComponent, {
        data: { ingredienId: id }
      });
  
        this.dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
          if (result == true) {
              this.editIngredient(id);
            }
        });
      } */

    closeDialog() {
      /*     this.dialog.closeAll(); */
      this.dialogRef.closeAll();
    }


    editIngredient(id: number) {
      console.log(this.ingredientForm.value);
      this.Ingredients.editIngredient(this.ingredientForm.value, id)
        .subscribe(() => console.dir(this.ingredientForm.value)
          //this.getIngredient(id)
        );
    }


  }
