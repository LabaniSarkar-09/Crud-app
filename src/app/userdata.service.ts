import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { cards } from './models/cards'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  Url:string= 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http:HttpClient) { }

  getData(): Observable<cards[]>{
    return this.http.get<cards[]>(this.Url)
  }
  
  deleteCard(card:cards): Observable<cards>{
    const url = `${this.Url}/${card.id}`;
    console.log(card);
    return this.http.delete<cards>(url);

  }

  createCard(card:cards): Observable<cards>{
    return this.http.post<cards>(this.Url, card);
  }
  updateCard(card:cards, id:number): Observable<cards>{
    const url = `${this.Url}/${card.id}`;
    return this.http.put<cards>(url, card);
  }
  
  getCard(id:number) {
    return this.http.get<cards>(this.Url);
  }
  
}
