import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapostedComponent } from './dataposted.component';

describe('DatapostedComponent', () => {
  let component: DatapostedComponent;
  let fixture: ComponentFixture<DatapostedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatapostedComponent]
    });
    fixture = TestBed.createComponent(DatapostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
