import { Component } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';

interface CategoriesNode {
  name: string;
  children?: CategoriesNode[];
}

const TREE_DATA: CategoriesNode[] = [
  {
    name: 'Categories',
    children: [{name: 'Dresses' ,children:[{name: 'Mens Dresses'},{name: 'Womens Dresses'},{name: 'Babys Dresses'}]}, {name: 'Shirts'}, {name: 'Jeans'},{name: 'Swimwear'},{name: 'Sleepwear'},{name: 'Sportswear'},{name: 'Jumpsuits'},{name: 'Blazers'},{name: 'Jackets'},{name:'Shoes'}],
  }
  
];

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  treeControl = new NestedTreeControl<CategoriesNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<CategoriesNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: CategoriesNode) => !!node.children && node.children.length > 0;


}
