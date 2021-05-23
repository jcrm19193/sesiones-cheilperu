const Axios = require ('axios');
const Uuid = require ('node-uuid')
let cn = null
exports.handler = async (event) => {
    const r = await Axios.get("https://google.com");
    console.log(r)
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
