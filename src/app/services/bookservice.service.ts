import { Injectable } from '@angular/core';
import { Book } from '../types/book';
import { Observable, of } from 'rxjs';
import data from './../assets/bookApi';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  bookApidata : Book[] = data;

  constructor() { }

  getBooks() : Observable<Book[]>{
    return of(this.bookApidata); 
  }
}
