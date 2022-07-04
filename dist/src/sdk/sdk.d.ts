import { DeliverTxResponse, SigningStargateClient } from "@cosmjs/stargate";
export default class SDK {
    private readonly client;
    constructor(client: SigningStargateClient);
    createCollection(address: string, name: string): Promise<DeliverTxResponse>;
}
