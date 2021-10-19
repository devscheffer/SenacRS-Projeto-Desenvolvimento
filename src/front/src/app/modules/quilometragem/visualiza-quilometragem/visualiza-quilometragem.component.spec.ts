import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaQuilometragemComponent } from './visualiza-quilometragem.component';

describe('VisualizaQuilometragemComponent', () => {
  let component: VisualizaQuilometragemComponent;
  let fixture: ComponentFixture<VisualizaQuilometragemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaQuilometragemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaQuilometragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
