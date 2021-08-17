// A handler which returns a picture of a cat saying a message.
const handler = async (req) => {
    if (req.message == "/start") {
        operand.respond("Welcome! You can say anything, and I'll return it as a caption to a cute cat picture :)");
        return;
    }
    operand.respond(`https://cataas.com/cat/says/${encodeURIComponent(req.message)}`);
    operand.log("Handled incoming cat request.");
}