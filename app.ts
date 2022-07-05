import {SDKFactory} from "./src";
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {MsgNftMetadata, MsgNftsMetadata} from "./src/codec/tx";
import {NftAttribute, NftImage, NftLink} from "./src/codec/nft";

const start = async () => {

    try {
        const mnemonic = "lobster session indicate between funny inherit sentence old ready party basket brand calm focus burger element upset word unfold tissue task romance artwork easily";

        const sdk = await SDKFactory.init(
            "http://127.0.0.1:26657",
            mnemonic
        )
        const signer = await DirectSecp256k1HdWallet.fromMnemonic(
            mnemonic,
            {prefix: "cosmos"}
        );

        const nftLink: NftLink = {type: "http", url: "xxx.xxx"};
        const nftImage: NftImage = {type: "http", url: "xxx.xxx"};
        const nftAttribute: NftAttribute = {
            type: "string",
            value: "bob's nft",
            subValue: "bob's nft"
        };
        const nftMetadata: MsgNftMetadata = {
            id: "0",
            title: "bob",
            images: [nftImage],
            url: "http://xxx.xxx",
            description: "bob's nft",
            links: [nftLink],
            attributes: [nftAttribute],
            resellable: true,
        };

        const nftss: MsgNftsMetadata = {
            nfts: [nftMetadata],
        };

        console.log(nftss.nfts.length)

        const a = await sdk.mdbModule.mintNfts(
            signer,
            "",
            nftss
        )

        console.log(a.transactionHash)
    } catch (e) {
        console.error(e)
    }
}

start()
