import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductSearchService } from '../../core/services/product-search.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  products: any[];
  search: string = '';

  constructor(
    private searchService: ProductSearchService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.products = [];
  }

  

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.search = params.get('q') || '';
      this.fetchAndFilterProducts();
    });
  }
  fetchAndFilterProducts(): void {
    if (this.search && this.search.trim() !== '') {
      this.searchService.getProductData(this.search).subscribe(data => {
        this.products = data;
      });
    } else {
      this.products = []
    }
  }



}
