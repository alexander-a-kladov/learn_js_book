'use strict'

if (-1 || 0) console.log( 'first' ); // -1
if (-1 && 0) console.log( 'second' ); // 0
if (null || -1 && 1) console.log( 'third' ); // 1