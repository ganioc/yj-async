'use strict';

var Async = require('./yjasync.js');

var arr= [

    function(cb){
	console.log('in element one');
	setTimeout(function(){
	    console.log("element 1\n");
	    cb(null, "1");
	},1000);
    },

    function(cb){
	console.log('in element two');	
	setTimeout(function(){
	    console.log("element 2\n");
	    cb(null, "2");
	},1000);
    },
    function(cb){
	console.log('in element 3');	
	setTimeout(function(){
	    console.log("element 3\n");
	    cb(new Error("Wrong process"), "3");
	},1000);
    },
    function(cb){
	console.log('in element 4');	
	setTimeout(function(){
	    console.log("element 4\n");
	    cb(null, "4");
	},1000);
    }
    
];

// Async.series(arr, function(err, data){
//     if(err)
// 	console.log(err.message);
//     else
// 	console.log(data);

// });


var p = new Async.promise();

p.when(function myFirst(cb){
    setTimeout(function(){
	console.log('In when');
	cb(null, 2);
    }, 1000);
}).then(
    function(cb){
	setTimeout(function(){
	    console.log('In 1st then: Y');
	    cb(new Error('1st Error'),3);
	},1000);

    },
    function(cb){
	setTimeout(function(){
	    console.log('In 1st then: N');
	    cb(null,2);
	},1000);

    })
    .then(
	function(cb){
	setTimeout(function(){
	    console.log('In 2nd then: Y');
	    cb(null,3);
	},1000);
	    
	},
	function(cb){
	    setTimeout(function(){
		console.log('In 2nd then: N');
		cb(null,3);
	    },1000);
	    
	}
    );





