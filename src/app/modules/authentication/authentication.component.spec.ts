import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AuthenticationComponent } from './authentication.component';
import { SignIn, SignUp } from '../../shared/authentication/authStore/auth.action';

describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;
  let mockStore: any;

  beforeEach(() => {
    mockStore = jasmine.createSpyObj(['select', 'dispatch']);

    TestBed.configureTestingModule({
      declarations: [AuthenticationComponent],
      imports: [FormsModule],
      providers: [
        { provide: Store, useValue: mockStore },
        {
          provide: ActivatedRoute,
          useValue: {
            url: of([{ path: 'login' }]), // Provide a mock value for url
          },
        },
      ],
    });

    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    component.isLogin = true; // Set isLogin property directly
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

 
});
