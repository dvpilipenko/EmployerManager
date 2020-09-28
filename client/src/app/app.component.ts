import { Component, OnInit } from '@angular/core';
import { State } from './store/reducer';
import { Store } from '@ngrx/store';
import { selectIsLoading } from './store/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) {}
  isLoading$ = this.store.select(selectIsLoading);
  ngOnInit(): void {}
}
