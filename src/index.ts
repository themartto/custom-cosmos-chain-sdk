import { SDK, MantraChain } from "./sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";

const addressesPrefix = "cosmos";

export class SDKFactory {
    static async init(url: string, mnemonic: string): Promise<SDK> {

        const chainSpecification = new MantraChain();

        const signer = await DirectSecp256k1HdWallet.fromMnemonic(
            mnemonic,
            { prefix: addressesPrefix }
        );

        const registry = chainSpecification.getRegistry()
        const gasPrice = new GasPrice(Decimal.fromUserInput("0", 2), "stake")

        const client = await SigningStargateClient.connectWithSigner(
            url,
            signer,
            {
                registry,
                gasPrice,
            }
        )

        return new SDK(
            client,
            signer,
            chainSpecification.getAllUrs()
        );
    }
}
