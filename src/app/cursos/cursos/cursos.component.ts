import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';

import { Curso } from './../model/curso';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Observable<Curso[]>;
  displayedColumns = ['name','category'];

  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursosService = new CursosService();
    this.cursos = this.cursosService.list();
  }

  ngOnInit(): void {

  }

}
