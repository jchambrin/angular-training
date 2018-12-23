import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public getById(id: string): Observable<Object> {
    return this.http.get(`/assets/data/${id}.json`);
  }

  public getMovies(): Observable<Object> {
    return this.http.get('/assets/data/movies.json');
  }
}
