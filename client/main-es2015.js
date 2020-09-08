(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






class AppComponent {
    constructor(router) {
        this.router = router;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
            .subscribe((event) => {
            this.current = event.url;
        });
        this.router.events.subscribe((event) => {
            if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]))
                return;
            window.scrollTo(0, 0);
        });
    }
    setActive(regexStr) {
        const regex = new RegExp(regexStr);
        return regex.test(this.current) ? 'active' : '';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 51, vars: 1, consts: [[1, "navbar", "navbar-expand", "p-3"], [1, "navbar-brand", "pl-3", "pointer"], ["src", "../assets/img/logo.png", "width", "50", "height", "50", "routerLink", "/"], [1, "navbar-brand", "text-black", "pointer"], ["routerLink", "/", 1, "h3"], [1, "navbar-nav", "ml-auto"], ["routerLink", "/user", 1, "nav-item", "nav-link", "text-black", "h5", "my-auto", "mr-3", "link", "pointer", 3, "ngClass"], [1, "container-fluid", "footer", "text-black", "text-center"], [1, "row", "text-center", "d-flex", "justify-content-center", "mt-2", "mb-4", "mx-5"], [1, "col-md-2"], [1, "font-weight-bold"], ["routerLink", "/user", 1, "text-black"], ["routerLink", "/user/login", 1, "text-black"], ["routerLink", "/user/signup", 1, "text-black"], ["routerLink", "about", 1, "text-black"], ["routerLink", "policy", 1, "text-black"], [2, "border", "0.1px solid #000000", "width", "70%"], [1, "row", "d-flex", "text-center", "justify-content-center", "mb-md-0", "mb-4"], [1, "col-md-8", "col-12", "mt-3"], [1, "h6"], [1, "row"], [1, "col-md-12", "mt-4"], [1, "mb-5", "flex-center"], ["target", "_blank", "title", "Facebook", "href", "https://www.facebook.com/hassaan.younas.79/"], [1, "fa", "fa-facebook-f", "fa-lg", "text-black", "mr-4", "pointer"], ["target", "_blank", "title", "Twitter", "href", "https://www.twitter.com"], [1, "fa", "fa-twitter", "fa-lg", "text-black", "mr-4", "pointer"], ["target", "_blank", "title", "LinkedIn", "href", "https://pk.linkedin.com/in/hassaan-younas-04494b169"], [1, "fa", "fa-linkedin", "fa-lg", "text-black", "mr-4", "pointer"], ["target", "_blank", "title", "Instagram", "href", "https://www.instagram.com/ha.ss.aa.n/"], [1, "fa", "fa-instagram", "fa-lg", "text-black", "mr-4", "pointer"], ["target", "_blank", "title", "GitHub", "href", "https://github.com/HassaanYounas"], [1, "fa", "fa-github", "fa-lg", "text-black", "pointer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DocFind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "DocFind is a simple application made for FSWD Course. The applications main purpose is to be a catalogue of doctors for users, so that they can quickly find information on them and be able to contact them and get an appointment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setActive("^/user$|/user/patient|/user/doctor|/user/signup|/user/login"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  font-family: \"Baloo Paaji 2\", cursive;\n  background-color: #eae7dc;\n  overflow-x: hidden;\n  position: relative;\n  min-height: 100%;\n}\n\n.link[_ngcontent-%COMP%] {\n  color: #000000;\n  font-weight: 600;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  opacity: 0.3;\n  text-decoration: none;\n}\n\n.text-black[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.active[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  background: #eae7dc;\n  border-radius: 0;\n  border: 3px solid #000000;\n  height: auto;\n  max-height: 200px;\n  overflow-x: hidden;\n}\n\n.dropdown-item-custom[_ngcontent-%COMP%] {\n  -webkit-transition: 0.1s ease-in-out;\n  transition: 0.1s ease-in-out;\n}\n\n.dropdown-item-custom[_ngcontent-%COMP%]:hover {\n  background-color: #d8c3a5;\n}\n\n.list-group-custom[_ngcontent-%COMP%] {\n  background-color: #e85a4f;\n  padding: 65px 100px 50px 100px;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  font-size: 18px;\n  position: relative;\n  left: 0;\n  -webkit-transition: ease-in-out 0.2s;\n  transition: ease-in-out 0.2s;\n  list-style-type: none;\n  background-color: #eae7dc;\n  padding: 20px;\n  border: 3px solid #000000;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.list-item[_ngcontent-%COMP%]:hover {\n  left: 15px;\n  background-color: #d8c3a5;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #000000;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  border: 3px solid #000000;\n  padding: 10px 40px;\n  font-size: 20px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #d8c3a5;\n}\n\n.btn-dropdown[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #000000;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  border: 3px solid #000000;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.btn-dropdown[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.btn-dropdown[_ngcontent-%COMP%]:hover {\n  background-color: #d8c3a5;\n}\n\n.btn-appointment[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #000000;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  border: 3px solid #000000;\n  padding: 5px 10px;\n  font-size: 16px;\n  -webkit-transition: 0.3s ease-in-out;\n  transition: 0.3s ease-in-out;\n}\n\n.btn-appointment[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.btn-appointment[_ngcontent-%COMP%]:hover {\n  background-color: #d8c3a5;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.no-underline[_ngcontent-%COMP%], .no-underline[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #000000;\n}\n\n.card-body-custom[_ngcontent-%COMP%] {\n  background-color: #eae7dc;\n  border: 2px solid #000000;\n  border-radius: 0px;\n}\n\n.section-authenticate[_ngcontent-%COMP%] {\n  padding: 70px;\n  margin-top: 70px;\n  margin-bottom: 140px;\n}\n\n.section-sign-up[_ngcontent-%COMP%] {\n  background-color: #e98074;\n  padding: 60px 0;\n}\n\n.section-form[_ngcontent-%COMP%] {\n  padding: 0 135px;\n}\n\n.section-topbar[_ngcontent-%COMP%] {\n  background-color: #e85a4f;\n  border-bottom: 3px solid #000000;\n}\n\n.form-control-custom[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border: 3px solid #000000;\n  border-radius: 0;\n  background-color: #ffffff;\n  padding: 5px 10px;\n  font-size: 18px;\n}\n\n.form-control-custom[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border-color: #8e8d8a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #d8c3a5;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRzpcXGRvY2ZpbmQtY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0c6XFxkb2NmaW5kLWNsaWVudC9zcmNcXGFzc2V0c1xcc2Fzcy12YXJpYWJsZXMuc2FzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0kscUNBQUE7RUFDQSx5QkNMVztFRE1YLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRUZSOztBRklBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FFREo7O0FGRUk7RUFDSSxjQUFBO0VBQ0EsNkJBQUE7RUFBQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRUFSOztBRkVBO0VBQ0ksY0FBQTtBRUNKOztBRkNBO0VBQ0ksWUFBQTtBRUVKOztBRkFBO0VBQ0ksbUJDMUJlO0VEMkJmLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRUdKOztBRkRBO0VBQ0ksb0NBQUE7RUFBQSw0QkFBQTtBRUlKOztBRkhJO0VBQ0kseUJDbkNhO0FDd0NyQjs7QUZIQTtFQUNJLHlCQ25DaUI7RURvQ2pCLDhCQUFBO0FFTUo7O0FGSkE7RUFDUSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJDaERXO0VEaURYLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRU9SOztBRk5RO0VBQ0ksVUFBQTtFQUNBLHlCQ3REUztBQzhEckI7O0FGTkE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FFU0o7O0FGUkk7RUFDSSxnQkFBQTtBRVVSOztBRlRJO0VBQ0kseUJDcEVhO0FDK0VyQjs7QUZWSTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQUEsNEJBQUE7QUVZUjs7QUZYUTtFQUNJLGdCQUFBO0FFYVo7O0FGWlE7RUFDSSx5QkMvRVM7QUM2RnJCOztBRmJJO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFBQSw0QkFBQTtBRWVSOztBRmRRO0VBQ0ksZ0JBQUE7QUVnQlo7O0FGZlE7RUFDSSx5QkM1RlM7QUM2R3JCOztBRmZBO0VBQ0ksZUFBQTtBRWtCSjs7QUZoQkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUVtQko7O0FGakJBO0VBQ0kseUJDdkdlO0VEd0dmLHlCQUFBO0VBQ0Esa0JBQUE7QUVvQko7O0FGakJJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUVvQlI7O0FGbkJJO0VBQ0kseUJDOUdXO0VEK0dYLGVBQUE7QUVxQlI7O0FGcEJJO0VBQ0ksZ0JBQUE7QUVzQlI7O0FGckJJO0VBQ0kseUJDbEhhO0VEbUhiLGdDQUFBO0FFdUJSOztBRnJCQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FFd0JKOztBRnZCSTtFQUNJLGdCQUFBO0VBQ0EscUJDaElZO0FDeUpwQjs7QUZ2QkE7RUFDSSx5QkNwSWlCO0VEcUlqQixhQUFBO0FFMEJKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vYXNzZXRzL3Nhc3MtdmFyaWFibGVzLnNhc3MnXHJcblxyXG5odG1sXHJcbiAgICBib2R5XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdCYWxvbyBQYWFqaSAyJywgY3Vyc2l2ZVxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1wcmltYXJ5XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwJVxyXG5cclxuLmxpbmtcclxuICAgIGNvbG9yOiAjMDAwMDAwXHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICAmOmhvdmVyXHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDBcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2VcclxuICAgICAgICBvcGFjaXR5OiAwLjNcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuXHJcbi50ZXh0LWJsYWNrXHJcbiAgICBjb2xvcjogIzAwMDAwMFxyXG5cclxuLmFjdGl2ZVxyXG4gICAgb3BhY2l0eTogMC4zXHJcblxyXG4uZHJvcGRvd24tbWVudVxyXG4gICAgYmFja2dyb3VuZDogJGJnLWNvbG9yLXByaW1hcnlcclxuICAgIGJvcmRlci1yYWRpdXM6IDBcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDAgXHJcbiAgICBoZWlnaHQ6IGF1dG9cclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW5cclxuXHJcbi5kcm9wZG93bi1pdGVtLWN1c3RvbVxyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1zZWNvbmRhcnlcclxuXHJcbi5saXN0LWdyb3VwLWN1c3RvbVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZnLWNvbG9yLXNlY29uZGFyeVxyXG4gICAgcGFkZGluZzogNjVweCAxMDBweCA1MHB4IDEwMHB4XHJcblxyXG4ubGlzdC1pdGVtXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgbGVmdDogMFxyXG4gICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMnNcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmVcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3ItcHJpbWFyeVxyXG4gICAgICAgIHBhZGRpbmc6IDIwcHhcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwIFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgIGxlZnQ6IDE1cHhcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLXNlY29uZGFyeVxyXG5cclxuLmJ0blxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxuICAgIGNvbG9yOiAjMDAwMDAwXHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHhcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDBcclxuICAgIHBhZGRpbmc6IDEwcHggNDBweFxyXG4gICAgZm9udC1zaXplOiAyMHB4XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0XHJcbiAgICAmOmZvY3VzXHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZVxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvci1zZWNvbmRhcnlcclxuICAgICYtZHJvcGRvd25cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwXHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMFxyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweFxyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDBcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0XHJcbiAgICAgICAgJjpmb2N1c1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lXHJcbiAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3Itc2Vjb25kYXJ5XHJcbiAgICAmLWFwcG9pbnRtZW50XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcclxuICAgICAgICBjb2xvcjogIzAwMDAwMFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHhcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwMDAwXHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHhcclxuICAgICAgICBmb250LXNpemU6IDE2cHhcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0XHJcbiAgICAgICAgJjpmb2N1c1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lXHJcbiAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3Itc2Vjb25kYXJ5XHJcblxyXG4ucG9pbnRlclxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcblxyXG4ubm8tdW5kZXJsaW5lLCAubm8tdW5kZXJsaW5lOmhvdmVyXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxuICAgIGNvbG9yOiAjMDAwMDAwXHJcblxyXG4uY2FyZC1ib2R5LWN1c3RvbVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLXByaW1hcnlcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDBcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweFxyXG5cclxuLnNlY3Rpb25cclxuICAgICYtYXV0aGVudGljYXRlXHJcbiAgICAgICAgcGFkZGluZzogNzBweFxyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHhcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNDBweFxyXG4gICAgJi1zaWduLXVwXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZnLWNvbG9yLXByaW1hcnlcclxuICAgICAgICBwYWRkaW5nOiA2MHB4IDBcclxuICAgICYtZm9ybVxyXG4gICAgICAgIHBhZGRpbmc6IDAgMTM1cHhcclxuICAgICYtdG9wYmFyXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZnLWNvbG9yLXNlY29uZGFyeVxyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwMDAwXHJcblxyXG4uZm9ybS1jb250cm9sLWN1c3RvbVxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMFxyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZlxyXG4gICAgcGFkZGluZzogNXB4IDEwcHhcclxuICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgJjpmb2N1c1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmVcclxuICAgICAgICBib3JkZXItY29sb3I6ICRiZy1jb2xvci10ZXJ0aWFyeVxyXG5cclxuLmZvb3RlclxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLXNlY29uZGFyeVxyXG4gICAgcGFkZGluZzogMzBweFxyXG4iLCIkYmctY29sb3ItcHJpbWFyeTogI2VhZTdkY1xyXG4kYmctY29sb3Itc2Vjb25kYXJ5OiAjZDhjM2E1XHJcbiRiZy1jb2xvci10ZXJ0aWFyeTogIzhlOGQ4YVxyXG4kZmctY29sb3ItcHJpbWFyeTogI2U5ODA3NFxyXG4kZmctY29sb3Itc2Vjb25kYXJ5OiAjZTg1YTRmXHJcbiIsImh0bWwgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIFBhYWppIDJcIiwgY3Vyc2l2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZTdkYztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubGluazpob3ZlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIG9wYWNpdHk6IDAuMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dC1ibGFjayB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uYWN0aXZlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIGJhY2tncm91bmQ6ICNlYWU3ZGM7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmRyb3Bkb3duLWl0ZW0tY3VzdG9tIHtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcbn1cbi5kcm9wZG93bi1pdGVtLWN1c3RvbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGMzYTU7XG59XG5cbi5saXN0LWdyb3VwLWN1c3RvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODVhNGY7XG4gIHBhZGRpbmc6IDY1cHggMTAwcHggNTBweCAxMDBweDtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjJzO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWU3ZGM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saXN0LWl0ZW06aG92ZXIge1xuICBsZWZ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhjM2E1O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4YzNhNTtcbn1cbi5idG4tZHJvcGRvd24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwMDAwMDtcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbn1cbi5idG4tZHJvcGRvd246Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bi1kcm9wZG93bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGMzYTU7XG59XG4uYnRuLWFwcG9pbnRtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uYnRuLWFwcG9pbnRtZW50OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG4tYXBwb2ludG1lbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhjM2E1O1xufVxuXG4ucG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vLXVuZGVybGluZSwgLm5vLXVuZGVybGluZTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5jYXJkLWJvZHktY3VzdG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhZTdkYztcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uc2VjdGlvbi1hdXRoZW50aWNhdGUge1xuICBwYWRkaW5nOiA3MHB4O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNDBweDtcbn1cbi5zZWN0aW9uLXNpZ24tdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk4MDc0O1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG4uc2VjdGlvbi1mb3JtIHtcbiAgcGFkZGluZzogMCAxMzVweDtcbn1cbi5zZWN0aW9uLXRvcGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlODVhNGY7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4uZm9ybS1jb250cm9sLWN1c3RvbSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9ybS1jb250cm9sLWN1c3RvbTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzhlOGQ4YTtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOGMzYTU7XG4gIHBhZGRpbmc6IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/user-signup/user-signup.component */ "./src/app/components/user/user-signup/user-signup.component.ts");
/* harmony import */ var _components_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user-login/user-login.component */ "./src/app/components/user/user-login/user-login.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_user_doctor_dashboard_doctor_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user/doctor-dashboard/doctor-dashboard.component */ "./src/app/components/user/doctor-dashboard/doctor-dashboard.component.ts");
/* harmony import */ var _components_user_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/patient-dashboard/patient-dashboard.component */ "./src/app/components/user/patient-dashboard/patient-dashboard.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/privacy-policy/privacy-policy.component */ "./src/app/components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _components_user_patient_dashboard_patient_dashboard_doctors_list_patient_dashboard_doctors_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/user/patient-dashboard/patient-dashboard-doctors-list/patient-dashboard-doctors-list.component */ "./src/app/components/user/patient-dashboard/patient-dashboard-doctors-list/patient-dashboard-doctors-list.component.ts");
/* harmony import */ var _components_user_patient_dashboard_patient_dashboard_settings_patient_dashboard_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/user/patient-dashboard/patient-dashboard-settings/patient-dashboard-settings.component */ "./src/app/components/user/patient-dashboard/patient-dashboard-settings/patient-dashboard-settings.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        _components_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_7__["UserSignupComponent"],
        _components_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"],
        _components_user_doctor_dashboard_doctor_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DoctorDashboardComponent"],
        _components_user_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["PatientDashboardComponent"],
        _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
        _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyComponent"],
        _components_user_patient_dashboard_patient_dashboard_doctors_list_patient_dashboard_doctors_list_component__WEBPACK_IMPORTED_MODULE_14__["PatientDashboardDoctorsListComponent"],
        _components_user_patient_dashboard_patient_dashboard_settings_patient_dashboard_settings_component__WEBPACK_IMPORTED_MODULE_15__["PatientDashboardSettingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                    _components_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_7__["UserSignupComponent"],
                    _components_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"],
                    _components_user_doctor_dashboard_doctor_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DoctorDashboardComponent"],
                    _components_user_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["PatientDashboardComponent"],
                    _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"],
                    _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyPolicyComponent"],
                    _components_user_patient_dashboard_patient_dashboard_doctors_list_patient_dashboard_doctors_list_component__WEBPACK_IMPORTED_MODULE_14__["PatientDashboardDoctorsListComponent"],
                    _components_user_patient_dashboard_patient_dashboard_settings_patient_dashboard_settings_component__WEBPACK_IMPORTED_MODULE_15__["PatientDashboardSettingsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user-signup/user-signup.component */ "./src/app/components/user/user-signup/user-signup.component.ts");
/* harmony import */ var _components_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/user-login/user-login.component */ "./src/app/components/user/user-login/user-login.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_home_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/home-guard.service */ "./src/app/services/home-guard.service.ts");
/* harmony import */ var _components_user_doctor_dashboard_doctor_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/doctor-dashboard/doctor-dashboard.component */ "./src/app/components/user/doctor-dashboard/doctor-dashboard.component.ts");
/* harmony import */ var _components_user_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/patient-dashboard/patient-dashboard.component */ "./src/app/components/user/patient-dashboard/patient-dashboard.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/privacy-policy/privacy-policy.component */ "./src/app/components/privacy-policy/privacy-policy.component.ts");











const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_services_home_guard_service__WEBPACK_IMPORTED_MODULE_6__["HomeGuardService"]] },
    { path: 'user', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"], canActivate: [_services_home_guard_service__WEBPACK_IMPORTED_MODULE_6__["HomeGuardService"]] },
    { path: 'user/signup', component: _components_user_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_3__["UserSignupComponent"], canActivate: [_services_home_guard_service__WEBPACK_IMPORTED_MODULE_6__["HomeGuardService"]] },
    { path: 'user/login', component: _components_user_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"], canActivate: [_services_home_guard_service__WEBPACK_IMPORTED_MODULE_6__["HomeGuardService"]] },
    { path: 'user/doctor', component: _components_user_doctor_dashboard_doctor_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DoctorDashboardComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'user/patient', component: _components_user_patient_dashboard_patient_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["PatientDashboardComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"] },
    { path: 'policy', component: _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyComponent"] },
    { path: '**', redirectTo: '/' }
];
const AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 15, vars: 0, consts: [[1, "container", "my-5", "px-5"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last updated: June 16, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DocFind is a simple application made for FSWD Course. The applications main purpose is to be a catalogue of doctors for users, so that they can quickly find information on them and be able to contact them and get an appointment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "If you have any questions, please contact us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email: hassaanyounas1@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Phone: +923361577283");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 54, vars: 0, consts: [[1, "container-fluid", "align-items-center", "text-center", "section-primary"], [1, "text-black", "display-3"], [1, "text-black", "h4"], [1, "container-fluid", "text-center", "section-secondary"], [1, "text-black", "h4", "my-4"], ["routerLink", "/user/signup", "type", "button", 1, "btn"], [1, "text-black", "h5", "d-inline", "mx-4"], ["routerLink", "/user/login", "type", "button", 1, "btn"], [1, "container", "text-center", "mt-5", "p-4"], [1, "text-black", "h2"], ["width", "40px", "height", "40px", "viewBox", "0 0 451.847 451.847", 1, "mt-2"], ["d", "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"], ["viewBox", "0 0 1440 320"], ["fill", "#e85a4f", "fill-opacity", "1", "d", "M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,165.3C672,149,768,107,864,90.7C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"], [1, "container-fluid", "section-tertiary"], [1, "row", "my-2"], [1, "col-sm", "mr-5"], [1, "text-center", "mb-4"], [1, "list-group"], [1, "list-item", "mb-3"], [1, "col-sm", "ml-5"], ["fill", "#e85a4f", "fill-opacity", "1", "d", "M0,64L48,90.7C96,117,192,171,288,176C384,181,480,139,576,112C672,85,768,75,864,80C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DocFind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Finding the doctor of your choice, made easy!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What're you waiting for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "How does DocFind work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\uD83D\uDE37 Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\uD83D\uDDA4 Sign Up or Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\uD83D\uDDA4 Choose doctor of your choice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\uD83D\uDDA4 Contact via Phone, SMS or Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\uD83D\uDDA4 Set an appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\uD83D\uDDA4 Go to the doctor, maybe, I don't know \uD83E\uDD37\u200D\u2642\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\uD83D\uDC68\u200D\u2695\uFE0F Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\uD83D\uDDA4 Sign Up or Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\uD83D\uDDA4 Setup your profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\uD83D\uDDA4 Receive patients appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\uD83D\uDDA4 Wait for the patients arrival");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\uD83D\uDDA4 Do what you do best \uD83E\uDD18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: 'home.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/privacy-policy/privacy-policy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/privacy-policy/privacy-policy.component.ts ***!
  \***********************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrivacyPolicyComponent {
    constructor() {
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 51, vars: 0, consts: [[1, "container", "my-5", "px-5"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Last updated: June 16, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Company DocFind operates http://www.docfind.com. This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Information Collection And Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name (\"Personal Information\"). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Like many site operators, we collect information that your browser sends whenever you visit our Site (\"Log Data\").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This Log Data may include information such as your computer's Internet Protocol (\"IP\") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The Log Data section is for businesses that use analytics or tracking services in websites or apps, like Google Analytics. For the full disclosure section, create your own Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Communications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that; the Communications section is for businesses that may contact users via email (email newsletters) or other methods. For the full disclosure section, create your own Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Like many sites, we use \"cookies\" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Changes To This Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "This Privacy Policy is effective as of June 16, 2020 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "If you have any questions about this Privacy Policy, please contact us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Email: hassaanyounas1@outlook.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Phone: +923361577283");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-policy',
                templateUrl: './privacy-policy.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/user/doctor-dashboard/doctor-dashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/user/doctor-dashboard/doctor-dashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: DoctorDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorDashboardComponent", function() { return DoctorDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_doctor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/doctor.model */ "./src/app/models/doctor.model.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_dial_codes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dial-codes.service */ "./src/app/services/dial-codes.service.ts");
/* harmony import */ var src_app_services_input_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/input-validation.service */ "./src/app/services/input-validation.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function DoctorDashboardComponent_form_13_li_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDashboardComponent_form_13_li_24_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const code_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.setCountryCode(code_r8.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const code_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", code_r8.country, " (+", code_r8.code, ")");
} }
const _c0 = function (a0) { return { "d-none": a0 }; };
function DoctorDashboardComponent_form_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DoctorDashboardComponent_form_13_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onInfoSubmit(ctx_r11.informationForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invalid name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please enter your qualification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please enter your address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Please enter working days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Please enter working hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Please provide a small description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DoctorDashboardComponent_form_13_li_24_Template, 2, 2, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Invalid contact (did you select country code?)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Please enter fee amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.informationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r5.validFullName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r5.validQualification));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r5.validAddress));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx_r5.validWorkingDays));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx_r5.validWorkingHours));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx_r5.validDescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.countryCode, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.dialCodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx_r5.validCellular));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx_r5.validFee));
} }
function DoctorDashboardComponent_form_22_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DoctorDashboardComponent_form_22_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onCredentialsSubmit(ctx_r13.credentialsForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please enter your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter Your New Login Credentials");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password should be at least 8 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.credentialsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r6.validEmail));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r6.validPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r6.validNewEmail));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r6.validNewPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r6.validNewPasswordConfirm));
} }
class DoctorDashboardComponent {
    constructor(titleService, router, formBuilder, dialCodeService, inputValidation, api) {
        this.titleService = titleService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.dialCodeService = dialCodeService;
        this.inputValidation = inputValidation;
        this.api = api;
        this.validFullName = true;
        this.validQualification = true;
        this.validAddress = true;
        this.validWorkingDays = true;
        this.validWorkingHours = true;
        this.validDescription = true;
        this.validCellular = true;
        this.validFee = true;
        this.validEmail = true;
        this.validPassword = true;
        this.validNewEmail = true;
        this.validNewPassword = true;
        this.validNewPasswordConfirm = true;
        this.successMessageRight = false;
        this.successMessageLeft = false;
        this.noErrorRight = true;
        this.noErrorLeft = true;
        this.doctorName = '';
        this.countryCode = '';
        this.apiErrorRight = '';
        this.apiErrorLeft = '';
        if (localStorage.getItem('type') === 'Patient')
            this.router.navigate(['/user/patient']);
        else {
            this.doctor = new src_app_models_doctor_model__WEBPACK_IMPORTED_MODULE_1__["Doctor"]();
            this.api.getDoctor(localStorage.getItem('id')).subscribe((res) => {
                if (res.token !== '') {
                    this.informationForm = this.formBuilder.group({
                        fullName: '', qualification: '', address: '', workingDays: '',
                        workingHours: '', description: '', fee: '', cellularNumber: ''
                    });
                    this.credentialsForm = this.formBuilder.group({
                        email: '', password: '', newEmail: '', newPassword: '', newConfirmPassword: ''
                    });
                    this.setupDashboard(res);
                }
            });
        }
    }
    setCountryCode(code) {
        this.countryCode = code;
    }
    setupDashboard(res) {
        this.doctor.setValues(res._id, res.fullName, res.email, '', res.cellularNumber, res.qualification, res.workingDays, res.workingHours, res.address, res.fee, res.description, res.ratings);
        this.doctorName = this.doctor.fullName + ' | Doctor';
        this.setInformationFormValues();
        this.setCredentialsFormValues();
        this.dialCodes = this.dialCodeService.getDialCodes();
        if (this.doctor.cellularNumber === '')
            this.countryCode = 'Code';
        else
            this.countryCode = this.doctor.cellularNumber.substring(0, 2);
        this.titleService.setTitle(this.doctor.fullName + ' | Doctor');
    }
    setInformationFormValues() {
        this.informationForm.controls['fullName'].setValue(this.doctor.fullName);
        this.informationForm.controls['qualification'].setValue(this.doctor.qualification);
        this.informationForm.controls['address'].setValue(this.doctor.address);
        this.informationForm.controls['workingDays'].setValue(this.doctor.workingDays);
        this.informationForm.controls['workingHours'].setValue(this.doctor.workingHours);
        this.informationForm.controls['description'].setValue(this.doctor.description);
        this.informationForm.controls['cellularNumber'].setValue(this.doctor.cellularNumber.substring(2));
        this.informationForm.controls['fee'].setValue(this.doctor.fee);
    }
    setCredentialsFormValues() {
        this.credentialsForm.controls['email'].setValue(this.doctor.email);
        this.credentialsForm.controls['password'].setValue('');
        this.credentialsForm.controls['newEmail'].setValue('');
        this.credentialsForm.controls['newPassword'].setValue('');
        this.credentialsForm.controls['newConfirmPassword'].setValue('');
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('type');
        this.titleService.setTitle('DocFind');
        this.router.navigate(['/']);
    }
    onInfoSubmit(formData) {
        if (this.isValidInput(formData)) {
            formData.cellularNumber = this.countryCode + formData.cellularNumber;
            this.api.updateDoctor(formData, localStorage.getItem('id')).subscribe((res) => {
                this.noErrorRight = true;
                if (res.token !== '') {
                    localStorage.setItem('token', res.token);
                    this.setupDashboard(res);
                    this.successMessageLeft = true;
                }
            }, (error) => { this.noErrorRight = false; this.apiErrorRight = error; });
            setTimeout(() => this.successMessageLeft = false, 3000);
        }
    }
    onCredentialsSubmit(formData) {
        this.validEmail = !this.inputValidation.isEmail(formData.email) ? false : true;
        this.validPassword = !(formData.password === '');
        this.validNewEmail = !this.inputValidation.isEmail(formData.newEmail) ? false : true;
        this.validNewPassword = (formData.newPassword.length >= 8);
        this.validNewPasswordConfirm = formData.newPassword === formData.newConfirmPassword;
        if (this.validEmail && this.validPassword && this.validNewEmail && this.validNewPassword && this.validNewPasswordConfirm) {
            this.api.updateDoctorCredentials(formData, localStorage.getItem('id')).subscribe((res) => {
                this.noErrorRight = true;
                if (res.token !== '') {
                    localStorage.setItem('token', res.token);
                    this.setupDashboard(res);
                    this.successMessageRight = true;
                }
            }, (error) => { this.noErrorRight = false; this.apiErrorRight = error; });
            setTimeout(() => this.successMessageRight = false, 3000);
        }
    }
    isValidInput(formData) {
        this.validFullName = !this.inputValidation.isAlphabetsOnly(formData.fullName) ? false : true;
        this.validQualification = (formData.qualification === '') ? false : true;
        this.validAddress = (formData.address === '') ? false : true;
        this.validWorkingDays = (formData.workingDays === '') ? false : true;
        this.validWorkingHours = (formData.workingHours === '') ? false : true;
        this.validDescription = (formData.description === '') ? false : true;
        this.validCellular = !(this.inputValidation.isPhoneNumber(formData.cellularNumber) && this.countryCode !== 'Code') ? false : true;
        this.validFee = (formData.fee === '') ? false : true;
        return this.validFullName &&
            this.validQualification &&
            this.validAddress &&
            this.validWorkingDays &&
            this.validWorkingHours &&
            this.validDescription &&
            this.validCellular &&
            this.validFee ? true : false;
    }
}
DoctorDashboardComponent.ɵfac = function DoctorDashboardComponent_Factory(t) { return new (t || DoctorDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dial_codes_service__WEBPACK_IMPORTED_MODULE_5__["DialCodesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_input_validation_service__WEBPACK_IMPORTED_MODULE_6__["InputValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["APIService"])); };
DoctorDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoctorDashboardComponent, selectors: [["app-doctor-dashboard"]], decls: 28, vars: 17, consts: [[1, "section-topbar"], [1, "container", "d-flex", "justify-content-between", "align-items-center", "pt-3", "pb-2"], [3, "innerHTML"], [1, "pointer", "h5", 3, "click"], [1, "container"], [1, "row"], [1, "col", "text-center", "section-form-left", "mr-5", "mt-5", "py-5"], [1, "h5", "mb-1"], [1, "h6", "mb-3"], ["class", "mx-5", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "font-weight-bold", "mt-3", 3, "ngClass"], [1, "font-weight-bold", "text-danger", "mt-3", 3, "ngClass", "innerHTML"], [1, "col", "text-center", "section-form-right", "ml-5", "mt-5", "py-5"], ["viewBox", "0 0 1440 220", 1, "mb-5", "pb-5"], ["fill", "#e98074", "d", "M0,256L0,192L80,192L80,160L160,160L160,256L240,256L240,32L320,32L320,160L400,160L400,64L480,64L480,64L560,64L560,96L640,96L640,128L720,128L720,64L800,64L800,192L880,192L880,128L960,128L960,64L1040,64L1040,96L1120,96L1120,224L1200,224L1200,32L1280,32L1280,320L1360,320L1360,256L1440,256L1440,0L1360,0L1360,0L1280,0L1280,0L1200,0L1200,0L1120,0L1120,0L1040,0L1040,0L960,0L960,0L880,0L880,0L800,0L800,0L720,0L720,0L640,0L640,0L560,0L560,0L480,0L480,0L400,0L400,0L320,0L320,0L240,0L240,0L160,0L160,0L80,0L80,0L0,0L0,0Z"], [1, "mx-5", 3, "formGroup", "ngSubmit"], ["id", "fullName", "required", "", "formControlName", "fullName", "type", "text", "placeholder", "Full Name", 1, "form-control", "form-control-custom"], [1, "font-weight-bold", "text-danger", "mt-2", 3, "ngClass"], ["id", "qualification", "required", "", "formControlName", "qualification", "type", "qualification", "placeholder", "Qualification (MBBS)", 1, "form-control", "form-control-custom", "mt-2"], ["id", "address", "required", "", "formControlName", "address", "type", "address", "placeholder", "Complete Address", 1, "form-control", "form-control-custom", "mt-2"], [1, "mt-2", "input-group"], ["id", "workingDays", "formControlName", "workingDays", "required", "", "type", "text", "placeholder", "Days (Mon-Fri)", 1, "form-control", "form-control-custom", "mr-1"], ["id", "workingHours", "formControlName", "workingHours", "required", "", "type", "text", "placeholder", "Hours (5-9)", 1, "form-control", "form-control-custom", "ml-1"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "A small description about yourself \uD83D\uDC68\u200D\u2695\uFE0F", 1, "form-control", "form-control-custom", "mt-2"], [1, "input-group-prepend"], ["id", "dialCodeBtn", "type", "button", "data-toggle", "dropdown", 1, "btn-dropdown", "mr-2", "dropdown-toggle", 3, "innerHTML"], [1, "dropdown-menu", "my-2", "dropdown-menu-custom"], ["class", "font-weight-bold dropdown-item dropdown-item-custom pointer", 3, "click", 4, "ngFor", "ngForOf"], ["id", "cellularNumber", "formControlName", "cellularNumber", "required", "", "type", "text", "placeholder", "Contact", 1, "form-control", "form-control-custom", "mr-1"], ["id", "fee", "formControlName", "fee", "required", "", "type", "number", "placeholder", "Fee", 1, "form-control", "form-control-custom", "ml-1"], ["type", "submit", 1, "btn", "mt-3"], [1, "font-weight-bold", "dropdown-item", "dropdown-item-custom", "pointer", 3, "click"], ["id", "email", "required", "", "formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control", "form-control-custom", "mt-2"], ["id", "password", "required", "", "formControlName", "password", "type", "password", "placeholder", "Current Password", 1, "form-control", "form-control-custom", "mt-2"], [1, "h5", "mt-4", "mb-2"], ["id", "newEmail", "required", "", "formControlName", "newEmail", "type", "email", "placeholder", "New Email", 1, "form-control", "form-control-custom", "mt-2"], ["id", "newPassword", "required", "", "formControlName", "newPassword", "type", "password", "placeholder", "New Password", 1, "form-control", "form-control-custom", "mt-2"], ["id", "newConfirmPassword", "required", "", "formControlName", "newConfirmPassword", "type", "password", "placeholder", "Confirm New Password", 1, "form-control", "form-control-custom", "mt-2"]], template: function DoctorDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorDashboardComponent_Template_a_click_4_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update Your Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "So that patients can view your profile \uD83D\uDE00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DoctorDashboardComponent_form_13_Template, 33, 27, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Information Updated Successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Update Your Login Credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "If you feel the need to do so \uD83E\uDD37\u200D\u2642\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DoctorDashboardComponent_form_22_Template, 20, 16, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Credentials Updated Successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.doctorName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.informationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, !ctx.successMessageLeft));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.noErrorLeft))("innerHTML", ctx.apiErrorLeft, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.credentialsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx.successMessageRight));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.noErrorRight))("innerHTML", ctx.apiErrorRight, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]], styles: [".section-form-left[_ngcontent-%COMP%] {\n  background-color: #e98074;\n}\n\n.section-form-right[_ngcontent-%COMP%] {\n  background-color: #e98074;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2RvY3Rvci1kYXNoYm9hcmQvRzpcXGRvY2ZpbmQtY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFxkb2N0b3ItZGFzaGJvYXJkXFxkb2N0b3ItZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvZG9jdG9yLWRhc2hib2FyZC9kb2N0b3ItZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvZG9jdG9yLWRhc2hib2FyZC9HOlxcZG9jZmluZC1jbGllbnQvc3JjXFxhc3NldHNcXHNhc3MtdmFyaWFibGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBQTtBQ0RKOztBREdBO0VBQ0kseUJFSGU7QURHbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvZG9jdG9yLWRhc2hib2FyZC9kb2N0b3ItZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Nhc3MtdmFyaWFibGVzJ1xyXG5cclxuLnNlY3Rpb24tZm9ybS1sZWZ0XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmctY29sb3ItcHJpbWFyeVxyXG5cclxuLnNlY3Rpb24tZm9ybS1yaWdodFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZnLWNvbG9yLXByaW1hcnkiLCIuc2VjdGlvbi1mb3JtLWxlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTk4MDc0O1xufVxuXG4uc2VjdGlvbi1mb3JtLXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ODA3NDtcbn0iLCIkYmctY29sb3ItcHJpbWFyeTogI2VhZTdkY1xyXG4kYmctY29sb3Itc2Vjb25kYXJ5OiAjZDhjM2E1XHJcbiRiZy1jb2xvci10ZXJ0aWFyeTogIzhlOGQ4YVxyXG4kZmctY29sb3ItcHJpbWFyeTogI2U5ODA3NFxyXG4kZmctY29sb3Itc2Vjb25kYXJ5OiAjZTg1YTRmXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-doctor-dashboard',
                templateUrl: './doctor-dashboard.component.html',
                styleUrls: ['./doctor-dashboard.component.sass']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_dial_codes_service__WEBPACK_IMPORTED_MODULE_5__["DialCodesService"] }, { type: src_app_services_input_validation_service__WEBPACK_IMPORTED_MODULE_6__["InputValidationService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["APIService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/user/patient-dashboard/patient-dashboard-doctors-list/patient-dashboard-doctors-list.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/components/user/patient-dashboard/patient-dashboard-doctors-list/patient-dashboard-doctors-list.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: PatientDashboardDoctorsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDashboardDoctorsListComponent", function() { return PatientDashboardDoctorsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function PatientDashboardDoctorsListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientDashboardDoctorsListComponent_li_4_Template__svg_svg_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r17 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.flipIcon(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Your Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "5 stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "4 stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3 stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "2 stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1 star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("\uD83E\uDDE0 ", doctor_r16.fullName, " | ", doctor_r16.qualification, " | ", doctor_r16.description, " | ", doctor_r16.avgRating, " \u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#doctor" + i_r17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "expandIcon" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "doctor" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", doctor_r16.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cellular Number: +", doctor_r16.cellularNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address: ", doctor_r16.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Working Days: ", doctor_r16.workingDays, " | Working Hours: ", doctor_r16.workingHours, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Fee: ", doctor_r16.fee, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "star5-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "star5-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "star4-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "star4-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "star3-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "star3-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "star2-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "star2-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "star1-" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", "star1-" + i_r17);
} }
class PatientDashboardDoctorsListComponent {
    constructor() {
    }
    flipIcon(i) {
        if (this.expanded[i] === true) {
            document.getElementById('expandIcon' + i).style.transform = 'scale(1)';
            this.expanded[i] = false;
        }
        else {
            document.getElementById('expandIcon' + i).style.transform = 'scale(-1)';
            this.expanded[i] = true;
        }
    }
    ngAfterViewInit() {
        this.expanded = new Array(this.doctors.length);
        console.log(this.doctors);
    }
}
PatientDashboardDoctorsListComponent.ɵfac = function PatientDashboardDoctorsListComponent_Factory(t) { return new (t || PatientDashboardDoctorsListComponent)(); };
PatientDashboardDoctorsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientDashboardDoctorsListComponent, selectors: [["app-patient-dashboard-doctors-list"]], inputs: { patient: "patient", doctors: "doctors" }, decls: 5, vars: 1, consts: [[1, "section-doctors-list", "mt-5", "p-5"], [1, "h5", "mb-3", "text-center"], [1, "list-group", "px-5"], ["class", "list-item mb-3 mx-5", 4, "ngFor", "ngForOf"], [1, "list-item", "mb-3", "mx-5"], [1, "d-flex", "justify-content-between", "mb-n3"], ["data-toggle", "collapse", 1, "no-underline", 3, "href"], ["width", "15px", "height", "15px", "viewBox", "0 0 451.847 451.847", 1, "expandIcon", 3, "id", "click"], ["d", "M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"], [1, "collapse", 3, "id"], [1, "card", "card-body", "card-body-custom", "py-2", "px-3", "mt-3"], [1, "m-0"], [1, "row", "d-flex", "align-items-center"], [1, "col"], [1, "col", "rate"], ["type", "radio", "name", "rate", "value", "5", 3, "id"], [3, "for"], ["type", "radio", "name", "rate", "value", "4", 3, "id"], ["type", "radio", "name", "rate", "value", "3", 3, "id"], ["type", "radio", "name", "rate", "value", "2", 3, "id"], ["type", "radio", "name", "rate", "value", "1", 3, "id"]], template: function PatientDashboardDoctorsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "List of all Doctors on DocFind");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PatientDashboardDoctorsListComponent_li_4_Template, 39, 23, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@charset \"UTF-8\";\n.section-doctors-list[_ngcontent-%COMP%] {\n  background: #e98074;\n}\n.expandIcon[_ngcontent-%COMP%] {\n  -webkit-transition: 0.2s ease-in;\n  transition: 0.2s ease-in;\n}\n.rate[_ngcontent-%COMP%] {\n  height: 46px;\n  padding: 0 10px;\n}\n.rate[_ngcontent-%COMP%]:not(:checked)    > input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -9999px;\n}\n.rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%] {\n  float: right;\n  width: 1em;\n  overflow: hidden;\n  white-space: nowrap;\n  cursor: pointer;\n  font-size: 30px;\n  color: #ccc;\n}\n.rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:before {\n  content: \"\u2605 \";\n}\n.rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  color: #ffc700;\n}\n.rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover, .rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] {\n  color: #deb217;\n}\n.rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover, .rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%], .rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover, .rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%], .rate[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  color: #c59b08;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3BhdGllbnQtZGFzaGJvYXJkL3BhdGllbnQtZGFzaGJvYXJkLWRvY3RvcnMtbGlzdC9wYXRpZW50LWRhc2hib2FyZC1kb2N0b3JzLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wYXRpZW50LWRhc2hib2FyZC9wYXRpZW50LWRhc2hib2FyZC1kb2N0b3JzLWxpc3QvRzpcXGRvY2ZpbmQtY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx1c2VyXFxwYXRpZW50LWRhc2hib2FyZFxccGF0aWVudC1kYXNoYm9hcmQtZG9jdG9ycy1saXN0XFxwYXRpZW50LWRhc2hib2FyZC1kb2N0b3JzLWxpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0ksbUJBQUE7QURBSjtBQ0VBO0VBQ0ksZ0NBQUE7RUFBQSx3QkFBQTtBRENKO0FDQ0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBREVKO0FDQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QURHSjtBQ0RBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FESUo7QUNGQTtFQUNJLGFBQUE7QURLSjtBQ0hBO0VBQ0ksY0FBQTtBRE1KO0FDSkE7O0VBRUksY0FBQTtBRE9KO0FDTEE7Ozs7O0VBS0ksY0FBQTtBRFFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyL3BhdGllbnQtZGFzaGJvYXJkL3BhdGllbnQtZGFzaGJvYXJkLWRvY3RvcnMtbGlzdC9wYXRpZW50LWRhc2hib2FyZC1kb2N0b3JzLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uc2VjdGlvbi1kb2N0b3JzLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiAjZTk4MDc0O1xufVxuXG4uZXhwYW5kSWNvbiB7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbn1cblxuLnJhdGUge1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC05OTk5cHg7XG59XG5cbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDFlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLimIUgXCI7XG59XG5cbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgY29sb3I6ICNmZmM3MDA7XG59XG5cbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3Zlcixcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcbiAgY29sb3I6ICNkZWIyMTc7XG59XG5cbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLFxuLnJhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIgfiBsYWJlbCxcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxuLnJhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCxcbi5yYXRlID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogI2M1OWIwODtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Fzcy12YXJpYWJsZXMnXHJcbiAgICBcclxuLnNlY3Rpb24tZG9jdG9ycy1saXN0XHJcbiAgICBiYWNrZ3JvdW5kOiAkZmctY29sb3ItcHJpbWFyeVxyXG5cclxuLmV4cGFuZEljb25cclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pblxyXG5cclxuLnJhdGVcclxuICAgIGhlaWdodDogNDZweFxyXG4gICAgcGFkZGluZzogMCAxMHB4XHJcblxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gaW5wdXRcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgdG9wOiAtOTk5OXB4XHJcblxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWxcclxuICAgIGZsb2F0OiByaWdodFxyXG4gICAgd2lkdGg6IDFlbVxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICBmb250LXNpemU6IDMwcHhcclxuICAgIGNvbG9yOiAjY2NjXHJcblxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6YmVmb3JlIFxyXG4gICAgY29udGVudDogJ+KYhSAnXHJcblxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCBcclxuICAgIGNvbG9yOiAjZmZjNzAwXHJcblxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsIFxyXG4ucmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbFxyXG4gICAgY29sb3I6ICNkZWIyMTdcclxuXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLCBcclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIgfiBsYWJlbCwgXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLCBcclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCwgXHJcbi5yYXRlID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWxcclxuICAgIGNvbG9yOiAjYzU5YjA4Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientDashboardDoctorsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-dashboard-doctors-list',
                templateUrl: './patient-dashboard-doctors-list.component.html',
                styleUrls: ['./patient-dashboard-doctors-list.component.sass']
            }]
    }], function () { return []; }, { patient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], doctors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/user/patient-dashboard/patient-dashboard-settings/patient-dashboard-settings.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/user/patient-dashboard/patient-dashboard-settings/patient-dashboard-settings.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PatientDashboardSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDashboardSettingsComponent", function() { return PatientDashboardSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PatientDashboardSettingsComponent {
    constructor() {
    }
}
PatientDashboardSettingsComponent.ɵfac = function PatientDashboardSettingsComponent_Factory(t) { return new (t || PatientDashboardSettingsComponent)(); };
PatientDashboardSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientDashboardSettingsComponent, selectors: [["app-patient-dashboard-settings"]], inputs: { patient: "patient" }, decls: 2, vars: 0, template: function PatientDashboardSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9wYXRpZW50LWRhc2hib2FyZC9wYXRpZW50LWRhc2hib2FyZC1zZXR0aW5ncy9wYXRpZW50LWRhc2hib2FyZC1zZXR0aW5ncy5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientDashboardSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-dashboard-settings',
                templateUrl: './patient-dashboard-settings.component.html',
                styleUrls: ['./patient-dashboard-settings.component.sass']
            }]
    }], function () { return []; }, { patient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/user/patient-dashboard/patient-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/user/patient-dashboard/patient-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PatientDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDashboardComponent", function() { return PatientDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_patient_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/patient.model */ "./src/app/models/patient.model.ts");
/* harmony import */ var src_app_models_doctor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/doctor.model */ "./src/app/models/doctor.model.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _patient_dashboard_doctors_list_patient_dashboard_doctors_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-dashboard-doctors-list/patient-dashboard-doctors-list.component */ "./src/app/components/user/patient-dashboard/patient-dashboard-doctors-list/patient-dashboard-doctors-list.component.ts");
/* harmony import */ var _patient_dashboard_settings_patient_dashboard_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient-dashboard-settings/patient-dashboard-settings.component */ "./src/app/components/user/patient-dashboard/patient-dashboard-settings/patient-dashboard-settings.component.ts");










