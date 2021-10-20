# Tutorial6
In this tutorial, we’ll practice working with prototypes and the constructor function by creating complex numbers.
a complex number have two numeric components; real and imaginary, and would be printed like this: <real-component> + <real-component>i 

## Task1
In this task, we’ll try to understand the concept of the constructor function by comparing it with the ‘manual’ creation of an object based on a prototype.
  
- Create a template object to be used as a prototype for Complex Number objects and give it the name ComplexNumberPrototype
--- The prototype object should contain two properties to represent the real and imaginary components and a method that print those components in the proper format
--- The print method would need to access the other properties using the “this” keyword.

- Create a function that takes the values for the real and imaginary components as arguments and returns an object based on the ComplexNumberPrototype initialized with the given values. 
--- Give this function the name createComplexNumber
--- Use the createComplexNumber function to create and print complex numbers 

- Create a constructor function that would be used with the new keyword to create complex number objects that would work the same way.
--- When you get to create the print method from within the constructor function you still need to access the real and imaginary properties using the “this” keyword.
--- Use the constructor function with the new keyword to create similar complex number objects and print them.

## Task 2
Change the ComplexNumber constructor function so that it includes add and subtract methods that would take another complex number as an object and return a complex number that's the result of applying the corresponding operation on the current object (accessed using this operator) and the object sent as an argument.
The result of adding two complex numbers is a new complex number
-    The real component of the result equals the summation of the real component of the first number and the real component of the second number. 
-    The imaginary component of the result equals the summation of the imaginary component of the first number and the imaginary component of the second number.
e.g.  (5 + 6i) + (7 + 3i) = (12 + 9i)
