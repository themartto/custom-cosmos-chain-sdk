import {DeliverTxResponse, SigningStargateClient} from "@cosmjs/stargate";
import {MsgCreateNftCollection, MsgCreateNftCollectionMetadata} from "../../codec/tx";
import {EncodeObject} from "@cosmjs/proto-signing";

export default class MdbModule {
    constructor(
        private readonly client: SigningStargateClient,
        public urls: Map<string, string>
    ) {}

    public async createCollection(address: string, name: string): Promise<DeliverTxResponse> {
        // @ts-ignore
        const message: EncodeObject = {
            typeUrl: this.urls.get("MsgCreateNftCollection"),
            value: MsgCreateNftCollection.fromPartial({
                pubKeyType: "",
                pubKeyHex: "",
                collection:{
                    id: "id1",
                    name: "test1",
                    description: "test1",
                    category: "music",
                    url: "http://xxx.yyy",
                    images: [{
                        type: "x",
                        url: "http://xxx.zzz"
                    }]
                } as MsgCreateNftCollectionMetadata,
                creator: "cosmos16wtg70d2ulvaeenng6x7nkk2spnfhm9u0vweh0",
            })
        };

        const fee = {
            amount: [
                {
                    denom: "stake", // Use the appropriate fee denom for your chain
                    amount: "10",
                },
            ],
            gas: "auto",
        };

        return await this.client.signAndBroadcast(address, [message], "auto");
    }
}
