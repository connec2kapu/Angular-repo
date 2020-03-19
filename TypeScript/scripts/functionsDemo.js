var functionsDemo;
(function (functionsDemo) {
    var squareItSimple = function (h, w) { return h * w; };
    //function definiation 
    var helloWorld;
    helloWorld = function (name1) {
        console.log('name is: ' + (name1 || ' not defined'));
    };
    helloWorld('Prasanna kapu');
    helloWorld();
    var squareIt;
    var rectA = { h: 5 };
    var rectB = { h: 10, w: 5 };
    squareIt = function (rect) {
        if (rect.w !== undefined)
            return rect.h * rect.w;
        return rect.h;
    };
    console.log("square of a rectangle A: " + squareIt(rectA));
    console.log("square of a rectangle B: " + squareIt(rectB));
})(functionsDemo || (functionsDemo = {}));
