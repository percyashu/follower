import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GithubFollowersService} from './github-followers.service';
import {combineLatest, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any;

  constructor(
      private route: ActivatedRoute,
      private service: GithubFollowersService) { }

  ngOnInit() {

    combineLatest(
        [this.route.paramMap, this.route.queryParamMap]
    ).pipe(
        switchMap(
            combined => {
              const id = combined[0].get('id');
              const page = combined[1].get('page');

              return this.service.getFollowers();
            }

        )
        ).subscribe(followers => this.followers = followers);
  }
}
