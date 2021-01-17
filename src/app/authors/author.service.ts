import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private baseUrl = 'http://localhost:8080/api/v1/authors';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.baseUrl, this.httpOptions);
  }

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  addAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(`${this.baseUrl}`, author, this.httpOptions);
  }

  updateAuthor(id: string, author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.baseUrl}/${id}`, author, this.httpOptions);
  }

  deleteAuthor(id: string): Observable<Author> {
    return this.http.delete<Author>(`${this.baseUrl}/${id}`, this.httpOptions);
  }
}
