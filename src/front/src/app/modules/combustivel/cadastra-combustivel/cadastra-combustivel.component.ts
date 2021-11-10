import { CombustivelService } from './../combustivel.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastra-combustivel',
  templateUrl: './cadastra-combustivel.component.html',
  styleUrls: ['./cadastra-combustivel.component.scss'],
})
export class CadastraCombustivelComponent implements OnInit {
  title: string = '';
  cadastraCombustivelForm!: FormGroup;

  tiposCombustiveis = [
    { name: 'Comum', value: 'gasolina comum' },
    { name: 'Aditivada', value: 'gasolina aditivada' },
    { name: 'Etanol', value: 'etanol' },
    { name: 'GNV', value: 'GNV' },
    { name: 'Diesel', value: 'Diesel' },
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private combustivelService: CombustivelService
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cadastraCombustivelForm = this.fb.group({
      gas_type: ['Selecione o tipo de combustível...', [Validators.required]],
      km: ['', [Validators.required]],
      date: ['', [Validators.required]],
      price: ['', [Validators.required]],
      volume: ['', [Validators.required]],
      observation: [''],
    });
  }

  submit() {
    console.log(this.cadastraCombustivelForm.value);

    this.combustivelService
      .create(this.cadastraCombustivelForm.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
