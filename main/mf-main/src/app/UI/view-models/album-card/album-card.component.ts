import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { GetAlbumUseCases } from '../../../domain/usecase/get-album-use-case';

@Component({
  providers: [],
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  constructor(private _getAlbumUseCase: GetAlbumUseCases) {}
  myObs$ = fromEvent(window, 'user');
  response$;
  datos;
  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbumById('12');
    this.response$.subscribe((data) => {
      this.datos = data;
    });
    this.myObs$.subscribe((x) => {
      this.datos = null;
      console.log(x['detail']);
      this.response$ = this._getAlbumUseCase.getAlbumById(x['detail']['id']);
      this.response$.subscribe((data) => {
        this.datos = data;
        console.log(this.datos);
      });
    });
  }
}
