import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'mf-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mf-main';
  bordered$ = fromEvent(window, 'isBordered');
  isBordered = false;
  validateBorder() {
    this.isBordered = getCookie('bordered') === 'no' ? false : true;
    this.bordered$.subscribe((x) => {
      this.isBordered = x['detail']['answer'];
      console.log(this.isBordered);
    });
  }

  ngOnInit(): void {
    this.validateBorder();
  }
}

export function getCookie(name: string) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');

  if (parts.length == 2) {
    return parts.pop().split(';').shift();
  }
}
