import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizaCombustivelComponent } from './visualiza-combustivel.component';

describe('VisualizaCombustivelComponent', () => {
  let component: VisualizaCombustivelComponent;
  let fixture: ComponentFixture<VisualizaCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizaCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizaCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
