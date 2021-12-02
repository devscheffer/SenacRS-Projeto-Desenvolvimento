import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditManutencaoComponent } from './view-edit-manutencao.component';

describe('ViewEditManutencaoComponent', () => {
  let component: ViewEditManutencaoComponent;
  let fixture: ComponentFixture<ViewEditManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditManutencaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
