import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Cat } from 'src/app/domain/models/Cat/cat';
import { CatGateway } from 'src/app/domain/models/Cat/gateway/cat-gateway';

@Injectable({
  providedIn: 'root',
})
export class CatApiService extends CatGateway {
  private _url = 'https://api.thecatapi.com/v1/images/search/';
  constructor(private http: HttpClient) {
    super();
  }
  getRandomCat(): Observable<Cat> {
    return this.http.get<Cat>(this._url).pipe(delay(1200));
  }
}
