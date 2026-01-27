import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActForm } from './act-form';

describe('ActForm', () => {
  let component: ActForm;
  let fixture: ComponentFixture<ActForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
