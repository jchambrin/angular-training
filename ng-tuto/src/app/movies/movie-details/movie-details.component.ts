import { Movie } from 'src/app/models/movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;

  constructor(private route: ActivatedRoute,
              private moviesService: MoviesService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.moviesService.getById(id).subscribe((movie: Movie) =>  {
      this.movie = movie;
    });
  }

}
