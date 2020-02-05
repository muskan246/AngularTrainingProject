import { HttpClientModule, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError as observableThrowError } from 'rxjs';
import { Iuser } from './user';
import { tap, catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

private _url : string = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }
    getEmployees(): Observable<Iuser[]>{
    return this.http.get<Iuser[]>(this._url + '/get-all-user')
    .pipe(tap(data => console.log(JSON.stringify(data))), catchError(this.errorHandler));
    }

    getEmployeeById(userId: number): Observable<Iuser[]> {
      console.log('id', userId);
      return this.http.get<Iuser[]>(this._url + '/get-user-by-id?id=' + userId)
    .pipe(tap(data => console.log('Hey new dtata',(JSON.stringify(data)))), catchError(this.errorHandler));
    }

   createEmployee(user: Iuser ):Observable<Iuser[]> {
      console.log('DATA IS TS', user);

      return this.http.post<Iuser[]>(this._url + '/create-user', user)
        .pipe(tap(data => console.log('Hey dataa for create', (JSON.stringify(data)))), catchError(this.errorHandler));
    }

    deleteEmployeeById(userId: number): Observable<Iuser[]> {
      console.log('id to be deleted',userId);
      return this.http.delete<Iuser[]>(this._url + '/delete-user?id=' + userId)
    .pipe(tap(data => console.log('Hey new data to be deleted', (JSON.stringify(data)))), catchError(this.errorHandler));

    }

    //Update article
    updateEmployee(user: Iuser):Observable<Iuser[]> {
      console.log('DATA to be updated', user);
      return this.http.put<Iuser[]>(this._url + '/update-user', user)
      .pipe(tap(data => console.log('Hey dataa for update', (JSON.stringify(data)))), catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
  return observableThrowError(error.message || 'Server eroor');
}


}
