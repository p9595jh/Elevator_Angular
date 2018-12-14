(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div id=\"content\">\r\n  <ng-flash-message></ng-flash-message>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_start_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_free_free_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/free/free.component */ "./src/app/components/free/free.component.ts");
/* harmony import */ var _components_music_music_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/music/music.component */ "./src/app/components/music/music.component.ts");
/* harmony import */ var _components_subboard_subboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/subboard/subboard.component */ "./src/app/components/subboard/subboard.component.ts");
/* harmony import */ var _components_suggest_suggest_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/suggest/suggest.component */ "./src/app/components/suggest/suggest.component.ts");
/* harmony import */ var _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/loginpage/loginpage.component */ "./src/app/components/loginpage/loginpage.component.ts");
/* harmony import */ var _components_join_join_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/join/join.component */ "./src/app/components/join/join.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _services_handleboard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/handleboard.service */ "./src/app/services/handleboard.service.ts");
/* harmony import */ var _components_subs_subs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/subs/subs.component */ "./src/app/components/subs/subs.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_find_find_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/find/find.component */ "./src/app/components/find/find.component.ts");
/* harmony import */ var _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/notice/notice.component */ "./src/app/components/notice/notice.component.ts");
/* harmony import */ var _components_subadmin_subadmin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/subadmin/subadmin.component */ "./src/app/components/subadmin/subadmin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { RouterTestingModule } from '@angular/router/testing';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';














// import { WriteComponent } from './components/write/write.component';



// import { FixComponent } from './components/fix/fix.component';


