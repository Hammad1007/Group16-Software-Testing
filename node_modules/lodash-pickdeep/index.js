// Userland modules
var _ = require('lodash');

//var minVersion = 3.7;
//if ( parseFloat( _.VERSION ) < minVersion ) {
//  throw new Error( '"lodash-pick-deep" module cannot be used with lodash@<' + minVersion + ' but you are using lodash@' + _.VERSION );
//}


function pickDeep( obj ) {
  var keys = _.flatten( _.drop( _.toArray( arguments ), 1 ) );
  var copy = {};
  _.forEach( keys, function( key ) {
    if ( _.has( obj, key ) ) {
      var val = _.get( obj, key );
      _.set( copy, key, val );
    }
  });
  return copy;
}

module.exports = pickDeep;
