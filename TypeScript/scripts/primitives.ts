module demoPrimitivies {

    //any

    var data: any;
    var info;
    var doNothing: any = function (arg){
        return arg;
    }

    //var x = donothing(5);

    //primitives
    var age: number = 21;
    var score: number = 21.4;
    var rating = 99.99;

    var hasData: boolean = true;
    var hasData2 = true; //infer to boolean
    var isBald = function() { return 'yes';}
    var hasHair = !!isBald(); //negation of a truthy value boolean
    //alert (hasHair);

    //string array
    function getArrayLength(x: string[]){
        var len = x.length;
        return len;
    }
    var names: string[] = ['john','kp'];
    var firstPerson: string = names[0];
    console.log(getArrayLength(names));

    //null
    var guitarSales: any = null;
    var animal = null;
    var orderDate: Date = null;

    //undefined
    var quantity: number;
    var company: undefined;
    console.log ("undefined examples");
    console.log(quantity);
    console.log(company);
}