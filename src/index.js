export default class SimpleValidator {
    constructor(options) {
        this.validators = {};
        options = options || {};
        let rules = options.rules || {};
        this.before = options.before || function() {};
        this.valid = options.valid || function() {};
        this.notValid = options.notValid || function() {};
        this.completed = options.completed || function() {};
        this.pushMany(rules);
    }

    pushMany(rules) {
        for (let rule in rules) {
            this.push(rule, rules[rule]);
        }
    }

    push(key, validator) {
        this.validators[key] = validator;
    }

    validateRule(rule) {
        return (this.hasRule(rule)) ? this.validators[rule]() : true;
    }

    removeRule(rule) {
        if (this.hasRule(rule)) {
            delete this.validators[rule];
        }
    }

    hasRule(rule) {
        return this.validators.hasOwnProperty(rule);
    }

    validate(rule) {
        if (rule != null && rule !== undefined) {
            return this.validateRule(rule);
        }
        for (let validatorKey in this.validators) {
            if (!this.validateRule(validatorKey)) {
                return false;
            }
        }
        return true;
    }

    check() {
        let answer = false;
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
}
