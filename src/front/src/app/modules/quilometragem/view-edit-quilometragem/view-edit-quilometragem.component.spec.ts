import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditQuilometragemComponent } from './view-edit-quilometragem.component';

describe('ViewEditQuilometragemComponent', () => {
  let component: ViewEditQuilometragemComponent;
  let fixture: ComponentFixture<ViewEditQuilometragemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditQuilometragemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditQuilometragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
