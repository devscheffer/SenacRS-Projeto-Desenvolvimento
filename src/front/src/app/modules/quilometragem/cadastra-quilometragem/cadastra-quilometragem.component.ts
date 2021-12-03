import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuilometragemService } from './../quilometragem.service';

@Component({
  selector: 'app-cadastra-quilometragem',
  templateUrl: './cadastra-quilometragem.component.html',
  styleUrls: ['./cadastra-quilometragem.component.scss'],
})
export class CadastraQuilometragemComponent implements OnInit {
  title: string = '';
  cadastraQuilometragemForm!: FormGroup;
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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
    this.cadastraQuilometragemForm = this.fb.group({
      date: ['', [Validators.required]],
      km: ['', [Validators.required]],
      observation: [''],
    });
  }

  submit() {
    this.loading = true;

    this.kmService.create(this.cadastraQuilometragemForm.value).subscribe(
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
}
