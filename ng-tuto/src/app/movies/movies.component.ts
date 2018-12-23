import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MoviesService } from './services/movies.service';
import { Movie } from './../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  filterGroup: FormGroup;
  movies: Movie[];
  moviesFiltered: Movie[];

  constructor(private moviesService: MoviesService, fb: FormBuilder) {
    this.filterGroup = fb.group({
      filter: new FormControl()
    });
  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
      this.moviesFiltered = movies;
    });

    this.filterGroup.get('filter').valueChanges.pipe(
      debounceTime(200)
    ).subscribe((str: string) => {
      this.moviesFiltered = this.movies.filter((m: Movie) => m.name.includes(str));
      console.log(this.moviesFiltered);
    });
  }

}
