import { ManutencaoService } from './../manutencao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastra-manutencao',
  templateUrl: './cadastra-manutencao.component.html',
  styleUrls: ['./cadastra-manutencao.component.scss'],
})
export class CadastraManutencaoComponent implements OnInit {
  title: string = '';
  cadastraManutencaoForm!: FormGroup;
  public loading: boolean = false;
  validaSubmit: boolean = false;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private manutencaoService: ManutencaoService,
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
    this.cadastraManutencaoForm = this.fb.group({
      price: ['', [Validators.required]],
      service: ['', [Validators.required]],
      category: ['', [Validators.required]],
      date: ['', [Validators.required]],
      observation: [''],
    });
  }

  submit() {
    this.loading = true;
    this.validaSubmit = true;

    if (!this.cadastraManutencaoForm.invalid) {
      this.manutencaoService.create(this.cadastraManutencaoForm.value).subscribe(
        (res) => {
          this.loading = false;
          this.router.navigate(['home/manutencao/registros']);
        },
        (err) => {
          console.log(err);
          this.loading = false;
          this.validaSubmit = false;
        }
      );
    }
    else {
      this.loading = false;
    }
  }
}
