webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(156);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Analance package manager';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(314),
        styles: [__webpack_require__(308)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__input_input_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__output_output_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__status_status_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__output_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Import Material design module 

//import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//hammer.js for touch support



//import output service 

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_9__output_output_component__["a" /* OutputComponent */],
            __WEBPACK_IMPORTED_MODULE_10__status_status_component__["a" /* StatusComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__output_service__["a" /* OutputService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__output_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import model

//import output service 

var InputComponent = (function () {
    function InputComponent(packagelog) {
        this.packagelog = packagelog;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Model */]();
        this.firstlink = false;
        this.secondlink = false;
        this.thirdlink = false;
        this.fourthlink = false;
        this.viewStatus = false;
    }
    InputComponent.prototype.ngOnInit = function () {
        console.log(this.model);
    };
    InputComponent.prototype.installincludes_path = function (type) {
        if (type == 1) {
            this.firstlink = true;
        }
        else if (type == 0) {
            this.firstlink = false;
        }
    };
    InputComponent.prototype.zipincludes_path = function (type) {
        if (type == 1) {
            this.secondlink = true;
        }
        else if (type == 0) {
            this.secondlink = false;
        }
    };
    InputComponent.prototype.package_path = function (type) {
        console.log("triggered common");
        if (type == 1) {
            this.thirdlink = true;
        }
        else if (type == 0) {
            console.log("triggered else part");
            this.thirdlink = false;
        }
    };
    InputComponent.prototype.source_folder = function (type) {
        if (type == 1) {
            this.fourthlink = true;
        }
        else if (type == 0) {
            this.fourthlink = false;
        }
    };
    InputComponent.prototype.triggerOutput = function (value) {
        var _this = this;
        if (value == "./done") {
            this.packagelog.getStubData().then(function (data) { _this.logData = data; console.log(data); });
            this.viewStatus = true;
        }
        else {
            this.logData = [];
            this.viewStatus = false;
        }
    };
    return InputComponent;
}());
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-input',
        template: __webpack_require__(315),
        styles: [__webpack_require__(309)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__output_service__["a" /* OutputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__output_service__["a" /* OutputService */]) === "function" && _a || Object])
], InputComponent);

var _a;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
var Model = (function () {
    function Model(installpath, zippath, packagepath, sourcefolder, releasename, releaseversion, releasedate) {
        if (installpath === void 0) { installpath = ""; }
        if (zippath === void 0) { zippath = ""; }
        if (packagepath === void 0) { packagepath = ""; }
        if (sourcefolder === void 0) { sourcefolder = ""; }
        if (releasename === void 0) { releasename = ""; }
        if (releaseversion === void 0) { releaseversion = ""; }
        this.installpath = installpath;
        this.zippath = zippath;
        this.packagepath = packagepath;
        this.sourcefolder = sourcefolder;
        this.releasename = releasename;
        this.releaseversion = releaseversion;
        this.releasedate = releasedate;
    }
    return Model;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

//# sourceMappingURL=output.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__output___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__output__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_status_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Import output interface 


var OutputComponent = (function () {
    function OutputComponent() {
        this.showStatus = false;
    }
    OutputComponent.prototype.ngAfterViewInit = function () {
    };
    OutputComponent.prototype.ngOnDestroy = function () {
    };
    OutputComponent.prototype.ngOnChanges = function (changes) {
        this.changeCheck();
    };
    OutputComponent.prototype.changeCheck = function () {
        if (this.viewState == true) {
            this.showStatus = false;
        }
    };
    OutputComponent.prototype.generatePackage = function () {
        var _this = this;
        this.showStatus = true;
        setTimeout(function () {
            _this.triggerChildComponentMethod.showStatus();
        }, 2000);
    };
    OutputComponent.prototype.triggerchildMethod = function () {
    };
    return OutputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__output__["Output"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__output__["Output"]) === "function" && _a || Object)
], OutputComponent.prototype, "outputlogger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Boolean)
], OutputComponent.prototype, "viewState", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__status_status_component__["a" /* StatusComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__status_status_component__["a" /* StatusComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__status_status_component__["a" /* StatusComponent */]) === "function" && _b || Object)
], OutputComponent.prototype, "triggerChildComponentMethod", void 0);
OutputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-output',
        template: __webpack_require__(316),
        styles: [__webpack_require__(310)]
    }),
    __metadata("design:paramtypes", [])
], OutputComponent);

