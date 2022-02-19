"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "Chango",
    age: 27,
    gender: "male",
};
// parameter뒤에 ?가 올경우 선택적인 것이다.
// parameter뒤어 :타입을 통해 타입을 지정해 줄 수 있다.
const sayHi = (person) => {
    return `Hello ${person.name} u r ${person.age} and ${person.gender}`;
};
// argument가 지정된 갯수와 같아야 컴파일 시켜준다.
console.log(sayHi(person));
//# sourceMappingURL=index.js.map