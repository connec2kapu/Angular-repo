var interfaceDemo;
(function (interfaceDemo) {
    var squareItBasic = function (num) { return num * num; };
    var squareIt;
    //var squareIt: (rect: {h:number; w?:number}) => number;
    var rectA = { h: 5 };
    var rectB = { h: 10, w: 5 };
    squareIt = function (rect) {
        if (rect.w !== undefined)
            return rect.h * rect.w;
        return rect.h;
    };
    console.log("square of a rectangle A: " + squareIt(rectA));
    console.log("square of a rectangle B: " + squareIt(rectB));
    var p = {
        name: 'Prasanna',
        age: 40,
        kids: 2,
        calcPets: function () {
            return this.kids * 2;
        },
        makeYonger: function (years) {
            this.age -= years;
        },
        greet: function (message) {
            return message + ' ' + this.name;
        }
    };
    var pets = p.calcPets();
    console.log('number of pets: ' + pets);
    p.makeYonger(10);
    console.log('new Age: ' + p.age);
    var msg = p.greet('Welcome to TypeSCript');
    console.log(msg);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            ratings.push(rating);
        };
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) {
                sum += score;
            });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(4);
    s.addRating(5);
    console.log(s.calcRating());
})(interfaceDemo || (interfaceDemo = {}));
