import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GetCatUseCases } from 'src/app/domain/usecase/get-cat-use-case';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss'],
})
export class AnotherComponent implements OnInit, OnChanges {
  constructor(private _getCatUseCase: GetCatUseCases, private router: Router) {}
  response$;
  datos;
  ngOnChanges(changes: SimpleChanges): void {
    this.response$ = this._getCatUseCase.getRandomCat();
    this.response$.subscribe((data) => {
      this.datos = data[0];
      console.log(this.datos);
    });
  }
  ngOnInit(): void {
    this.response$ = this._getCatUseCase.getRandomCat();
    this.response$.subscribe((data) => {
      this.datos = data[0];
      console.log(this.datos);
    });
  }
}
