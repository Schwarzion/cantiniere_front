import { AbstractControl } from '@angular/forms';

export class ValidatePassword {

    static MatchPassword(abstractControl: AbstractControl) {
        const password = abstractControl.get('password').value;
        const confirmPassword = abstractControl.get('confirmPassword').value;
        console.log(password, confirmPassword);
        if (password !== confirmPassword) {
            abstractControl.get('confirmPassword').setErrors({
                MatchPassword: true
            });
        } else {
            return null;
        }
    }
}
