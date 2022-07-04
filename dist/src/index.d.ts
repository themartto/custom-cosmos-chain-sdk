import { SDK } from "./sdk";
export declare class SDKFactory {
    static init(url: string, mnemonic: string): Promise<SDK>;
}
