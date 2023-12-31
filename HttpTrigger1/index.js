module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const data = req.query.data;
    const responseMessage = name
        ? "Hello, " + name + "! My first function!"
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.bindings.outputBlob = context.bindings.inputBlob
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
