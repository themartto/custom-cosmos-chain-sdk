import { Params } from "./params";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "LimeChain.mantrachain.mdb.v1";
/** GenesisState defines the mdb module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    params: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            validNftCollectionId?: string | undefined;
            nftCollectionDefaultId?: string | undefined;
            nftCollectionDefaultName?: string | undefined;
            validNftCollectionMetadataSymbolMinLength?: number | undefined;
            validNftCollectionMetadataSymbolMaxLength?: number | undefined;
            validNftCollectionMetadataDescriptionMaxLength?: number | undefined;
            validNftCollectionMetadataNameMaxLength?: number | undefined;
            validNftCollectionMetadataImagesMaxCount?: number | undefined;
            validNftCollectionMetadataImagesTypeMaxLength?: number | undefined;
            validNftCollectionMetadataLinksMaxCount?: number | undefined;
            validNftCollectionMetadataLinksTypeMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsMaxCount?: number | undefined;
            validNftCollectionMetadataOptionsTypeMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsValueMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsSubValueMaxLength?: number | undefined;
            validNftId?: string | undefined;
            validNftMetadataMaxCount?: number | undefined;
            validNftMetadataTitleMaxLength?: number | undefined;
            validNftMetadataDescriptionMaxLength?: number | undefined;
            validNftMetadataImagesMaxCount?: number | undefined;
            validNftMetadataImagesTypeMaxLength?: number | undefined;
            validNftMetadataLinksMaxCount?: number | undefined;
            validNftMetadataLinksTypeMaxLength?: number | undefined;
            validNftMetadataAttributesMaxCount?: number | undefined;
            validNftMetadataAttributesTypeMaxLength?: number | undefined;
            validNftMetadataAttributesValueMaxLength?: number | undefined;
            validNftMetadataAttributesSubValueMaxLength?: number | undefined;
            validBurnNftMaxCount?: number | undefined;
        } | undefined;
    } & {
        params?: ({
            validNftCollectionId?: string | undefined;
            nftCollectionDefaultId?: string | undefined;
            nftCollectionDefaultName?: string | undefined;
            validNftCollectionMetadataSymbolMinLength?: number | undefined;
            validNftCollectionMetadataSymbolMaxLength?: number | undefined;
            validNftCollectionMetadataDescriptionMaxLength?: number | undefined;
            validNftCollectionMetadataNameMaxLength?: number | undefined;
            validNftCollectionMetadataImagesMaxCount?: number | undefined;
            validNftCollectionMetadataImagesTypeMaxLength?: number | undefined;
            validNftCollectionMetadataLinksMaxCount?: number | undefined;
            validNftCollectionMetadataLinksTypeMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsMaxCount?: number | undefined;
            validNftCollectionMetadataOptionsTypeMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsValueMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsSubValueMaxLength?: number | undefined;
            validNftId?: string | undefined;
            validNftMetadataMaxCount?: number | undefined;
            validNftMetadataTitleMaxLength?: number | undefined;
            validNftMetadataDescriptionMaxLength?: number | undefined;
            validNftMetadataImagesMaxCount?: number | undefined;
            validNftMetadataImagesTypeMaxLength?: number | undefined;
            validNftMetadataLinksMaxCount?: number | undefined;
            validNftMetadataLinksTypeMaxLength?: number | undefined;
            validNftMetadataAttributesMaxCount?: number | undefined;
            validNftMetadataAttributesTypeMaxLength?: number | undefined;
            validNftMetadataAttributesValueMaxLength?: number | undefined;
            validNftMetadataAttributesSubValueMaxLength?: number | undefined;
            validBurnNftMaxCount?: number | undefined;
        } & {
            validNftCollectionId?: string | undefined;
            nftCollectionDefaultId?: string | undefined;
            nftCollectionDefaultName?: string | undefined;
            validNftCollectionMetadataSymbolMinLength?: number | undefined;
            validNftCollectionMetadataSymbolMaxLength?: number | undefined;
            validNftCollectionMetadataDescriptionMaxLength?: number | undefined;
            validNftCollectionMetadataNameMaxLength?: number | undefined;
            validNftCollectionMetadataImagesMaxCount?: number | undefined;
            validNftCollectionMetadataImagesTypeMaxLength?: number | undefined;
            validNftCollectionMetadataLinksMaxCount?: number | undefined;
            validNftCollectionMetadataLinksTypeMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsMaxCount?: number | undefined;
            validNftCollectionMetadataOptionsTypeMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsValueMaxLength?: number | undefined;
            validNftCollectionMetadataOptionsSubValueMaxLength?: number | undefined;
            validNftId?: string | undefined;
            validNftMetadataMaxCount?: number | undefined;
            validNftMetadataTitleMaxLength?: number | undefined;
            validNftMetadataDescriptionMaxLength?: number | undefined;
            validNftMetadataImagesMaxCount?: number | undefined;
            validNftMetadataImagesTypeMaxLength?: number | undefined;
            validNftMetadataLinksMaxCount?: number | undefined;
            validNftMetadataLinksTypeMaxLength?: number | undefined;
            validNftMetadataAttributesMaxCount?: number | undefined;
            validNftMetadataAttributesTypeMaxLength?: number | undefined;
            validNftMetadataAttributesValueMaxLength?: number | undefined;
            validNftMetadataAttributesSubValueMaxLength?: number | undefined;
            validBurnNftMaxCount?: number | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
