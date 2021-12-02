import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KmModel } from './../../../shared/models/quilometragem.model';
import { CombustivelModel } from './../../../shared/models/combustivel.model';
import { QuilometragemService } from './../../quilometragem/quilometragem.service';
import { CombustivelService } from './../combustivel.service';

@Component({
  selector: 'app-cadastra-combustivel',
  templateUrl: './cadastra-combustivel.component.html',
  styleUrls: ['./cadastra-combustivel.component.scss'],
})
export class CadastraCombustivelComponent implements OnInit {
  title: string = '';
  cadastraCombustivelForm!: FormGroup;
  public loading: boolean = false;

  tiposCombustiveis = [
    { name: 'Comum', value: 'gasolina_comum' },
    { name: 'Aditivada', value: 'gasolina_aditivada' },
    { name: 'Etanol', value: 'etanol' },
    { name: 'GNV', value: 'gnv' },
    { name: 'Diesel', value: 'diesel' },
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private combustivelService: CombustivelService,
    private kmService: QuilometragemService,
    private router: Router
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.loading = true;
    this.initForm();
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  initForm() {
    this.cadastraCombustivelForm = this.fb.group({
      date: ['', [Validators.required]],
      km: ['', [Validators.required]],
      gas_type: ['', [Validators.required]],
      price: ['', [Validators.required]],
      volume: ['', [Validators.required]],
      observation: [''],
    });
  }

  submit() {
    this.loading = true;

    const dataCombustivel: CombustivelModel = {
      gas_type: this.cadastraCombustivelForm.get('gas_type')?.value,
      date: this.cadastraCombustivelForm.get('date')?.value,
      price: this.cadastraCombustivelForm.get('price')?.value,
      volume: this.cadastraCombustivelForm.get('volume')?.value,
      observation: this.cadastraCombustivelForm.get('observation')?.value,
      _id: null,
    };

    const dataKm: KmModel = {
      km: this.cadastraCombustivelForm.get('km')?.value,
      date: this.cadastraCombustivelForm.get('date')?.value,
      observation: this.cadastraCombustivelForm.get('observation')?.value,
      _id: null,
    };

    let confirmaEnvioCombustivel = false;
    let confirmaEnvioKm = false;

    this.kmService.create(dataKm).subscribe(
      (res) => {
        console.log(res);
        confirmaEnvioCombustivel = true;
      },
      (err) => {
        console.log(err);
      }
    );

    this.combustivelService.create(dataCombustivel).subscribe(
      (res) => {
        console.log(res);
        confirmaEnvioKm = true;
      },
      (err) => {
        console.log(err);
      }
    );

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['home/combustivel/visualiza']);
    }, 500);
  }
}
