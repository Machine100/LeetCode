import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateObjectsComponent } from './manipulate-objects.component';

describe('ManipulateObjectsComponent', () => {
  let component: ManipulateObjectsComponent;
  let fixture: ComponentFixture<ManipulateObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulateObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulateObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
