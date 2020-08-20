import * as protos from "./index"
protos

import {transcoding} from "@sisyphus.js/core";
import {AuthApi} from "./bybutter/incubator/account/v1/auth_api";

const rpc = transcoding("http://localhost:8080")
const client = new AuthApi(rpc);

(async function () {
    let result = await client.Login({
        identificationCredential: {
            identification: "hdh7amo"
        }
    })
    result
})()
