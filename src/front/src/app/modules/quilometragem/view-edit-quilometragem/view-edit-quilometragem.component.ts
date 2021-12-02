import { KmModel } from './../../../shared/models/quilometragem.model';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { QuilometragemService } from './../quilometragem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-view-edit-quilometragem',
  templateUrl: './view-edit-quilometragem.component.html',
  styleUrls: ['./view-edit-quilometragem.component.scss']
})
export class ViewEditQuilometragemComponent implements OnInit {

  id: string = '';
  title: string = '';
  loading: boolean = false;
  editQuilometragemForm!: FormGroup;
  edit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private kmService: QuilometragemService,
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
    this.buscaDadosKM();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  buscaDadosKM() {
    this.kmService.read_id(this.id).subscribe(
      res => {
        let dadosKM: KmModel = res;
        let data = moment(dadosKM.date).add(1, 'd').format('YYYY-MM-DD');
        this.editQuilometragemForm.controls['date'].setValue(data);
        this.editQuilometragemForm.controls['km'].setValue(dadosKM.km);
        this.editQuilometragemForm.controls['observation'].setValue(dadosKM.observation);
      }, err => {
        console.log(err);
      }
    )
  }

  initForm() {
    this.editQuilometragemForm = this.fb.group({
      date: ['', [Validators.required]],
      km: ['', [Validators.required]],
      observation: [''],
    });
  }

  liberarEdicao() {
    // this.edit = true;
  }

  editar() {
    this.loading = true;

    this.kmService.update(this.id, this.editQuilometragemForm.value).subscribe(
      (res) => {
        this.loading = false;
        this.router.navigate(['home/quilometragem/visualiza']);
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  remover() {
    this.loading = true;

    this.kmService.delete(this.id).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.router.navigate(['home/quilometragem/visualiza']);
      }, err => {
        console.log(err);
        this.loading = false;
      }
    )
  }

}
