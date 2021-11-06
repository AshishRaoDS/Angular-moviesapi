import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidiesComponent } from './comidies.component';

describe('ComidiesComponent', () => {
  let component: ComidiesComponent;
  let fixture: ComponentFixture<ComidiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
