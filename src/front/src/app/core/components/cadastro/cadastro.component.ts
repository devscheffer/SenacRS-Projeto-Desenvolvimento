import { UserModel } from './../../models/login.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../../services/cadastro/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  title: string = '';
  cadastroForm!: FormGroup;
  validaSubmit: boolean = false;
  @ViewChild('emailInput') emailInput!: ElementRef; // Utilizando ViewChield para manipular o DOM.

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private cadastroService: CadastroService
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
    this.cadastroForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(4)
      ]]
    })
  }

  submit() {
    this.validaSubmit = true;
    if (!this.cadastroForm.invalid) {
      if (this.cadastroForm.get('password')?.value == this.cadastroForm.get('confirmPassword')?.value) {
        let dataForm: UserModel = {
          email: this.cadastroForm.get('email')?.value,
          password: this.cadastroForm.get('password')?.value
        };
        this.cadastroService.cadastro(dataForm)
          .subscribe(res => {
            this.router.navigate(['login'])
          }, err => {
            console.log(err);
            this.validaSubmit = false;
          });
      }
    }
  }
}
