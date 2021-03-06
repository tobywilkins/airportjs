'use strict';

function Plane() {
  this._airport = null;
}

Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
  this._airport = airport;
}

Plane.prototype.takeOff = function(){
  this._airport.clearForTakeOff(this);
  this._airport = null;
}