const _c0 = function (a0) { return { "current-patient-dashboard-link": a0 }; };
const _c1 = function (a0) { return { "d-none": a0 }; };
class PatientDashboardComponent {
    constructor(api, router, titleService) {
        this.api = api;
        this.router = router;
        this.titleService = titleService;
        this.showDoctorsList = true;
        this.showSettings = false;
        if (localStorage.getItem('type') === 'Doctor')
            this.router.navigate(['/user/doctor']);
        this.patient = new src_app_models_patient_model__WEBPACK_IMPORTED_MODULE_1__["Patient"]();
        this.doctors = new Array();
        this.api.getPatient(localStorage.getItem('id')).subscribe((res) => {
            if (res.token !== '') {
                this.api.getAllDoctors().subscribe((res) => {
                    if (res.token !== '')
                        this.setDoctors(res);
                });
                this.setupDashboard(res);
            }
        });
    }
    setDoctors(res) {
        console.log(res);
        res.forEach(e => {
            let doctor = new src_app_models_doctor_model__WEBPACK_IMPORTED_MODULE_2__["Doctor"]();
            doctor.setValues(e.id, e.fullName, e.email, '', e.cellularNumber, e.qualification, e.workingDays, e.workingHours, e.address, e.fee, e.description, e.ratings);
            this.doctors.push(doctor);
        });
        this.doctors.sort((a, b) => {
            if (a.avgRating > b.avgRating)
                return -1;
            if (a.avgRating < b.avgRating)
                return 1;
            return 0;
        });
    }
    gotoDoctorsList() {
        this.showDoctorsList = true;
        this.showSettings = false;
    }
    gotoSettings() {
        this.showDoctorsList = false;
        this.showSettings = true;
    }
    logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('type');
        this.titleService.setTitle('DocFind');
        this.router.navigate(['/']);
    }
    setupDashboard(res) {
        this.patient.setValues(res.id, res.fullName, res.email, '');
        this.patientName = this.patient.fullName + ' | Patient';
    }
}
PatientDashboardComponent.ɵfac = function PatientDashboardComponent_Factory(t) { return new (t || PatientDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
PatientDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientDashboardComponent, selectors: [["app-patient-dashboard"]], decls: 16, vars: 16, consts: [[1, "section-topbar"], [1, "container", "d-flex", "justify-content-between", "align-items-center", "pt-3", "pb-2"], [3, "innerHTML"], [1, "text-black", "pointer", "h5", "patient-dashboard-links", 3, "ngClass", "click"], [1, "text-black", "pointer", "h5", "ml-5", "patient-dashboard-links", 3, "ngClass", "click"], [1, "text-black", "pointer", "h5", "ml-5", "patient-dashboard-links", 3, "click"], [1, "container"], [3, "ngClass", "patient", "doctors"], [3, "ngClass", "patient"], ["viewBox", "0 0 1440 220", 1, "mb-5", "pb-5"], ["fill", "#e98074", "d", "M0,256L0,192L80,192L80,160L160,160L160,256L240,256L240,32L320,32L320,160L400,160L400,64L480,64L480,64L560,64L560,96L640,96L640,128L720,128L720,64L800,64L800,192L880,192L880,128L960,128L960,64L1040,64L1040,96L1120,96L1120,224L1200,224L1200,32L1280,32L1280,320L1360,320L1360,256L1440,256L1440,0L1360,0L1360,0L1280,0L1280,0L1200,0L1200,0L1120,0L1120,0L1040,0L1040,0L960,0L960,0L880,0L880,0L800,0L800,0L720,0L720,0L640,0L640,0L560,0L560,0L480,0L480,0L400,0L400,0L320,0L320,0L240,0L240,0L160,0L160,0L80,0L80,0L0,0L0,0Z"]], template: function PatientDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientDashboardComponent_Template_a_click_5_listener() { return ctx.gotoDoctorsList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Doctors List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientDashboardComponent_Template_a_click_7_listener() { return ctx.gotoSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientDashboardComponent_Template_a_click_9_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-patient-dashboard-doctors-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-patient-dashboard-settings", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.patientName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.showDoctorsList));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.showSettings));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, !ctx.showDoctorsList))("patient", ctx.patient)("doctors", ctx.doctors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, !ctx.showSettings))("patient", ctx.patient);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _patient_dashboard_doctors_list_patient_dashboard_doctors_list_component__WEBPACK_IMPORTED_MODULE_7__["PatientDashboardDoctorsListComponent"], _patient_dashboard_settings_patient_dashboard_settings_component__WEBPACK_IMPORTED_MODULE_8__["PatientDashboardSettingsComponent"]], styles: [".patient-dashboard-links[_ngcontent-%COMP%]:hover {\n  color: #000000;\n  text-decoration: underline;\n}\n\n.current-patient-dashboard-link[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL3BhdGllbnQtZGFzaGJvYXJkL0c6XFxkb2NmaW5kLWNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdXNlclxccGF0aWVudC1kYXNoYm9hcmRcXHBhdGllbnQtZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcGF0aWVudC1kYXNoYm9hcmQvcGF0aWVudC1kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7QUNBUjs7QURFQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvcGF0aWVudC1kYXNoYm9hcmQvcGF0aWVudC1kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aWVudC1kYXNoYm9hcmQtbGlua3NcclxuICAgICY6aG92ZXJcclxuICAgICAgICBjb2xvcjogIzAwMDAwMFxyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcblxyXG4uY3VycmVudC1wYXRpZW50LWRhc2hib2FyZC1saW5rXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSIsIi5wYXRpZW50LWRhc2hib2FyZC1saW5rczpob3ZlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmN1cnJlbnQtcGF0aWVudC1kYXNoYm9hcmQtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-dashboard',
                templateUrl: './patient-dashboard.component.html',
                styleUrls: ['./patient-dashboard.component.sass']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/user/user-login/user-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-login/user-login.component.ts ***!
  \********************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/input-validation.service */ "./src/app/services/input-validation.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "d-none": a0 }; };
function UserLoginComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserLoginComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onSubmit(ctx_r1.loginForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Invalid email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_form_4_Template_li_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setAccountType("Patient"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Patient");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_form_4_Template_li_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setAccountType("Doctor"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Doctor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Please select an account type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.validEmail));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.accountType, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r0.validAccountType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.noError))("innerHTML", ctx_r0.apiError, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class UserLoginComponent {
    constructor(formBuilder, inputValidation, api, router) {
        this.formBuilder = formBuilder;
        this.inputValidation = inputValidation;
        this.api = api;
        this.router = router;
        this.validEmail = true;
        this.validAccountType = true;
        this.noError = true;
        this.loginForm = this.formBuilder.group({ email: '', password: '' });
        this.accountType = 'Account Type';
    }
    setAccountType(type) {
        this.accountType = type;
    }
    onSubmit(formData) {
        if (this.isValidInput(formData)) {
            if (this.accountType === 'Patient') {
                this.api.patientAuthenticate(formData).subscribe((res) => {
                    this.noError = true;
                    if (res.token !== '') {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('id', res._id);
                        localStorage.setItem('type', 'Patient');
                        this.router.navigate(['/']);
                    }
                }, (error) => { this.noError = false; this.apiError = error; });
            }
            else if (this.accountType === 'Doctor') {
                this.api.doctorAuthenticate(formData).subscribe((res) => {
                    this.noError = true;
                    if (res.token !== '') {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('id', res._id);
                        localStorage.setItem('type', 'Doctor');
                        this.router.navigate(['/']);
                    }
                }, (error) => { this.noError = false; this.apiError = error; });
            }
        }
    }
    isValidInput(formData) {
        this.validEmail = !this.inputValidation.isEmail(formData.email) ? false : true;
        this.validAccountType = !(this.accountType !== 'Account Type') ? false : true;
        return (this.validEmail && this.validAccountType) ? true : false;
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__["InputValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 11, vars: 1, consts: [[1, "mt-3", "mb-5"], [1, "container", "w-50", "text-center", "section-sign-up"], ["class", "section-form my-3", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "text-black", "h5"], ["routerLink", "/user/signup", 1, "h5", "link"], ["viewBox", "0 0 1440 220", 1, "mb-5"], ["fill", "#e98074", "d", "M0,256L0,320L62.6,320L62.6,96L125.2,96L125.2,160L187.8,160L187.8,224L250.4,224L250.4,320L313,320L313,256L375.7,256L375.7,128L438.3,128L438.3,224L500.9,224L500.9,192L563.5,192L563.5,32L626.1,32L626.1,256L688.7,256L688.7,32L751.3,32L751.3,128L813.9,128L813.9,288L876.5,288L876.5,64L939.1,64L939.1,192L1001.7,192L1001.7,320L1064.3,320L1064.3,64L1127,64L1127,64L1189.6,64L1189.6,160L1252.2,160L1252.2,320L1314.8,320L1314.8,96L1377.4,96L1377.4,288L1440,288L1440,0L1377.4,0L1377.4,0L1314.8,0L1314.8,0L1252.2,0L1252.2,0L1189.6,0L1189.6,0L1127,0L1127,0L1064.3,0L1064.3,0L1001.7,0L1001.7,0L939.1,0L939.1,0L876.5,0L876.5,0L813.9,0L813.9,0L751.3,0L751.3,0L688.7,0L688.7,0L626.1,0L626.1,0L563.5,0L563.5,0L500.9,0L500.9,0L438.3,0L438.3,0L375.7,0L375.7,0L313,0L313,0L250.4,0L250.4,0L187.8,0L187.8,0L125.2,0L125.2,0L62.6,0L62.6,0L0,0L0,0Z"], [1, "section-form", "my-3", 3, "formGroup", "ngSubmit"], ["id", "email", "required", "", "formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control", "form-control-custom", "mt-2"], [1, "font-weight-bold", "text-danger", "mt-2", 3, "ngClass"], ["id", "password", "required", "", "formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control", "form-control-custom", "mt-2"], [1, "mx-auto", "mt-2", "input-group"], [1, "input-group-prepend", "mx-auto"], ["id", "accountTypeBtn", "type", "button", "data-toggle", "dropdown", 1, "btn-dropdown", "px-4", "py-2", "dropdown-toggle", 3, "innerHTML"], [1, "dropdown-menu", "my-2", "mx-auto", "dropdown-menu-custom"], [1, "font-weight-bold", "dropdown-item", "dropdown-item-custom", "pointer", 3, "click"], [1, "font-weight-bold", "text-danger", "mt-2", 3, "ngClass", "innerHTML"], ["type", "submit", 1, "btn", "mt-3"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login to your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserLoginComponent_form_4_Template, 18, 12, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-login',
                templateUrl: './user-login.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__["InputValidationService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/user/user-signup/user-signup.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-signup/user-signup.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignupComponent", function() { return UserSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/input-validation.service */ "./src/app/services/input-validation.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "d-none": a0 }; };
class UserSignupComponent {
    constructor(formBuilder, inputValidation, api, router) {
        this.formBuilder = formBuilder;
        this.inputValidation = inputValidation;
        this.api = api;
        this.router = router;
        this.validFullName = true;
        this.validEmail = true;
        this.validPassword = true;
        this.validPasswordConfirm = true;
        this.validAccountType = true;
        this.noError = true;
        this.signUpForm = this.formBuilder.group({
            fullName: '', email: '', password: '', confirmPassword: ''
        });
        this.accountType = 'Account Type';
    }
    setAccountType(type) {
        this.accountType = type;
    }
    onSubmit(formData) {
        if (this.isValidInput(formData)) {
            if (this.accountType === 'Patient') {
                this.api.patientRegister(formData).subscribe((res) => {
                    this.noError = true;
                    if (Object.keys(res).length === 0) {
                        this.api.patientAuthenticate(formData).subscribe((res) => {
                            this.noError = true;
                            if (res.token !== '') {
                                localStorage.setItem('token', res.token);
                                localStorage.setItem('id', res._id);
                                localStorage.setItem('type', 'Patient');
                                this.router.navigate(['/']);
                            }
                        }, (error) => { this.noError = false; this.apiError = error; });
                    }
                }, (error) => { this.noError = false; this.apiError = error; });
            }
            else if (this.accountType === 'Doctor') {
                this.api.doctorRegister(formData).subscribe((res) => {
                    this.noError = true;
                    if (Object.keys(res).length === 0) {
                        this.api.doctorAuthenticate(formData).subscribe((res) => {
                            this.noError = true;
                            if (res.token !== '') {
                                localStorage.setItem('token', res.token);
                                localStorage.setItem('id', res._id);
                                localStorage.setItem('type', 'Doctor');
                                this.router.navigate(['/']);
                            }
                        }, (error) => { this.noError = false; this.apiError = error; });
                    }
                }, (error) => { this.noError = false; this.apiError = error; });
            }
        }
    }
    isValidInput(formData) {
        this.validFullName = !this.inputValidation.isAlphabetsOnly(formData.fullName) ? false : true;
        this.validEmail = !this.inputValidation.isEmail(formData.email) ? false : true;
        this.validPassword = !(formData.password.length >= 8) ? false : true;
        this.validPasswordConfirm = !(formData.password === formData.confirmPassword) ? false : true;
        this.validAccountType = !(this.accountType !== 'Account Type') ? false : true;
        return (this.validFullName && this.validEmail && this.validPassword && this.validPasswordConfirm && this.validAccountType) ? true : false;
    }
}
UserSignupComponent.ɵfac = function UserSignupComponent_Factory(t) { return new (t || UserSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__["InputValidationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UserSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSignupComponent, selectors: [["app-user-signup"]], decls: 36, vars: 21, consts: [[1, "mt-3", "mb-5"], [1, "container", "w-50", "text-center", "section-sign-up"], [1, "section-form", "my-3", 3, "formGroup", "ngSubmit"], ["id", "fullName", "required", "", "formControlName", "fullName", "type", "text", "placeholder", "Full Name", 1, "form-control", "form-control-custom"], [1, "font-weight-bold", "text-danger", "mt-2", 3, "ngClass"], ["id", "email", "required", "", "formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control", "form-control-custom", "mt-2"], ["id", "password", "required", "", "formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control", "form-control-custom", "mt-2"], ["id", "confirmPassword", "required", "", "formControlName", "confirmPassword", "type", "password", "placeholder", "Confirm Password", 1, "form-control", "form-control-custom", "mt-2"], [1, "mx-auto", "mt-2", "input-group"], [1, "input-group-prepend", "mx-auto"], ["id", "accountTypeBtn", "type", "button", "data-toggle", "dropdown", 1, "btn-dropdown", "px-4", "py-2", "dropdown-toggle", 3, "innerHTML"], [1, "dropdown-menu", "my-2", "mx-auto", "dropdown-menu-custom"], [1, "font-weight-bold", "dropdown-item", "dropdown-item-custom", "pointer", 3, "click"], ["type", "submit", 1, "btn", "mt-3"], [1, "text-black", "h5"], ["routerLink", "/user/login", 1, "h5", "link"], [1, "font-weight-bold", "text-danger", "mt-2", 3, "ngClass", "innerHTML"], ["viewBox", "0 0 1440 220", 1, "mb-5"], ["fill", "#e98074", "d", "M0,256L0,320L62.6,320L62.6,96L125.2,96L125.2,160L187.8,160L187.8,224L250.4,224L250.4,320L313,320L313,256L375.7,256L375.7,128L438.3,128L438.3,224L500.9,224L500.9,192L563.5,192L563.5,32L626.1,32L626.1,256L688.7,256L688.7,32L751.3,32L751.3,128L813.9,128L813.9,288L876.5,288L876.5,64L939.1,64L939.1,192L1001.7,192L1001.7,320L1064.3,320L1064.3,64L1127,64L1127,64L1189.6,64L1189.6,160L1252.2,160L1252.2,320L1314.8,320L1314.8,96L1377.4,96L1377.4,288L1440,288L1440,0L1377.4,0L1377.4,0L1314.8,0L1314.8,0L1252.2,0L1252.2,0L1189.6,0L1189.6,0L1127,0L1127,0L1064.3,0L1064.3,0L1001.7,0L1001.7,0L939.1,0L939.1,0L876.5,0L876.5,0L813.9,0L813.9,0L751.3,0L751.3,0L688.7,0L688.7,0L626.1,0L626.1,0L563.5,0L563.5,0L500.9,0L500.9,0L438.3,0L438.3,0L375.7,0L375.7,0L313,0L313,0L250.4,0L250.4,0L187.8,0L187.8,0L125.2,0L125.2,0L62.6,0L62.6,0L0,0L0,0Z"]], template: function UserSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UserSignupComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(ctx.signUpForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Invalid name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Invalid email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password should be at least 8 characters long");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Passwords do not match");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSignupComponent_Template_li_click_21_listener() { return ctx.setAccountType("Patient"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSignupComponent_Template_li_click_23_listener() { return ctx.setAccountType("Doctor"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Doctor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Please select an account type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.validFullName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.validEmail));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.validPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.validPasswordConfirm));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.accountType, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.validAccountType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.noError))("innerHTML", ctx.apiError, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-signup',
                templateUrl: './user-signup.component.html'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_input_validation_service__WEBPACK_IMPORTED_MODULE_2__["InputValidationService"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UserComponent {
    constructor() {
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 13, vars: 0, consts: [[1, "container", "text-center", "section-authenticate"], [1, "mb-4"], [1, "mb-2"], ["type", "button", "routerLink", "/user/signup", 1, "btn", "mr-4"], [1, "h4", "d-inline", "mx-3"], ["type", "button", "routerLink", "/user/login", 1, "btn", "ml-4"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome, Dear User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To proceed further");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please choose one of the following options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/models/doctor.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/doctor.model.ts ***!
  \****************************************/
/*! exports provided: Doctor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
class Doctor {
    constructor() {
        this.id = this.fullName = this.email = this.password = '';
        this.cellularNumber = this.qualification = this.workingDays = '';
        this.workingHours = this.address = this.description = '';
        this.fee = this.avgRating = 0;
        this.ratings = new Array();
    }
    setValues(id, fullName, email, password, cellularNumber, qualification, workingDays, workingHours, address, fee, description, ratings) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.cellularNumber = cellularNumber;
        this.qualification = qualification;
        this.workingDays = workingDays;
        this.workingHours = workingHours;
        this.address = address;
        this.description = description;
        this.fee = fee;
        this.ratings = ratings;
    }
}


/***/ }),

/***/ "./src/app/models/patient.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/patient.model.ts ***!
  \*****************************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
class Patient {
    constructor() {
        this.id = this.fullName = this.email = this.password = '';
    }
    setValues(id, fullName, email, password) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _assets_api_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/api.json */ "./src/assets/api.json");
var _assets_api_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/api.json */ "./src/assets/api.json", 1);







class APIService {
    constructor(http) {
        this.http = http;
    }
    patientRegister(patient) {
        const patientJSON = JSON.stringify(patient);
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["patientRegister"];
        const body = patientJSON;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    patientAuthenticate(patient) {
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["authenticatePatient"];
        const body = { email: patient.email, password: patient.password };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    updatePatientCredentials() {
    }
    updatePatient() {
    }
    getPatient(id) {
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["getPatientByID"];
        const body = { 'id': id };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    doctorRegister(doctor) {
        const doctorJSON = JSON.stringify(doctor);
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["doctorRegister"];
        const body = doctorJSON;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    doctorAuthenticate(doctor) {
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["authenticateDoctor"];
        const body = { email: doctor.email, password: doctor.password };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    updateDoctorCredentials(params, doctorId) {
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["updateDoctorCredentials"];
        const body = {
            id: doctorId,
            email: params.email,
            password: params.password,
            newEmail: params.newEmail,
            newPassword: params.newPassword
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    updateDoctor(params, doctorId) {
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["updateDoctor"];
        const body = {
            id: doctorId,
            fullName: params.fullName,
            cellularNumber: params.cellularNumber,
            qualification: params.qualification,
            workingDays: params.workingDays,
            workingHours: params.workingHours,
            address: params.address,
            description: params.description,
            fee: params.fee
        };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    getDoctor(id) {
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["getDoctorByID"];
        const body = { 'id': id };
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        return this.http.post(url, body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    addRating() {
    }
    getAllDoctors() {
        const url = _assets_api_json__WEBPACK_IMPORTED_MODULE_4__["getAllDoctors"];
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        });
        return this.http.post(url, {}, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error.message);
    }
}
APIService.ɵfac = function APIService_Factory(t) { return new (t || APIService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
APIService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: APIService, factory: APIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](APIService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('type') === 'Patient')
            return true;
        else if (localStorage.getItem('type') === 'Doctor')
            return true;
        this.router.navigate(['/']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/dial-codes.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/dial-codes.service.ts ***!
  \************************************************/
/*! exports provided: DialCodesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialCodesService", function() { return DialCodesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_codes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/codes.json */ "./src/assets/codes.json");
var _assets_codes_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/codes.json */ "./src/assets/codes.json", 1);



class DialCodesService {
    constructor() {
        this.dialCodes = _assets_codes_json__WEBPACK_IMPORTED_MODULE_1__;
    }
    getDialCodes() {
        return this.dialCodes;
    }
}
DialCodesService.ɵfac = function DialCodesService_Factory(t) { return new (t || DialCodesService)(); };
DialCodesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialCodesService, factory: DialCodesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialCodesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/home-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/home-guard.service.ts ***!
  \************************************************/
/*! exports provided: HomeGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGuardService", function() { return HomeGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        if (localStorage.getItem('type') === 'Patient') {
            this.router.navigate(['/user/patient']);
            return false;
        }
        else if (localStorage.getItem('type') === 'Doctor') {
            this.router.navigate(['/user/doctor']);
            return false;
        }
        return true;
    }
}
HomeGuardService.ɵfac = function HomeGuardService_Factory(t) { return new (t || HomeGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeGuardService, factory: HomeGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/input-validation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/input-validation.service.ts ***!
  \******************************************************/
/*! exports provided: InputValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidationService", function() { return InputValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InputValidationService {
    constructor() {
    }
    isAlphabetsOnly(str) {
        const regex = /^[A-Za-z\s]+$/;
        return str.match(regex) ? true : false;
    }
    isNumberOnly(str) {
        const regex = /^[0-9]*$/;
        return str.match(regex) ? true : false;
    }
    isEmail(email) {
        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        return email.match(regex) ? true : false;
    }
    isPhoneNumber(str) {
        const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        return str.match(regex) ? true : false;
    }
}
InputValidationService.ɵfac = function InputValidationService_Factory(t) { return new (t || InputValidationService)(); };
InputValidationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InputValidationService, factory: InputValidationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputValidationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/api.json":
/*!*****************************!*\
  !*** ./src/assets/api.json ***!
  \*****************************/
/*! exports provided: patientRegister, authenticatePatient, updatePatientCredentials, updatePatient, getPatientByID, doctorRegister, authenticateDoctor, updateDoctorCredentials, updateDoctor, getDoctorByID, addRating, getAllDoctors, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"patientRegister\":\"http://localhost:4000/api/patient/register\",\"authenticatePatient\":\"http://localhost:4000/api/patient/authenticate\",\"updatePatientCredentials\":\"http://localhost:4000/api/patient/update/credentials\",\"updatePatient\":\"http://localhost:4000/api/patient/update\",\"getPatientByID\":\"http://localhost:4000/api/patient/get\",\"doctorRegister\":\"http://localhost:4000/api/doctor/register\",\"authenticateDoctor\":\"http://localhost:4000/api/doctor/authenticate\",\"updateDoctorCredentials\":\"http://localhost:4000/api/doctor/update/credentials\",\"updateDoctor\":\"http://localhost:4000/api/doctor/update\",\"getDoctorByID\":\"http://localhost:4000/api/doctor/get\",\"addRating\":\"http://localhost:4000/api/doctor/update/rating\",\"getAllDoctors\":\"http://localhost:4000/api/doctor/get/all\"}");

/***/ }),

/***/ "./src/assets/codes.json":
/*!*******************************!*\
  !*** ./src/assets/codes.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"country\":\"Afghanistan\",\"code\":93},{\"country\":\"Albania\",\"code\":355},{\"country\":\"Algeria\",\"code\":213},{\"country\":\"American Samoa\",\"code\":\"1-684\"},{\"country\":\"Andorra\",\"code\":376},{\"country\":\"Angola\",\"code\":244},{\"country\":\"Anguilla\",\"code\":\"1-264\"},{\"country\":\"Antarctica\",\"code\":672},{\"country\":\"Antigua and Barbuda\",\"code\":\"1-268\"},{\"country\":\"Argentina\",\"code\":54},{\"country\":\"Armenia\",\"code\":374},{\"country\":\"Aruba\",\"code\":297},{\"country\":\"Australia\",\"code\":61},{\"country\":\"Austria\",\"code\":43},{\"country\":\"Azerbaijan\",\"code\":994},{\"country\":\"Bahamas\",\"code\":\"1-242\"},{\"country\":\"Bahrain\",\"code\":973},{\"country\":\"Bangladesh\",\"code\":880},{\"country\":\"Barbados\",\"code\":\"1-246\"},{\"country\":\"Belarus\",\"code\":375},{\"country\":\"Belgium\",\"code\":32},{\"country\":\"Belize\",\"code\":501},{\"country\":\"Benin\",\"code\":229},{\"country\":\"Bermuda\",\"code\":\"1-441\"},{\"country\":\"Bhutan\",\"code\":975},{\"country\":\"Bolivia\",\"code\":591},{\"country\":\"Bosnia and Herzegovina\",\"code\":387},{\"country\":\"Botswana\",\"code\":267},{\"country\":\"Brazil\",\"code\":55},{\"country\":\"British Indian Ocean Territory\",\"code\":246},{\"country\":\"British Virgin Islands\",\"code\":\"1-284\"},{\"country\":\"Brunei\",\"code\":673},{\"country\":\"Bulgaria\",\"code\":359},{\"country\":\"Burkina Faso\",\"code\":226},{\"country\":\"Burundi\",\"code\":257},{\"country\":\"Cambodia\",\"code\":855},{\"country\":\"Cameroon\",\"code\":237},{\"country\":\"Canada\",\"code\":1},{\"country\":\"Cape Verde\",\"code\":238},{\"country\":\"Cayman Islands\",\"code\":\"1-345\"},{\"country\":\"Central African Republic\",\"code\":236},{\"country\":\"Chad\",\"code\":235},{\"country\":\"Chile\",\"code\":56},{\"country\":\"China\",\"code\":86},{\"country\":\"Christmas Island\",\"code\":61},{\"country\":\"Cocos Islands\",\"code\":61},{\"country\":\"Colombia\",\"code\":57},{\"country\":\"Comoros\",\"code\":269},{\"country\":\"Cook Islands\",\"code\":682},{\"country\":\"Costa Rica\",\"code\":506},{\"country\":\"Croatia\",\"code\":385},{\"country\":\"Cuba\",\"code\":53},{\"country\":\"Curacao\",\"code\":599},{\"country\":\"Cyprus\",\"code\":357},{\"country\":\"Czech Republic\",\"code\":420},{\"country\":\"Democratic Republic of the Congo\",\"code\":243},{\"country\":\"Denmark\",\"code\":45},{\"country\":\"Djibouti\",\"code\":253},{\"country\":\"Dominica\",\"code\":\"1-767\"},{\"country\":\"Dominican Republic\",\"code\":\"1-809\"},{\"country\":\"East Timor\",\"code\":670},{\"country\":\"Ecuador\",\"code\":593},{\"country\":\"Egypt\",\"code\":20},{\"country\":\"El Salvador\",\"code\":503},{\"country\":\"Equatorial Guinea\",\"code\":240},{\"country\":\"Eritrea\",\"code\":291},{\"country\":\"Estonia\",\"code\":372},{\"country\":\"Ethiopia\",\"code\":251},{\"country\":\"Falkland Islands\",\"code\":500},{\"country\":\"Faroe Islands\",\"code\":298},{\"country\":\"Fiji\",\"code\":679},{\"country\":\"Finland\",\"code\":358},{\"country\":\"France\",\"code\":33},{\"country\":\"French Polynesia\",\"code\":689},{\"country\":\"Gabon\",\"code\":241},{\"country\":\"Gambia\",\"code\":220},{\"country\":\"Georgia\",\"code\":995},{\"country\":\"Germany\",\"code\":49},{\"country\":\"Ghana\",\"code\":233},{\"country\":\"Gibraltar\",\"code\":350},{\"country\":\"Greece\",\"code\":30},{\"country\":\"Greenland\",\"code\":299},{\"country\":\"Grenada\",\"code\":\"1-473\"},{\"country\":\"Guam\",\"code\":\"1-671\"},{\"country\":\"Guatemala\",\"code\":\"502\\t\"},{\"country\":\"Guernsey\",\"code\":\"44-1481\"},{\"country\":\"Guinea\",\"code\":224},{\"country\":\"Guinea-Bissau\",\"code\":245},{\"country\":\"Guyana\",\"code\":592},{\"country\":\"Haiti\",\"code\":509},{\"country\":\"Honduras\",\"code\":504},{\"country\":\"Hong Kong\",\"code\":852},{\"country\":\"Hungary\",\"code\":36},{\"country\":\"Iceland\",\"code\":354},{\"country\":\"India\",\"code\":91},{\"country\":\"Indonesia\",\"code\":62},{\"country\":\"Iran\",\"code\":98},{\"country\":\"Iraq\",\"code\":964},{\"country\":\"Ireland\",\"code\":353},{\"country\":\"Isle of Man\",\"code\":\"44-1624\"},{\"country\":\"Israel\",\"code\":972},{\"country\":\"Italy\",\"code\":39},{\"country\":\"Ivory Coast\",\"code\":225},{\"country\":\"Jamaica\",\"code\":\"1-876\"},{\"country\":\"Japan\",\"code\":81},{\"country\":\"Jersey\",\"code\":\"44-1534\"},{\"country\":\"Jordan\",\"code\":962},{\"country\":\"Kazakhstan\",\"code\":7},{\"country\":\"Kenya\",\"code\":254},{\"country\":\"Kiribati\",\"code\":686},{\"country\":\"Kosovo\",\"code\":383},{\"country\":\"Kuwait\",\"code\":965},{\"country\":\"Kyrgyzstan\",\"code\":996},{\"country\":\"Laos\",\"code\":856},{\"country\":\"Latvia\",\"code\":\"371\\t\"},{\"country\":\"Lebanon\",\"code\":\"961\\t\"},{\"country\":\"Lesotho\",\"code\":266},{\"country\":\"Liberia\",\"code\":231},{\"country\":\"Libya\",\"code\":218},{\"country\":\"Liechtenstein\",\"code\":423},{\"country\":\"Lithuania\",\"code\":370},{\"country\":\"Luxembourg\",\"code\":352},{\"country\":\"Macau\",\"code\":853},{\"country\":\"Macedonia\",\"code\":389},{\"country\":\"Madagascar\",\"code\":261},{\"country\":\"Malawi\",\"code\":265},{\"country\":\"Malaysia\",\"code\":60},{\"country\":\"Maldives\",\"code\":960},{\"country\":\"Mali\",\"code\":223},{\"country\":\"Malta\",\"code\":356},{\"country\":\"Marshall Islands\",\"code\":692},{\"country\":\"Mauritania\",\"code\":222},{\"country\":\"Mauritius\",\"code\":230},{\"country\":\"Mayotte\",\"code\":262},{\"country\":\"Mexico\",\"code\":52},{\"country\":\"Micronesia\",\"code\":691},{\"country\":\"Moldova\",\"code\":373},{\"country\":\"Monaco\",\"code\":377},{\"country\":\"Mongolia\",\"code\":976},{\"country\":\"Montenegro\",\"code\":382},{\"country\":\"Montserrat\",\"code\":\"1-664\"},{\"country\":\"Morocco\",\"code\":212},{\"country\":\"Mozambique\",\"code\":258},{\"country\":\"Myanmar\",\"code\":95},{\"country\":\"Namibia\",\"code\":264},{\"country\":\"Nauru\",\"code\":674},{\"country\":\"Nepal\",\"code\":977},{\"country\":\"Netherlands\",\"code\":31},{\"country\":\"Netherlands Antilles\",\"code\":599},{\"country\":\"New Caledonia\",\"code\":687},{\"country\":\"New Zealand\",\"code\":64},{\"country\":\"Nicaragua\",\"code\":505},{\"country\":\"Niger\",\"code\":227},{\"country\":\"Nigeria\",\"code\":234},{\"country\":\"Niue\",\"code\":683},{\"country\":\"North Korea\",\"code\":850},{\"country\":\"Northern Mariana Islands\",\"code\":\"1-670\"},{\"country\":\"Norway\",\"code\":47},{\"country\":\"Oman\",\"code\":968},{\"country\":\"Pakistan\",\"code\":92},{\"country\":\"Palau\",\"code\":680},{\"country\":\"Palestine\",\"code\":970},{\"country\":\"Panama\",\"code\":507},{\"country\":\"Papua New Guinea\",\"code\":675},{\"country\":\"Paraguay\",\"code\":595},{\"country\":\"Peru\",\"code\":51},{\"country\":\"Philippines\",\"code\":63},{\"country\":\"Pitcairn\",\"code\":64},{\"country\":\"Poland\",\"code\":48},{\"country\":\"Portugal\",\"code\":351},{\"country\":\"Puerto Rico\",\"code\":\"1-787\"},{\"country\":\"Qatar\",\"code\":974},{\"country\":\"Republic of the Congo\",\"code\":242},{\"country\":\"Reunion\",\"code\":262},{\"country\":\"Romania\",\"code\":40},{\"country\":\"Russia\",\"code\":7},{\"country\":\"Rwanda\",\"code\":250},{\"country\":\"Saint Barthelemy\",\"code\":590},{\"country\":\"Saint Helena\",\"code\":290},{\"country\":\"Saint Kitts and Nevis\",\"code\":\"1-869\"},{\"country\":\"Saint Lucia\",\"code\":\"1-758\"},{\"country\":\"Saint Martin\",\"code\":590},{\"country\":\"Saint Pierre and Miquelon\",\"code\":508},{\"country\":\"Saint Vincent and the Grenadines\",\"code\":\"1-784\"},{\"country\":\"Samoa\",\"code\":685},{\"country\":\"San Marino\",\"code\":378},{\"country\":\"Sao Tome and Principe\",\"code\":239},{\"country\":\"Saudi Arabia\",\"code\":966},{\"country\":\"Senegal\",\"code\":221},{\"country\":\"Serbia\",\"code\":381},{\"country\":\"Seychelles\",\"code\":248},{\"country\":\"Sierra Leone\",\"code\":232},{\"country\":\"Singapore\",\"code\":65},{\"country\":\"Sint Maarten\",\"code\":\"1-721\"},{\"country\":\"Slovakia\",\"code\":421},{\"country\":\"Slovenia\",\"code\":386},{\"country\":\"Solomon Islands\",\"code\":677},{\"country\":\"Somalia\",\"code\":252},{\"country\":\"South Africa\",\"code\":27},{\"country\":\"South Korea\",\"code\":82},{\"country\":\"South Sudan\",\"code\":211},{\"country\":\"Spain\",\"code\":34},{\"country\":\"Sri Lanka\",\"code\":94},{\"country\":\"Sudan\",\"code\":249},{\"country\":\"Suriname\",\"code\":597},{\"country\":\"Svalbard and Jan Mayen\",\"code\":47},{\"country\":\"Swaziland\",\"code\":268},{\"country\":\"Sweden\",\"code\":46},{\"country\":\"Switzerland\",\"code\":41},{\"country\":\"Syria\",\"code\":963},{\"country\":\"Taiwan\",\"code\":886},{\"country\":\"Tajikistan\",\"code\":992},{\"country\":\"Tanzania\",\"code\":255},{\"country\":\"Thailand\",\"code\":66},{\"country\":\"Togo\",\"code\":228},{\"country\":\"Tokelau\",\"code\":690},{\"country\":\"Tonga\",\"code\":676},{\"country\":\"Trinidad and Tobago\",\"code\":\"1-868\"},{\"country\":\"Tunisia\",\"code\":216},{\"country\":\"Turkey\",\"code\":90},{\"country\":\"Turkmenistan\",\"code\":993},{\"country\":\"Turks and Caicos Islands\",\"code\":\"1-649\"},{\"country\":\"Tuvalu\",\"code\":688},{\"country\":\"U.S. Virgin Islands\",\"code\":\"1-340\"},{\"country\":\"Uganda\",\"code\":256},{\"country\":\"Ukraine\",\"code\":380},{\"country\":\"United Arab Emirates\",\"code\":971},{\"country\":\"United Kingdom\",\"code\":44},{\"country\":\"United States\",\"code\":1},{\"country\":\"Uruguay\",\"code\":598},{\"country\":\"Uzbekistan\",\"code\":998},{\"country\":\"Vanuatu\",\"code\":678},{\"country\":\"Vatican\",\"code\":379},{\"country\":\"Venezuela\",\"code\":58},{\"country\":\"Vietnam\",\"code\":84},{\"country\":\"Wallis and Futuna\",\"code\":681},{\"country\":\"Western Sahara\",\"code\":212},{\"country\":\"Yemen\",\"code\":967},{\"country\":\"Zambia\",\"code\":260},{\"country\":\"Zimbabwe\",\"code\":263}]");

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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\docfind-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map