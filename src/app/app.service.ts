import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import {
  ApiResponse,
  Make,
  MakeModels,
  MakeTypes,
} from './models';
import { Store } from '@ngrx/store';
import {
  getAllMakes,
  getMakeDetailsModels,
  getMakeDetailsTypes,
  setMake,
} from './store/make.actions';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private httpClient = inject(HttpClient);

  constructor(private store: Store) {}

  getMakes() {
    const url =
      'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';
    this.httpClient
      .get<ApiResponse<Make>>(url)
      .pipe(map((data: ApiResponse<Make>) => data.Results))
      .subscribe((makes: Make[]) => {
        this.store.dispatch(getAllMakes({ makes }));
      });
  }

  getMakeDetail(make: Make) {
    const urlModels = `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/${make.Make_ID}?format=json`;
    const urlTypes = `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${make.Make_ID}?format=json`;
    this.store.dispatch(setMake({ make: make.Make_Name }));

    this.httpClient
      .get<any>(urlModels)
      .pipe(map((data: ApiResponse<MakeModels>) => data.Results))
      .subscribe((makeSelect: MakeModels[]) => {
        this.store.dispatch(getMakeDetailsModels({ makeSelect }));
      });

    this.httpClient
      .get<any>(urlTypes)
      .pipe(map((data: ApiResponse<MakeTypes>) => data.Results))
      .subscribe((makeSelect: MakeTypes[]) => {
        this.store.dispatch(getMakeDetailsTypes({ makeSelect }));
      });
  }
}