var appRoutes = [
    { path: '', component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"] },
    { path: 'start', component: _components_start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"] },
    { path: 'free', component: _components_free_free_component__WEBPACK_IMPORTED_MODULE_9__["FreeComponent"] },
    { path: 'music', component: _components_music_music_component__WEBPACK_IMPORTED_MODULE_10__["MusicComponent"] },
    { path: 'subs', component: _components_subs_subs_component__WEBPACK_IMPORTED_MODULE_19__["SubsComponent"] },
    { path: 'subboard', component: _components_subboard_subboard_component__WEBPACK_IMPORTED_MODULE_11__["SubboardComponent"] },
    { path: 'suggest', component: _components_suggest_suggest_component__WEBPACK_IMPORTED_MODULE_12__["SuggestComponent"] },
    { path: 'loginpage', component: _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_13__["LoginpageComponent"] },
    { path: 'content', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_15__["ContentComponent"] },
    { path: 'join', component: _components_join_join_component__WEBPACK_IMPORTED_MODULE_14__["JoinComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"] },
    { path: 'find', component: _components_find_find_component__WEBPACK_IMPORTED_MODULE_21__["FindComponent"] },
    // { path: 'fix', component: FixComponent },
    { path: 'notice', component: _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_22__["NoticeComponent"] },
    { path: 'subadmin', component: _components_subadmin_subadmin_component__WEBPACK_IMPORTED_MODULE_23__["SubadminComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_free_free_component__WEBPACK_IMPORTED_MODULE_9__["FreeComponent"],
                _components_music_music_component__WEBPACK_IMPORTED_MODULE_10__["MusicComponent"],
                _components_subboard_subboard_component__WEBPACK_IMPORTED_MODULE_11__["SubboardComponent"],
                _components_suggest_suggest_component__WEBPACK_IMPORTED_MODULE_12__["SuggestComponent"],
                _components_loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_13__["LoginpageComponent"],
                _components_music_music_component__WEBPACK_IMPORTED_MODULE_10__["MusicComponent"],
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_15__["ContentComponent"],
                _components_join_join_component__WEBPACK_IMPORTED_MODULE_14__["JoinComponent"],
                // WriteComponent,
                _components_subs_subs_component__WEBPACK_IMPORTED_MODULE_19__["SubsComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
                _components_find_find_component__WEBPACK_IMPORTED_MODULE_21__["FindComponent"],
                // FixComponent,
                _components_notice_notice_component__WEBPACK_IMPORTED_MODULE_22__["NoticeComponent"],
                _components_subadmin_subadmin_component__WEBPACK_IMPORTED_MODULE_23__["SubadminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, {
                    onSameUrlNavigation: 'reload'
                }),
                // RouterTestingModule.withRoutes(appRoutes),
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_16__["NgFlashMessagesModule"].forRoot()
            ],
            providers: [
                _services_handleuser_service__WEBPACK_IMPORTED_MODULE_17__["HandleuserService"],
                _services_handleboard_service__WEBPACK_IMPORTED_MODULE_18__["HandleboardService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <table class=\"admintable\">\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>관리</th>\r\n    </tr>\r\n    <ng-container *ngFor=\"let val of users\">\r\n      <tr *ngIf=\"val.id != 'admin' && !val.stop\">\r\n        <td><b style=\"cursor:pointer;\" id=\"val.id\" [attr.id]=\"val.id\" (click)=\"openInfoWindow(val?.id)\">{{val.id}}</b></td>\r\n        <td><button (click)=\"onStopUser(val.id)\" id=\"val.id + 'button'\" [attr.id]=\"val.id + 'button'\">정지</button></td>\r\n      </tr>\r\n      <tr *ngIf=\"val.id != 'admin' && val.stop\">\r\n        <td><b style=\"cursor:pointer; color:red;\" id=\"val.id\" [attr.id]=\"val.id\" (click)=\"openInfoWindow(val?.id)\">{{val.id}}</b></td>\r\n        <td><button (click)=\"onStopUser(val.id)\" id=\"val.id + 'button'\" [attr.id]=\"val.id + 'button'\">해제</button></td>\r\n      </tr>\r\n    </ng-container>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminComponent = /** @class */ (function () {
    function AdminComponent(http, router, flashMessage, handleuserService) {
        this.http = http;
        this.router = router;
        this.flashMessage = flashMessage;
        this.handleuserService = handleuserService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        this.http.get('http://localhost:3000/admin', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            if (data.result) {
                _this.users = data.users;
            }
            else {
                _this.router.navigate(['./start']);
            }
        });
    };
    AdminComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    AdminComponent.prototype.onStopUser = function (userid) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:3000/ajax/stop', { userid: userid }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            if (data.message == 'done') {
                if (data.stop) {
                    document.getElementById(userid).style.color = "red";
                    document.getElementById(userid + 'button').innerHTML = "해제";
                    _this.flashMessage.showFlashMessage({
                        messages: ['정지 완료'],
                        type: 'success',
                        timeout: 3000
                    });
                }
                else {
                    document.getElementById(userid).style.color = "black";
                    document.getElementById(userid + 'button').innerHTML = "정지";
                    _this.flashMessage.showFlashMessage({
                        messages: ['해제 완료'],
                        type: 'success',
                        timeout: 3000
                    });
                }
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['에러가 발생하였습니다'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _services_handleuser_service__WEBPACK_IMPORTED_MODULE_5__["HandleuserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/content/content.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <span style=\"font-size:20px;\">{{content?.title}}</span>\r\n  <span style=\"float:right;\">\r\n    <a class=\"tblink\" href=\"javascript:;\" (click)=\"openInfoWindow(content?.id)\">{{content?.nickname}}</a>\r\n  </span>\r\n  <hr/>\r\n  <span style=\"float:right; font-size:13px;\">{{content?.writedate}}</span>\r\n  <br/>\r\n  <span style=\"float:right; font-size:13px;\">조회 {{content?.hit}} 댓글 {{content?.comment?.length}}</span>\r\n  <div>\r\n    <p>content.grade: {{content?.grade}}</p>\r\n    <p>content.gradeby.length: {{content?.gardeby?.length}}</p>\r\n    <p>user.id: {{user?.id}}</p>\r\n    <p>content.id: {{content?.id}}</p>\r\n    <p>writer.boardRequest: {{writer?.boardRequest}}</p>\r\n  </div>\r\n  <ng-container *ngIf=\"listurl == 'music'\">\r\n    <br/>\r\n    <span id=\"gradeSpan\" style=\"float:right; font-size:13px;\" #gradeSpan>평점 {{content?.grade}} by {{content?.gradeby?.length}}명</span>\r\n    <ng-container *ngIf=\"content?.grade >= 3 && content?.gradeby?.length >= 1 && user?.id == content?.id && writer?.boardRequest == 0\">\r\n      <!-- content.grade / content.gradeby.length == average -->\r\n      <!-- if writer.boardRequest == 0, can request to admin to make own board -->\r\n      <!-- after requested, writer.boardRequest is gonna be 1 -->\r\n      <!-- when admin accepts the request, writer.boardRequest is gonna be 2 and having own board -->\r\n      <br/><button id=\"boardRequest\" style=\"float:right;\" (click)=\"requestBoard()\" #boardRequest>게시판 생성 요청</button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"user.id == 'admin' && writer.boardRequest == 1\">\r\n      <br/><button id=\"boardRequest\" style=\"float:right;\" (click)=\"acceptBoard()\" #boardRequest>게시판 생성 요청 수락</button>\r\n    </ng-container>\r\n  </ng-container><br/><br/>\r\n\r\n  <div style=\"text-align:center;\" *ngIf=\"content?.image != ''\">\r\n    <img [attr.src]=\"content?.image\" width=\"imageWidth\" />\r\n    <br/><br/>\r\n  </div>\r\n  <div style=\"text-align:center;\" *ngIf=\"content?.audio != ''\">\r\n    <audio controls>\r\n      <source [attr.src]=\"content?.audio\" />\r\n    </audio>\r\n    <br/><br/>\r\n  </div>\r\n  <div style=\"padding:20px;\">\r\n    <pre class=\"contentView\">{{content?.content}}</pre>\r\n  </div><br/><br/><br/>\r\n\r\n  <div style=\"text-align:center;\">\r\n    <ng-container *ngIf=\"listurl == 'music' && loggedIn\">\r\n      <select id=\"grade\" *ngIf=\"listurl == 'music' && loggedIn\" #grade>\r\n        <option value=\"5\">★★★★★</option>\r\n        <option value=\"4\">★★★★</option>\r\n        <option value=\"3\">★★★</option>\r\n        <option value=\"2\">★★</option>\r\n        <option value=\"1\">★</option>\r\n      </select>\r\n      <button (click)=\"onRecommend()\" id=\"recommendbtn\">평가</button>\r\n    </ng-container>\r\n    <button *ngIf=\"loggedIn && listurl != 'music'\" id=\"recommendbtn\" (click)=\"onRecommend()\" #recommendBtn>추천 {{content?.recommend}}</button>\r\n  </div><br/><hr/>\r\n\r\n  <!-- ###################### written comment part ###################### -->\r\n  <table class=\"tb2\" *ngFor=\"let val of content?.comment\">\r\n    <tr style=\"height:110px; vertical-align:top;\">\r\n      <td style=\"text-align:center; vertical-align:middle; width:110px; border-right:1px solid rgb(0,91,159);\">\r\n        <img [attr.src]=\"'images/profileimages/'+val?.id\" width=\"70\" height=\"70\" />\r\n      </td>\r\n      <td style=\"vertical-align:top;\">\r\n        <div style=\"font-size:12px; padding:2px; margin-left:5px; border-bottom:1px dotted rgb(0,91,159);\">\r\n          <b *ngIf=\"val.id == 'admin'\"><a class=\"tblink\" href=\"javascript:;\" (click)=\"openInfoWindow(val?.id)\">{{val.nickname}}</a></b>\r\n          <a *ngIf=\"val.id != 'admin'\" class=\"tblink\" href=\"javascript:;\" (click)=\"openInfoWindow(val?.id)\">{{val.nickname}}</a>\r\n          <span style=\"font-size:12px; float:right;\">\r\n            <form *ngIf=\"user.id == val.id || user.id == 'admin' || boardtype == user.id\" (submit)=\"onDeleteComment()\" id=\"removeCmt+{{val?.num}}\" [attr.id]=\"'removeCmt'+val?.num\" style=\"display:none;\">\r\n              <input type=\"hidden\" name=\"contentnum\" [(ngModel)]=\"contentnum\" value=\"{{content?.num}}\" />\r\n              <input type=\"hidden\" name=\"num\" [(ngModel)]=\"num\" value=\"{{val.num}}\" />\r\n              <input type=\"hidden\" name=\"id\" [(ngModel)]=\"id\" value=\"{{val.id}}\" />\r\n              <input type=\"hidden\" name=\"boardtype\" [(ngModel)]=\"commentBoardtype\" value=\"{{boardtype}}\" />\r\n            </form>\r\n            <a *ngIf=\"user?.id == val?.id || user?.id == 'admin' || boardtype == user?.id\" class=\"link\" href=\"javascript:;\" onclick=\"document.getElementById('removeCmt' + val.num).submit()\">삭제</a>\r\n            <span> {{val?.writedate}}</span>\r\n          </span>\r\n        </div>\r\n        <div style=\"padding-left:10px;\">\r\n          <pre class=\"contentView\" *ngIf=\"content.id == val.id\" style=\"color:blue;\">{{val?.comment}}</pre>\r\n          <pre class=\"contentView\" *ngIf=\"content.id != val.id\">{{val?.comment}}</pre>\r\n        </div>\r\n      </td>\r\n      <td style=\"text-align:right;\"></td>\r\n    </tr>\r\n  </table><br/>\r\n\r\n  <!-- ###################### writing comment part ###################### -->\r\n  <form *ngIf=\"loggedIn && !user?.stop\" (submit)=\"onWriteComment()\">\r\n    <br/>\r\n    <table style=\"width:700px; margin:auto;\">\r\n      <tr>\r\n        <td><textarea cols=\"80\" rows=\"5\" name=\"comment\" [(ngModel)]=\"comment\"></textarea></td>\r\n        <td><input type=\"submit\" name=\"cmt\" value=\"댓글달기\" style=\"width:100px; height:80px;\" /></td>\r\n      </tr>\r\n    </table>\r\n    <br/>\r\n  </form>\r\n  <hr/>\r\n  <button *ngIf=\"user?.id == content?.id || user?.id == 'admin' || boardtype == user.id\" style=\"float:right;\" (click)=\"onDeleteContent()\">삭제</button>\r\n  <button style=\"float:right;\" [routerLink]=\"['../'+listurl]\" [queryParams]=\"{type: boardtype}\">목록</button><br/><br/>\r\n</div>\r\n\r\n<div class=\"box\">\r\n  <span>{{type}}</span><hr/><br/><br/>\r\n  <table class=\"tb\">\r\n    <tr style=\"height:25px; font-weight:bold\">\r\n      <td style=\"width:70px\">번호</td>\r\n      <td style=\"width:140px\">제목</td>\r\n      <td style=\"width:65px\">작성자</td>\r\n      <td style=\"width:100px\">날짜</td>\r\n      <td style=\"width:55px\">조회수</td>\r\n      <td style=\"width:40px\">추천</td>\r\n    </tr>\r\n\r\n    <ng-container *ngFor=\"let val of all\">\r\n      <tr class=\"trhover\" style=\"height:20px;\">\r\n        <td>{{val.num}}</td>\r\n        <td style=\"text-align:left; padding:50px;\">\r\n          <a class=\"link\" [routerLink]=\"['./content', {type: boardtype, num: val.num}]\">{{val?.title}}</a> \r\n          <span style=\"font-size:12px; color:grey;\" *ngIf=\"val.comment.length > 0\"> [{{val?.comment?.length}}]</span>\r\n        </td>\r\n        <td>\r\n          <a class=\"link\" href=\"javascript:;\" (click)=\"openInfoWindow(val?.id)\">{{val?.nickname}}</a>\r\n        </td>\r\n        <td>{{val?.writedate}}</td>\r\n        <td>{{val?.hit}}</td>\r\n        <td>{{val?.recommend}}</td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContentComponent = /** @class */ (function () {
    function ContentComponent(handleuserService, router, http, route, flashMessage) {
        var _this = this;
        this.handleuserService = handleuserService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.flashMessage = flashMessage;
        this.paramType = this.route.snapshot.queryParamMap.get('type');
        this.paramNum = this.route.snapshot.queryParamMap.get('num');
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleuserService.loggedIn().subscribe(function (data) {
            _this.loggedIn = data.result;
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
            headers.append('Content-Type', 'application/json');
            _this.http.get('http://localhost:3000/content?type=' + _this.paramType + '&num=' + _this.paramNum, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); })).subscribe(function (result) {
                _this.user = result.user;
                _this.imageWidth = result.imageWidth;
                _this.content = result.content;
                _this.type = result.type;
                _this.listurl = result.listurl;
                _this.boardtype = result.boardtype;
                _this.all = result.all;
                _this.writer = result.writer;
            });
        });
    };
    ContentComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    ContentComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    ContentComponent.prototype.onDeleteContent = function () {
        var _this = this;
        if (confirm('정말 삭제하시겠습니까?')) {
            var formData = {
                id: this.content.id,
                num: this.content.num,
                boardtype: this.paramType
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
            headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:3000/delete/' + this.paramType, formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
                if (data.success) {
                    _this.router.navigated = false;
                    _this.router.navigate(['./' + _this.listurl], { queryParams: { type: _this.paramType } });
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['에러가 발생하였습니다'],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    ContentComponent.prototype.onDeleteComment = function () {
        var _this = this;
        var formData = {
            contentnum: this.content.num,
            num: this.num,
            id: this.content.id,
            boardtype: this.paramType
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:3000/delete/comment', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            if (data.success) {
                _this.router.navigated = false;
                _this.router.navigate(['./content'], { queryParams: { type: _this.paramType, num: _this.paramNum } });
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: [data.msg],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    ContentComponent.prototype.onRecommend = function () {
        var _this = this;
        var count = this.paramType == 'music' ? document.getElementById('grade').value : 1;
        var formData = {
            boardtype: this.paramType,
            id: this.user.id,
            count: count,
            num: this.content.num
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:3000/ajax', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            if (data.msg == 'duplicate') {
                _this.flashMessage.showFlashMessage({
                    messages: ['이미 추천하셨습니다'],
                    type: 'danger',
                    timeout: 3000
                });
            }
            else {
                if (_this.paramType == 'music') {
                    var gradeSpan = document.getElementById("gradeSpan");
                    gradeSpan.innerHTML = "평점 " + data.grade + " by " + data.people + "명";
                }
                else {
                    var recommendBtn = document.getElementById("recommendBtn");
                    // if ( !data.recommend ) data.recommend = this.content.recommend;
                    recommendBtn.innerHTML = "추천 " + data.recommend;
                }
            }
        });
    };
    ContentComponent.prototype.requestBoard = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:3000/ajax/boardrequest', { userid: this.content.id, _id: this.content._id }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            document.getElementById("boardRequest").style.display = "none";
        });
    };
    ContentComponent.prototype.acceptBoard = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:3000/ajax/acceptboardrequest', { userid: this.content.id, _id: this.content._id }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            document.getElementById("boardRequest").style.display = "none";
        });
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/components/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__["HandleuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_5__["NgFlashMessageService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/find/find.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/find/find.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/find/find.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/find/find.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reg\" style=\"border-width:0px;\"><span style=\"float:left;\">아이디 찾기</span><br/>\r\n  <hr/><br/><span>회원코드를 입력해주세요.</span><br/><br/><input type=\"text\" id=\"findid\" #findid /><button (click)=\"find('id')\">찾기</button>\r\n  <p id=\"idresult\" #idresult></p>\r\n</div><br/><br/>\r\n<div class=\"reg\" style=\"border-width:0px;\"><span style=\"float:left;\">비밀번호 찾기</span><br/>\r\n  <hr/><br/><span>회원코드를 입력해주세요.</span><br/><br/><input type=\"text\" id=\"findpw\" #findpw /><button (click)=\"find('pw')\">찾기</button>\r\n  <p id=\"pwresult\" #pwresult></p>\r\n</div><br/><br/>\r\n"

/***/ }),

/***/ "./src/app/components/find/find.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/find/find.component.ts ***!
  \***************************************************/
/*! exports provided: FindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindComponent", function() { return FindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindComponent = /** @class */ (function () {
    function FindComponent(http) {
        this.http = http;
    }
    FindComponent.prototype.ngOnInit = function () {
    };
    FindComponent.prototype.find = function (type) {
        if (type == 'id') {
            var code = document.getElementById("findid").value;
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:3000/ajax/find', { type: type, code: code }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
                document.getElementById("idresult").innerHTML = data.result;
            });
        }
        else {
            var code = document.getElementById("findpw").value;
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
            headers.append('Content-Type', 'application/json');
            this.http.post('http://localhost:3000/ajax/find', { type: type, code: code }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
                document.getElementById("pwresult").innerHTML = data.result;
            });
        }
    };
    FindComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find',
            template: __webpack_require__(/*! ./find.component.html */ "./src/app/components/find/find.component.html"),
            styles: [__webpack_require__(/*! ./find.component.css */ "./src/app/components/find/find.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FindComponent);
    return FindComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr/>\r\n<span style=\"font-size:12px;\">&nbsp; powered by </span>\r\n<b style=\"font-size:12px;\">Project Elevator</b>\r\n<br/><br/>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/free/free.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/free/free.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/free/free.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/free/free.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\"><span>자유게시판</span>\r\n  <hr/><br/><br/>\r\n  <table class=\"tb\">\r\n    <tr style=\"height:25px; font-weight:bold\">\r\n      <td style=\"width:70px\">번호</td>\r\n      <td style=\"width:140px\">제목</td>\r\n      <td style=\"width:65px\">작성자</td>\r\n      <td style=\"width:100px\">날짜</td>\r\n      <td style=\"width:55px\">조회수</td>\r\n      <td style=\"width:40px\">추천</td>\r\n    </tr>\r\n\r\n    <ng-container *ngFor=\"let val of free\">\r\n      <tr class=\"trhover\" style=\"height:20px;\">\r\n        <td>{{val.num}}</td>\r\n        <td style=\"text-align:left; padding:50px;\">\r\n          <a class=\"link\" [routerLink]=\"['../content']\" [queryParams]=\"{type: 'free', num: val.num}\">{{val.title}}</a>\r\n          <span style=\"font-size:12px; color:grey;\" *ngIf=\"val.comment.length > 0\"> [{{val.comment.length}}]</span>\r\n        </td>\r\n        <td>\r\n          <a class=\"link\" href=\"javascript:;\" (click)=\"openInfoWindow(val?.id)\">{{val.nickname}}</a>\r\n        </td>\r\n        <td>{{val.writedate}}</td>\r\n        <td>{{val.hit}}</td>\r\n        <td>{{val.recommend}}</td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n  <br/><br/>\r\n\r\n  <button *ngIf=\"loggedIn && !user?.stop\" style=\"float:right;\" onclick=\"location.href='http://localhost:3000/write?type=free'\">글쓰기</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/free/free.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/free/free.component.ts ***!
  \***************************************************/
/*! exports provided: FreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeComponent", function() { return FreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _services_handleboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/handleboard.service */ "./src/app/services/handleboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FreeComponent = /** @class */ (function () {
    function FreeComponent(handleuserService, handleboardService, router) {
        var _this = this;
        this.handleuserService = handleuserService;
        this.handleboardService = handleboardService;
        this.router = router;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    FreeComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    FreeComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    FreeComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    FreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleuserService.loggedIn().subscribe(function (data) {
            _this.loggedIn = data.result;
            _this.handleboardService.getFrees().subscribe(function (data) {
                _this.free = data.free;
            });
        });
    };
    FreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-free',
            template: __webpack_require__(/*! ./free.component.html */ "./src/app/components/free/free.component.html"),
            styles: [__webpack_require__(/*! ./free.component.css */ "./src/app/components/free/free.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_2__["HandleuserService"],
            _services_handleboard_service__WEBPACK_IMPORTED_MODULE_3__["HandleboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FreeComponent);
    return FreeComponent;
}());



/***/ }),

/***/ "./src/app/components/join/join.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/join/join.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/join/join.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/join/join.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reg\"><span style=\"float:left;\">회원가입 <span class=\"regerr\"></span></span><br/>\r\n    <hr/><br/>\r\n    <form (submit)=\"submitRegister()\">\r\n        <table class=\"regtable\">\r\n            <tr>\r\n                <td>아이디<span class=\"regerr\"> *</span></td>\r\n                <td><input class=\"reginput\" type=\"text\" name=\"id\" [(ngModel)]=\"id\" /></td>\r\n            </tr>\r\n            <tr>\r\n                <td>비밀번호<span class=\"regerr\"> *</span></td>\r\n                <td><input class=\"reginput\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" /></td>\r\n            </tr>\r\n            <tr>\r\n                <td>이메일<span class=\"regerr\"> *</span></td>\r\n                <td><input class=\"reginput\" type=\"text\" name=\"email\" [(ngModel)]=\"email\" /></td>\r\n            </tr>\r\n            <tr>\r\n                <td>닉네임<span class=\"regerr\"> *</span></td>\r\n                <td><input class=\"reginput\" type=\"text\" name=\"nickname\" [(ngModel)]=\"nickname\" /></td>\r\n            </tr>\r\n            <tr>\r\n                <td>즐겨듣는 장르</td>\r\n                <td><input class=\"reginput\" type=\"text\" name=\"genre\" [(ngModel)]=\"genre\" /></td>\r\n            </tr>\r\n            <tr>\r\n                <td>자기소개 한마디</td>\r\n                <td><input class=\"reginput\" type=\"text\" name=\"intro\" [(ngModel)]=\"intro\" /></td>\r\n            </tr>\r\n            <tr>\r\n                <td colspan=\"2\" style=\"text-align:center;\"><input type=\"submit\" name=\"submit\" value=\"회원가입\" style=\"width:200px; height:50px;\" /></td>\r\n            </tr>\r\n        </table><br/>\r\n        <hr/><span class=\"regerr\">* </span><span class=\"regerr\" style=\"color:black;\">표시가 된 곳은 필수 입력사항입니다.</span><br/><br/><span class=\"link\">회원가입 이후 회원정보수정에서 회원코드를 메모해놓으세요. 추후 아이디/비밀번호 찾기에 필요합니다.</span></form>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/join/join.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/join/join.component.ts ***!
  \***************************************************/
/*! exports provided: JoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinComponent", function() { return JoinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JoinComponent = /** @class */ (function () {
    function JoinComponent(handleuserService, router, http, flashMessage) {
        this.handleuserService = handleuserService;
        this.router = router;
        this.http = http;
        this.flashMessage = flashMessage;
    }
    JoinComponent.prototype.ngOnInit = function () {
    };
    JoinComponent.prototype.submitRegister = function () {
        var _this = this;
        var user = {
            id: this.id,
            password: this.password,
            email: this.email,
            nickname: this.nickname,
            genre: this.genre,
            intro: this.intro
        };
        this.handleuserService.handleRegi(user).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.showFlashMessage({
                    messages: [data.errmsg],
                    type: 'danger',
                    timeout: 3000
                });
            }
            else {
                _this.router.navigate(['./start']);
            }
        });
    };
    JoinComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join',
            template: __webpack_require__(/*! ./join.component.html */ "./src/app/components/join/join.component.html"),
            styles: [__webpack_require__(/*! ./join.component.css */ "./src/app/components/join/join.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__["HandleuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], JoinComponent);
    return JoinComponent;
}());



