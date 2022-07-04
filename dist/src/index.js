"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDKFactory = void 0;
const sdk_1 = require("./sdk");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const math_1 = require("@cosmjs/math");
const addressesPrefix = "cosmos";
class SDKFactory {
    static async init(url, mnemonic) {
        const chainSpecification = new sdk_1.MantraChain();
        const signer = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(mnemonic, { prefix: addressesPrefix });
        const client = await stargate_1.SigningStargateClient.connectWithSigner(url, signer, {
            registry: chainSpecification.getRegistry(),
            gasPrice: new stargate_1.GasPrice(math_1.Decimal.fromUserInput("0", 2), "stake"),
        });
        return new sdk_1.SDK(client, chainSpecification.getAllUrs());
    }
}
exports.SDKFactory = SDKFactory;
//# sourceMappingURL=index.js.map