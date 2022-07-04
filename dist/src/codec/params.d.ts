import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "LimeChain.mantrachain.mdb.v1";
/** Params defines the parameters for the module. */
export interface Params {
    validNftCollectionId: string;
    nftCollectionDefaultId: string;
    nftCollectionDefaultName: string;
    validNftCollectionMetadataSymbolMinLength: number;
    validNftCollectionMetadataSymbolMaxLength: number;
    validNftCollectionMetadataDescriptionMaxLength: number;
    validNftCollectionMetadataNameMaxLength: number;
    validNftCollectionMetadataImagesMaxCount: number;
    validNftCollectionMetadataImagesTypeMaxLength: number;
    validNftCollectionMetadataLinksMaxCount: number;
    validNftCollectionMetadataLinksTypeMaxLength: number;
    validNftCollectionMetadataOptionsMaxCount: number;
    validNftCollectionMetadataOptionsTypeMaxLength: number;
    validNftCollectionMetadataOptionsValueMaxLength: number;
    validNftCollectionMetadataOptionsSubValueMaxLength: number;
    validNftId: string;
    validNftMetadataMaxCount: number;
    validNftMetadataTitleMaxLength: number;
    validNftMetadataDescriptionMaxLength: number;
    validNftMetadataImagesMaxCount: number;
    validNftMetadataImagesTypeMaxLength: number;
    validNftMetadataLinksMaxCount: number;
    validNftMetadataLinksTypeMaxLength: number;
    validNftMetadataAttributesMaxCount: number;
    validNftMetadataAttributesTypeMaxLength: number;
    validNftMetadataAttributesValueMaxLength: number;
    validNftMetadataAttributesSubValueMaxLength: number;
    validBurnNftMaxCount: number;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
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
