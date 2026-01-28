import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActPreview } from './act-preview';

describe('ActPreview', () => {
  let component: ActPreview;
  let fixture: ComponentFixture<ActPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
