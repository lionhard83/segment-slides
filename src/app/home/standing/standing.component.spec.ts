import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StandingComponent } from './standing.component';

describe('StandingComponent', () => {
  let component: StandingComponent;
  let fixture: ComponentFixture<StandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
