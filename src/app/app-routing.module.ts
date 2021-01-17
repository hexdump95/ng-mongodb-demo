import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './authors/author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'authors/:id', component: AuthorComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
