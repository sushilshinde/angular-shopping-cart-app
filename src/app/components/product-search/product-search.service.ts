import { Injectable,EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService  {

  searchProduct:string="";
searchProductChange: EventEmitter<string> = new EventEmitter();
  constructor(private store:Store) { }
  
}
