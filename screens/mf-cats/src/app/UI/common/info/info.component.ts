import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetCatUseCases } from 'src/app/domain/usecase/get-cat-use-case';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor(private _getCatUseCase: GetCatUseCases, private router: Router) {}
  response$;
  datos;

  ngOnInit(): void {
    this.response$ = this._getCatUseCase.getRandomCat();
    this.response$.subscribe((data) => {
      this.datos = data[0];
      console.log(this.datos);
    });
  }
}
