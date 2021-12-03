import { CombustivelModel } from '../../../shared/models/combustivel.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { CombustivelService } from '../combustivel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-edit-combustivel',
  templateUrl: './view-edit-combustivel.component.html',
  styleUrls: ['./view-edit-combustivel.component.scss']
})
export class ViewEditCombustivelComponent implements OnInit {

  id: string = '';
  titleView: string = '';
  titleEdit: string = '';
  loading: boolean = false;
  editCombustivelForm!: FormGroup;
  edit: boolean = false;
  save: boolean = false;
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
    private fb: FormBuilder,
    private location: Location
  ) {
    this.id = this.route.snapshot.params.id;
    this.titleView = this.route.snapshot.data.titleView;
    this.titleEdit = this.route.snapshot.data.titleEdit;
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

        this.editCombustivelForm = this.fb.group({
          date: [{ value: data, disabled: true }, [Validators.required]],
          price: [{ value: dadoscombustivel.price, disabled: true }, [Validators.required]],
          gas_type: [{ value: dadoscombustivel.gas_type, disabled: true }, [Validators.required]],
          volume: [{ value: dadoscombustivel.volume, disabled: true }, [Validators.required]],
          km: [{ value: dadoscombustivel.km, disabled: true }, [Validators.required]],
          observation: [{ value: dadoscombustivel.observation, disabled: true }],
        });

      }, err => {
        console.log(err);
      }
    )
  }

  initForm() {

  }

  liberarEdicao() {
    if (this.edit) {
      this.editar();
    } else {
      this.loading = true;

      this.editCombustivelForm.controls['date'].enable();
      this.editCombustivelForm.controls['price'].enable();
      this.editCombustivelForm.controls['gas_type'].enable();
      this.editCombustivelForm.controls['volume'].enable();
      this.editCombustivelForm.controls['km'].enable();
      this.editCombustivelForm.controls['observation'].enable();

      this.edit = true;
      setTimeout(() => {
        this.loading = false;
      }, 100);

      setTimeout(() => {
        this.save = true;
      }, 2000);
    }
  }

  editar() {
    this.loading = true;
    this.CombustivelService.update(this.id, this.editCombustivelForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/combustivel/registros']);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  voltar() {
    this.location.back();
  }

  remover() {
    this.loading = true;

    this.CombustivelService.delete(this.id).subscribe(
      res => {
        this.loading = false;
        this.router.navigate(['home/combustivel/registros']);
      }, err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

}
