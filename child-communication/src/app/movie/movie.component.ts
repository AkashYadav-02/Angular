import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() movieslist: { movie: string; desc: string; }[] = [];

 
  watchlist: { movie: string; desc: string; }[] = []
  deleteMovie(movie: { movie: string; desc: string; }) {
   
    const indexInMovies = this.movieslist.indexOf(movie);
    if (indexInMovies !== -1) {
      this.movieslist.splice(indexInMovies, 1);
    }
  }

  deleteWatchedMovie(movie: { movie: string; desc: string; }) {
   
    const indexInMovies = this.watchlist.indexOf(movie);
    if (indexInMovies !== -1) {
      this.watchlist.splice(indexInMovies, 1);
    }
  }
     markedWatch(movie: { movie: string; desc: string; }):void
{
  const indexInMovies = this.movieslist.indexOf(movie);
  if (indexInMovies !== -1) {
    this.watchlist.push( movie);
    this.deleteMovie(movie)
    
  }
  

  console.log(this.watchlist);
  
}
// markedWatch(movie: { movie: string; desc: string; }): void {
//   const indexInMovies = this.movieslist.indexOf(movie);
//   if (indexInMovies !== -1) {
//     // Add the movie to the watchlist
//     this.watchlist.push(movie);
    
//     // Delete the movie from the movieslist
//     this.deleteMovie(movie);
//   }

//   console.log(this.watchlist);
// }

// markedWatch(movie: { movie: string; desc: string; }): void {
//   const indexInMovies = this.movieslist.indexOf(movie);
//   if (indexInMovies !== -1) {
//     this.movieslist.splice(indexInMovies, 1); // Remove the movie from the movieslist
//     this.watchlist.push(movie); // Add the movie to the watchlist
//   }

//   console.log(this.watchlist);
// }

  
  
}
