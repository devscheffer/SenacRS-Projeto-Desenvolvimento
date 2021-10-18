import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaManutencaoComponent } from './visualiza-manutencao.component';

describe('VisualizaManutencaoComponent', () => {
  let component: VisualizaManutencaoComponent;
  let fixture: ComponentFixture<VisualizaManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaManutencaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
