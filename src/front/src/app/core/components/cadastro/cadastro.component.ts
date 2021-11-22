import { Component, OnInit } from '@angular/core';
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
  }

  initForm() {
    this.cadastroForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(4)
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
    console.log(this.cadastroForm.get('password')?.value);

    console.log(this.cadastroForm.get('confirmPassword')?.value);
    if (this.cadastroForm.get('password')?.value == this.cadastroForm.get('confirmPassword')?.value) {
      let dataForm = {
        email: this.cadastroForm.get('email'),
        password: this.cadastroForm.get('password')
      };
      this.cadastroService.cadastro(this.cadastroForm.value)
        .subscribe(retorno => {
          console.log(retorno);
          this.router.navigate(['login'])
        }, err => {
          console.log(err);
        });
    }
    else{
      console.log("Confirmação de senha incorreta!");
    }
  } 
}
