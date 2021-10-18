import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-manutencao',
  templateUrl: './cadastra-manutencao.component.html',
  styleUrls: ['./cadastra-manutencao.component.scss']
})
export class CadastraManutencaoComponent implements OnInit {

  title: string = '';
  cadastraManutencaoForm!: FormGroup;

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
    this.cadastraManutencaoForm = this.fb.group({
      posicao2: ['Selecione a posição...', [Validators.required]],
      preco: ['', [Validators.required]],
      posicao: ['', [Validators.required]],
      resumo: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      dataRealizacao: ['', [Validators.required]],
      obs: ['']
    })
  }

  submit() {
    console.log(this.cadastraManutencaoForm.value);
  }

}
