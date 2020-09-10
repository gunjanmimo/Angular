import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepcipeListComponent } from './repcipe-list.component';

describe('RepcipeListComponent', () => {
  let component: RepcipeListComponent;
  let fixture: ComponentFixture<RepcipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepcipeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepcipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
