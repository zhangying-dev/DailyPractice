/*
 * @Author: Ying Zhang
 * @Date: 2021-11-23 21:44:43
 * @LastEditTime: 2021-11-24 00:03:03
 * @LastEditors: Ying Zhang
 * @Description:
 * @FilePath: /ts学习/app.ts
 * 道阻且长，行则将至
 */
let myname: string = "zhangying";
// console.log(myname);

// 执行 tsc app.ts ==> app.js   将 TypeScript 转换为 JavaScript 代码
// 执行 node app.js
class girl {
  name(): void {
    console.log("my name is ying");
  }
}
let obj = new girl();
obj.name();

// 数组声明
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["1", "2"];
let arr3: Array<number> = [5, 6]; // 数组泛型

// 元组生命
let x: [number, string, string];
x = [1, "zhang", "ying"];
console.log("元组", x[0]);

// 枚举 enum [ɪˌnjuːm] 定义数值集合
enum Color {
  red,
  green,
  blue,
}
let c: Color = Color.blue;
console.log("枚举", c);

//  void 标识方法返回的值，void表示该方法没有返回值
function hello(): void {
  console.log("void");
}
hello();

// null 表示对象值缺失  表示空对象引用 typeof null === object

// undefined 用于初始化变量为一个未定义的值

// never 是其他类型的子类型 代表从不会出现的值

// TypeScript 和 JavaScript 没有整数类型。
// 变量声明
// 类型断言 type assertiong：可以用来手动指定一个值的类型，允许变量从一种类型改为另一种类型    <类型>值 / 值 as 类型
let str = "1";
let str2: number = <number>(<any>str);
console.log("断言", str2, typeof str2);

// 类型推断
// 当类型没有给出时，ts 编译器利用类型推断来推断类型

// 变量作用域 3种：全局作用域、类作用域、局部作用域
var global_num = 12; // 全局变量
class Numbers {
  num_val = 13; // 实例变量
  static sval = 10; // 静态变量

  storeNum(): void {
    var local_num = 14; // 局部变量
  }
}
console.log("全局变量为: " + global_num);
console.log(Numbers.sval); // 静态变量
var obj1 = new Numbers();
console.log("实例变量: " + obj1.num_val);

// 函数--返回值类型
function getNum1(): number {
  return 0;
}
// 函数--带参数函数
function getName(params1: string, params2: number): string {
  return params1 + params2;
}
console.log("函数--带参数函数", getName("aaa", 1));
// 函数--可选参数？标识
function getAge(age: number, name?: string): string {
  return name ? name + age : age + "";
}
console.log("函数--可选参数", getAge(18));
// 函数--默认参数
function getEmail(name: string, email: string = "12345@qq.com"): string {
  return `${name}--${email}`;
}
console.log("函数--默认参数", getEmail("zhang"));

console.log("number", Number.NaN);

// 接口继承--单继承
interface Person {
  age: number;
}

interface Musician extends Person {
  instrument: string;
}

var drummer = <Musician>{};
drummer.age = 18;

// 接口继承--多继承
interface Person1 {
  name: string;
}
interface Person2 {
  age: number;
}
interface Child extends Person1, Person2 {}

let myObj = <Child>{};
myObj.name = "zhang";
console.log("多继承", myObj.name);

// 继承类
class Shape {
  Area: number;
  constructor(a: number) {
    this.Area = a;
  }
}

class Circle extends Shape {
  disp(): void {
    console.log("this.Area:  " + this.Area);
  }
}

var circleObj = new Circle(223);
circleObj.disp();

// 类的多重继承
class Root {
  str: string;
}
class Child extends Root {
  num: number;
  handler(): string {
    console.log("test");
    return "test";
  }
}
class Leaf extends Child {}
var objLeaf = new Leaf();
objLeaf.str = "hello";
objLeaf.num = 18;
console.log("类的多重继承", objLeaf.str, objLeaf.num, objLeaf.handler());
