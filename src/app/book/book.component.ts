import { Component, Input } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() 
  props?:Book ;

  constructor() {
    // Optionally, you can initialize props here
    // this.props = { /* Initialize if necessary */ };
  }

}
