import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter-component',
  templateUrl: './custom-counter-component.component.html',
  styleUrls: ['./custom-counter-component.component.css']
})
export class CustomCounterComponentComponent {
   value: number = 0;

   constructor(private store: Store<{counter: CounterState}>) {}


  onAdd() {
   this.store.dispatch(customIncrement({count: this.value}));
   console.log(this.value);
  }
}
