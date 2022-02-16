"use strict";
exports.__esModule = true;
var name = "Chango", age = 27, gender = "male";
var sayHi = function (name, age, gender) {
    console.log("Hello ".concat(name, " u r ").concat(age, " and ").concat(gender));
};
// argument가 지정된 갯수와 같아야 컴파일 시켜준다.
sayHi(name, age);
