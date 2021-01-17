import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailComponent } from './authors/author-detail/author-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { FormsModule } from '@angular/forms';
import { AuthorDashboardComponent } from './authors/author-dashboard/author-dashboard.component';
import { BookDashboardComponent } from './books/book-dashboard/book-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorDetailComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    AuthorEditComponent,
    AuthorDashboardComponent,
    BookDashboardComponent,
    DashboardComponent,
    BookEditComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
