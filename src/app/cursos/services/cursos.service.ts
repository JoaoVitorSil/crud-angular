import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Curso } from './../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API =  'api/cursos';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Curso[]>(this.API).
    pipe(
      first(),
      delay(2000),
      tap(cursos => console.log(cursos))
    );
  }
}
