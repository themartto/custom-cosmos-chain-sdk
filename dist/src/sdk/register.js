"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proto_signing_1 = require("@cosmjs/proto-signing");
const signingstargateclient_1 = require("@cosmjs/stargate/build/signingstargateclient");
const tx_1 = require("../codec/tx");
class Register {
    static get() {
        const myRegistry = new proto_signing_1.Registry(signingstargateclient_1.defaultRegistryTypes);
        myRegistry.register("/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollection", tx_1.MsgCreateNftCollection);
        myRegistry.register("/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollectionMetadata", tx_1.MsgCreateNftCollectionMetadata);
        return myRegistry;
    }
}
exports.default = Register;
//# sourceMappingURL=register.js.map