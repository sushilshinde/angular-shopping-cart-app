// Importing the Injectable decorator from Angular core
import { Injectable } from '@angular/core';

// Injectable decorator to declare that this service should be provided at the root level
@Injectable({
  providedIn: 'root'
})
export class CheckoutDataService {
  // Private property to store form data
  private formData: any = {};

  // Public property to store cart list data
  cartList: any;

  // Function to set form data
  setFormData(data: any) {
    this.formData = data;
  }

  // Function to get a copy of the form data
  getFormData() {
    return { ...this.formData };
  }
}
