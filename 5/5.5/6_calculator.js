'use strict';

function Calculator() {
    this.methods_name=[];
    this.methods=[];
    this.addMethod = function(str,f) {
        if (!~this.methods_name.indexOf(str)) {
            this.methods_name.push(str);
            this.methods.push(f);
        }
    };
    this.calculate = function(str) {
        let args = str.split(' ');
        let index = this.methods_name.indexOf(args[1]);
        if (~index) {
            return args.length == 3 && isFinite(args[0]) && isFinite(args[2]) && this.methods[index](+args[0],+args[2]);
        }
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8
console.log(powerCalc.calculate("10 / 2")); // 5