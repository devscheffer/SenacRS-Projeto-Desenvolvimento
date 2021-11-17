import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  public loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

}
