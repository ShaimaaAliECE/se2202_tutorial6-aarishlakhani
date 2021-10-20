// create a template object to be used as a prototype for a Complex number 
//(a complex number have two numeric components; real and imaginary )
let ComplexNumberPrototype = {
    /*
    Add the two properties to represent the real and imaginary parts of the complex number
    */

     print: function()
     {
         // Please replace the comments with the numberic values only, don't change the printed string because it'll be used for testing
         console.log(/*refer to the real part*/ +" + " + /*refer to the imagenary part*/ + "i");
     }
   };


//create a function that takes the values for the real and imaginary components
//as arguments and return an object based on the ComplexNumberPrototype
// initialized with the given values

function createComplexNumber (real,imaginary)
{
  
}


// please don't change this part
let c1 = createComplexNumber(4,6);
c1.print();
c1 = createComplexNumber(14,20);
c1.print();
c1 = createComplexNumber(5,2);
c1.print();

// create a constructor function that would be used with the new keyword 
//to create complex number objects that would work the same way
function ComplexNumber(real, imaginary)
{

    this.print = function()
        {         
            // Please replace the comments with the numberic values only, don't change the printed string because it'll be used for testing
            console.log(/*refer to the real part*/this.real +" + " + /*refer to the imagenary part*/this.imaginary + "i");
        }
};

// call the constructor function three times to create three complex numbers with simialr values used with 'c1'
let c2;  // use the constructor function to create the first number
c2.print();
c2; // use the constructor function to create the second number
c2.print();
c2; // use the constructor function to create the thrird number
c2.print();
