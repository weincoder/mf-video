// Inside of @org/api
import { ReplaySubject } from 'rxjs';

// `1` means that we want to buffer the last emitted value

export const myObservable$ = new ReplaySubject<String>(1);
