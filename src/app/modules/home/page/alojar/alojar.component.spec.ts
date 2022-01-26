import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlojarComponent } from './alojar.component';

describe('AlojarComponent', () => {
  let component: AlojarComponent;
  let fixture: ComponentFixture<AlojarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlojarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlojarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
