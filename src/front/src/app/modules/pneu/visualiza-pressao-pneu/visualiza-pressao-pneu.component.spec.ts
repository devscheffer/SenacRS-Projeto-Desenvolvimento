import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaPressaoPneuComponent } from './visualiza-pressao-pneu.component';

describe('VisualizaPressaoPneuComponent', () => {
  let component: VisualizaPressaoPneuComponent;
  let fixture: ComponentFixture<VisualizaPressaoPneuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaPressaoPneuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaPressaoPneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
