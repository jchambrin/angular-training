import { MoviesService } from './services/movies.service';
import { Movie } from './../models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
  }

}
