import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CheckoutDataService } from './checkout-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
 constructor(private store:Store,public router:Router,private checkoutDataService: CheckoutDataService){}
 cartList = []
 payment:any = [
  "Paypal",
  "Direct Check",
  "Bank Transfer"
]
formData: any = {
  firstName: 'Kanchugatla',
  lastName: 'Divya',
  email: '',
  mobileNo: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  zipCode: '',
  country: 'india', // Default value
  state: ''
};

onSubmit() {
  console.log('Form Data:', this.formData);
}
placeOrder(cartList:any){
  console.log('Form Data:', this.formData);
  this.router.navigate(['/order']);
  this.checkoutDataService.setFormData(this.formData);
  this.checkoutDataService.cartList = cartList;
}
 ngOnInit() {
  this.store.select((state: any) => state.cart).subscribe(
    data => {
      this.cartList = data.cartItem
    }
  )
}

}
