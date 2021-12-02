import { ManutencaoModel } from '../../../shared/models/manutencao.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ManutencaoService } from '../manutencao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-view-edit-manutencao',
  templateUrl: './view-edit-manutencao.component.html',
  styleUrls: ['./view-edit-manutencao.component.scss']
})
export class ViewEditManutencaoComponent implements OnInit {

  id: string = '';
  title: string = '';
  loading: boolean = false;
  editManutencaoForm!: FormGroup;
  edit: boolean = false;
  opcoes = [
    { name: 'Frente Esquerda', value: 'fl' },
    { name: 'Frente Direita', value: 'fr' },
    { name: 'Traseira Esquerda', value: 'bl' },
    { name: 'Traseira Direita', value: 'br' },
  ];
  constructor(
    private route: ActivatedRoute,
    private ManutencaoService: ManutencaoService,
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
    this.buscaDadosmanutencao();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  buscaDadosmanutencao() {
    this.ManutencaoService.read_id(this.id).subscribe(
      res => {
        let dadosmanutencao: ManutencaoModel = res;
        let data = moment(dadosmanutencao.date).add(1, 'd').format('YYYY-MM-DD');
        this.editManutencaoForm.controls['date'].setValue(data);
        this.editManutencaoForm.controls['service'].setValue(dadosmanutencao.service);
        this.editManutencaoForm.controls['category'].setValue(dadosmanutencao.category);
        this.editManutencaoForm.controls['price'].setValue(dadosmanutencao.price);
        this.editManutencaoForm.controls['observation'].setValue(dadosmanutencao.observation);
      }, err => {
        console.log(err);
      }
    )
  }

  initForm() {
    this.editManutencaoForm = this.fb.group({
      date: ['', [Validators.required]],
      service: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      observation: [''],
    });
  }

  liberarEdicao() {
    // this.edit = true;
  }

  editar() {
    this.loading = true;
    console.log(this.editManutencaoForm.value);
    this.ManutencaoService.update(this.id, this.editManutencaoForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/manutencao/visualiza']);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  remover() {
    this.loading = true;

    this.ManutencaoService.delete(this.id).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.router.navigate(['home/manutencao/visualiza']);
      }, err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

}
