///////////////////////////////////////////////
// The global globalization object
/////////////////////////////////////////////////
var g = globalization;

function errorCallback(err) {
    alert("ERROR: " + err);   //return err object that contains err.message and err.code
}

/////////////////////////////////////////////////
// Test 1 - navigator.globalization.getPreferredLanguage
/////////////////////////////////////////////////
function getPreferredLanguageSuccessCallback(language) {
    return language.value;
}

function test1() {
    g.getPreferredLanguage(getPreferredLanguageSuccessCallback, errorCallback);
}

/////////////////////////////////////////////////
// Test 2 - navigator.globalization.getLocaleName
/////////////////////////////////////////////////
function getLocalNameSuccessCallback(local) {
    alert("returned: " + local.value);
}

function test2 () {
    g.getLocaleName(getLocalNameSuccessCallback, errorCallback);
}

/////////////////////////////////////////////////
// Test 3 - navigator.globalization.dateToString
/////////////////////////////////////////////////
function dateToStringSuccessCallback(date) {
    return date;
}

var date1 = new Date(01/01/01);
var date2 = new Date(02/29/14); //Non leap year. Feb29 does not exist
var date3 = new Date();

function test3a() {
    g.dateToString(date1, dateToStringSuccessCallback, errorCallback, {formatLength:'full', selector:'date and time'} );
}

function test3b() {
    g.dateToString(date2, dateToStringSuccessCallback, errorCallback, {formatLength:'medium', selector:'date'});
}

function test3c() {
    g.dateToString(date3, dateToStringSuccessCallback, errorCallback, {formatLength:'long', selector:'time'});
}

function test3d() {
    g.dateToString(date3, dateToStringSuccessCallback, errorCallback, {formatLength:'short', selector:'date'});
}

/////////////////////////////////////////////
// Test 4 - navigator.globalization.stringToDate
/////////////////////////////////////////////////
function stringToDateSucessCallback(date) {
    alert("Day of the week [0-6]: " + date.getDay() + "\n" +
          "Month: " + date.getMonth() + "\n" +
          "Day: " + date.getDate() + "\n" +
          "Year: " + date.getYear() + "\n" +
          "Hours: " + date.getHours() + "\n" +
          "Minutes: " + date.getMinutes() + "\n");
}


function test4a() {
    g.stringToDate("Mar 29, 1998", stringToDateSucessCallback, errorCallback);
}

function test4b() {
    g.stringToDate("Mar 29, 1998", stringToDateSucessCallback, errorCallback, {formatLength:'long', selector:'date'} );
}

function test4c() {
    g.stringToDate("Mar 29, 1998", stringToDateSucessCallback, errorCallback, {formatLength:'full', selector:'time'} );
}

/////////////////////////////////////////////////
//Test 5 - navigator.globalization.getDatePattern
/////////////////////////////////////////////////
function getDatePatternSucessCallback(date) {
    alert("Date has been converted to: \n" +
          "date.pattern: " + date.pattern + "\n" +
          "date.pattern: " + date.timezone + "\n" +
          "date.utc_offset: " + date.utc_offset + "\n" +
          "date.dst_offset: " + date.dst_offset);
}

function test5() {
    g.getDatePattern("Mar 29, 1998", stringToDateSucessCallback, errorCallback);
}

/////////////////////////////////////////////////
//Test 6 - navigator.globalization.getDateNames
/////////////////////////////////////////////////
function getDateNamesSuccessCallback(dates) {
    console.log("Dates returned:");
    for (var i = 0; i < dates.length; i++) {
        console.log("[" + i + "]=" + dates[i]);
    }
}

// 6. base case
function test6a() {
    g.getDateNames(getDateNamesSuccessCallback, errorCallback);
}
//6.b Using options parameter. Out of this should be the same the previous call
function test6b() {
    g.getDateNames(getDateNamesSuccessCallback, errorCallback, {type:'wide', item:'months'});
}

//6.c Using options paramter
function test6c(){
    g.getDateNames(getDateNamesSuccessCallback, errorCallback, {type:'narrow', item:'days'});
}

//6.d - Error case
function test6d() {
    g.getDateNames(getDateNamesSuccessCallback, errorCallback, {type:'narrow', item:'days'});
}

/////////////////////////////////////////////////
//Test 7 - navigator.globalization.isDayLightSavingsTime
/////////////////////////////////////////////////
function isDayLightSavingsTimeSuccessCallback(properties) {
    if (properties.dst){
        alert("Date provided is daylight savings time");
    } else {
        alert("Date provided is NOT daylight saving time");
    }
}

