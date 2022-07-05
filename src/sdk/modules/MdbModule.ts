import { DeliverTxResponse, SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {
    MsgCreateNftCollection,
    MsgCreateNftCollectionMetadata,
    MsgMintNfts,
    MsgNftsMetadata
} from "../../codec/tx";
import { EncodeObject } from "@cosmjs/proto-signing";
import {Query, QueryGetNftCollectionResponse, QueryGetNftCollectionsResponse} from "../../codec/query";

export default class MdbModule {
    constructor(
        private readonly client: SigningStargateClient,
        private readonly query: Query,
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
            value: MsgCreateNftCollection.fromJSON({
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

        const msg: MsgMintNfts = MsgMintNfts.fromJSON({
            collectionCreator: creator.address,
            collectionId,
            nfts,
            pubKeyHex: `F${pubKeyBytes}`,
            pubKeyType: creator.algo,
            creator: creator.address
        });

        const message: EncodeObject = {
            typeUrl: this.urls.get("MsgMintNfts")!,
            value: msg
        };

        return await this.client.signAndBroadcast(creator.address, [message], "auto");
    }

    public async getNftCollection(creator: string, id: string): Promise<QueryGetNftCollectionResponse> {
        return this.query.NftCollection({ creator, id })
    }

    public async getNftCollections(creator: string): Promise<QueryGetNftCollectionsResponse> {
        return this.query.NftCollections({ creator })
    }
}
