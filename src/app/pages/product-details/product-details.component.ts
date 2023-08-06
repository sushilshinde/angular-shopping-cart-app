import { Component,OnInit } from '@angular/core';
import { ActivatedRoute , NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  
  
  randomDecimal = Math.random();
  ratingValue = Math.ceil(this.randomDecimal*5);
  productData:any;
 
     constructor(private route:ActivatedRoute){

     }
     ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params['product']) {
          this.productData = JSON.parse(params['product']);
          this.productData.rating = this.ratingValue
        }
      });
    }
}
