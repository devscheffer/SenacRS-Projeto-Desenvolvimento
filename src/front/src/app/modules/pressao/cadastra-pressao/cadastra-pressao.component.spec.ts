import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPressaoComponent } from './cadastra-pressao.component';

describe('CadastraPressaoComponent', () => {
  let component: CadastraPressaoComponent;
  let fixture: ComponentFixture<CadastraPressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraPressaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
