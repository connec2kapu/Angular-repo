module functionsDemo {

    var squareItSimple = (h:number, w:number) => h*w;
    
    //function definiation 
    var helloWorld: (name?:string) => void;

    helloWorld = function (name1){
        console.log('name is: '+ (name1 || ' not defined'));
    }

    helloWorld('Prasanna kapu');
    helloWorld();

   var squareIt: (rect: {h:number; w?:number}) => number;

   var rectA = {h:5};
   var rectB = {h:10, w:5};

   squareIt = function (rect) {

        if (rect.w !== undefined)
            return rect.h * rect.w;
        
        return rect.h;
   }

   console.log("square of a rectangle A: " + squareIt(rectA));
   console.log("square of a rectangle B: " + squareIt(rectB));


}