import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {

    let products = [
      { id: 1, productName: 'ABC', productCode: '00A', description: '00B' }, 
      { id: 2, productName: 'DEF', productCode: '00B', description: '00B' }, 
      { id: 3, productName: 'GHI', productCode: '00C', description: '00C' }];

    return {products};
  };
}
