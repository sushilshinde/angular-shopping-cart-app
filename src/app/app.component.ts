import { Component } from '@angular/core';
import { AuthenticationService } from './pages/authentication/authentication.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: NgbModal,private auth: AuthenticationService) {}
  ngOnInit(){
    this.auth.autoLogin()
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
