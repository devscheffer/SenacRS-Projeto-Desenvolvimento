import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaPressaoComponent } from './visualiza-pressao.component';

describe('VisualizaPressaoComponent', () => {
  let component: VisualizaPressaoComponent;
  let fixture: ComponentFixture<VisualizaPressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaPressaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaPressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
