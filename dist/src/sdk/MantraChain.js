"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proto_signing_1 = require("@cosmjs/proto-signing");
const signingstargateclient_1 = require("@cosmjs/stargate/build/signingstargateclient");
const tx_1 = require("../codec/tx");
class MantraChain {
    constructor() {
        this.registry = new proto_signing_1.Registry(signingstargateclient_1.defaultRegistryTypes);
        this.urls = new Map();
        this.registerMdbModule();
    }
    getRegistry() {
        return this.registry;
    }
    getAllUrs() {
        return this.urls;
    }
    registerMdbModule() {
        this.registry.register("/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollection", tx_1.MsgCreateNftCollection);
        this.urls.set("MsgCreateNftCollection", "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollection");
        this.registry.register("/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollectionMetadata", tx_1.MsgCreateNftCollectionMetadata);
        this.urls.set("MsgCreateNftCollectionMetadata", "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollectionMetadata");
    }
}
exports.default = MantraChain;
//# sourceMappingURL=MantraChain.js.map