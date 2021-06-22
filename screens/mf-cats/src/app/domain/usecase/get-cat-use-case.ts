import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Cat } from '../models/Cat/cat';
import { CatGateway } from '../models/Cat/gateway/cat-gateway';

@Injectable({
  providedIn: 'root',
})
export class GetCatUseCases {
  constructor(private _catGateWay: CatGateway) {}
  getRandomCat(): Observable<Cat> {
    //TODO: En este sitio podríamos manejar las configuraciones
    //en cache
    return this._catGateWay.getRandomCat();
  }
}
