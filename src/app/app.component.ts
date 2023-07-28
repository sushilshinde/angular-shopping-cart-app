import { Component } from '@angular/core';
import { AuthenticationService } from './pages/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private auth: AuthenticationService) {}
  ngOnInit(){
    this.auth.autoLogin()
  }
}