/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"reg\" style=\"border-width:0px\"><span style=\"float:left\">로그인</span><br/>\r\n  <hr/><br/><br/>\r\n  <form (submit)=\"onLoginSubmit()\">\r\n    <input type=\"text\" name=\"id\" [(ngModel)]=\"id\" placeholder=\"아이디\" style=\"width:300px; height:50px\"/><br/><br/>\r\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"비밀번호\" style=\"width:300px; height:50px\"/><br/><br/>\r\n    <input type=\"submit\" name=\"submit\" value=\"로그인\" style=\"width:300px; height:50px\"/><br/><br/>\r\n  </form><br/>\r\n  <hr/><a class=\"link\" [routerLink]=\"['./join']\" style=\"font-size:15px\">회원가입</a><span> | </span><a class=\"link\" [routerLink]=\"['./find']\" style=\"font-size:15px\">아이디/비밀번호 찾기</a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/loginpage/loginpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/loginpage/loginpage.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(handleuserService, router, http, flashMessage) {
        this.handleuserService = handleuserService;
        this.router = router;
        this.http = http;
        this.flashMessage = flashMessage;
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    LoginpageComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            id: this.id,
            password: this.password
        };
        this.handleuserService.loggingIn(user).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['./start']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['로그인 실패'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    LoginpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(/*! ./loginpage.component.html */ "./src/app/components/loginpage/loginpage.component.html"),
            styles: [__webpack_require__(/*! ./loginpage.component.css */ "./src/app/components/loginpage/loginpage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__["HandleuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/components/music/music.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/music/music.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/music/music.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/music/music.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\"><span>음악게시판</span>\r\n  <hr/><br/><br/>\r\n  <table class=\"tb\">\r\n    <tr style=\"height:25px; font-weight:bold\">\r\n      <td style=\"width:70px\">번호</td>\r\n      <td style=\"width:140px\">제목</td>\r\n      <td style=\"width:65px\">작성자</td>\r\n      <td style=\"width:100px\">날짜</td>\r\n      <td style=\"width:55px\">조회수</td>\r\n      <td style=\"width:40px\">전체평점</td>\r\n    </tr>\r\n\r\n    <ng-container *ngFor=\"let val of music\">\r\n      <tr class=\"trhover\" style=\"height:20px;\">\r\n        <td>{{val.num}}</td>\r\n        <td style=\"text-align:left; padding:50px;\">\r\n          <a class=\"link\" [routerLink]=\"['../content']\" [queryParams]=\"{type: 'music', num: val?.num}\">{{val?.title}}</a> \r\n          <span style=\"font-size:12px; color:grey;\" *ngIf=\"val?.comment?.length > 0\">[{{val?.comment?.length}}]</span>\r\n        </td>\r\n        <td>\r\n          <a class=\"link\" href=\"javascript:;\" (click)=\"openInfoWindow(val?.id)\">{{val?.nickname}}</a>\r\n        </td>\r\n        <td>{{val?.writedate}}</td>\r\n        <td>{{val?.hit}}</td>\r\n        <td>{{val?.grade}}</td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n  <br/><br/>\r\n\r\n  <button *ngIf=\"loggedIn && !user?.stop\" style=\"float:right;\" onclick=\"location.href='http://localhost:3000/write?type=music'\">글쓰기</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/music/music.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/music/music.component.ts ***!
  \*****************************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _services_handleboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/handleboard.service */ "./src/app/services/handleboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicComponent = /** @class */ (function () {
    function MusicComponent(handleuserService, handleboardService, router) {
        var _this = this;
        this.handleuserService = handleuserService;
        this.handleboardService = handleboardService;
        this.router = router;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.ngOnInit();
            }
        });
    }
    MusicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleuserService.loggedIn().subscribe(function (data) {
            _this.loggedIn = data.result;
            _this.handleboardService.getMusics().subscribe(function (data) {
                _this.music = data.music;
            });
        });
    };
    MusicComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    MusicComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    MusicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-music',
            template: __webpack_require__(/*! ./music.component.html */ "./src/app/components/music/music.component.html"),
            styles: [__webpack_require__(/*! ./music.component.css */ "./src/app/components/music/music.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_2__["HandleuserService"],
            _services_handleboard_service__WEBPACK_IMPORTED_MODULE_3__["HandleboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MusicComponent);
    return MusicComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"topscroll\">\r\n  <a style=\"text-decoration:none; color:black; font-weight:bold;\" href=\"#top\">TOP</a>\r\n</div>\r\n\r\n<header style=\"padding-top:20px; padding-bottom:20px;\">\r\n  <ul style=\"float:right; list-style:none;\">\r\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n      <a [routerLink]=\"['./notice']\" class=\"link\">공지사항</a>\r\n    </li>\r\n    <li *ngIf=\"loggedIn\">\r\n      <a (click)=\"onLogoutClick()\" href=\"javascript:;\" class=\"link\">로그아웃</a>\r\n    </li>\r\n    <li *ngIf=\"!loggedIn\" [routerLinkActive]=\"['active']\">\r\n      <a [routerLink]=\"['./loginpage']\" class=\"link\">로그인</a>\r\n    </li>\r\n    <!-- have to add links to admin page here -->\r\n    <li *ngIf=\"loggedIn && user?.id == 'admin'\" [routerLinkActive]=\"['active']\">\r\n      <a [routerLink]=\"['./admin']\" class=\"link\">어드민</a>\r\n    </li>\r\n    <li *ngIf=\"loggedIn && user?.boardRequest == 2\" [routerLinkActive]=\"['active']\">\r\n        <a [routerLink]=\"['./subadmin']\" class=\"link\">어드민</a>\r\n    </li>\r\n  </ul>\r\n  <div style=\"text-align:center;\">\r\n    <a style=\"text-decoration:none; color:black; font-family:Ubuntu;\" [routerLink]=\"['./start']\">\r\n      elevator\r\n    </a>\r\n  </div>\r\n</header>\r\n<br/>\r\n<div id=\"nav\">\r\n  <nav>\r\n    <a [routerLink]=\"['./start']\">HOME</a>\r\n    <a [routerLink]=\"['./free']\">자유게시판</a>\r\n    <a [routerLink]=\"['./music']\">음악게시판</a>\r\n    <a [routerLink]=\"['./subs']\">서브게시판</a>\r\n    <a [routerLink]=\"['./suggest']\">건의게시판</a>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(handleuserService, router) {
        var _this = this;
        this.handleuserService = handleuserService;
        this.router = router;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleuserService.loggedIn().subscribe(function (data) {
            _this.loggedIn = data.result;
        });
    };
    NavbarComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.handleuserService.logout().subscribe(function (data) {
            _this.router.navigated = false;
            _this.router.navigate(['./start']);
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__["HandleuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/notice/notice.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/notice/notice.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notice/notice.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/notice/notice.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <span id=\"visitor\">공지사항</span><hr/><br/>\r\n\r\n  <form (submit)=\"onWrite()\" *ngIf=\"user.id == 'admin'\">\r\n    <table style=\"width:700px; margin:auto;\">\r\n      <tr>\r\n        <td><textarea cols=\"80\" rows=\"5\" name=\"comment\"></textarea></td>\r\n        <td><input type=\"submit\" name=\"cmt\" value=\"작성\" style=\"width:100px; height:80px;\" /></td>\r\n      </tr>\r\n    </table>\r\n  </form><br/>\r\n\r\n  <table class=\"tb2\" *ngFor=\"let val of content\">\r\n    <tr style=\"height:110px; vertical-align:top;\">\r\n        <td style=\"text-align:center; vertical-align:middle; width:110px; border-right:1px solid rgb(0,91,159);\">\r\n          <img src=\"'images/profileimages/' + val.id\" width=\"70\" height=\"70\" />\r\n        </td>\r\n        <td>\r\n            <div style=\"font-size:12px; padding:2px; margin-left:5px; border-bottom:1px dotted rgb(0,91,159);\">\r\n              <b *ngIf=\"val.id == 'admin'\">\r\n                <a class=\"tblink\" href=\"javascript:;\" (click)=\"openInfoWindow(val?.id)\">{{val.nickname}}</a>\r\n              </b>\r\n              <a *ngIf=\"val.id != 'admin'\" class=\"tblink\" href=\"javascript:;\" (click)=\"openInfoWindow(val?.id)\">{{val.nickname}}</a>\r\n              <span style=\"font-size:12px; float:right;\">{{val.writedate}}</span>\r\n            </div>\r\n            <div style=\"padding-left:10px;\">\r\n              <pre class=\"contentView\">{{val.comment}}</pre>\r\n            </div>\r\n        </td>\r\n        <td style=\"text-align:right;\"></td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/notice/notice.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/notice/notice.component.ts ***!
  \*******************************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handleboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handleboard.service */ "./src/app/services/handleboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(handleboardService, handleuserService, router, flashMessage) {
        var _this = this;
        this.handleboardService = handleboardService;
        this.handleuserService = handleuserService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    NoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleboardService.getNotices().subscribe(function (data) {
            _this.user = data.user;
            _this.content = data.content;
        });
    };
    NoticeComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    NoticeComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    NoticeComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    NoticeComponent.prototype.onWrite = function () {
        var _this = this;
        var formData = {
            comment: this.comment
        };
        this.handleboardService.handleNotice(formData).subscribe(function (data) {
            if (data.success) {
                _this.router.navigated = false;
                _this.router.navigate(['./notice']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['글작성 에러'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    NoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notice',
            template: __webpack_require__(/*! ./notice.component.html */ "./src/app/components/notice/notice.component.html"),
            styles: [__webpack_require__(/*! ./notice.component.css */ "./src/app/components/notice/notice.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleboard_service__WEBPACK_IMPORTED_MODULE_1__["HandleboardService"],
            _services_handleuser_service__WEBPACK_IMPORTED_MODULE_4__["HandleuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"]])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "./src/app/components/start/start.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/start/start.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/start/start.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:1000px; margin:auto;\">\r\n  <div *ngIf=\"!loggedIn\">\r\n    <form class=\"loginbox\" (submit)=\"onLoginSubmit()\">\r\n      <hr/>\r\n      <table style=\"border-collapse:collapse;\">\r\n          <tr>\r\n              <td><input type=\"text\" name=\"id\" [(ngModel)]=\"id\" placeholder=\"아이디\" style=\"width:120px; height:20px;\" /></td>\r\n              <td rowspan=\"2\"><input type=\"submit\" name=\"submit\" style=\"height:55px;\" value=\"로그인\" /></td>\r\n          </tr>\r\n          <tr>\r\n              <td><input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"비밀번호\" style=\"width:120px; height:20px;\" /></td>\r\n          </tr>\r\n      </table>\r\n      <hr/><a class=\"link\" [routerLink]=\"['../join']\">회원가입</a><span class=\"link\"> | </span><a class=\"link\" [routerLink]=\"['../find']\">아이디/비밀번호 찾기</a></form>\r\n  </div>\r\n  <div *ngIf=\"loggedIn\">\r\n    <div class=\"loginbox\" style=\"text-align:center; font-size:13px;\">\r\n      <b>{{user.nickname}}</b>\r\n      <span>님, 반갑습니다</span><br/><hr/>\r\n      <b *ngIf=\"user.stop\" style=\"color:red;\">정지회원</b>\r\n      <b *ngIf=\"!user.stop\">클린회원</b><br/>\r\n      <a href=\"javascript:;\" (click)=\"openInfoWindow(user?.id)\" class=\"link\">나의 정보</a><br/>\r\n      <a class=\"link\" href=\"http://localhost:3000/fix\">회원정보수정</a> | \r\n      <a class=\"link\" (click)=\"onLogoutClick()\" href=\"javascript:;\">로그아웃</a><br/><hr/>\r\n      <span>가입일: {{user.joindate}}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"date\">\r\n    <span><img src=\"images/testimage.jpg\" width=\"118\" height=\"70\" /></span><br/>\r\n    <!-- {{user}} -->\r\n  </div>\r\n</div>\r\n\r\n<div class=\"box\">\r\n  <a class=\"board\" [routerLink]=\"['../free']\">ㆍ자유게시판</a><hr/>\r\n  <div class=\"startdiv\" *ngFor=\"let val of free\">\r\n    <a class=\"link\" [routerLink]=\"['../content']\" [queryParams]=\"{type: 'free', num: val.num}\">{{val?.title}}</a><br/>\r\n  </div>\r\n</div>\r\n<br/><br/>\r\n\r\n<div class=\"box\">\r\n  <a class=\"board\" [routerLink]=\"['../music']\">ㆍ음악게시판</a><hr/>\r\n  <div class=\"startdiv\" *ngFor=\"let val of music\">\r\n    <a class=\"link\" [routerLink]=\"['../content']\" [queryParams]=\"{type: 'music', num: val.num}\">{{val?.title}}</a><br/>\r\n  </div>\r\n</div>\r\n<br/><br/>\r\n\r\n<div class=\"box\">\r\n  <a class=\"board\" [routerLink]=\"['../suggest']\">ㆍ건의게시판</a><hr/>\r\n  <div class=\"startdiv\" *ngFor=\"let val of suggest\">\r\n    <a class=\"link\" [routerLink]=\"['../content#'+val?.num]\">{{val?.comment}}</a><br/>\r\n  </div>\r\n</div>\r\n<br/><br/>\r\n"

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_handleboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/handleboard.service */ "./src/app/services/handleboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartComponent = /** @class */ (function () {
    function StartComponent(handleuserService, handleboardService, router, route) {
        var _this = this;
        this.handleuserService = handleuserService;
        this.handleboardService = handleboardService;
        this.router = router;
        this.route = route;
        if (this.route.snapshot.queryParamMap.get('goto')) {
            this.goto = this.route.snapshot.queryParamMap.get('goto');
            this.type = this.route.snapshot.queryParamMap.get('type');
            this.num = this.route.snapshot.queryParamMap.get('num');
            this.router.navigate(['./' + this.goto], { queryParams: { type: this.type, num: this.num } });
        }
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    StartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleuserService.getLoginData().subscribe(function (data) {
            _this.loggedIn = data.result;
            _this.user = data.user;
            _this.handleboardService.getStartPageInfos().subscribe(function (result) {
                _this.free = result.free;
                _this.music = result.music;
                _this.suggest = result.suggest;
            });
        });
    };
    StartComponent.prototype.initialiseInvites = function () {
        var _this = this;
        this.handleuserService.getLoginData().subscribe(function (data) {
            _this.loggedIn = data.result;
            _this.user = data.user;
        });
    };
    StartComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    StartComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    StartComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var formData = {
            id: this.id,
            password: this.password
        };
        this.handleuserService.loggingIn(formData).subscribe(function (data) {
            if (data.success) {
                _this.router.navigated = false;
                _this.router.navigate(['./start']);
            }
            else {
                _this.router.navigate(['localhost:3000/loginpage']);
            }
        });
    };
    StartComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.handleuserService.logout().subscribe(function (data) {
            _this.router.navigated = false;
            _this.router.navigate(['./start']);
        });
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/components/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/components/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__["HandleuserService"],
            _services_handleboard_service__WEBPACK_IMPORTED_MODULE_3__["HandleboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/components/subadmin/subadmin.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/subadmin/subadmin.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subadmin/subadmin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/subadmin/subadmin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <table class=\"admintable\">\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>관리</th>\r\n      </tr>\r\n      <ng-container *ngFor=\"let val of sub.stops\">\r\n        <tr>\r\n          <td><b style=\"cursor:pointer; color:red;\" id=\"val.id\" [attr.id]=\"val.id\" (click)=\"openInfoWindow(val?.id)\">{{val.id}}</b></td>\r\n          <td><button (click)=\"onStopUser(val.id)\" id=\"val.id + 'button'\" [attr.id]=\"val.id + 'button'\">해제</button></td>\r\n        </tr>\r\n        <tr *ngIf=\"val.id != user.id || val.id != 'admin'\">\r\n          <td><b style=\"cursor:pointer;\" id=\"val.id\" (click)=\"openInfoWindow(val?.id)\">{{val.id}}</b></td>\r\n          <td><button (click)=\"onStopUser(val.id)\" id=\"val.id + 'button'\">정지</button></td>\r\n        </tr>\r\n      </ng-container>\r\n    </table>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components/subadmin/subadmin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/subadmin/subadmin.component.ts ***!
  \***********************************************************/
/*! exports provided: SubadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubadminComponent", function() { return SubadminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubadminComponent = /** @class */ (function () {
    function SubadminComponent(http, router, flashMessage, handleuserService) {
        this.http = http;
        this.router = router;
        this.flashMessage = flashMessage;
        this.handleuserService = handleuserService;
    }
    SubadminComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        this.http.get('http://localhost:3000/subadmin', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            if (data.result) {
                _this.sub = data.sub;
                _this.clean = data.clean;
                _this.user = data.user;
            }
            else {
                _this.router.navigate(['./start']);
            }
        });
    };
    SubadminComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    SubadminComponent.prototype.onStopUser = function (userid) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('http://localhost:3000/ajax/substop', { boardtype: this.sub.id, userid: userid }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); })).subscribe(function (data) {
            if (data.message == 'done') {
                if (data.stop) {
                    document.getElementById(userid).style.color = "red";
                    document.getElementById(userid + 'button').innerHTML = "해제";
                    _this.flashMessage.showFlashMessage({
                        messages: ['정지 완료'],
                        type: 'success',
                        timeout: 3000
                    });
                }
                else {
                    document.getElementById(userid).style.color = "black";
                    document.getElementById(userid + 'button').innerHTML = "정지";
                    _this.flashMessage.showFlashMessage({
                        messages: ['해제 완료'],
                        type: 'success',
                        timeout: 3000
                    });
                }
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['에러가 발생하였습니다'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    SubadminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subadmin',
            template: __webpack_require__(/*! ./subadmin.component.html */ "./src/app/components/subadmin/subadmin.component.html"),
            styles: [__webpack_require__(/*! ./subadmin.component.css */ "./src/app/components/subadmin/subadmin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _services_handleuser_service__WEBPACK_IMPORTED_MODULE_5__["HandleuserService"]])
    ], SubadminComponent);
    return SubadminComponent;
}());



/***/ }),

/***/ "./src/app/components/subboard/subboard.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/subboard/subboard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subboard/subboard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/subboard/subboard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\"><span>{{title}}</span>\r\n  <hr/><br/><br/>\r\n  <table class=\"tb\">\r\n    <tr style=\"height:25px; font-weight:bold\">\r\n      <td style=\"width:70px\">번호</td>\r\n      <td style=\"width:140px\">제목</td>\r\n      <td style=\"width:65px\">작성자</td>\r\n      <td style=\"width:100px\">날짜</td>\r\n      <td style=\"width:55px\">조회수</td>\r\n      <td style=\"width:40px\">추천</td>\r\n    </tr>\r\n\r\n    <ng-container *ngFor=\"let val of subcontents\">\r\n      <tr class=\"trhover\" style=\"height:20px;\">\r\n        <td>{{val.num}}</td>\r\n        <td style=\"text-align:left; padding:50px;\">\r\n          <a class=\"link\" [routerLink]=\"['../content']\" [queryParams]=\"{type: val?.type, num: val?.num}\">{{val.title}}</a> \r\n          <span style=\"font-size:12px; color:grey;\" *ngIf=\"val.comment.length > 0\"> [{{val.comment.length}}]</span>\r\n        </td>\r\n        <td>\r\n          <a class=\"link\" href=\"javascript:;\" (click)=\"openinfoWindow(val?.id)\">{{val.nickname}}</a>\r\n        </td>\r\n        <td>{{val.writedate}}</td>\r\n        <td>{{val.hit}}</td>\r\n        <td>{{val.recommend}}</td>\r\n      </tr>\r\n    </ng-container>\r\n\r\n  </table>\r\n  <br/><br/>\r\n\r\n  <button *ngIf=\"loggedIn && !user?.stop\" style=\"float:right;\" onclick=\"location.href='http://localhost:3000/write?type='+sub.id\">글쓰기</button>\r\n  <button style=\"float:right;\" (click)=\"openPlayListWindow(sub?.id)\">재생목록</button>\r\n  <button style=\"float:left;\" (click)=\"openViewLiveWindow(sub?.id)\">라이브</button>\r\n  <button *ngIf=\"user?.id == sub?.id\" style=\"float:left;\" (click)=\"openMakeLiveWindow(sub?.id)\">라이브 생성</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/subboard/subboard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/subboard/subboard.component.ts ***!
  \***********************************************************/
/*! exports provided: SubboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubboardComponent", function() { return SubboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _services_handleboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/handleboard.service */ "./src/app/services/handleboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubboardComponent = /** @class */ (function () {
    function SubboardComponent(handleuserService, handleboardService, route, router) {
        var _this = this;
        this.handleuserService = handleuserService;
        this.handleboardService = handleboardService;
        this.route = route;
        this.router = router;
        this.type = this.route.snapshot.queryParamMap.get('type');
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.ngOnInit();
            }
        });
    }
    SubboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleuserService.loggedIn().subscribe(function (data) {
            _this.loggedIn = data.result;
            _this.handleboardService.getSubcontents(_this.type).subscribe(function (result) {
                if (result.result) {
                    _this.title = result.title;
                    _this.sub = result.sub;
                    _this.subcontents = result.subcontents;
                    _this.user = result.user;
                }
                else {
                    _this.router.navigate(['./start']);
                }
            });
        });
    };
    SubboardComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    SubboardComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    SubboardComponent.prototype.openPlayListWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/openplaylist?userid=' + userid);
    };
    SubboardComponent.prototype.openViewLiveWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/live/view?userid=' + userid);
    };
    SubboardComponent.prototype.openMakeLiveWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/live/make?userid=' + userid);
    };
    SubboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subboard',
            template: __webpack_require__(/*! ./subboard.component.html */ "./src/app/components/subboard/subboard.component.html"),
            styles: [__webpack_require__(/*! ./subboard.component.css */ "./src/app/components/subboard/subboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_2__["HandleuserService"],
            _services_handleboard_service__WEBPACK_IMPORTED_MODULE_3__["HandleboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SubboardComponent);
    return SubboardComponent;
}());



/***/ }),

