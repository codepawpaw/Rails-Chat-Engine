// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require websocket_rails/main

/*console.log("Application.js");


var task = {
  name: 'Start taking advantage of WebSockets',
  completed: true
}

var dispatcher = new WebSocketRails('localhost:3000/websocket');

dispatcher.trigger('tasks.create', task);
console.log("Dispatch ", dispatcher);

var success = function(task) { console.log("Created: " + task.name); }

var failure = function(task) {
  console.log("Failed to create Product: " + product.name)
}

dispatcher.trigger('products.create', success, failure);

var success = function(task) { console.log("Created: " + task.name); }

var failure = function(task) {
  console.log("Failed to create Product: " + product.name)
}

dispatcher.trigger('products.create', success, failure);

var failureCallback = function(task) {
  console.log( task.name );
  console.log( task.errors );
  console.log( "You have " + task.errors.length + " errors." );
}*/
