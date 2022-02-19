// JS에서도 interface를 활용하려면 class를 통해서 가능하다.
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const chango = new Human("chango", 27, "male");

// parameter뒤에 ?가 올경우 선택적인 것이다.
// parameter뒤어 :타입을 통해 타입을 지정해 줄 수 있다.
const sayHi = (person: Human): string => {
  return `Hello ${person.name} u r ${person.age} and ${person.gender}`;
};

// argument가 지정된 갯수와 같아야 컴파일 시켜준다.
console.log(sayHi(chango));

export {};
