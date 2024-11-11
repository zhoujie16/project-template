import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDrawerComponent } from './demo-drawer.component';

describe('DemoDrawerComponent', () => {
  let component: DemoDrawerComponent;
  let fixture: ComponentFixture<DemoDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoDrawerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
