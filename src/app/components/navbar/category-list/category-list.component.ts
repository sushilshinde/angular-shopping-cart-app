import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  isCatOpen: boolean = true;
  catList = [
    'Shirts',
    'Jeans',
    'Swimwear',
    'Sleepwear',
    'Sportswear',
    'Jumpsuits',
    'Blazers',
    'Jackets',
    'Shoes',
  ];
}