//7.a check current Date
function test7a() {
    g.isDayLightSavingsTime(new Date(), isDayLightSavingsTimeSuccessCallback, errorCallback);
}

//7.b
function test7b() {
    g.isDayLightSavingsTime(new Date(), isDayLightSavingsTimeSuccessCallback, errorCallback);
}

/////////////////////////////////////////////////
//Test 8 - navigator.globalization.getFirstDayOfWeek
/////////////////////////////////////////////////
function getFirstDayOfWeekSuccessCallback(properties) {
    alert("First day of week: " + properties.value);
}

//8.a
g.getFirstDayOfWeek(getFirstDayOfWeekSuccessCallback, errorCallback);

/////////////////////////////////////////////////
//Test 9 - navigator.globalization.numberToString
/////////////////////////////////////////////////
function numberToStringSuccessCallback(properties) {

}

//base case with no options
function test9a() {
g.numberToString(1, numberToStringSuccessCallback, errorCallback);
}

//9.b
function test9b() {
    g.numberToString(3, numberToStringSuccessCallback, errorCallback, {type: 'decimal'} );
}

//9.c
function test9c() {
    g.numberToString(4, numberToStringSuccessCallback, errorCallback, {type: 'currency'} );
}

//9.d
function test9d() {
    g.numberToString(5, numberToStringSuccessCallback, errorCallback, {type: 'percent'} );
}

//9.e??  - Not sure to include
function test9e() {
    g.numberToString(0, numberToStringSuccessCallback, errorCallback);
    g.numberToString(999, numberToStringSuccessCallback, errorCallback);
    g.numberToString(-1, numberToStringSuccessCallback, errorCallback);
}

/////////////////////////////////////////////////
//Test 10 - navigator.globalization.stringToNumber
/////////////////////////////////////////////////
function stringToNumberSuccessCallback(obj) {
    console.log("String to Number val of 100.00 is " + obj.value);
}

//10.a
function test10a() {
    g.stringToNumber("123.456", stringToNumberSuccessCallback, errorCallback, {type: 'decimal'});
}
//10.b
function test10b() {
    g.stringToNumber("123.456", stringToNumberSuccessCallback, errorCallback, {type: 'percent'});
}
//10.c
function test10c() {
    g.stringToNumber("123.456", stringToNumberSuccessCallback, errorCallback, {type: 'currency'});
}

////////////////////////////////////////////////
//Test 11 - navigator.globalization.getNumberPattern
/////////////////////////////////////////////////
function getNumberPatternSuccessCallback(obj) {
    alert("Pattern returned is "+ obj.pattern + "\n" +
          "symbol returned is " + obj.symbol + "\n" +
          "fraction returned is " + obj.fraction + "\n" +
          "rounding returned is " + obj.rounding + "\n" +
          "positive returned is " + obj.positive + "\n" +
          "negative returnexd is " + obj.negative + "\n" +
          "decimal returned is " + obj.decimal + "\n" +
          "grouping returned is " + obj.grouping + "\n");
}

//11.a
function test11a() {
    g.getNumberPattern(getNumberPatternSuccessCallback, errorCallback, {type:'decimal'});
}
//11.b
function test11b() {
    g.getNumberPattern(getNumberPatternSuccessCallback, errorCallback, {type:'percent'});
}
//11.c
function test11c() {
    g.getNumberPattern(getNumberPatternSuccessCallback, errorCallback, {type:'currency'});
}

////////////////////////////////////////////////
//Test 12 - navigator.globalization.getCurrencyPattern
/////////////////////////////////////////////////
function getCurrencyPatternSuccessCallback(obj) {
    alert('pattern: ' + obj.pattern + '\n' +
        'code: ' + obj.code + '\n' +
        'fraction: ' + obj.fraction + '\n' +
        'rounding: ' + obj.rounding + '\n' +
        'decimal: ' + obj.decimal + '\n');

}

function test12a() {
    g.getCurrencyPattern("USD", getCurrencyPatternSuccessCallback, errorCallback);
}

function test12b() {
    g.getCurrencyPattern("JPY", getCurrencyPatternSuccessCallback, errorCallback);
}

function test12c() {
    g.getCurrencyPattern("CNY", getCurrencyPatternSuccessCallback, errorCallback);
}

function test12d() {
    g.getCurrencyPattern("GBP", getCurrencyPatternSuccessCallback, errorCallback);
}

function test12e() {
    g.getCurrencyPattern("INR", getCurrencyPatternSuccessCallback, errorCallback);
}



