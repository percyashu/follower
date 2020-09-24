import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var GithubFollowersService = /** @class */ (function () {
    function GithubFollowersService(http) {
        this.http = http;
        // tslint:disable-next-line:variable-name
        this._url = 'https://api.github.com/users/percyashu/followers';
    }
    GithubFollowersService.prototype.getFollowers = function () {
        return this.http.get(this._url);
    };
    GithubFollowersService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GithubFollowersService);
    return GithubFollowersService;
}());
export { GithubFollowersService };
//# sourceMappingURL=github-followers.service.js.map