const Axios = require ('axios');
exports.handler = async (event) => {
    const r = await Axios.get("https://apidev.samsung.com.pe/global/register");
    console.log(r)
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
