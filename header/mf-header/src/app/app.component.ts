import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'bc-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDark = false;
  isBordered = false;
  numberRandom = Math.round(Math.random() * 1000);
  borderedCookie = 'no';
  bordered$ = fromEvent(window, 'isBordered');

  validateBorder() {
    this.isBordered = getCookie('bordered') === 'no' ? false : true;
    this.bordered$.subscribe((x) => {
      this.isBordered = x['detail']['answer'];
      console.log(this.isBordered);
      console.log('header event listener');
    });
  }

  ngOnInit(): void {
    this.validateBorder();
  }
  clic() {
    this.isDark = !this.isDark;
    let event = new CustomEvent('isDark', {
      detail: {
        answer: this.isDark,
      },
    });

    window.dispatchEvent(event);
  }
  clicBorder() {
    this.isBordered = !this.isBordered;
    this.borderedCookie = this.isBordered ? 'yes' : 'no';
    setCookie('bordered', this.borderedCookie);
    let event = new CustomEvent('isBordered', {
      detail: {
        answer: this.isBordered,
      },
    });
    window.dispatchEvent(event);
  }
  title = 'bc-header';
}
export function setCookie(name: string, val: string) {
  const date = new Date();
  const value = val;
  // Set it expire in 7 days
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  // Set it
  document.cookie =
    name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}
export function getCookie(name: string) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');

  if (parts.length == 2) {
    return parts.pop().split(';').shift();
  }
}