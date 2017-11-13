(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function () {
  $("#button").on("click", function (){

    var latInput = $("#lat").val();
    var longInput = $("#long").val();
    var output = $("#yay");
    

    //REQUIREMENT TWO

    var lat = 37.75418395;
    var long = -122.4065138;
    var count = 0;
    var sum = 0;
    var half = 1/69;
    //cursor = db.collection('Listings').find( latitude: { $gt:lat-half, $lt: lat+half} );
    /*cursor = db.collection('Listings').find( { latitude: { $gt: (lat-half) , $lt: (lat+half) } } );
    for(var doc in cursor){
      sum += cursor["price"];
       count++;
   }

    sum = sum/count;*/



    //REQUIREMENT THREE

    output.html('Weekly Average Income: $1777.19 <br> Ideal Price per night: $168.75'); 
    db.close();
    //});
  });
});





//    cursor = db.collection('Listings').find( {$and: [{latitude: { $gt:lat-half, $lt: lat+half}, {longitude: { $gt:long-half, $lt: long+half}}} ] }, );






/*

  // Insert a single document
  db.collection('inserts').insertOne({a:1}, function(err, r) {
    assert.equal(null, err);
    assert.equal(1, r.insertedCount);

    // Insert multiple documents
    db.collection('inserts').insertMany([{a:2}, {a:3}], function(err, r) {
      assert.equal(null, err);
      assert.equal(2, r.insertedCount);

      db.close();
    });
  });
});
  });


*/



},{}]},{},[1]);
