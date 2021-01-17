import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorDashboardComponent } from './authors/author-dashboard/author-dashboard.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookDashboardComponent } from './books/book-dashboard/book-dashboard.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'authors', component: AuthorsComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'authors', component: AuthorDashboardComponent },
      { path: 'authors/create', component: AuthorEditComponent },
      { path: 'authors/:id/edit', component: AuthorEditComponent },
      { path: 'books', component: BookDashboardComponent },
      { path: 'books/create', component: BookEditComponent },
      { path: 'books/:id/edit', component: BookEditComponent },
      { path: '', redirectTo: 'authors', pathMatch: 'full' }
    ]
  },
  { path: 'authors/:id', component: AuthorDetailComponent },
  { path: 'books', component: BooksComponent },
  // { path: 'books/:id', component: BookDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
