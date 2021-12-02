/*
 * @Author: Ying Zhang
 * @Date: 2021-11-23 21:44:43
 * @LastEditTime: 2021-12-02 11:05:16
 * @LastEditors: Ying Zhang
 * @Description:
 * @FilePath: /everyday/ts学习/app.ts
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

// ts 对象
// obj_test.getAge = function () {...} 编译错误，因为Typescript 中的对象必须是特定类型的实例。
// const obj_test = {
//   name: "test1",
//   age: 18,
// };

const obj_test = {
  name: "test1",
  age: 18,
  getAge: function () {}, // 有类型模板，就不报错了
};

obj_test.getAge = function () {
  //  error TS2339: Property 'getAge' does not exist on type '{ name: string....
  return 18;
};

// 对象作为参数传递
function testObjParams(obj: { name: string; age: number }) {
  console.log("name", obj.name);
}
testObjParams(obj_test);

// 动态类型 Duck Typing "当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。"

// 命名空间 -->解决重名问题
namespace someNameSpaceName {
  export interface ISomeIterfaceName {}
  export class SomeClassName {}
}

// 调用格式
someNameSpaceName.SomeClassName;

// 引用语法
/// <reference path = "SomeFileName.ts" />

// 嵌套命名空间
namespace namespace_name1 {
  export namespace namespace_name2 {
    export class class_name {}
  }
}

// Invoice.ts 文件代码
namespace Runoob {
  export namespace invoiceApp {
    export class Invoice {
      public calculateDiscount(price: number) {
        return price * 0.4;
      }
    }
  }
}

// InvoiceTest.ts 文件代码：
/// <reference path = "Invoice.ts" />
var invoice = new Runoob.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));

// 模块 -->可以更换的组织代码
// 模块是在其自身的作用域里执行，并不是在全局作用域，这意味着定义在模块里面的变量、函数和类等在模块外部是不可见的，除非明确地使用 export 导出它们
// 两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的。

// 文件名 : SomeInterface.ts
export interface SomeInterface {}
// 另一个文件导入
// import someInterfaceRef = require("./SomeInterface");

// 例如
// import shape = require("./IShape");
// import circle = require("./Circle");
// import triangle = require("./Triangle");

// function drawAllShapes(shapeToDraw: shape.IShape) {
//   shapeToDraw.draw();
// }

// drawAllShapes(new circle.Circle());
// drawAllShapes(new triangle.Triangle());
// 命令行编译
// tsc --module amd TestShape.ts

// 声明文件 -->声明文件以 .d.ts 为后缀
declare var jQuery: (selector: string) => any;

jQuery("#foo");

// TypeScript 引入声明文件语法格式： /// <reference path = " runoob.d.ts" />