var _a, _b;
//# sourceMappingURL=output.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stubData; });
var stubData = [
    {
        AssemblyName: "Analance.Event.Service",
        AssemblyVersion: "1.0.0.0",
        ReleaseName: "2017.R29",
        ReleaseVersion: "6.0.0.29",
        ReleaseDate: "05/02/2017"
    }, {
        AssemblyName: "Analance.Foundation.Service",
        AssemblyVersion: "6.0.0.29",
        ReleaseName: "2017.R29",
        ReleaseVersion: "6.0.0.29",
        ReleaseDate: "06/02/2017"
    }, {
        AssemblyName: "Analance.Gateway.Service",
        AssemblyVersion: "6.0.0.29",
        ReleaseName: "2017.R29",
        ReleaseVersion: "6.0.0.29",
        ReleaseDate: "07/02/2017"
    }, {
        AssemblyName: "Analance.Professional.Service",
        AssemblyVersion: "6.0.0.29",
        ReleaseName: "2017.R29",
        ReleaseVersion: "6.0.0.9",
        ReleaseDate: "08/02/2017"
    }
];
//# sourceMappingURL=stubdata.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, ".header{\r\n    background-color: #2a9f66;\r\n    text-align: center;\r\n    color: #f8f4f4;\r\n    position: relative;\r\n    top: -20px;\r\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    padding: 11px 1px 2px 0px;\r\n    font-family:serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n \r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.inputboxstyle{\r\n     position: relative;\r\n    left: 16px;\r\n    top: 16px;\r\n}   \r\n\r\n.inputwrapper{\r\n  position:relative;\r\n}\r\n\r\n.clear{\r\n    position: absolute;\r\n    right: 0px;\r\n    top: 12px;\r\n    cursor:pointer;\r\n}\r\n\r\n.inlinefield{\r\n  float:left;\r\n  width:220px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.normal-form{\r\n  width: 500px;\r\n} \r\n\r\n.valid{\r\n  color:green;\r\n}\r\n\r\n.invalid{\r\n  color:red;\r\n}\r\n\r\n.stickthere{\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 11px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, ".outputpartinfo{\r\n    width: 64%;\r\n    position: relative;\r\n    left: 16px;\r\n    top: 16px;\r\n}\r\n\r\n.generatebutton{\r\n    background-color:#2a9f66;\r\n    color: white;\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)(false);
// imports


