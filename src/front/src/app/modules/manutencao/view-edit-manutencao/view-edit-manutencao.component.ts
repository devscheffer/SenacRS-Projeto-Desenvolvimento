import { ManutencaoModel } from '../../../shared/models/manutencao.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ManutencaoService } from '../manutencao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-edit-manutencao',
  templateUrl: './view-edit-manutencao.component.html',
  styleUrls: ['./view-edit-manutencao.component.scss']
})
export class ViewEditManutencaoComponent implements OnInit {

  id: string = '';
  titleView: string = '';
  titleEdit: string = '';
  loading: boolean = false;
  editManutencaoForm!: FormGroup;
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
    private ManutencaoService: ManutencaoService,
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
    this.buscaDadosmanutencao();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  buscaDadosmanutencao() {
    this.ManutencaoService.read_id(this.id).subscribe(
      res => {
        let dadosManutencao: ManutencaoModel = res;
        let data = moment(dadosManutencao.date).add(1, 'd').format('YYYY-MM-DD');

        this.editManutencaoForm = this.fb.group({
          date: [{ value: data, disabled: true }, [Validators.required]],
          service: [{ value: dadosManutencao.service, disabled: true }, [Validators.required]],
          category: [{ value: dadosManutencao.category, disabled: true }, [Validators.required]],
          price: [{ value: dadosManutencao.price, disabled: true }, [Validators.required]],
          observation: [{ value: dadosManutencao.observation, disabled: true }],
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

      this.editManutencaoForm.controls['date'].enable();
      this.editManutencaoForm.controls['service'].enable();
      this.editManutencaoForm.controls['category'].enable();
      this.editManutencaoForm.controls['price'].enable();
      this.editManutencaoForm.controls['observation'].enable();

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
    this.ManutencaoService.update(this.id, this.editManutencaoForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/manutencao/registros']);
      },
      (err) => {
        alert("Problema ao editar registro!");
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

    this.ManutencaoService.delete(this.id).subscribe(
      res => {
        this.loading = false;
        this.router.navigate(['home/manutencao/registros']);
      }, err => {
        alert("Problema ao excluir registro!");
        console.log(err);
        this.loading = false;
      }
    )
  }

}
