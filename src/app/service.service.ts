import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

searchProduct:string="";
searchProductChange: EventEmitter<string> = new EventEmitter();
  constructor() { }
}
