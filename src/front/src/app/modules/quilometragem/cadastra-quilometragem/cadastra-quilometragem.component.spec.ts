import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraQuilometragemComponent } from './cadastra-quilometragem.component';

describe('CadastraQuilometragemComponent', () => {
  let component: CadastraQuilometragemComponent;
  let fixture: ComponentFixture<CadastraQuilometragemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraQuilometragemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraQuilometragemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
