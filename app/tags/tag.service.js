System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var TagService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            TagService = (function () {
                function TagService(_http) {
                    this._http = _http;
                    this._server = 'http://localhost:7000';
                    this._devices = this._server + '/devices';
                    this._deviceRegister = this._server + '/deviceRegister';
                    this._deviceDelete = this._server + '/deviceDelete/';
                }
                TagService.prototype.getTags = function () {
                    return this._http.get(this._devices)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                TagService.prototype.registerTag = function (tag) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    var data = JSON.stringify(tag);
                    return this._http.post(this._deviceRegister, data, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TagService.prototype.deleteTag = function (id) {
                    return this._http.delete(this._deviceDelete + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TagService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                TagService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TagService);
                return TagService;
            }());
            exports_1("TagService", TagService);
        }
    }
});
//# sourceMappingURL=tag.service.js.map