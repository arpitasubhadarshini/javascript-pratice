Introduction to javascript:
 - javascript is a high level programming language for building web application  in a efficient way.
 - javascript works on both client side rendering as well as server side.
 - node js is a runtime environment of javascript.
 - javascript comes from rchma script so we see the latest version of javascript in the form of echma script.
 - now we use the javascript version 6 i.e Echma script 6(ES6).
 -  in another way we called ES6 as the vanilla javascript.
 - javascript is mainly used for building logic or functionally of a web page.

 VARIABLE;
  - variable is a container is used to store some value.
  - there are three types of variable are in javascript
    1. let:-
       - Let is a type of variable which is used for changing the variable name latter.
       - now these days , most of the devlopers used let for changing variable value.
       - Let is a block scope so we have been Let for more of cases.
    2. Var:-
       - var is a type of variable which is also used for changing the variable in latter stage.
       - var is used in oldest browser so now a days we are don't use var most of the cases.
       - var is a fonction/outside scope.
    3. const:-
       - const is a type of vaiable where we can't change our data.
       - const means constantto store some data like number,integer etc...
 rules for creating variable:-

  - variable name are case sensitive i.e a & A is different.
  - only letter ,digit,underscore & special charecter are allowed(whitespace is not allowed).
  - only letter , number and special charecter should be 1st charecter only.
  - reserve word can't be a  variable name.
DATATYPES in JS:-

  - datatypes is an attributes associated with a piece of data that tells a computer system how to interprit its value.
  - In datatypes we used "typeof" operater to know that what type of data it is.
  - mainly in javascript their are 2 types of data types:
  1> primitive:-
  - in js there are 7 types of primitive data types are present :
  1. Number:number are the type of data types which contain some numerical value
  2. Boolean:in boolean datatypes we get boolean value like true & false
  3. Undefined:in undefined data types the data is not define so that it will show undefined.
  4. Null:in this data type we get null for the value means nothing.
  5. bigInt: in this data type we get big integer value
  6. String:string is a type of data types that hold some charecter like names or words.
  7. Symbol:in symbol we will get whole symbol as well as the value we get for the data types.
  2> reference or non-primitive:-
    1. non primitive data type are the type of data that can hold multiple iteam in a single time.
    2. non primitive data type are - object , array,function
    3. object is a non primitive data type which can hold multiple of iteam in one single entity.
    4. mainly object working on (key:value) pair-
    5. the left hand side is our key and the right hand side are the value of that keys.

     
    ex of object :- 
    person ={
      "name" : "web-bocket",
      "age" :2,
    }
    ex of array:-
      arr = [1,2,4,5,8,6,9,3,2]
      note- array indexing starts from "0".

      ex of function:-
       function great() {
         console.log("Hello World)
       }
       great()
   
   OPERATOR:-
    -operator are the key features to do some task or operate some task.
    -ex . A+B
    -in this example A & B are operand and + is operator
    - there are 5 types of operator in js
    1.ARITHMETIC OPERATOR -> (+,-,*,/,%,**(exponent))
    2.UNARY OPERATOR ->(++,--)
    3.ASSIGNMENT OPERATOR (=,+=,-=,*=,/=,**=)
    4.LOGICAL OPERATOR -> (logical and operator &&),(logical or operator ||)
    5.COMPARISION -> (==,!=,!=,===)