import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastra-combustivel',
  templateUrl: './cadastra-combustivel.component.html',
  styleUrls: ['./cadastra-combustivel.component.scss']
})
export class CadastraCombustivelComponent implements OnInit {

  title: string = '';
  cadastraCombustivelForm!: FormGroup;

  tiposCombustiveis = [
    { name: 'Comum', value: 'comum' },
    { name: 'Aditivada', value: 'aditivada' },
    { name: 'Premium', value: 'premium' },
    { name: 'Álcool', value: 'alcool' },
    { name: 'Diesel', value: 'diesel' },
    { name: 'Gás Natural', value: 'gas_natural' }
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
    this.cadastraCombustivelForm = this.fb.group({
      tipoCombustivel: ['Selecione o tipo de combustível...', [Validators.required]],
      quilometragem: ['', [Validators.required]],
      data_reabastecimento: ['', [Validators.required]],
      preco: ['', [Validators.required]]
    })
  }

  submit() {
    console.log(this.cadastraCombustivelForm.value);
  }

}
