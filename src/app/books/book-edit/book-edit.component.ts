import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/authors/author';
import { AuthorService } from 'src/app/authors/author.service';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book = new Book();
  authors: Author[] = [];

  constructor(
    private readonly authorService: AuthorService,
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id != null) {
        this.bookService.getBook(id).subscribe(book => this.book = book);
      }
    })
    this.authorService.getAuthors().subscribe(authors => this.authors = authors);
  }

  onSubmit(form: NgForm) {
    if (this.book.id == null) {
      this.createAuthor(form);
    } else {
      this.updateAuthor(form);
    }
  }

  createAuthor(form: NgForm) {
    const authorSave = { ...form.value, author: this.authors.filter(a => a.id.toString() === form.value.author)[0] };
    this.bookService.addBook(authorSave)
      .subscribe(() => this.router.navigate(['/dashboard/books']));
  }

  updateAuthor(form: NgForm) {
    const authorSave = { ...form.value, author: this.authors.filter(a => a.id.toString() === form.value.author)[0] };
    this.bookService.updateBook(this.book.id, authorSave)
      .subscribe(() => this.router.navigate(['/dashboard/books']));
  }

}
