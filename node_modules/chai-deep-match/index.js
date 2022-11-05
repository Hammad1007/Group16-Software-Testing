// Node.js core modules
var querystring = require('querystring');

// Userland modules
var _ = require('lodash');
var pickDeep = require('lodash-pickdeep');
var keysDeep = require('deep-keys');


var toString = Object.prototype.toString;

// https://url.spec.whatwg.org/#url-miscellaneous
function getDefaultPortFromScheme( scheme ) {
  var port = null;
  if ( scheme === 'ftp') {
    port = 21;
  }
  else if ( scheme === 'gopher' ) {
    port = 70;
  }
  else if ( scheme === 'http' || scheme === 'ws' ) {
    port = 80;
  }
  else if ( scheme === 'https' || scheme === 'wss' ) {
    port = 443;
  }
  return port;
}

function isWhatwgUrl( val ) {
  return toString.call( val ) === '[object URL]';
}

function whatwgUrlToRecord( url ) {
  var schemeLower = url.protocol.slice( 0, -1 ).toLowerCase();
  return {
    scheme: schemeLower,
    username: url.username,
    password: url.password,
    hostname: url.hostname.toLowerCase(),
    port: url.port || getDefaultPortFromScheme( schemeLower ),
    path: url.pathname,
    query: querystring.parse( ( url.search || '' ).slice( 1 ) ),
    fragment: ( url.hash || '' ).slice( 1 )
  };
}

function whatwgUrlComparator( val1, val2 ) {
  var val1IsUrl = isWhatwgUrl( val1 );
  var val2IsUrl = isWhatwgUrl( val2 );
  if ( val1IsUrl || val2IsUrl ) {
    if ( !( val1IsUrl && val2IsUrl ) ) {
      return false;
    }

    if ( val1.href === val2.href ) {
      return true;
    }

    return _.isEqual(
      whatwgUrlToRecord( val1 ),
      whatwgUrlToRecord( val2 )
    );
  }
}

module.exports = function( chai, util ) {

  var Assertion = chai.Assertion;


  Assertion.overwriteMethod( 'match', function( _super ) {

    function assertDeepMatch( val, msg ) {

      var actual = this._obj;
      var expected = val;

      var isDeep = !!util.flag( this, 'deep' );

      if ( isDeep && typeof actual === 'object' && typeof expected === 'object' && ( expected == null || toString.call( expected ) !== '[object RegExp]' ) ) {
        if ( msg ) {
          util.flag( this, 'message', msg );
        }

        var matchResult = actual == null && expected == null;
        if ( matchResult === false ) {
          matchResult = whatwgUrlComparator( actual, expected );
        }
        // This particular `if` check is critical to correctly verifying URLs
        if ( matchResult === undefined ) {
          matchResult = _.isEqualWith( actual, expected, whatwgUrlComparator );

          if ( matchResult === false ) {
            matchResult = ( typeof actual === 'object' && typeof expected === 'object' && actual != null && expected != null && _.isMatchWith( actual, expected, whatwgUrlComparator ) );
          }
        }

        this.assert(
          matchResult,
          'expected #{this} to deeply match #{exp}',
          'expected #{this} to deeply not match #{exp}',
          expected,
          actual == null ? actual : pickDeep( actual, keysDeep( expected ) ),
          true
        );
      }
      else {
        _super.apply( this, arguments );
      }

    }


    return assertDeepMatch;

  });

};
