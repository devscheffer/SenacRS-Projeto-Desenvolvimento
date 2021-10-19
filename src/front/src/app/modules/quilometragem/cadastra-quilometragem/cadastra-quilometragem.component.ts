import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastra-quilometragem',
  templateUrl: './cadastra-quilometragem.component.html',
  styleUrls: ['./cadastra-quilometragem.component.scss']
})
export class CadastraQuilometragemComponent implements OnInit {

  title: string = '';
  cadastraQuilometragemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.title = route.snapshot.data['title'];
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.cadastraQuilometragemForm = this.fb.group({
      data: ['', [Validators.required]],
      quilometragem: ['', [Validators.required]],
      obs: ['']
    })
  }

  submit() {
    console.log(this.cadastraQuilometragemForm.value);
  }

}
