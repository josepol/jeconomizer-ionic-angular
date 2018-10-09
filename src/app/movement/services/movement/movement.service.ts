import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpService } from '../../../shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(
    private httpService: HttpService
  ) { }

  public getMovements(): Observable<any> {
    return this.httpService.get(`${environment.api_path}/assets/mocks/movements.json`);
  }
}
