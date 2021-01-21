import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.css']
})
export class BookDashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  onAddBook() {
    this.router.navigate(['./create'], { relativeTo: this.route });
  }

  onEdit(id: string) {
    this.router.navigate([id, 'edit'], { relativeTo: this.route });
  }

  onDelete(book: Book) {
    if (confirm(
      `Are you sure you want to delete ${book.title}?\n(ID: ${book.id})`)) {
      this.bookService.deleteBook(book.id).subscribe(
        () => this.books = this.books.filter(b => b.id !== book.id)
      );
    }
  }

}
