import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-component',
  templateUrl: './custom-counter-component.component.html',
  styleUrls: ['./custom-counter-component.component.css']
})
export class CustomCounterComponentComponent implements OnInit {
   value: number = 0;
   channelName$: Observable<string> | undefined;

   constructor(private store: Store<{counter: CounterState}>) {}

   ngOnInit(): void {
      this.channelName$ = this.store.select(getChannelName)
   }


  onAdd() {
   this.store.dispatch(customIncrement({count: this.value}));
  }

  onChangeChannelName() {
    const newChannelName = "Code Evolution";
    this.store.dispatch(changeChannelName({channelName: newChannelName}));
  }

}
