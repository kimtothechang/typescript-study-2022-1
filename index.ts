const name = "Chango",
  age = 27,
  gender = "male";

// parameter뒤에 ?가 올경우 선택적인 것이다.
const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name} u r ${age} and ${gender}`);
};

// argument가 지정된 갯수와 같아야 컴파일 시켜준다.
sayHi(name, age);

export {};
