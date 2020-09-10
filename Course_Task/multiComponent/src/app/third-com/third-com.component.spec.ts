import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdComComponent } from './third-com.component';

describe('ThirdComComponent', () => {
  let component: ThirdComComponent;
  let fixture: ComponentFixture<ThirdComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
