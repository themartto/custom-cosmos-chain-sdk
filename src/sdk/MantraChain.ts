import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes as defaultStargateTypes } from "@cosmjs/stargate/build/signingstargateclient";
import {
    MsgCreateNftCollection,
    MsgCreateNftCollectionMetadata,
    MsgMintNfts,
    MsgNftsMetadata,
    MsgNftMetadata,
    MsgMintNftsResponse,
    MsgBurnNfts
} from "../codec/tx";

export default class MantraChain {

    public registry: Registry;
    public urls: Map<string, string>;

    constructor() {
        this.registry = new Registry(defaultStargateTypes);
        this.urls = new Map<string, string>();
        this.registerMdbModule();
    }

    public getRegistry(): Registry {
        return this.registry;
    }

    public getAllUrs(): Map<string, string> {
        return this.urls;
    }

    registerMdbModule() {
        // CreateCollection
        this.registry.register(
            "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollection",
            MsgCreateNftCollection,
        );
        this.urls.set("MsgCreateNftCollection", "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollection");

        // CreateCollectionMetadata
        this.registry.register(
            "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollectionMetadata",
            MsgCreateNftCollectionMetadata,
        );
        this.urls.set("MsgCreateNftCollectionMetadata", "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollectionMetadata");

        // MintNfts
        this.registry.register(
            "/LimeChain.mantrachain.mdb.v1.MsgMintNfts",
            MsgMintNfts,
        );
        this.urls.set("MsgMintNfts", "/LimeChain.mantrachain.mdb.v1.MsgMintNfts");

        // NftsMetadata
        this.registry.register(
            "/LimeChain.mantrachain.mdb.v1.MsgNftsMetadata",
            MsgNftsMetadata,
        );
        this.urls.set("MsgNftsMetadata", "/LimeChain.mantrachain.mdb.v1.MsgNftsMetadata");

        // NftMetadata
        this.registry.register(
            "/LimeChain.mantrachain.mdb.v1.MsgNftMetadata",
            MsgNftMetadata,
        );
        this.urls.set("MsgNftMetadata", "/LimeChain.mantrachain.mdb.v1.MsgNftMetadata");

        // BurnNfts
        this.registry.register(
            "/LimeChain.mantrachain.mdb.v1.MsgBurnNfts",
            MsgBurnNfts,
        );
        this.urls.set("MsgBurnNfts", "/LimeChain.mantrachain.mdb.v1.MsgBurnNfts");
        //====
        // this.registry.register(
        //     "/LimeChain.mantrachain.mdb.v1.MsgMintNftsResponse",
        //     MsgMintNftsResponse,
        // );
        // this.urls.set("MsgMintNftsResponse", "/LimeChain.mantrachain.mdb.v1.MsgMintNftsResponse");
        //====
    }
}
