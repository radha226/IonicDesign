webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.single = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_list_list__["a" /* ListPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/oxosolutions/Desktop/Apps/IonicDesign/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n   \n    <ion-title> <button ion-button menuToggle>\n      <ion-icon name="menu" item-start></ion-icon>\n    </button> <span class="tag-title" item-end>Questions</span>\n    </ion-title>\n    <div class="header-inner">\n      <ul class="clearfix">\n        <li>Home <ion-badge item-end>6</ion-badge></li>\n        <li>Featured</li>\n        <li>Frequent</li>\n        <li>Unanswred</li>\n        <li>Peoples <ion-badge item-end>5</ion-badge></li>\n        <li>Community</li>\n        <li>Shopping</li>\n        <li>Vouchers <ion-badge item-end>8</ion-badge></li>\n      </ul>\n      </div>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <!--community list-wrap-->\n  \n  <ion-list>\n    <div (click)="single()" class="list-wrap clearfix">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/profile.jpg">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>November 5, 1955</p>\n      </ion-item>\n      <ion-card-content>\n      <h6 ><strong>The best free online image resizer and compressor on the Web</strong></h6>\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        <ul class="tags-list clearfix">\n          <li>Typescript</li>\n          <li>Angularjs</li>\n          <li>Ionic 3</li>\n        </ul>\n      </ion-card-content>\n      <ion-row>\n        <ion-col class="comments">\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col class="comments">\n          <button ion-button icon-left clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>4 Comments</div>\n          </button>\n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n            11h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class="divider clearfix"></div>\n\n     <div class="list-wrap clearfix">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/profile.jpg">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>November 5, 1955</p>\n      </ion-item>\n      <ion-card-content>\n      <h6><strong>The best free online image resizer and compressor on the Web</strong></h6>\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        <ul class="tags-list clearfix">\n          <li>Typescript</li>\n          <li>Angularjs</li>\n          <li>Ionic 3</li>\n        </ul>\n      </ion-card-content>\n      <ion-row>\n        <ion-col class="comments">\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col class="comments">\n          <button ion-button icon-left clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>4 Comments</div>\n          </button>\n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n            11h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class="divider clearfix"></div>\n\n     <div class="list-wrap clearfix">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/profile.jpg">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>November 5, 1955</p>\n      </ion-item>\n      <ion-card-content>\n      <h6><strong>The best free online image resizer and compressor on the Web</strong></h6>\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        <ul class="tags-list clearfix">\n          <li>Typescript</li>\n          <li>Angularjs</li>\n          <li>Ionic 3</li>\n        </ul>\n      </ion-card-content>\n      <ion-row>\n        <ion-col class="comments">\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col class="comments">\n          <button ion-button icon-left clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>4 Comments</div>\n          </button>\n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n            11h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>\n    </div>\n\n     <div class="divider clearfix"></div>\n\n     <div class="list-wrap clearfix">\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/profile.jpg">\n        </ion-avatar>\n        <h2>Marty McFly</h2>\n        <p>November 5, 1955</p>\n      </ion-item>\n      <ion-card-content>\n      <h6><strong>The best free online image resizer and compressor on the Web</strong></h6>\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        <ul class="tags-list clearfix">\n          <li>Typescript</li>\n          <li>Angularjs</li>\n          <li>Ionic 3</li>\n        </ul>\n      </ion-card-content>\n      <ion-row>\n        <ion-col class="comments">\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col class="comments">\n          <button ion-button icon-left clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>4 Comments</div>\n          </button>\n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n            11h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-list>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/home/oxosolutions/Desktop/Apps/IonicDesign/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pages = [];
        this.initializeApp();
        this.pages = [
            { icon: 'home', title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { icon: 'list', title: 'List page', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { icon: 'logo-android', title: 'Android', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { icon: 'help', title: 'Questions', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { icon: 'logo-angular', title: 'Angular', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/oxosolutions/Desktop/Apps/IonicDesign/src/app/app.html"*/'<ion-menu [content]="content1">\n  <ion-header>\n    <ion-toolbar class="sidebar-title" style="min-height: 60px;">\n      <ion-title><img src="../assets/imgs/logo-2.png"></ion-title>\n      <button ion-button secondary menuToggle style="color:#c1bbbb"><ion-icon name="close"></ion-icon></button>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="sidemnu-content">\n\n    <ion-list class="sidemenu-list">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" style="margin-right:15px;"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content1 swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/oxosolutions/Desktop/Apps/IonicDesign/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/oxosolutions/Desktop/Apps/IonicDesign/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n   <ion-title> \n   <button ion-button menuToggle>\n      <ion-icon name="menu" item-start></ion-icon>\n    </button> <span class="tag-title" item-end>Questions</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n     <h6 class="list-title"><strong>The best free online image resizer and compressor on the Web</strong></h6>\n    <ion-slides pager>\n      <ion-slide style="">\n      <img src="../../assets/imgs/hand-2.jpg">\n      </ion-slide>\n\n      <ion-slide>\n      <img src="../../assets/imgs/hand-2.jpg">\n      </ion-slide>\n\n      <ion-slide>\n      <img src="../../assets/imgs/hand-2.jpg">\n      </ion-slide>\n    </ion-slides>\n     <p class="desc-detail">Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy. Women are increasingly participating in the national development process. They are making the nation proud by their outstanding performances almost every spheres including medical science, social service, engineering, etc.\n     <br><br>n archaeological studies of social communities the term "community" is used in two ways, paralleling usage in other areas. The first is an informal definition of community as a place where people used to live. In this sense it is synonymous with the concept of an ancient settlement, whether a hamlet, village, town, or city. The second meaning is similar to the usage of the term in other social sciences: a community is a group of people living near one another who interact socially. \n     </p>\n     <ul class="tags-list clearfix">\n          <li>Typescript</li>\n          <li>Angularjs</li>\n          <li>Ionic 3</li>\n        </ul>\n     <h6 class="socail-icons"><ion-icon name="share-alt" style="color:#ff8731"></ion-icon> Share By</h6>\n    <div class="" style="position:relative;">\n        <ion-fab>\n         \n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n          \n         </ion-fab>\n    </div>\n\n  </ion-list>\n \n</ion-content>\n'/*ion-inline-end:"/home/oxosolutions/Desktop/Apps/IonicDesign/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map