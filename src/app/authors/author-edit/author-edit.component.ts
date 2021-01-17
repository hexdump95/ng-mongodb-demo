import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../author';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  author = new Author();

  constructor(
    private readonly authorService: AuthorService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id != null) {
        this.authorService.getAuthor(id).subscribe(author => this.author = author);
      }
    })
  }

  onSubmit(form: NgForm) {
    if (this.author.id == null) {
      this.createAuthor(form);
    } else {
      this.updateAuthor(form);
    }
  }

  createAuthor(form: NgForm) {
    this.authorService.addAuthor(form.value)
      .subscribe(() => this.router.navigate(['/dashboard/authors']));
  }

  updateAuthor(form: NgForm) {
    this.authorService.updateAuthor(this.author.id, { id: this.author.id, ...form.value })
      .subscribe(() => this.router.navigate(['/dashboard/authors']));
  }

}
