import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  @ViewChild('validate', { static: true })
  validate!: ElementRef;

  agents!: Observable<string>;
  agentName!: string;

  students: Observable<string[]> = of(['Mark', 'Ram', 'Sita', 'Lisa']);

  studentNames: Observable<string> = of('Ram');

  student$: Observable<any> = of({
    id: 10,
    name: 'Ram'
  })

  orders$: Observable<string> = from(['Fashion', 'Electronics', 'Mobile', 'Household'])

  ngOnInit(): void {

    this.orders$.subscribe(data => {
      const seqNum$ = interval(500);

      seqNum$.subscribe(num => {
        if (num < 5) {
          console.log(data + num);
        }
      });

      console.log(data);
    });

    // this.students.subscribe((data => console.log(data)));

    // this.orders$.subscribe((data => console.log(data)));

    // this.agents = new Observable((observer) => {
    //   try {
    //     observer.next('Ram');

    //     setInterval(() => {
    //       observer.next('Mark');
    //     }, 3000);

    //     setInterval(() => {
    //       observer.next('Sita');
    //     }, 6000)
    //   } catch (e) {
    //     observer.error(e);
    //   }
    // });

    // this.agents.subscribe(data => {
    //   console.log(data);
    //   this.agentName = data;
    // })




  }

  rxjsEventObservable() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');
    btnObservable$.subscribe((data) => {
      console.log(data);
    })
  }
}
