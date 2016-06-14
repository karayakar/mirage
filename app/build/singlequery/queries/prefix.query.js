System.register(["@angular/core"], function(exports_1, context_1) {
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
    var core_1;
    var PrefixQuery;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PrefixQuery = (function () {
                function PrefixQuery() {
                    this.getQueryFormat = new core_1.EventEmitter();
                    this.queryName = '*';
                    this.fieldName = '*';
                    this.information = {
                        title: 'lt query',
                        content: 'lt query content',
                        link: 'https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-match-query.html'
                    };
                    this.inputs = {
                        input: {
                            placeholder: 'Input',
                            value: ''
                        }
                    };
                    this.queryFormat = {};
                }
                PrefixQuery.prototype.ngOnInit = function () {
                    try {
                        if (this.appliedQuery['prefix'][this.fieldName]) {
                            this.inputs.input.value = this.appliedQuery['prefix'][this.fieldName];
                        }
                    }
                    catch (e) { }
                    this.getFormat();
                };
                PrefixQuery.prototype.ngOnChanges = function () {
                    if (this.selectedField != '') {
                        if (this.selectedField !== this.fieldName) {
                            this.fieldName = this.selectedField;
                            this.getFormat();
                        }
                    }
                    if (this.selectedQuery != '') {
                        if (this.selectedQuery !== this.queryName) {
                            this.queryName = this.selectedQuery;
                            this.getFormat();
                        }
                    }
                };
                // QUERY FORMAT
                /*
                    Query Format for this query is
                    @queryName: {
                        @fieldName: @value
                    }
                */
                PrefixQuery.prototype.getFormat = function () {
                    if (this.queryName === 'prefix') {
                        this.queryFormat = this.setFormat();
                        this.getQueryFormat.emit(this.queryFormat);
                    }
                };
                PrefixQuery.prototype.setFormat = function () {
                    var queryFormat = {};
                    queryFormat[this.queryName] = {};
                    queryFormat[this.queryName][this.fieldName] = this.inputs.input.value;
                    return queryFormat;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PrefixQuery.prototype, "queryList", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PrefixQuery.prototype, "selectedField", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PrefixQuery.prototype, "appliedQuery", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PrefixQuery.prototype, "selectedQuery", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PrefixQuery.prototype, "getQueryFormat", void 0);
                PrefixQuery = __decorate([
                    core_1.Component({
                        selector: 'prefix-query',
                        template: "<div class=\"form-group form-element col-xs-12\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control col-xs-12\"\n\t\t\t\t\t\t[(ngModel)]=\"inputs.input.value\" \n\t\t\t\t\t \tplaceholder=\"{{inputs.input.placeholder}}\"\n\t\t\t\t\t \t(keyup)=\"getFormat();\" />\n\t\t\t\t</div>",
                        inputs: ['appliedQuery', 'queryList', 'selectedQuery', 'selectedField', 'getQueryFormat']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PrefixQuery);
                return PrefixQuery;
            }());
            exports_1("PrefixQuery", PrefixQuery);
        }
    }
});
//# sourceMappingURL=prefix.query.js.map