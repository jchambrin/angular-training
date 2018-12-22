import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MatCardModule } from '@angular/material';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieListComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
