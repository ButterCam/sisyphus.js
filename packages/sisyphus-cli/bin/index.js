#!/usr/bin/env node
var path = require("path"),
    cli  = require("../lib/index.js");
cli.main(process.argv).then(ret => {
    if (typeof ret === 'number')
        process.exit(ret);
}).catch(err => {
    console.error(err)
    process.exit(1);
})