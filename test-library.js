"use strict";

(function(exports) {
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        throw new Error("Assertion failed: " + assertion + " is not truthy");
      }
      console.log( "Truthy Test Passes");
    },

    isFalse: function(assertion) {
      if (assertion) {
        throw new Error("Assertion failed: " + assertion + " is not false");
      }
      console.log( "Falsey Test Passes");
    },

    isEqual: function(assertion, argument) {
      if (assertion !== argument) {
        throw new Error("Assertion failed: " + assertion + " is not equal to " + argument + ".");
      }
      console.log( "Equality Test Passes");
    },

    isDefined: function(assertion) {
      if (assertion !== null ) {
        throw new Error("Assertion failed: " + assertion + " is undefined.");
      }
    },

    isConstructedFrom: function(object, constructor) {
      if (object instanceof constructor !== true) {
        throw new Error("Assertion failed: " + object +
        " is not an instance of " + constructor);
      }
      console.log( "Contructed from Test Passes");
    },

  };
  exports.assert = assert;
})(this);
