import { QuilometragemService } from './../quilometragem.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-quilometragem',
  templateUrl: './cadastra-quilometragem.component.html',
  styleUrls: ['./cadastra-quilometragem.component.scss'],
})
export class CadastraQuilometragemComponent implements OnInit {
  title: string = '';
  cadastraQuilometragemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private kmService: QuilometragemService,
    private router: Router
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cadastraQuilometragemForm = this.fb.group({
      date: ['', [Validators.required]],
      km: ['', [Validators.required]],
      observation: [''],
    });
  }

  submit() {
    console.log(this.cadastraQuilometragemForm.value);

    this.kmService.create(this.cadastraQuilometragemForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/quilometragem/visualiza']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
