import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput!: ElementRef; // Utilizando ViewChield para manipular o DOM.

  title: string = '';
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.initForm();
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.emailInput.nativeElement.focus();
    },0);
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(4)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value)
    .subscribe(res =>{
          this.router.navigate(['home'])
        });

  }
}
