import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs-compat/add/operator/map';


@Injectable({
  providedIn: 'root'
})


export class BookService {

  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const url = `${this.API_URL}?q=${query}`;
    return this.http.get<any>(url);
  }
}
