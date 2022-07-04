import { DeliverTxResponse, SigningStargateClient } from "@cosmjs/stargate";
export default class MdbModule {
    private readonly client;
    urls: Map<string, string>;
    constructor(client: SigningStargateClient, urls: Map<string, string>);
    createCollection(address: string, name: string): Promise<DeliverTxResponse>;
}
