define(["Magento_PageBuilder/js/utils/object"], function (_object) {
    'use strict';
    return function(original) {
        // There is a bug with the toDom() function where a value can be undefined and throws an error.
        // Usually its either a value or an empty string, but in rare cases it can also be undefined.
        // This will now check for an undefined value and return an empty string
        original.prototype.toDom = function toDom(name, data) {
            var value = (0, _object.get)(data, name);

            if(typeof value === 'undefined') {
                return '';
            }

            return value.split(/\+|\-|\*|\//).length > 1 ? "calc(" + (0, _object.get)(data, name) + ")" : value;
        };

        return original;
    }
});
