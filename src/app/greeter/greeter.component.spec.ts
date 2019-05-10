import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  //declaration of the component and the fixture
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent ]
    })
    .compileComponents(); //compile all of the GreeterComponent, the ones in the declarations.
    //since these are external files, it's a bit slow, so the async function exists to load the components
    //in a faster manner
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
