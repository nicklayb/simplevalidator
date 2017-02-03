"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleValidator = function () {
    function SimpleValidator(options) {
        _classCallCheck(this, SimpleValidator);

        this.validators = {};
        options = options || {};
        var rules = options.rules || {};
        this.before = options.before || function () {};
        this.valid = options.valid || function () {};
        this.notValid = options.notValid || function () {};
        this.completed = options.completed || function () {};
        this.pushMany(rules);
    }

    _createClass(SimpleValidator, [{
        key: "pushMany",
        value: function pushMany(rules) {
            for (var rule in rules) {
                this.push(rule, rules[rule]);
            }
        }
    }, {
        key: "push",
        value: function push(key, validator) {
            this.validators[key] = validator;
        }
    }, {
        key: "validateRule",
        value: function validateRule(rule) {
            return this.hasRule(rule) ? this.validators[rule]() : true;
        }
    }, {
        key: "removeRule",
        value: function removeRule(rule) {
            if (this.hasRule(rule)) {
                delete this.validators[rule];
            }
        }
    }, {
        key: "hasRule",
        value: function hasRule(rule) {
            return this.validators.hasOwnProperty(rule);
        }
    }, {
        key: "validate",
        value: function validate(rule) {
            if (rule != null && rule !== undefined) {
                return this.validateRule(rule);
            }
            for (var validatorKey in this.validators) {
                if (!this.validateRule(validatorKey)) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: "check",
        value: function check() {
            var answer = false;
            this.before();
            if (this.validate()) {
                this.valid();
                answer = true;
            } else {
                this.notValid();
            }
            this.completed();
            return answer;
        }
    }]);

    return SimpleValidator;
}();

exports.default = SimpleValidator;