import { Registry } from "@cosmjs/proto-signing";
export default class MantraChain {
    registry: Registry;
    urls: Map<string, string>;
    constructor();
    getRegistry(): Registry;
    getAllUrs(): Map<string, string>;
    registerMdbModule(): void;
}
