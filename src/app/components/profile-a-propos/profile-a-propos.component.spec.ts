import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAProposComponent } from './profile-a-propos.component';

describe('ProfileAProposComponent', () => {
  let component: ProfileAProposComponent;
  let fixture: ComponentFixture<ProfileAProposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAProposComponent]
    });
    fixture = TestBed.createComponent(ProfileAProposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
