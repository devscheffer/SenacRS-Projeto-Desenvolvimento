import { PressaoModel } from '../../../shared/models/pressao.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { PressaoService } from '../pressao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-view-edit-pressao',
  templateUrl: './view-edit-pressao.component.html',
  styleUrls: ['./view-edit-pressao.component.scss']
})
export class ViewEditPressaoComponent implements OnInit {

  id: string = '';
  title: string = '';
  loading: boolean = false;
  editPressaoForm!: FormGroup;
  edit: boolean = false;
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
    private fb: FormBuilder
  ) {
    this.id = this.route.snapshot.params.id;
    this.title = this.route.snapshot.data.title;
    console.log('id: ', this.id);
  }

  ngOnInit(): void {
    this.loading = true;
    this.initForm();
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
        this.editPressaoForm.controls['date'].setValue(data);
        this.editPressaoForm.controls['position'].setValue(dadosPressao.position);
        this.editPressaoForm.controls['pressure_old'].setValue(dadosPressao.pressure_old);
        this.editPressaoForm.controls['pressure_new'].setValue(dadosPressao.pressure_new);
        this.editPressaoForm.controls['observation'].setValue(dadosPressao.observation);
      }, err => {
        console.log(err);
      }
    )
  }

  initForm() {
    this.editPressaoForm = this.fb.group({
      date: ['', [Validators.required]],
      position: ['', [Validators.required]],
      pressure_old: ['', [Validators.required]],
      pressure_new: ['', [Validators.required]],
      observation: [''],
    });
  }

  liberarEdicao() {
    // this.edit = true;
  }

  editar() {
    this.loading = true;
    console.log('Testou');
    this.PressaoService.update(this.id, this.editPressaoForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/pressao/visualiza']);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  remover() {
    this.loading = true;

    this.PressaoService.delete(this.id).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.router.navigate(['home/pressao/visualiza']);
      }, err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

}
