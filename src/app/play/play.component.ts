import { Component, OnInit } from '@angular/core';
import {Song} from '../song';
import {SongService} from '../song.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  playlist: Song[] = [];
  constructor(
    private songService: SongService
  ) { }

  ngOnInit(): void {
    this.playlist = this.songService.playlist;
  }

}