// module
exports.push([module.i, ".statuslog{\r\n    height: 100px;\r\n    background-color: rgba(128, 128, 128, 0.33);\r\n    color: #103504;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>\n    {{title}}\n  </h1>\n</div>\n<div class=\"container\">\n    <app-input></app-input>\n</div>\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n <div class=\"col-sm-12\">\n    <button class=\"iconColor\" md-icon-button [mdMenuTriggerFor]=\"menu\">\n      <md-icon>more_vert</md-icon>\n    </button>\n    <md-menu #menu=\"mdMenu\">\n      <button class=\"iconColor\" (click)=\"installincludes_path(1)\" md-menu-item>\n        <md-icon class=\"iconColor\">insert_link</md-icon>\n        <span>Install Includes path</span>\n      </button>\n      <button class=\"iconColor\" (click)=\"zipincludes_path(1)\" md-menu-item>\n        <md-icon class=\"iconColor\">insert_link</md-icon>\n        <span>Zip Includes path</span>\n      </button>\n      <button class=\"iconColor\" (click)=\"package_path(1)\" md-menu-item>\n        <md-icon class=\"iconColor\">insert_link</md-icon>\n        <span>Package path</span>\n      </button>\n      <button class=\"iconColor\" (click)=\"source_folder(1)\" md-menu-item>\n        <md-icon class=\"iconColor\">insert_link</md-icon>\n        <span>Source folder</span>\n      </button>\n    </md-menu>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"inputboxstyle col-sm-12\"> \n      <form class=\"example-form\" #refForm=\"ngForm\">\n        <div class=\"normal-form\">\n          <p class=\"inputwrapper\" *ngIf=\"firstlink\">\n              <md-input-container class=\"example-full-width\">\n                  <input mdInput placeholder=\"Install Includes path\" required name=\"installpath\" [(ngModel)]=\"model.installpath\" #installpath=\"ngModel\" >\n              </md-input-container>\n              <md-icon class=\"clear iconColor\" (click)=\"installincludes_path(0)\">clear</md-icon>\n              <!-- Validation part -->\n                <span [hidden]=\"installpath.valid\" class=\"stickthere invalid\"><md-icon [hidden]=\"installpath.valid\">mood_bad</md-icon></span>\n                <span [hidden]=\"installpath.invalid\"class=\"stickthere valid\"><md-icon [hidden]=\"installpath.invalid\">mood</md-icon></span>\n             <!-- End validation part -->\n          </p>\n\n          <p class=\"inputwrapper\" *ngIf=\"secondlink\">\n              <md-input-container class=\"example-full-width\">\n                  <input mdInput placeholder=\"Zip Includes path\" required name=\"zippath\" [(ngModel)]=\"model.zippath\" #zippath=\"ngModel\" >\n              </md-input-container>\n              <md-icon class=\"clear iconColor\" (click)=\"zipincludes_path(0)\">clear</md-icon>\n               <!-- Validation part -->\n                <span [hidden]=\"zippath.valid\" class=\"stickthere invalid\"><md-icon>mood_bad</md-icon></span>\n                <span [hidden]=\"zippath.invalid\"class=\"stickthere valid\"><md-icon>mood</md-icon></span>\n               <!-- End validation part -->\n              {{model.zip_path}}\n          </p>\n\n          <p class=\"inputwrapper\" *ngIf=\"thirdlink\">\n              <md-input-container class=\"example-full-width\">\n                  <input mdInput placeholder=\"Package path\" required name=\"packagepath\" [(ngModel)]=\"model.packagepath\" #packagepath=\"ngModel\" >\n              </md-input-container>\n              <md-icon class=\"clear iconColor\" (click)=\"package_path(0)\">clear</md-icon>\n              \n              <!-- Validation part -->\n                <span [hidden]=\"packagepath.valid\" class=\"stickthere invalid\"><md-icon>mood_bad</md-icon></span>\n                <span [hidden]=\"packagepath.invalid\"class=\"stickthere valid\"><md-icon>mood</md-icon></span>\n               <!-- End validation part -->\n\n\n          </p>\n\n          <p class=\"inputwrapper\" *ngIf=\"fourthlink\">\n              <md-input-container class=\"example-full-width\">\n                  <input mdInput placeholder=\"Source folder\" required name=\"sourcefolder\" [(ngModel)]=\"model.sourcefolder\" #check #sourcefolder=\"ngModel\" (ngModelChange)=\"triggerOutput(check.value)\">\n              </md-input-container>\n              <md-icon class=\"clear iconColor\" (click)=\"source_folder(0)\">clear</md-icon>\n              <!-- Validation part -->\n              \n                <span [hidden]=\"sourcefolder.valid\" class=\"stickthere invalid\"><md-icon>mood_bad</md-icon></span>\n                <span [hidden]=\"sourcefolder.invalid\" class=\"stickthere valid\"><md-icon>mood</md-icon></span>\n              \n               <!-- End validation part -->\n          </p>\n        </div>\n\n        <div class=\"inline-form-box\">\n                  <p class=\"inputwrapper\">\n                      <md-input-container class=\"inlinefield\">\n                          <input mdInput required placeholder=\"Relase Name\" name=\"model.releasename\" [(ngModel)]=\"model.releasename\" #releasename=\"ngModel\" >\n                      </md-input-container>\n                  </p>\n\n                   <p class=\"inputwrapper\">\n                      <md-input-container class=\"inlinefield\">\n                          <input mdInput placeholder=\"Relase Version\" name=\"model.release_version\" [(ngModel)]=\"model.release_version\">\n                      </md-input-container>\n                   </p>\n\n                    <p class=\"inputwrapper\">\n                      <md-input-container class=\"inlinefield\">\n                          <input type=\"date\" mdInput placeholder=\"Relase Date\" name=\"model.release_date\" [(ngModel)]=\"model.release_date\" >\n                      </md-input-container>\n                    </p>\n        </div>\n      </form>\n    </div>\n</div>\n\n<app-output [outputlogger]=\"logData\" [viewState]=\"viewStatus\"></app-output>"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"viewState\" class=\"outputpartinfo table-responsive\">\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>AssemblyName</th>\n      <th>AssemblyVersion</th>\n      <th>ReleaseName</th>\n      <th>ReleaseVersion</th>\n      <th>ReleaseDate</th>\n    </tr>\n  </thead>\n  <tbody>\n     <tr *ngFor=\"let data of outputlogger\">\n        <td>{{data.AssemblyName}}</td>\n        <td>{{data.AssemblyVersion}}</td>\n        <td>{{data.ReleaseName}}</td>\n        <td>{{data.ReleaseVersion}}</td>\n        <td>{{data.ReleaseDate}}</td>\n    </tr>\n  </tbody>\n</table>\n\n<div>\n<button (click)=\"generatePackage()\" class=\"generatebutton\" md-raised-button>Generate Package</button>\n</div>\n<div *ngIf=\"showStatus\" class=\"outputstatusinfo\">\n  <app-status></app-status>\n</div>\n<br><br><br>\n\n</div>\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<br>\n<div [innerHTML]=\"showLog\" class=\"statuslog\">\n \n</div>"

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stubdata__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutputService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import stub/mock data 

var OutputService = (function () {
    function OutputService() {
    }
    OutputService.prototype.getStubData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__stubdata__["a" /* stubData */]);
    };
    return OutputService;
}());
OutputService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], OutputService);

//# sourceMappingURL=output.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusComponent = (function () {
    function StatusComponent() {
        this.showLog = "Generate Started";
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent.prototype.showStatus = function () {
        var _this = this;
        setTimeout(function () {
            var logmsg = 'Generate Started ... <br> Directory created..<br>Generating package ... done</br>Package generated... done';
            _this.showLog = logmsg;
            console.log(_this.showLog);
        }, 1000);
    };
    return StatusComponent;
}());
StatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-status',
        template: __webpack_require__(317),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [])
], StatusComponent);

//# sourceMappingURL=status.component.js.map

/***/ })

},[369]);
//# sourceMappingURL=main.bundle.js.map