import * as test from "./"
import {AuthApi} from "./bybutter/incubator/account/v1";
import {transcoding} from "@sisyphus.js/core/lib/transcoding";

const rpc = transcoding("http://localhost:8080", test)
const client = new AuthApi(rpc);

(async function() {
    let result = await client.Login({
        identificationCredential: {
            identification : "hdh7amo"
        }
    })
    result
})()