import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void { }

  signUp() {
    const user: User = {
      username: this.registerForm.get("username")?.value,
      password: this.registerForm.get("password")?.value
    }
    this.userService.signUp(user).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('x-access-token', res.token);
        this.router.navigate(['/user']);
      },
      error: (err) => console.log(err),
    });
  }
}
