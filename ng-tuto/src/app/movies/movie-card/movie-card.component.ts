import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie;
  @Output() selected = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  clicked(event): void {
    this.selected.emit(this.movie.id);
  }

}
