import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { ActivationEnd, Router } from '@angular/router';

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

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot.routeConfig?.['path'] === 'home') {
          this.isCatOpen = true;
        } else {
          this.isCatOpen = false;
        }
      }
    });
  }
}
