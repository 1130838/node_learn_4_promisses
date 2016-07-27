var utils = require('./utils.js');


console.log('lets learn how to do these fucking promises...');
console.log('------------------------------------------------------');

var Promise = require('bluebird');

function DoSomethingFirst() {
    console.log('doing something first...');
}


function firstFunction() {
    return new Promise(function (resolve) {
        console.log('Hi! i am first function ');
        console.log('waiting till first function is finish....');
        setTimeout(function () {
            console.log("This should be first line although it waits 5 seconds! 4000");
            resolve();
        }, 5000);
    });
}

function secondFunctionAfterFirstFunction() {
    return new Promise(function (resolve) {
        console.log('Hi! i am second function ');
        setTimeout(function () {
            console.log("This should be last line although it waits just 2 seconds! 2000");
            resolve();
        }, 2000);
    });
}


// usage :
// -------
Promise.resolve(DoSomethingFirst()) // some starting promise or method 
    .then(firstFunction)
    .then(secondFunctionAfterFirstFunction)
    .error(function (e) {
        console.log("Error handler " + e)
    })
    .catch(function (e) {
        console.log("Catch handler " + e)
    });


// or usage like this :

/*firstFunction() // no need to wrap it in Promise.resolve() (but no harm either)
 .then(secondFunctionAfterFirstFunction);*/


// with no promises
/*
firstFunction();
secondFunctionAfterFirstFunction();*/
