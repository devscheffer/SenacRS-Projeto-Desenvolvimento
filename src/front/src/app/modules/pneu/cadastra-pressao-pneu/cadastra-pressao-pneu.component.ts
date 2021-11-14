import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PneuService } from '../pneu.service';

@Component({
  selector: 'app-cadastra-pressao-pneu',
  templateUrl: './cadastra-pressao-pneu.component.html',
  styleUrls: ['./cadastra-pressao-pneu.component.scss'],
})
export class CadastraPressaoPneuComponent implements OnInit {
  title: string = '';
  cadastraPneuForm!: FormGroup;

  opcoes = [
    { name: 'Frente Esquerda', value: 'fl' },
    { name: 'Frente Direita', value: 'fr' },
    { name: 'Traseira Esquerda', value: 'bl' },
    { name: 'Traseira Direita', value: 'br' },
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private pneuService: PneuService,
    private router: Router
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cadastraPneuForm = this.fb.group({
      position: ['Selecione a posição...', [Validators.required]],
      pressure_old: ['', [Validators.required]],
      pressure_new: ['', [Validators.required]],
      date: ['', [Validators.required]],
      observation: [''],
    });
  }

  submit() {
    console.log(this.cadastraPneuForm.value);

    this.pneuService.create(this.cadastraPneuForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['home/pneu/visualiza']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
