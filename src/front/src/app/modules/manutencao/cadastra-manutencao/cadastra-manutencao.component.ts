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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ManutencaoService: ManutencaoService,
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

    this.ManutencaoService.create(this.cadastraManutencaoForm.value).subscribe(
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
}
