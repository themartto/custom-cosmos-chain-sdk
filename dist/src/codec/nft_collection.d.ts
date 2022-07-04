import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "LimeChain.mantrachain.mdb.v1";
export interface NftCollection {
    index: Uint8Array;
    did: string;
    images: NftCollectionImage[];
    url: string;
    links: NftCollectionLink[];
    options: NftCollectionOption[];
    category: string;
    opened: boolean;
    owner: Uint8Array;
    creator: Uint8Array;
}
export interface NftCollectionOption {
    type: string;
    value: string;
    subValue: string;
}
export interface NftCollectionImage {
    type: string;
    url: string;
}
export interface NftCollectionLink {
    type: string;
    url: string;
}
export declare const NftCollection: {
    encode(message: NftCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftCollection;
    fromJSON(object: any): NftCollection;
    toJSON(message: NftCollection): unknown;
    fromPartial<I extends {
        index?: Uint8Array | undefined;
        did?: string | undefined;
        images?: {
            type?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        url?: string | undefined;
        links?: {
            type?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        options?: {
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        }[] | undefined;
        category?: string | undefined;
        opened?: boolean | undefined;
        owner?: Uint8Array | undefined;
        creator?: Uint8Array | undefined;
    } & {
        index?: Uint8Array | undefined;
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
        } & Record<Exclude<keyof I["images"][number], keyof NftCollectionImage>, never>)[] & Record<Exclude<keyof I["images"], keyof {
            type?: string | undefined;
            url?: string | undefined;
        }[]>, never>) | undefined;
        url?: string | undefined;
        links?: ({
            type?: string | undefined;
            url?: string | undefined;
        }[] & ({
            type?: string | undefined;
            url?: string | undefined;
        } & {
            type?: string | undefined;
            url?: string | undefined;
        } & Record<Exclude<keyof I["links"][number], keyof NftCollectionLink>, never>)[] & Record<Exclude<keyof I["links"], keyof {
            type?: string | undefined;
            url?: string | undefined;
        }[]>, never>) | undefined;
        options?: ({
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
        } & Record<Exclude<keyof I["options"][number], keyof NftCollectionOption>, never>)[] & Record<Exclude<keyof I["options"], keyof {
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        }[]>, never>) | undefined;
        category?: string | undefined;
        opened?: boolean | undefined;
        owner?: Uint8Array | undefined;
        creator?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof NftCollection>, never>>(object: I): NftCollection;
};
export declare const NftCollectionOption: {
    encode(message: NftCollectionOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftCollectionOption;
    fromJSON(object: any): NftCollectionOption;
    toJSON(message: NftCollectionOption): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        value?: string | undefined;
        subValue?: string | undefined;
    } & {
        type?: string | undefined;
        value?: string | undefined;
        subValue?: string | undefined;
    } & Record<Exclude<keyof I, keyof NftCollectionOption>, never>>(object: I): NftCollectionOption;
};
export declare const NftCollectionImage: {
    encode(message: NftCollectionImage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftCollectionImage;
    fromJSON(object: any): NftCollectionImage;
    toJSON(message: NftCollectionImage): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        url?: string | undefined;
    } & {
        type?: string | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, keyof NftCollectionImage>, never>>(object: I): NftCollectionImage;
};
export declare const NftCollectionLink: {
    encode(message: NftCollectionLink, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NftCollectionLink;
    fromJSON(object: any): NftCollectionLink;
    toJSON(message: NftCollectionLink): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        url?: string | undefined;
    } & {
        type?: string | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, keyof NftCollectionLink>, never>>(object: I): NftCollectionLink;
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
