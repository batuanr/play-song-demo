import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayComponent} from './play/play.component';
import {PlaySongComponent} from './play-song/play-song.component';

const routes: Routes = [
  {
    path: 'play',
    component: PlayComponent,
    children: [{
      path: ':id',
      component: PlaySongComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
