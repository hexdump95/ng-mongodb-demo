import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.css']
})
export class AuthorDashboardComponent implements OnInit {
  authors: Author[] = [];

  constructor(
    private readonly authorService: AuthorService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe(
      authors => this.authors = authors,
      () => { }
    );
  }

  onAddAuthor() {
    this.router.navigate(['authors/create']);
  }

  onEdit(id: string) {
    this.router.navigate(['authors', id, 'edit']);
  }

  onDelete(author: Author) {
    if (confirm(
      `Are you sure you want to delete ${author.firstName} ${author.lastName}?
          (ID: ${author.id})
      `)) {
      this.authorService.deleteAuthor(author.id)
        .subscribe(
          () => this.authors = this.authors.filter(a => a.id !== author.id),
          () => { }
        );
    }
  }

}
