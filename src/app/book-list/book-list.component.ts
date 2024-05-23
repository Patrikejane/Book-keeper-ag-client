import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BookserviceService } from '../services/bookservice.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent　implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
    this.getBooks();

    console.log(this.books);
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe((books:Book[]) => this.books = books);
  }

}
