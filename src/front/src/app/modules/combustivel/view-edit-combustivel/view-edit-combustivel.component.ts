import { CombustivelModel } from '../../../shared/models/combustivel.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CombustivelService } from '../combustivel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-view-edit-combustivel',
  templateUrl: './view-edit-combustivel.component.html',
  styleUrls: ['./view-edit-combustivel.component.scss']
})
export class ViewEditCombustivelComponent implements OnInit {

  id: string = '';
  title: string = '';
  loading: boolean = false;
  editCombustivelForm!: FormGroup;
  edit: boolean = false;
  tiposCombustiveis = [
    { name: 'Comum', value: 'gasolina_comum' },
    { name: 'Aditivada', value: 'gasolina_aditivada' },
    { name: 'Etanol', value: 'etanol' },
    { name: 'GNV', value: 'gnv' },
    { name: 'Diesel', value: 'diesel' },
  ];
  constructor(
    private route: ActivatedRoute,
    private CombustivelService: CombustivelService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.id = this.route.snapshot.params.id;
    this.title = this.route.snapshot.data.title;
    console.log('id: ', this.id);
  }

  ngOnInit(): void {
    this.loading = true;
    this.initForm();
    this.buscaDadoscombustivel();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  buscaDadoscombustivel() {
    this.CombustivelService.read_id(this.id).subscribe(
      res => {
        let dadoscombustivel: CombustivelModel = res;
        let data = moment(dadoscombustivel.date).add(1, 'd').format('YYYY-MM-DD');
        this.editCombustivelForm.controls['date'].setValue(data);
        this.editCombustivelForm.controls['price'].setValue(dadoscombustivel.price);
        this.editCombustivelForm.controls['gas_type'].setValue(dadoscombustivel.gas_type);
        this.editCombustivelForm.controls['volume'].setValue(dadoscombustivel.volume);
        this.editCombustivelForm.controls['km'].setValue(dadoscombustivel.km);
        this.editCombustivelForm.controls['observation'].setValue(dadoscombustivel.observation);
      }, err => {
        console.log(err);
      }
    )
  }

  initForm() {
    this.editCombustivelForm = this.fb.group({
      date: ['', [Validators.required]],
      price: ['', [Validators.required]],
      gas_type: ['', [Validators.required]],
      volume: ['', [Validators.required]],
      km: ['', [Validators.required]],
      observation: [''],
    });
  }

  liberarEdicao() {
    // this.edit = true;
  }

  editar() {
    this.loading = true;
    console.log(this.editCombustivelForm.value);
    this.CombustivelService.update(this.id, this.editCombustivelForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/combustivel/visualiza']);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  remover() {
    this.loading = true;

    this.CombustivelService.delete(this.id).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.router.navigate(['home/combustivel/visualiza']);
      }, err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

}
