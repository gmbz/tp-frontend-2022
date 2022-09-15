import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void { }

  signIn() {
    const user: User = {
      username: this.loginForm.get("username")?.value,
      password: this.loginForm.get("password")?.value
    }
    this.userService.signIn(user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('x-access-token', res.token);
        localStorage.setItem('user-id', res.id);
        localStorage.setItem('username', res.username);
        this.router.navigate(['/']);
      },
      error: (err) => console.log(err),
    });
  }
}
