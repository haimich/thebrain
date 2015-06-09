var stat = require( 'node-static' ),
    port = 8080,
    http = require( 'http' );

// config
var file = new stat.Server( './static', {
    cache: 3600,
    gzip: true
} );

// serve
http.createServer( function ( request, response ) {
    request.addListener( 'end', function () {
        file.serve( request, response );
    } ).resume();
} ).listen( port );