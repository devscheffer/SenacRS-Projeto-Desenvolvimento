import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPressaoPneuComponent } from './cadastra-pressao-pneu.component';

describe('CadastraPressaoPneuComponent', () => {
  let component: CadastraPressaoPneuComponent;
  let fixture: ComponentFixture<CadastraPressaoPneuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraPressaoPneuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPressaoPneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