/***/ "./src/app/components/subs/subs.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/subs/subs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/subs/subs.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/subs/subs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" *ngIf=\"loggedIn\">\r\n  <span>구독한 게시판</span><hr/><br/>\r\n  <ul *ngFor=\"let val of user?.subscribes\">\r\n    <li>\r\n      <a class=\"link\" style=\"font-size:16px;\" [routerLink]=\"['../subboard']\" [queryParams]=\"{type: val}\">{{val}}</a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"box\">\r\n  <span>서브게시판 목록</span><hr/><br/>\r\n  <ul *ngIf=\"loggedIn\">\r\n    <ng-container *ngFor=\"let val of sub\">\r\n      <li>\r\n        <a class=\"link\" style=\"font-size:16px;\" href=\"javascript:;\" (click)=\"onSubscribeBoard(val?.id)\">{{val?.id}}</a> \r\n        <span style=\"font-size:12px; color:grey;\"> [{{val?.subscribes?.length-1}}]</span>\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n  <ul *ngIf=\"!loggedIn\">\r\n    <ng-container *ngFor=\"let val of sub\">\r\n      <li>\r\n        {{val?.id}}<span style=\"font-size:12px; color:grey;\"> [{{val?.subscribes?.length-1}}]</span>\r\n      </li>\r\n    </ng-container>\r\n  </ul>\r\n  <br/><br/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/subs/subs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/subs/subs.component.ts ***!
  \***************************************************/
