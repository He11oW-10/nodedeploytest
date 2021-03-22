var test=require('https')
var test2=require('request')
var str=require('@azure/storage-blob')

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This is HTTP trigger from github deploy, Version n1!"
        : "http trigger Version n1 need parameter";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}