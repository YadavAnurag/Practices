#!/usr/bin/env node

function printHelp() {
    console.log("2.js");
    console.log("usage: ");
    console.log("--help                 print this help");
    console.log("--file={NAME}          read the file of {NAME} and output it\n");
}



var args = require('minimist')(process.argv.slice(2));


if (args.help || !args.file) {
    printHelp();
    process.exit(1);
}

var hello = require('./helloworld2.js');
hello.say(args.file)
    .val((contents) => {
        console.log(contents.toString());
    })
    .or((err) => {

        console.error('Error: ' + err);
    });