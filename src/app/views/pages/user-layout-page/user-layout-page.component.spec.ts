import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLayoutPageComponent } from './user-layout-page.component';

describe('UserLayoutPageComponent', () => {
  let component: UserLayoutPageComponent;
  let fixture: ComponentFixture<UserLayoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLayoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLayoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
