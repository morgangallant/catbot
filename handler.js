// A handler which returns a picture of a cat saying a message.
const handler = async (req) => {
    operand.respond(`https://cataas.com/cat/says/${encodeURIComponent(req.message)}`);
}