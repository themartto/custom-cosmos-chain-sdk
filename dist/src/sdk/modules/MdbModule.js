"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tx_1 = require("../../codec/tx");
class MdbModule {
    constructor(client, urls) {
        this.client = client;
        this.urls = urls;
    }
    async createCollection(address, name) {
        // @ts-ignore
        const message = {
            typeUrl: this.urls.get("MsgCreateNftCollection"),
            value: tx_1.MsgCreateNftCollection.fromPartial({
                pubKeyType: "",
                pubKeyHex: "",
                collection: {
                    id: "id1",
                    name: "test1",
                    description: "test1",
                    category: "music",
                    url: "http://xxx.yyy",
                    images: [{
                            type: "x",
                            url: "http://xxx.zzz"
                        }]
                },
                creator: "cosmos16wtg70d2ulvaeenng6x7nkk2spnfhm9u0vweh0",
            })
        };
        const fee = {
            amount: [
                {
                    denom: "stake",
                    amount: "10",
                },
            ],
            gas: "auto",
        };
        return await this.client.signAndBroadcast(address, [message], "auto");
    }
}
exports.default = MdbModule;
//# sourceMappingURL=MdbModule.js.map