/*! exports provided: SubsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubsComponent", function() { return SubsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _services_handleboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/handleboard.service */ "./src/app/services/handleboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubsComponent = /** @class */ (function () {
    function SubsComponent(handleuserService, router, flashMessage, handleboardService) {
        var _this = this;
        this.handleuserService = handleuserService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.handleboardService = handleboardService;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    SubsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleuserService.loggedIn().subscribe(function (data) {
            _this.loggedIn = data.result;
            _this.handleboardService.getSubs().subscribe(function (data) {
                _this.sub = data.sub;
                _this.user = data.user;
            });
        });
    };
    SubsComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    SubsComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    SubsComponent.prototype.onSubscribeBoard = function (subid) {
        var _this = this;
        if (confirm('구독하시겠습니까?')) {
            this.handleuserService.subscribeBoard(subid).subscribe(function (data) {
                if (data.message == 'done') {
                    _this.router.navigated = false;
                    _this.router.navigate(['./subs']);
                }
                else {
                    _this.flashMessage.showFlashMessage({
                        messages: ['에러 발생: ' + data.message],
                        type: 'danger',
                        timeout: 3000
                    });
                }
            });
        }
    };
    SubsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subs',
            template: __webpack_require__(/*! ./subs.component.html */ "./src/app/components/subs/subs.component.html"),
            styles: [__webpack_require__(/*! ./subs.component.css */ "./src/app/components/subs/subs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_1__["HandleuserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _services_handleboard_service__WEBPACK_IMPORTED_MODULE_2__["HandleboardService"]])
    ], SubsComponent);
    return SubsComponent;
}());



