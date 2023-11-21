import { AbstractControl } from "@angular/forms";

export class CustomValidator{
    // Number only validation
    static numeric(control: AbstractControl) {
      let val = control.value;
  
      if (val === null || val === '') return null;
  
      if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };
  
      return null;
    }

    // Email only validation
    static email(control: AbstractControl) {
        let val = control.value;
    
        if (val === null || val === '') return null;
    
        if (!val.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)) return { 'invalidMail': true };
    
        return null;
      }
  }