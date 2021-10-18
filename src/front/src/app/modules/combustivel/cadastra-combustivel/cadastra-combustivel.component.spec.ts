import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCombustivelComponent } from './cadastra-combustivel.component';

describe('CadastraCombustivelComponent', () => {
  let component: CadastraCombustivelComponent;
  let fixture: ComponentFixture<CadastraCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
