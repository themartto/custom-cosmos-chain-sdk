import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes as defaultStargateTypes } from "@cosmjs/stargate/build/signingstargateclient";
import { MsgCreateNftCollection, MsgCreateNftCollectionMetadata } from "../codec/tx";

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
        this.registry.register(
            "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollection",
            MsgCreateNftCollection,
        );
        this.urls.set("MsgCreateNftCollection", "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollection");

        this.registry.register(
            "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollectionMetadata",
            MsgCreateNftCollectionMetadata,
        );
        this.urls.set("MsgCreateNftCollectionMetadata", "/LimeChain.mantrachain.mdb.v1.MsgCreateNftCollectionMetadata");
    }
}