/***/ }),

/***/ "./src/app/components/suggest/suggest.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/suggest/suggest.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/suggest/suggest.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/suggest/suggest.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <span id=\"visitor\">건의사항</span><hr/><br/>\r\n\r\n  <form (submit)=\"onWrite()\" *ngIf=\"loggedIn\">\r\n    <table style=\"width:700px; margin:auto\">\r\n      <tr>\r\n        <td>\r\n          <textarea cols=\"80\" rows=\"5\" name=\"comment\" [(ngModel)]=\"comment\"></textarea>\r\n        </td>\r\n        <td>\r\n          <input type=\"submit\" name=\"cmt\" value=\"작성\" style=\"width:100px; height:80px\"/>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </form>\r\n\r\n  <table class=\"tb2\" *ngFor=\"let val of content\">\r\n    <tr style=\"height:110px; vertical-align:top;\" [attr.id]=\"val.num\">\r\n      <td style=\"text-align:center; vertical-align:middle; width:110px; border-right:1px solid rgb(0,91,159)\">\r\n        <img width=\"70\" height=\"70\"/>\r\n      </td>\r\n      <td>\r\n        <div style=\"font-size:12px; padding:2px; margin-left:5px; border-bottom:1px dotted rgb(0,91,159);\">\r\n          <b *ngIf=\"val.id == 'admin'\">\r\n            <a class=\"tblink\" href=\"javascript:;\" (click)=\"openInfoWindow(val?.id)\">{{val.nickname}}</a>\r\n          </b>\r\n          <a *ngIf=\"val.id != 'admin'\" class=\"tblink\" href=\"javascript:;\" (click)=\"openinfoWindow(val?.id)\">{{val.nickname}}</a>\r\n          <span style=\"font-size:12px; float:right;\">{{val.writedate}}</span>\r\n        </div>\r\n        <div style=\"padding-left:10px;\">\r\n          <pre class=\"contentView\">{{val.comment}}</pre>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/suggest/suggest.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/suggest/suggest.component.ts ***!
  \*********************************************************/
