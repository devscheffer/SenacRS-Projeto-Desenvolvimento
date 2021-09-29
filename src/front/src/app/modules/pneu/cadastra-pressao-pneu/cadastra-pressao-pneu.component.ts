import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastra-pressao-pneu',
  templateUrl: './cadastra-pressao-pneu.component.html',
  styleUrls: ['./cadastra-pressao-pneu.component.scss']
})
export class CadastraPressaoPneuComponent implements OnInit {

  title: string = '';
  cadastraPneuForm!: FormGroup;

  opcoes = [
    { name: 'Frente Esquerda', value: 'FE' },
    { name: 'Frente Direita', value: 'FD' },
    { name: 'Traseira Esquerda', value: 'TE' },
    { name: 'Traseira Direita', value: 'TD' }
  ]

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cadastraPneuForm = this.fb.group({
      posicao: ['Selecione a posição...', [Validators.required]],
      pressao: ['', [Validators.required]],
      dataCalibragem: ['', [Validators.required]],
      obs: ['']
    })
  }

  submit() {
    console.log(this.cadastraPneuForm.value);
  }

}
