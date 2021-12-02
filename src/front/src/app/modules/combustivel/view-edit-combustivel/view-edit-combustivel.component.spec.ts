import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditCombustivelComponent } from './view-edit-combustivel.component';

describe('ViewEditCombustivelComponent', () => {
  let component: ViewEditCombustivelComponent;
  let fixture: ComponentFixture<ViewEditCombustivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditCombustivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditCombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
