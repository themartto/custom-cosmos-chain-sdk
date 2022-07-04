import {SDKFactory} from "./src";

SDKFactory.init(
    "localhost:26657",
    "lobster session indicate between funny inherit sentence old ready party basket brand calm focus burger element upset word unfold tissue task romance artwork easily"
).then(((sdk) => {
    const a = sdk.mdbModule.createCollection(
        "cosmos16wtg70d2ulvaeenng6x7nkk2spnfhm9u0vweh0",
        "test1"
    );
}));
