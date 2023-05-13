import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface IBookBase{
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    imageLinks?:  {thumbnail: string}

}

export interface IBookItem {
  volumeInfo: IBookBase
}

export interface IBook  extends IBookBase {
  thumbnail: string;
}

@Component({
  selector: 'app-seite1',
  templateUrl: './seite1.component.html',
  styleUrls: ['./seite1.component.css']
})
export class Seite1Component {

  query: string = '';
  books: IBook[] = [];

  constructor(private http: HttpClient) { }

  searchBooks(): void {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(this.query);
    this.http.get<any>(url).subscribe(data => {
      this.books = data.items.map((item: IBookItem) => {
        return {
          title: item.volumeInfo.title,
          authors: item.volumeInfo.authors ? item.volumeInfo.authors : ['N/A'],
          publisher: item.volumeInfo.publisher ? item.volumeInfo.publisher : 'N/A',
          publishedDate: item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : 'N/A',
          thumbnail: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x192.png?text=No+Image'
        };
      });
    });
  }
}
