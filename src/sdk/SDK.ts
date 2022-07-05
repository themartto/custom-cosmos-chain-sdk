import { SigningStargateClient } from "@cosmjs/stargate";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { MdbModule } from "./modules";

export default class SDK {
    mdbModule: MdbModule;

    constructor(
        private readonly client: SigningStargateClient,
        private readonly wallet: DirectSecp256k1HdWallet,
        private readonly urls: Map<string, string>
    ) {
        this.mdbModule = new MdbModule(this.client, this.urls);
    }
}
