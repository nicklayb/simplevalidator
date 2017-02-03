# SimpleValidator
###### By Nicolas Boisvert :: nicklay@me.com

### Simple validator for your dom inputs

## How-to

You first instanciate you `SimpleValidator` object by passing in an object with your rules, what to do when they're valid and what to do when they're not valid. And after all, all you need to do is call the `check()` method on your SimpleValidator object.

```
const validator = new SimpleValidator({
    rules: {
        name: () => {
            return /* Your name validation */;
        },
    },
    valid: () => {
        console.log('valid');
    },
    notValid: () => {
        console.log('notValid');
    }
});

validator.check();
```

### Other methods

#### Adding validator

There is also other methods like `push` or `pushMany` that allow you to add additionnal validators.

```
validator.push('age', function() {
    return age > 18;
});
validator.push({
    age: function() {
        return age > 18;
    },
    /* Other validations */
});
```

#### Removing validator

You can remove a validator within the `removeRule` method or validate the existance of a method with `hasRule`

```
validator.hasRule('age');   //    Return true;
validator.removeRule('age');
validator.hasRule('age');   //    Return false;
```

## Conclusion

Thank you for using, testing and improving it and feel free to contact me for any question.

Ending joke :
> **Q** : What do computers and air conditioners have in common? **A** : They both become useless when you open windows
