"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tx_1 = require("../codec/tx");
class SDK {
    constructor(client) {
        this.client = client;
    }
    async createCollection(address, name) {
        // @ts-ignore
        let nftCollectionMetadata = {
            typeUrl: "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollectionMetadata",
            value: tx_1.MsgCreateNftCollectionMetadata.fromPartial({
                id: "id1",
                name: "test1",
                description: "test1",
                category: "music",
                url: "http://xxx.yyy",
                images: [{
                        type: "x",
                        url: "http://xxx.zzz"
                    }]
            })
        };
        // @ts-ignore
        const message = {
            typeUrl: "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollection",
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
                creator: "cosmos1eqagknhggq2nfauprnlmekuwpj8gwgufful670"
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
exports.default = SDK;
//# sourceMappingURL=sdk.js.map