import { SDK, MantraChain } from "./sdk";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import {createProtobufRpcClient, GasPrice, QueryClient, SigningStargateClient} from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {QueryClientImpl} from "./codec/query";

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

        const [client, tendermintClient] = await Promise.all([
            SigningStargateClient.connectWithSigner(
                url,
                signer,
                {
                    registry,
                    gasPrice,
                }
            ),
            Tendermint34Client.connect(url)
        ])

        const queryClient = new QueryClient(tendermintClient)

        const rpcClient = createProtobufRpcClient(queryClient)
        const query = new QueryClientImpl(rpcClient)

        return new SDK(
            client,
            query,
            signer,
            chainSpecification.getAllUrs()
        );
    }
}
