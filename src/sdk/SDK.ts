import {DeliverTxResponse, SigningStargateClient} from "@cosmjs/stargate";
import {MsgCreateNftCollection, MsgCreateNftCollectionMetadata} from "../codec/tx";
import {MdbModule} from "./modules";

export default class SDK {
    mdbModule: MdbModule;

    constructor(
        private readonly client: SigningStargateClient,
        private readonly urls: Map<string, string>
    ) {
        this.mdbModule = new MdbModule(this.client, this.urls);
    }
}