/*! exports provided: SuggestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestComponent", function() { return SuggestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_handleuser_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/handleuser.service */ "./src/app/services/handleuser.service.ts");
/* harmony import */ var _services_handleboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/handleboard.service */ "./src/app/services/handleboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SuggestComponent = /** @class */ (function () {
    function SuggestComponent(handleuserService, handleboardService, router, flashMessage) {
        var _this = this;
        this.handleuserService = handleuserService;
        this.handleboardService = handleboardService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.initialiseInvites();
            }
        });
    }
    SuggestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.handleuserService.loggedIn().subscribe(function (data) {
            _this.loggedIn = data.result;
            _this.handleboardService.getSuggests().subscribe(function (data) {
                _this.content = data.content;
            });
        });
    };
    SuggestComponent.prototype.openInfoWindow = function (userid) {
        this.handleuserService.openWindow('http://localhost:3000/info?userid=' + userid);
    };
    SuggestComponent.prototype.initialiseInvites = function () {
        this.ngOnInit();
    };
    SuggestComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    SuggestComponent.prototype.onWrite = function () {
        var _this = this;
        var formData = {
            comment: this.comment
        };
        this.handleboardService.handleSuggest(formData).subscribe(function (data) {
            if (data.success) {
                // this.router.navigate(['./suggest']);
                _this.router.navigated = false;
                _this.router.navigate(['./suggest']);
            }
            else {
                _this.flashMessage.showFlashMessage({
                    messages: ['글작성 에러'],
                    type: 'danger',
                    timeout: 3000
                });
            }
        });
    };
    SuggestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-suggest',
            template: __webpack_require__(/*! ./suggest.component.html */ "./src/app/components/suggest/suggest.component.html"),
            styles: [__webpack_require__(/*! ./suggest.component.css */ "./src/app/components/suggest/suggest.component.css")]
        }),
        __metadata("design:paramtypes", [_services_handleuser_service__WEBPACK_IMPORTED_MODULE_3__["HandleuserService"],
            _services_handleboard_service__WEBPACK_IMPORTED_MODULE_4__["HandleboardService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_2__["NgFlashMessageService"]])
    ], SuggestComponent);
    return SuggestComponent;
}());



