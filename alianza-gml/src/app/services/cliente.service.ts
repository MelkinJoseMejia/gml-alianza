import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import {tap} from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private _refresh$ = new Subject<void>();

  get refresh$(){
    return this._refresh$;
  }

  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(baseUrl + "/listar");
  }

  get(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl + "/crearCliente", data)
    .pipe(
      tap(() => {
        this.refresh$.next();
      })
    )  
  }

  export(): Observable<any> {
    return this.http.get<Object>(baseUrl + "/export");
  }

}
