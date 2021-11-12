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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private manutencaoService: ManutencaoService,
    private router: Router
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.initForm();
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
    console.log(this.cadastraManutencaoForm.value);

    this.manutencaoService.create(this.cadastraManutencaoForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/manutencao/visualiza']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
