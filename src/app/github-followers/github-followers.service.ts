import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GithubFollowersService {
  // tslint:disable-next-line:variable-name
  private readonly _url = 'https://api.github.com/users/percyashu/followers';

  constructor(private http: HttpClient) {  }

  getFollowers() {
    return this.http.get(this._url);
  }
}
