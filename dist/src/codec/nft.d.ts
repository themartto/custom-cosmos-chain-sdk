import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "LimeChain.mantrachain.mdb.v1";
export interface Nft {
    index: Uint8Array;
    title: string;
    did: string;
    images: NftImage[];
    url: string;
    description: string;
    links: NftLink[];
    attributes: NftAttribute[];
    resellable: boolean;
    creator: Uint8Array;
    collectionId: string;
    collectionIndex: Uint8Array;
}
export interface NftAttribute {
    type: string;
    value: string;
    subValue: string;
}
export interface NftImage {
    type: string;
    url: string;
}
export interface NftLink {
    type: string;
    url: string;
}
export declare const Nft: {
    encode(message: Nft, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Nft;
    fromJSON(object: any): Nft;
    toJSON(message: Nft): unknown;
    fromPartial<I extends {
        index?: Uint8Array | undefined;
        title?: string | undefined;
        did?: string | undefined;
        images?: {
            type?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        url?: string | undefined;
        description?: string | undefined;
        links?: {
            type?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        attributes?: {
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        }[] | undefined;
        resellable?: boolean | undefined;
        creator?: Uint8Array | undefined;
        collectionId?: string | undefined;
        collectionIndex?: Uint8Array | undefined;
    } & {
        index?: Uint8Array | undefined;
        title?: string | undefined;
        did?: string | undefined;
        images?: ({
            type?: string | undefined;
            url?: string | undefined;
        }[] & ({
            type?: string | undefined;
            url?: string | undefined;
        } & {
            type?: string | undefined;
            url?: string | undefined;
        } & Record<Exclude<keyof I["images"][number], keyof NftImage>, never>)[] & Record<Exclude<keyof I["images"], keyof {
            type?: string | undefined;
            url?: string | undefined;
        }[]>, never>) | undefined;
        url?: string | undefined;
        description?: string | undefined;
        links?: ({
            type?: string | undefined;
            url?: string | undefined;
        }[] & ({
            type?: string | undefined;
            url?: string | undefined;
        } & {
            type?: string | undefined;
            url?: string | undefined;
        } & Record<Exclude<keyof I["links"][number], keyof NftLink>, never>)[] & Record<Exclude<keyof I["links"], keyof {
            type?: string | undefined;
            url?: string | undefined;
        }[]>, never>) | undefined;
        attributes?: ({
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        }[] & ({
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        } & {
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        } & Record<Exclude<keyof I["attributes"][number], keyof NftAttribute>, never>)[] & Record<Exclude<keyof I["attributes"], keyof {
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        }[]>, never>) | undefined;
        resellable?: boolean | undefined;
        creator?: Uint8Array | undefined;
        collectionId?: string | undefined;
        collectionIndex?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof Nft>, never>>(object: I): Nft;
};
export declare const NftAttribute: {
    encode(message: NftAttribute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftAttribute;
    fromJSON(object: any): NftAttribute;
    toJSON(message: NftAttribute): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        value?: string | undefined;
        subValue?: string | undefined;
    } & {
        type?: string | undefined;
        value?: string | undefined;
        subValue?: string | undefined;
    } & Record<Exclude<keyof I, keyof NftAttribute>, never>>(object: I): NftAttribute;
};
export declare const NftImage: {
    encode(message: NftImage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftImage;
    fromJSON(object: any): NftImage;
    toJSON(message: NftImage): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        url?: string | undefined;
    } & {
        type?: string | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, keyof NftImage>, never>>(object: I): NftImage;
};
export declare const NftLink: {
    encode(message: NftLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftLink;
    fromJSON(object: any): NftLink;
    toJSON(message: NftLink): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        url?: string | undefined;
    } & {
        type?: string | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, keyof NftLink>, never>>(object: I): NftLink;
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
