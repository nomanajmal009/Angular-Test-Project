import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userData: any;

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl('', Validators.required),
    });
  }

  loginUser() {
    this.service.login(this.loginForm).subscribe((data) => {
      this.userData = data;
      if (this.userData?.status === true) {
        if (this.userData?.data?.user?.active) {
          sessionStorage.setItem('token', this.userData?.data?.token);
          this.toastr.success(this.userData?.message);
          return this.router.navigate(['']);
        } else {
          return this.toastr.warning(
            'Please contact InterCityXpress',
            'Inactive User'
          );
        }
      } else {
        return this.toastr.error(this.userData?.message);
      }
    });
  }

  getEmailErrorMessage() {
    if (this.loginForm.get('email')?.hasError('required')) {
      return 'You must enter an email';
    }

    return this.loginForm.get('email') ? 'Not a valid email' : '';
  }
}
