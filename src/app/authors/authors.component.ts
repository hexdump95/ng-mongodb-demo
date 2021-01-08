import { Component, OnInit } from '@angular/core';
import { Author } from './author';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[] = [];

  constructor(private readonly authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(authors => this.authors = authors);
  }

}
