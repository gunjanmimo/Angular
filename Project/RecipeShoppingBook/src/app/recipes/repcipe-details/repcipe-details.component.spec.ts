import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcipeDetailsComponent } from './repcipe-details.component';

describe('RepcipeDetailsComponent', () => {
  let component: RepcipeDetailsComponent;
  let fixture: ComponentFixture<RepcipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepcipeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
