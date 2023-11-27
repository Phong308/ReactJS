class Person {
  constructor(name) {
    this._name = name;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    this._name = newName;
  }

  walk() {
    console.log(`${this._name} is walking.`);
  }
}

class Programmer extends Person {
  constructor(name, programmingLanguage) {
    super(name);
    this._programmingLanguage = programmingLanguage;
  }

  // Getter
  get programmingLanguage() {
    return this._programmingLanguage;
  }

  // Setter
  set programmingLanguage(newLanguage) {
    this._programmingLanguage = newLanguage;
  }

  writeCode() {
    console.log(`${this._name} is coding in ${this._programmingLanguage}.`);
  }
}

// Khai báo đối tượng thuộc lớp Programmer
const programmer = new Programmer("John", "JavaScript");

// Gọi các phương thức của lớp Person và Programmer
programmer.walk();  // Output: John is walking.
console.log(programmer.name);  // Output: John

programmer.writeCode();  // Output: John is coding in JavaScript.
console.log(programmer.programmingLanguage);  // Output: JavaScript

// Sử dụng Setter để thay đổi giá trị thuộc tính
programmer.name = "Jane";
programmer.programmingLanguage = "Python";

console.log(programmer.name);  // Output: Jane
console.log(programmer.programmingLanguage);  // Output: Python
