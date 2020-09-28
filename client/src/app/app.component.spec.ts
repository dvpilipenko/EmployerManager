import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { initialState } from './store/reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  const mockState = {
    employee: initialState,
  };
  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState: mockState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
