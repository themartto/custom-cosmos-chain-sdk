import { SigningStargateClient } from "@cosmjs/stargate";
import { MdbModule } from "./modules";
export default class SDK {
    private readonly client;
    private readonly urls;
    mdbModule: MdbModule;
    constructor(client: SigningStargateClient, urls: Map<string, string>);
}
