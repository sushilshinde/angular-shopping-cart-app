import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductSearchService } from './product-search.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit{
  products:any[]
  search:string="";

 constructor(private searchService:ProductSearchService,private http:HttpClient){
  this.products=[]
 }
ngOnInit(): void {
  this.fetchProducts();
  this.searchService.searchProductChange.subscribe((searchText: string) => {
    this.search = searchText;
    this.applySearchFilter();
  });

}
fetchProducts(): void {
  const apiUrl = 'http://localhost:3000/products?trendy=true';
  this.http.get<any[]>(apiUrl).subscribe(
    (data) => {
      this.products = data;
    },
    (error) => {
      console.error('Error fetching products:', error);
    }
  );
}

applySearchFilter(): void {
  if (this.search !== '' && this.search) {
    this.products = this.products.filter(item =>
      item['title'].toLowerCase().includes(this.search.toLowerCase())
    );
  } else {
    this.products = this.products;
  }
}
}
