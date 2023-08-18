import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from '../../core/services/authentication.service';
import { SignIn, SignUp } from '../../shared/authentication/authStore/auth.action';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
  subscribe:Subscription
  isLogin: boolean = false;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(
    private store: Store,
    private activedRoute: ActivatedRoute
  ) {
    this.activedRoute.url.subscribe(urlSegments => {
      if (urlSegments.length > 0 && urlSegments[0].path === 'login') {
        this.isLogin = true;
      }
    });
    
  }
  

  ngOnInit() {
   this.subscribe= this.store.select((state: any) => state.auth).subscribe(
      data => {
        // this.isLoading = false;
        this.error = data.error;
        this.isLoading = false;
       
      }
    )
    
  }

  handleSubmit(formData: NgForm) {
    
    this.error = '';
    this.isLoading = true;
    if (!formData.valid) {
      this.error = 'Please enter valid details.';
      return;
    }
    if (this.isLogin) {
      this.store.dispatch(new SignIn(formData.value))
    }
    else {
      return this.store.dispatch(new SignUp(formData.value))
    }
   
  }
  ngOnDestroy(){
    if(this.subscribe){
   this.subscribe.unsubscribe();
  }
}

}
