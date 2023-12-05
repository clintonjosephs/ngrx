import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  agents!: Observable<string>;
  agentName!: string;

  ngOnInit(): void {
    this.agents = new Observable((observer) => {
      try {
        observer.next('Ram');

        setInterval(() => {
          observer.next('Mark');
        }, 3000);

        setInterval(() => {
          observer.next('Sita');
        }, 6000)
      } catch (e) {
        observer.error(e);
      }
    });

    this.agents.subscribe(data => {
      console.log(data);
      this.agentName = data;
    })
  }
}
