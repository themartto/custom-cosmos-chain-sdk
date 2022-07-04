import { DeliverTxResponse, SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { MsgCreateNftCollection, MsgCreateNftCollectionMetadata } from "../../codec/tx";
import { EncodeObject } from "@cosmjs/proto-signing";

export default class MdbModule {
    constructor(
        private readonly client: SigningStargateClient,
        private readonly wallet: DirectSecp256k1HdWallet,
        public urls: Map<string, string>
    ) { }

    public async createCollection(meta: MsgCreateNftCollectionMetadata): Promise<DeliverTxResponse> {
        const [creator] = await this.wallet.getAccounts();

        const pubKeyBytes = Buffer.from(creator.pubkey).toString('hex');

        const message: EncodeObject = {
            typeUrl: this.urls.get("MsgCreateNftCollection")!,
            value: MsgCreateNftCollection.fromPartial({
                pubKeyType: creator.algo,
                pubKeyHex: `F${pubKeyBytes}`,
                collection: meta,
                creator: creator.address,
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

        return await this.client.signAndBroadcast(creator.address, [message], "auto");
    }
}
