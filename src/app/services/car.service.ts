import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:7273/api/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl+'cars/getall'
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath );
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl+'cars/getbybrandid?brandId='+ brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath );
  }

  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorAndBrand(colorId:number,brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcarsbycolorandbrand?colorId="+colorId +"&brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
