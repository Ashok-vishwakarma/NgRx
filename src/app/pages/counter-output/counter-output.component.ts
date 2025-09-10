import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countAction, decrementCountAction } from '../r-action/counter.action';


@Component({
  selector: 'app-counter-output',
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class CounterOutputComponent {

  count: any
  test$!: Observable<number>



  // for multiple store use in single component then make interface and import here like this below i mention
  //   export interface AppState {
  //   counter: number;
  //   auth: AuthState; // whatever shape your auth reducer returns
  // }

  //write this in component.ts ke constructor ke under 
  // constructor(private store: Store<AppState>) {
  //   this.counter$ = this.store.select('counter'); // select counter slice
  //   this.auth$ = this.store.select('auth');       // select auth slice
  // }


  constructor(private store: Store<{ counter: number }>) {
    this.count = this.store.select('counter')
    // this.count$.subscribe()


    // this.store.select('counter').subscribe((res:any)=>{
    //   this.count=res
    // })
  }

  decrement() {
    this.store.dispatch(decrementCountAction({ value: 1 }))
  }

  increment() {
    this.store.dispatch(countAction({ value: 1 }))
  }


}
