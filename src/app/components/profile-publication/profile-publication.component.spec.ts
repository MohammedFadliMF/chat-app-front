import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePublicationComponent } from './profile-publication.component';

describe('ProfilePublicationComponent', () => {
  let component: ProfilePublicationComponent;
  let fixture: ComponentFixture<ProfilePublicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePublicationComponent]
    });
    fixture = TestBed.createComponent(ProfilePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
