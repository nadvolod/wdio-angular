import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('VoterComponent', () => {
  //declaration of the component and the fixture
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    .compileComponents(); //compile all of the GreeterComponent, the ones in the declarations.
    //since these are external files, it's a bit slow, so the async function exists to load the components
    //in a faster manner
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    //This will tell angular to detect changes in the DOM. So when we do something like
    //setting the votes
    fixture.detectChanges();

    //we are finding an element by class vote-count. This is a wrapper around the native HTML
    //That's this element <span class="vote-count">{{ totalVotes }}</span> from voter.component.html
    let de = fixture.debugElement.query(By.css('.vote-count'));
    //we are basically casting the element that's returned from nativeElement into an HTMLElement so that
    //we have intellisense
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain('21');
  });
  it('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    //This will tell angular to detect changes in the DOM. So when we do something like
    //setting the votes
    fixture.detectChanges();

    //we are finding an element by class vote-count. This is a wrapper around the native HTML
    //That's this element <span class="vote-count">{{ totalVotes }}</span> from voter.component.html
    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(de.classes['highlighted']).toBeTruthy();
  });
});
