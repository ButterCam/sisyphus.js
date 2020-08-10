import {ILoginRequest, LoginRequest, LoginResponse} from "./bybutter/incubator/account/v1/auth_api";
import {IdentificationCredential, MobileCredential} from "./bybutter/incubator/account/v1/auth";
import {Timestamp} from "./google/protobuf/timestamp";


let test = new Timestamp()
test.seconds = 123456789
test.nanos = 123456789
test