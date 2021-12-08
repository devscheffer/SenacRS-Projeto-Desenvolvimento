import { KmModel } from './../../../shared/models/quilometragem.model';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { QuilometragemService } from './../quilometragem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-edit-quilometragem',
  templateUrl: './view-edit-quilometragem.component.html',
  styleUrls: ['./view-edit-quilometragem.component.scss'],
})
export class ViewEditQuilometragemComponent implements OnInit {
  id: string = '';
  titleView: string = '';
  titleEdit: string = '';
  loading: boolean = false;
  editQuilometragemForm!: FormGroup;
  edit: boolean = false;
  save: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private kmService: QuilometragemService,
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
    this.buscaDadosKM();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  buscaDadosKM() {
    this.kmService.read_id(this.id).subscribe(
      (res) => {
        let dadosKM: KmModel = res;
        let data = moment(dadosKM.date).add(1, 'd').format('YYYY-MM-DD');

        this.editQuilometragemForm = this.fb.group({
          date: [{ value: data, disabled: true }, [Validators.required]],
          km: [{ value: res.km, disabled: true }, [Validators.required]],
          observation: [{ value: res.observation, disabled: true }],
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  liberarEdicao() {
    if (this.edit) {
      this.editar();
    } else {
      this.loading = true;
      this.editQuilometragemForm.controls['date'].enable();
      this.editQuilometragemForm.controls['km'].enable();
      this.editQuilometragemForm.controls['observation'].enable();
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
    this.kmService.update(this.id, this.editQuilometragemForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/quilometragem/registros']);
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

    this.kmService.delete(this.id).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/quilometragem/registros']);
      },
      (err) => {
        alert("Problema ao excluir registro!");
        console.log(err);
        this.loading = false;
      }
    );
  }
}
