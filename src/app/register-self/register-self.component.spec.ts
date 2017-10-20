import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSelfComponent } from './register-self.component';

describe('RegisterSelfComponent', () => {
  let component: RegisterSelfComponent;
  let fixture: ComponentFixture<RegisterSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
