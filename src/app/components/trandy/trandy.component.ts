import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trandy',
  templateUrl: './trandy.component.html',
  styleUrls: ['./trandy.component.css']
})
export class TrandyComponent implements OnInit {
  products: any[];

  constructor(private modalService: NgbModal, private http: HttpClient) {
    this.products = [];
  }

  ngOnInit() {
    this.fetchProducts();
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

  public open(modal: any): void {
    this.modalService.open(modal);
  }
}

