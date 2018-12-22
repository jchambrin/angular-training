import { Movie } from './../../models/movie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  selectedMovie: number;

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit() {
  }

  selectMovie(movieNumber: number): void {
    this.selectedMovie = movieNumber;
  }

}
