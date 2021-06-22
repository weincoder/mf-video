import { Observable } from 'rxjs';
import { Cat } from '../cat';

export abstract class CatGateway {
  abstract getRandomCat(): Observable<Cat>;
}
