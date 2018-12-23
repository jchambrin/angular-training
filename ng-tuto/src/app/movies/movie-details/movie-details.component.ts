import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;

  formGroup: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService,
    fb: FormBuilder) {
    this.formGroup = fb.group({
      name: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.moviesService.getMoviesFromLS().subscribe((movies: Movie[]) => {
      for (const movie of movies) {
        if (movie.id === +id) {
          this.movie = movie;
          this.formGroup.patchValue(movie);
        }
      }
    });
  }

  submit(): void {
    if (this.formGroup.valid) {
      this.router.navigate(['/movies']);
    }
  }

}
