import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class DataService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getData1() {
    return this.httpClient.get('./assets/datas/data-1.json');
  }

  getData2() {
    return this.httpClient.get('./assets/datas/data-2.json');
  }
}
