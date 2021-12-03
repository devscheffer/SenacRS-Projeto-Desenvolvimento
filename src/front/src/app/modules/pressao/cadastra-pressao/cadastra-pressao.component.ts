import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PressaoService } from '../pressao.service';

@Component({
  selector: 'app-cadastra-pressao',
  templateUrl: './cadastra-pressao.component.html',
  styleUrls: ['./cadastra-pressao.component.scss'],
})
export class CadastraPressaoComponent implements OnInit {
  title: string = '';
  cadastraPressaoForm!: FormGroup;
  public loading: boolean = false;

  opcoes = [
    { name: 'Frente Esquerda', value: 'fl' },
    { name: 'Frente Direita', value: 'fr' },
    { name: 'Traseira Esquerda', value: 'bl' },
    { name: 'Traseira Direita', value: 'br' },
  ];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private PressaoService: PressaoService,
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
    this.cadastraPressaoForm = this.fb.group({
      position: ['Selecione a posição...',
      [
        Validators.required
      ]
      ],
      pressure_old: ['', [Validators.required]],
      pressure_new: ['', [Validators.required]],
      date: ['', [Validators.required]],
      observation: [''],
    });
  }

  submit() {
    this.loading = true;

    this.PressaoService.create(this.cadastraPressaoForm.value).subscribe(
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
}
