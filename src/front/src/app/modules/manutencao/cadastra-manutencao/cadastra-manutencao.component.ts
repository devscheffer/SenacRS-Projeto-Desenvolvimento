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
  opcoes = [
    { name: 'Motor', value: 'motor' },
    { name: 'Rodas', value: 'rodas' },
    { name: 'Suspenção', value: 'suspencao' },
    { name: 'Arrefecimento', value: 'arrefecimento' },
    { name: 'Peça', value: 'peca' },
  ];

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
      category: ['Selecione a posição...', [Validators.required]],
      date: ['', [Validators.required]],
      observation: [''],
    });
  }

  submit() {
    this.loading = true;
    this.validaSubmit = true;

    if (!this.cadastraManutencaoForm.invalid) {
      if (
        this.cadastraManutencaoForm.get('position')?.value !=
        'Selecione a posição...'
      ) {
        this.manutencaoService
          .create(this.cadastraManutencaoForm.value)
          .subscribe(
            (res) => {
              this.loading = false;
              this.router.navigate(['home/manutencao/registros']);
            },
            (err) => {
              alert("Problema ao cadastrar manutenção!");
              console.log(err);
              this.loading = false;
              this.validaSubmit = false;
            }
          );
      } else{
        this.loading = false;
      }
    } else {
      this.loading = false;
    }
  }
}
