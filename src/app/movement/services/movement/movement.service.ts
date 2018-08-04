import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(
    private http: HttpClient
  ) { }

  public getMovements(): Observable<any> {
    return this.http.get(`${environment.api_path}/assets/mocks/movements.json`);
  }
}
