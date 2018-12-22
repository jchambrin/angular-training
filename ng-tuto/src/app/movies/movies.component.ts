import { MovieUtils } from './../../assets/data/movie-utils';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = MovieUtils.movies;

  constructor() { }

  ngOnInit() {
  }

}
