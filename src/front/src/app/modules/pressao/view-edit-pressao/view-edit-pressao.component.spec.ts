import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditPressaoComponent } from './view-edit-pressao.component';

describe('ViewEditQuilometragemComponent', () => {
  let component: ViewEditPressaoComponent;
  let fixture: ComponentFixture<ViewEditPressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditPressaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditPressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
