function ComplexNumber(real, imaginary)
{
    /*
        Define and initialize the properties representing the real and imaginary components
        and the print function as it was defined in task 1
    */
    this.real = real;
    this.imaginary = imaginary;
    this.print = function()
        {         
            // Please replace the comments with the numberic values only, don't change the printed string because it'll be used for testing
            console.log(this.real+" , " + this.imaginary+ "i");
        }

    

    this.add = function(theOtherComplexNumber)
    {
        /**
          Complete this function so that it would receive an object of a complex number as an argument.
          Since it’s defined as a part of a complex number object itself, it has access to its own real and complex components (through the ‘this’ keyword).
           Create and return a new object that will contain the result of adding the received object to the current object. 
         */
       this.real= this.real + theOtherComplexNumber.real;
       this.imaginary= this.imaginary + theOtherComplexNumber.imaginary;
       return new ComplexNumber(this.real, this.imaginary);
    };

    this.subtract = function(theOtherComplexNumber)
    {
        /*
            Similar to the add method but the subtract operatin applied
        */
       this.real= this.real - theOtherComplexNumber.real;
       this.imaginary= this.imaginary -theOtherComplexNumber.imaginary;
       return new ComplexNumber(this.real, this.imaginary);
    };

    // the multiplication and the division are a little more involved, so they're not required
    // feel free to define them if you're interested; you won't be penalized if you don't
};

let c1= new ComplexNumber(2,5); // use the constructor function to create the complex number 2 + 5i
let c2= new ComplexNumber(4,10); // use the constructor function to create the complex number 4 + 10i

let c3 = c1.add(c2);
c3.print();

let c4= c1.subtract(c2);
c4.print();