/***/ }),

/***/ "./src/app/services/handleboard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/handleboard.service.ts ***!
  \*************************************************/
/*! exports provided: HandleboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleboardService", function() { return HandleboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HandleboardService = /** @class */ (function () {
    function HandleboardService(http) {
        this.http = http;
    }
    HandleboardService.prototype.getFrees = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/free', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.getMusics = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/music', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.getSuggests = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/suggest', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.getSubcontents = function (type) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/subboard?type=' + type, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.getNotices = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/notice', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.getSubs = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/subs', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.getStartPageInfos = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/start', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.handleWrite = function (formData) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('enctype', 'multipart/form-data');
        return this.http.post('http://localhost:3000/handleWrite', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.handleSuggest = function (formData) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/handleSuggest', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService.prototype.handleNotice = function (formData) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('http://localhost:3000/handleNotice', formData, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    HandleboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], HandleboardService);
    return HandleboardService;
}());



/***/ }),

/***/ "./src/app/services/handleuser.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/handleuser.service.ts ***!
  \************************************************/
/*! exports provided: HandleuserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleuserService", function() { return HandleuserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function _window() {
    return window;
}
var HandleuserService = /** @class */ (function () {
    function HandleuserService(http, router) {
        this.http = http;
        this.router = router;
    }
    HandleuserService.prototype.openWindow = function (url) {
        var option = 'width=500, height=600, left=300, top=100, scrollbars=yes, toolbars=no, location=no';
        _window().open(url, '', option);
    };
    HandleuserService.prototype.loggedIn = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/login/ng', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HandleuserService.prototype.loggingIn = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/login', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HandleuserService.prototype.getLoginData = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/login/data', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HandleuserService.prototype.logout = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/logout', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HandleuserService.prototype.handleRegi = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/handleRegi', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HandleuserService.prototype.subscribeBoard = function (subid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/ajax/subscribeboard', { subid: subid }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HandleuserService.prototype.fixUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'multipart/form-data; boundary=----WebKitFormBoundaryl4oxlVSt9yblG8VC');
        // headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/handleFix', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HandleuserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(
        // {providedIn: 'root'}
        ),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HandleuserService);
    return HandleuserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\PJH\webNapp\Elevator_Angular\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map