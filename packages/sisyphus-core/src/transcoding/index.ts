
declare namespace axios{

}

try {
    require("axios")
    module.exports.axios = require("./axios").transcoding
}catch (e) {
}