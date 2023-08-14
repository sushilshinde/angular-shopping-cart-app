import { Component ,OnInit} from '@angular/core';
import { CheckoutDataService } from '../../../core/services/checkout-data.service';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit{
  formData: any = {};
  cartList:any;
  constructor(private checkoutDataService: CheckoutDataService) {}

  ngOnInit() {
    this.formData = this.checkoutDataService.getFormData();
    this.cartList = this.checkoutDataService.cartList
    console.log(this.cartList)
  }
}
