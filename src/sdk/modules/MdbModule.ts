import { DeliverTxResponse, SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {
    MsgCreateNftCollection,
    MsgCreateNftCollectionMetadata,
    MsgMintNfts,
    MsgNftsMetadata
} from "../../codec/tx";
import { EncodeObject } from "@cosmjs/proto-signing";

// this should be more global
const fee = {
    amount: [
        {
            denom: "stake", // Use the appropriate fee denom for your chain
            amount: "10",
        },
    ],
    gas: "auto",
};

export default class MdbModule {
    constructor(
        private readonly client: SigningStargateClient,
        public urls: Map<string, string>
    ) { }

    public async createNftCollection(
        wallet: DirectSecp256k1HdWallet,
        meta: MsgCreateNftCollectionMetadata
    ): Promise<DeliverTxResponse> {
        const [creator] = await wallet.getAccounts();

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

        return await this.client.signAndBroadcast(creator.address, [message], "auto");
    }

    public async mintNfts(
        wallet: DirectSecp256k1HdWallet,
        collectionId: string,
        nfts: MsgNftsMetadata,
    ): Promise<DeliverTxResponse> {
        const [creator] = await wallet.getAccounts();

        const pubKeyBytes = Buffer.from(creator.pubkey).toString('hex');
        console.log(nfts);
        const message: EncodeObject = {
            typeUrl: this.urls.get("MsgMintNfts")!,
            value: MsgMintNfts.fromPartial({
                collectionCreator: creator.address,
                collectionId,
                nfts,
                pubKeyHex: `F${pubKeyBytes}`,
                pubKeyType: creator.algo,
                creator: creator.address
            })
        };

        return await this.client.signAndBroadcast(creator.address, [message], "auto");
    }
}
