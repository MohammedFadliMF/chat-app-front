import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileReelsComponent } from './profile-reels.component';

describe('ProfileReelsComponent', () => {
  let component: ProfileReelsComponent;
  let fixture: ComponentFixture<ProfileReelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileReelsComponent]
    });
    fixture = TestBed.createComponent(ProfileReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
