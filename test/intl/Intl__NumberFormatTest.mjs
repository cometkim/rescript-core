// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as Core__Intl__NumberFormat__Grouping from "../../src/intl/Core__Intl__NumberFormat__Grouping.mjs";

console.log("---");

console.log("Intl.NumberFormat");

var currencyFormatter = new Intl.NumberFormat(["fr-FR"], {
      currency: "EUR",
      style: "currency"
    });

console.log(Intl.NumberFormat.supportedLocalesOf([
          "fr-FR",
          "en-US"
        ], undefined));

console.log(currencyFormatter.format(123.23));

var roundingFormatter = new Intl.NumberFormat(undefined, {
      roundingIncrement: 500,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

var groupingFormatter1 = new Intl.NumberFormat(undefined, {
      useGrouping: Caml_option.some(true)
    });

var groupingFormatter2 = new Intl.NumberFormat(undefined, {
      useGrouping: "auto"
    });

var sigFormatter = new Intl.NumberFormat(undefined, {
      minimumIntegerDigits: 1,
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 1
    });

var options = sigFormatter.resolvedOptions();

console.log(options);

console.log(Core__Intl__NumberFormat__Grouping.parseJsValue(options.useGrouping));

export {
  currencyFormatter ,
  roundingFormatter ,
  groupingFormatter1 ,
  groupingFormatter2 ,
  sigFormatter ,
  options ,
}
/*  Not a pure module */
