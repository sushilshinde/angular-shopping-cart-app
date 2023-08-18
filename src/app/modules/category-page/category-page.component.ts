import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { priceFilterArray, sortby } from 'src/assets/mockData/filterMock';
import { filterData } from 'src/helper/filter';
import * as fromCatAction from './category-store/cat-page.action'
import { selectCat } from './category-store/cat-page.reducer';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
})

export class CategoryPageComponent {
  constructor(private activeRoute: ActivatedRoute, private store: Store) {
    this.product = []; 
   }
  query: string = '';
  isLoading: boolean = false;
  priceArray = priceFilterArray;
  refArray;
  product: Array<any>;
  priceRange = [];
  searchQuery: string = '';
  sortby = "select";
  sortbyOptions = sortby;

  handleFilter() {
    this.setLoader()
    this.product = filterData(this.refArray, this.priceRange, this.searchQuery, this.sortby)
  }

  handlePriceArray(data) {
    const range = []
    if (!data.length) {
      this.priceRange = [];
      this.handleFilter()
      return
    }
    data.forEach(item => range.push(...(item.split(',')).map(item => +item)));
    this.priceRange = [Math.min(...range), Math.max(...range)];
    this.handleFilter()
  }

  setLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false
    }, 500)
  }

  clearQuery() {
    this.setLoader()
    this.searchQuery = ''
    this.product = this.refArray;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => this.query = params['cat'])
    this.store.dispatch(new fromCatAction.LoadCatData(this.query))
    this.store.select(selectCat).subscribe((data) => {
      this.product = data['catProduct'];
      this.refArray = data['catProduct']
    })
  }
}
