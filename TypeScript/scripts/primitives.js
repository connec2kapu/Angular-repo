var demoPrimitivies;
(function (demoPrimitivies) {
    //any
    var data;
    var info;
    var doNothing = function (arg) {
        return arg;
    };
    //var x = donothing(5);
    //primitives
    var age = 21;
    var score = 21.4;
    var rating = 99.99;
    var hasData = true;
    var hasData2 = true; //infer to boolean
    var isBald = function () { return 'yes'; };
    var hasHair = !!isBald(); //negation of a truthy value boolean
    //alert (hasHair);
    //string array
    function getArrayLength(x) {
        var len = x.length;
        return len;
    }
    var names = ['john', 'kp'];
    var firstPerson = names[0];
    console.log(getArrayLength(names));
    //null
    var guitarSales = null;
    var animal = null;
    var orderDate = null;
    //undefined
    var quantity;
    var company;
    console.log("undefined examples");
    console.log(quantity);
    console.log(company);
})(demoPrimitivies || (demoPrimitivies = {}));
