// Os três tipos básicos do Typescript: boolean, number e string
let isDone: boolean = false;
let lines: number = 32;
let user_name: string = "Julian Andrade";

// Tipo 'any' para receber qualquer valor de variável
let notSure: any = 'whatever';

// Declaração 'const' para constantes
const numLivesForCat = 9;
// numLivesForCat = 1; //ERROR

// For collections, there are typed arrays and generic arrays
let my_collection: number[] = [1, 2, 3];
// Alternatively, using the generic array type
let my_generic_collection: Array<number> = [1, 2, 3];

// For enumerations:
enum Color { Red, Green, Blue };
let c: Color = Color.Green;

// Functions are first class citizens, support the lambda "fat arrow" syntax and
// use type inference

// The following are equivalent, the same signature will be inferred by the
// compiler, and same JavaScript will be emitted
let f1 = function (i: number): number { return i * i; }
// Return type inferred
let f2 = function (i: number) { return i * i; }
// "Fat arrow" syntax
let f3 = (i: number): number => { return i * i; }
// "Fat arrow" syntax with return type inferred
let f4 = (i: number) => { return i * i; }
// "Fat arrow" syntax with return type inferred, braceless means no return
// keyword needed
let f5 = (i: number) => i * i;

// Interfaces are structural, anything that has the properties is compliant with
// the interface
interface Person {
    // Basic property 
    name: string;
    // Optional properties, marked with a "?"
    age?: number;
    // And of course functions
    move(): void;
}

// Object that implements the "Person" interface
// Can be treated as a Person since it has the name and move properties
let p: Person = { name: "Bobby", move: () => { } };
// Objects that have the optional property:
let validPerson: Person = { name: "Bobby", age: 42, move: () => { } };
// Is not a person because age is not a number
let invalidPerson: Person = { name: "Bobby", age: true };

// Interfaces can also describe a function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}
// Only the parameters' types are important, names are not important.
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
    return src.search(sub) != -1;
}

// Classes - members are public by default
class Point {
    // Properties
    x: number;
  
    // Constructor - the public/private keywords in this context will generate
    // the boiler plate code for the property and the initialization in the
    // constructor.
    // In this example, "y" will be defined just like "x" is, but with less code
    // Default values are also supported
  
    constructor(x: number, public y: number = 0) {
      this.x = x;
    }
  
    // Functions
    dist() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  
    // Static members
    static origin = new Point(0, 0);
  }
  
  let p1 = new Point(10, 20);
  let p2 = new Point(25); //y will be 0

  // Inheritance
class Point3D extends Point {
    constructor(x: number, y: number, public z: number = 0) {
      super(x, y); // Explicit call to the super class constructor is mandatory
    }
  
    // Overwrite
    dist() {
      let d = super.dist();
      return Math.sqrt(d * d + this.z * this.z);
    }
  }

  // Modules, "." can be used as separator for sub modules
 module Geometry {
    export class Square {
      constructor(public sideLength: number = 0) {}

      area() {
        return Math.pow(this.sideLength, 2);
      }
    }
  }
  
  let s1 = new Geometry.Square(5);

// Local alias for referencing a module
import G = Geometry;
let s2 = new G.Square(10);

// Including references to a definition file:
/// <reference path="jquery.d.ts" />

// Template Strings (strings that use backticks)
// String Interpolation with Template Strings
let name = 'Tyrone';
let greeting = `Hi ${name}, how are you?`
// Multiline Strings with Template Strings
let multiline = `This is an example
of a multiline string`;