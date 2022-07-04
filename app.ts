import { SDKFactory } from "./src";

const start = async () => {

  try {
    const sdk = await SDKFactory.init(
      "http://127.0.0.1:26657",
      "skin faculty north relief man bleak gas announce erase arrest snap sadness minute whale obscure angle brain future sting ready insect broom magic parrot"
    )

    const a = await sdk.mdbModule.createCollection({
      id: "id15",
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
  } catch (e) {
    console.error(e)
  }
}

start()
