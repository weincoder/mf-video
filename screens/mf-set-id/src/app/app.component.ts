import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { myObservable$ } from './obsexp.service';

@Component({
  selector: 'mf-set-id',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor() {}
  title = 'mf-set-id';  
  isBordered = false;
  bordered$ = fromEvent(window, 'isBordered');

  validateBorder() {
    this.bordered$.subscribe((x:any) => {
      this.isBordered = x['detail']['answer'];
      console.log(this.isBordered);
    });
  }

  ngOnInit(): void {
    this.validateBorder();
    myObservable$.subscribe((data: any) => {
      console.log(data); // 0.799234057357979
    });
  }
  variable = true;
  inpDataId: any;
  clic(value: any) {
    this.variable = !this.variable;
    // Execute with the observer object
    myObservable$.next('holi');
    let event = new CustomEvent('user', {
      detail: {
        name: 'Dan',
        pass: '1234',
        id: value,
      },
    });
    console.log(value);
    window.dispatchEvent(event);
  }
  
}




