import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { MdbModule } from "./modules";
import {Query} from "../codec/query";

export default class SDK {
    mdbModule: MdbModule;

    constructor(
        private readonly client: SigningStargateClient,
        private readonly query: Query,
        private readonly wallet: DirectSecp256k1HdWallet,
        private readonly urls: Map<string, string>
    ) {
        this.mdbModule = new MdbModule(this.client, this.query, this.urls);
    }
}
