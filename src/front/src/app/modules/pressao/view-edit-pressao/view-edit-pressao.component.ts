import { PressaoModel } from '../../../shared/models/pressao.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { PressaoService } from '../pressao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-edit-pressao',
  templateUrl: './view-edit-pressao.component.html',
  styleUrls: ['./view-edit-pressao.component.scss']
})
export class ViewEditPressaoComponent implements OnInit {

  id: string = '';
  titleView: string = '';
  titleEdit: string = '';
  loading: boolean = false;
  editPressaoForm!: FormGroup;
  edit: boolean = false;
  save: boolean = false;
  opcoes = [
    { name: 'Frente Esquerda', value: 'fl' },
    { name: 'Frente Direita', value: 'fr' },
    { name: 'Traseira Esquerda', value: 'bl' },
    { name: 'Traseira Direita', value: 'br' },
  ];

  constructor(
    private route: ActivatedRoute,
    private PressaoService: PressaoService,
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
    this.buscaDadosPressao();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  buscaDadosPressao() {
    this.PressaoService.read_id(this.id).subscribe(
      res => {
        let dadosPressao: PressaoModel = res;
        let data = moment(dadosPressao.date).add(1, 'd').format('YYYY-MM-DD');

        this.editPressaoForm = this.fb.group({
          date: [{ value: data, disabled: true }, [Validators.required]],
          position: [{ value: dadosPressao.position, disabled: true }, [Validators.required]],
          pressure_old: [{ value: dadosPressao.pressure_old, disabled: true }, [Validators.required]],
          pressure_new: [{ value: dadosPressao.pressure_new, disabled: true }, [Validators.required]],
          observation: [{ value: dadosPressao.observation, disabled: true }]
        });

      }, err => {
        console.log(err);
      }
    )
  }

  liberarEdicao() {
    if (this.edit) {
      this.editar();
    } else {
      this.loading = true;
      this.editPressaoForm.controls['date'].enable();
      this.editPressaoForm.controls['position'].enable();
      this.editPressaoForm.controls['pressure_old'].enable();
      this.editPressaoForm.controls['pressure_new'].enable();
      this.editPressaoForm.controls['observation'].enable();
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
    this.PressaoService.update(this.id, this.editPressaoForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/pressao/registros']);
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

    this.PressaoService.delete(this.id).subscribe(
      res => {
        this.loading = false;
        this.router.navigate(['home/pressao/registros']);
      }, err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

}
