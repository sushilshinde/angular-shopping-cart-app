import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-trandy',
  templateUrl: './trandy.component.html',
  styleUrls: ['./trandy.component.css']
})
export class TrandyComponent implements OnInit{
  products: any[];
  filterProducts:any[];
  searching:string="";
  constructor( private http: HttpClient,private router: Router,private searchService:ServiceService) {
    this.products = [];
    this.searching=this.searchService.searchProduct;
    this.filterProducts = [];
    console.log(this.searching)
  }
ngOnInit(){
  this.fetchProducts();
  this.searchService.searchProductChange.subscribe((searchText: string) => {
    this.searching = searchText;
    console.log("Searching:", this.searching); 
  });
  
}

 

  fetchProducts(): void {
    const apiUrl = 'http://localhost:3000/products?trendy=true';
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.products = data;
        this.filterProducts = this.products
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
 
  applySearchFilter(): void {
    if (this.searching !== '' && this.searching) {
      this.filterProducts = this.products.filter(item =>
        item['title'].toLowerCase().includes(this.searching.toLowerCase())
      );
    } else {
      this.filterProducts = this.products;
    }
    console.log("Filtered Products:", this.filterProducts); // Add this line
    console.log("Search Query:", this.searching); // Add this line
  }
  viewProductDetail(product: any) {
    this.router.navigate(['/product-details'], { queryParams: { product: JSON.stringify(product) } });
  }

  
}

