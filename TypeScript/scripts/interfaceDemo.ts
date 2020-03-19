module interfaceDemo {

    interface SquareFunction {
        (x: number): number;
    }

    var squareItBasic: SquareFunction = (num) => num*num;
    
    interface Rectangle {
        h: number;
        w?: number
    }

    var squareIt: (rect: Rectangle) => number;
    //var squareIt: (rect: {h:number; w?:number}) => number;

    var rectA = {h:5};
    var rectB = {h:10, w:5};

   squareIt = function (rect) {
     if (rect.w !== undefined)
        return rect.h * rect.w;        
    return rect.h;
   }
   console.log("square of a rectangle A: " + squareIt(rectA));
   console.log("square of a rectangle B: " + squareIt(rectB));
   
   interface Person {
       name: string;
       age?: number;
       kids: number;
       calcPets: () => number;
       makeYonger: (years: number ) => void;
       greet: (msg: string) => string;
   }

   var p: Person = {
        name: 'Prasanna',
        age: 40,
        kids: 2,
        calcPets: function() {
            return this.kids * 2;
        },
        makeYonger: function(years: number) {
            this.age -= years;
        },
        greet: function (message: string) {
            return message + ' ' + this.name;
        }
        
   }
   var pets = p.calcPets();
   console.log('number of pets: '+ pets);
   
   p.makeYonger(10);
   console.log('new Age: '+ p.age);

   var msg = p.greet('Welcome to TypeSCript');
   console.log(msg);

   interface SessionEval {
        addRating: (rating: number) => void;
       calcRating: () => number;
   }

   function sessionEvaluator():SessionEval {

        var ratings: number[] = [];

        var addRating = (rating: number) => {
            ratings.push(rating);
        };

        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach (function(score) {
                sum += score;
            })
            return sum/ratings.length;
        };
        return{
            addRating: addRating,
            calcRating: calcRating
        }
    
   }

   var s = sessionEvaluator();
   s.addRating(4);
   s.addRating(5);
   s.addRating(4);
   s.addRating(5);
   console.log('rating is: ' +s.calcRating())

}