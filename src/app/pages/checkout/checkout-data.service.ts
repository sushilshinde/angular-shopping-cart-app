import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutDataService {
  private formData: any = {};
  cartList:any;

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return { ...this.formData };
  }
}
