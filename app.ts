import {SDKFactory} from "./src";
import {DirectSecp256k1HdWallet} from "@cosmjs/proto-signing";
import {MsgNftMetadata, MsgNftsMetadata} from "./src/codec/tx";
import {NftAttribute, NftImage, NftLink} from "./src/codec/nft";

const start = async () => {

    try {
        const mnemonic = "egg idle one route enforce core essence badge report fantasy finish add ride access basket hotel nasty shield noodle toward dance trust weird frog";

        const sdk = await SDKFactory.init(
            "http://127.0.0.1:26657",
            mnemonic
        )
        const signer = await DirectSecp256k1HdWallet.fromMnemonic(
            mnemonic,
            {prefix: "cosmos"}
        );

        const ID = "id1";

        const a = await sdk.mdbModule.createNftCollection(
            signer,
            {
                id: ID,
                name: "test1",
                description: "test1",
                category: "music",
                url: "http://xxx.yyy",
                images: [{
                    type: "x",
                    url: "http://xxx.zzz"
                }]
            })

        console.log(a.transactionHash)
        const nftLink: NftLink = {type: "http", url: "http://xxx.xxx"};
        const nftImage: NftImage = {type: "http", url: "http://xxx.xxx"};
        const nftAttribute: NftAttribute = {
            type: "string",
            value: "bob's nft",
            subValue: "bob's nft"
        };

        const nftMetadata: MsgNftMetadata = {
            id: ID,
            title: "bob",
            images: [nftImage],
            url: "http://xxx.xxx",
            description: "bob's nft",
            links: [nftLink],
            attributes: [nftAttribute],
            resellable: true,
        };

        const nftss: MsgNftsMetadata = {
            nfts: [nftMetadata]
        };

        console.log(nftss.nfts.length)

        const b = await sdk.mdbModule.mintNfts(
            signer,
            ID,
            nftss
        )

        console.log(b.transactionHash)
        const [acc] = await signer.getAccounts();
        const c = await sdk.mdbModule.getNftCollection(acc.address, "id14")
        console.log(c)


        const d = await sdk.mdbModule.getNftCollections(acc.address);
        console.log(d)
    } catch (e) {
        console.error(e)
    }
}

start()
