import { Movie } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private LS_MOVIES_KEY = 'LS_MOVIES_KEY';

  constructor(private http: HttpClient) { }

  public getMoviesFromLS(): Observable<Object> {
    const movies: Movie[] = JSON.parse(localStorage.getItem(this.LS_MOVIES_KEY) || '[]');
    if (movies.length === 0) {
      this.getMovies().subscribe((list: Movie[]) => {
        this.saveMoviesToLS(list);
      });
      return this.getMovies();
    }
    return of(movies);
  }

  public saveMoviesToLS(movies: Movie[]): void {
    localStorage.setItem(this.LS_MOVIES_KEY, JSON.stringify(movies));
  }

  public getById(id: string): Observable<Object> {
    return this.http.get(`/assets/data/${id}.json`);
  }

  public getMovies(): Observable<Object> {
    return this.http.get('/assets/data/movies.json');
  }
}
