import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraManutencaoComponent } from './cadastra-manutencao.component';

describe('CadastraManutencaoComponent', () => {
  let component: CadastraManutencaoComponent;
  let fixture: ComponentFixture<CadastraManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraManutencaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
