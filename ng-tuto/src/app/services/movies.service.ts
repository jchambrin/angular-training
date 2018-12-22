import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  static readonly KEY_MOVIES: string = 'movies';

  constructor(private http: HttpClient) {}

  getRateFromLS(id: number): Observable<any> {
    const movies: any[] = JSON.parse(localStorage.getItem(MoviesService.KEY_MOVIES) || '[]');
    const matchMovies: any[] = movies.filter((current) => current.id === id);
    return of(matchMovies[0]);
  }

  saveRateToLS(movie: any): void {
    let movies: any[] = JSON.parse(localStorage.getItem(MoviesService.KEY_MOVIES) || '[]');
    movies = movies.filter((current: any) => current.id !== movie.id);
    movies.push(movie);
    localStorage.setItem(MoviesService.KEY_MOVIES, JSON.stringify(movies));
  }
}
