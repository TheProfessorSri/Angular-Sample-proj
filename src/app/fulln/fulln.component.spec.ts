import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullnComponent } from './fulln.component';

describe('FullnComponent', () => {
  let component: FullnComponent;
  let fixture: ComponentFixture<FullnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
