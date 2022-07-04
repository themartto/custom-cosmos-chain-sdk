import { Params } from "./params";
import { Any } from "./google/protobuf/any";
import Long from "long";
import { NftCollectionImage, NftCollectionLink, NftCollectionOption } from "./nft_collection";
import { NftImage, NftLink, NftAttribute } from "./nft";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "LimeChain.mantrachain.mdb.v1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryGetNftCollectionRequest {
    creator: string;
    id: string;
}
export interface QueryGetNftCollectionResponse {
    id: string;
    name: string;
    symbol: string;
    description: string;
    did: string;
    images: NftCollectionImage[];
    url: string;
    links: NftCollectionLink[];
    options: NftCollectionOption[];
    category: string;
    owner: string;
    creator: string;
    opened: boolean;
    data: Any;
}
export interface QueryGetNftRequest {
    collectionCreator: string;
    collectionId: string;
    id: string;
}
export interface QueryGetNftResponse {
    id: string;
    title: string;
    did: string;
    description: string;
    images: NftImage[];
    url: string;
    links: NftLink[];
    attributes: NftAttribute[];
    owner: string;
    creator: string;
    data: Any;
    collectionId: string;
    resellable: boolean;
}
export interface QueryGetNftCollectionsRequest {
    creator: string;
}
export interface QueryGetNftCollectionsResponse {
    nftCollections: QueryGetNftCollectionResponse[];
}
export interface QueryGetCollectionNftsRequest {
    collectionCreator: string;
    collectionId: string;
}
export interface QueryGetCollectionNftsResponse {
    nfts: QueryGetNftResponse[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
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
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryGetNftCollectionRequest: {
    encode(message: QueryGetNftCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftCollectionRequest;
    fromJSON(object: any): QueryGetNftCollectionRequest;
    toJSON(message: QueryGetNftCollectionRequest): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryGetNftCollectionRequest>, never>>(object: I): QueryGetNftCollectionRequest;
};
export declare const QueryGetNftCollectionResponse: {
    encode(message: QueryGetNftCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftCollectionResponse;
    fromJSON(object: any): QueryGetNftCollectionResponse;
    toJSON(message: QueryGetNftCollectionResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        symbol?: string | undefined;
        description?: string | undefined;
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
        owner?: string | undefined;
        creator?: string | undefined;
        opened?: boolean | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        symbol?: string | undefined;
        description?: string | undefined;
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
        owner?: string | undefined;
        creator?: string | undefined;
        opened?: boolean | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryGetNftCollectionResponse>, never>>(object: I): QueryGetNftCollectionResponse;
};
export declare const QueryGetNftRequest: {
    encode(message: QueryGetNftRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftRequest;
    fromJSON(object: any): QueryGetNftRequest;
    toJSON(message: QueryGetNftRequest): unknown;
    fromPartial<I extends {
        collectionCreator?: string | undefined;
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionCreator?: string | undefined;
        collectionId?: string | undefined;
        id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryGetNftRequest>, never>>(object: I): QueryGetNftRequest;
};
export declare const QueryGetNftResponse: {
    encode(message: QueryGetNftResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftResponse;
    fromJSON(object: any): QueryGetNftResponse;
    toJSON(message: QueryGetNftResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        title?: string | undefined;
        did?: string | undefined;
        description?: string | undefined;
        images?: {
            type?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        url?: string | undefined;
        links?: {
            type?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        attributes?: {
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        }[] | undefined;
        owner?: string | undefined;
        creator?: string | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        collectionId?: string | undefined;
        resellable?: boolean | undefined;
    } & {
        id?: string | undefined;
        title?: string | undefined;
        did?: string | undefined;
        description?: string | undefined;
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
        owner?: string | undefined;
        creator?: string | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
        collectionId?: string | undefined;
        resellable?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof QueryGetNftResponse>, never>>(object: I): QueryGetNftResponse;
};
export declare const QueryGetNftCollectionsRequest: {
    encode(message: QueryGetNftCollectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftCollectionsRequest;
    fromJSON(object: any): QueryGetNftCollectionsRequest;
    toJSON(message: QueryGetNftCollectionsRequest): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
    } & {
        creator?: string | undefined;
    } & Record<Exclude<keyof I, "creator">, never>>(object: I): QueryGetNftCollectionsRequest;
};
export declare const QueryGetNftCollectionsResponse: {
    encode(message: QueryGetNftCollectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNftCollectionsResponse;
    fromJSON(object: any): QueryGetNftCollectionsResponse;
    toJSON(message: QueryGetNftCollectionsResponse): unknown;
    fromPartial<I extends {
        nftCollections?: {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
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
            owner?: string | undefined;
            creator?: string | undefined;
            opened?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nftCollections?: ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
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
            owner?: string | undefined;
            creator?: string | undefined;
            opened?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
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
            owner?: string | undefined;
            creator?: string | undefined;
            opened?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
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
            } & Record<Exclude<keyof I["nftCollections"][number]["images"][number], keyof NftCollectionImage>, never>)[] & Record<Exclude<keyof I["nftCollections"][number]["images"], keyof {
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
            } & Record<Exclude<keyof I["nftCollections"][number]["links"][number], keyof NftCollectionLink>, never>)[] & Record<Exclude<keyof I["nftCollections"][number]["links"], keyof {
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
            } & Record<Exclude<keyof I["nftCollections"][number]["options"][number], keyof NftCollectionOption>, never>)[] & Record<Exclude<keyof I["nftCollections"][number]["options"], keyof {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[]>, never>) | undefined;
            category?: string | undefined;
            owner?: string | undefined;
            creator?: string | undefined;
            opened?: boolean | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["nftCollections"][number]["data"], keyof Any>, never>) | undefined;
        } & Record<Exclude<keyof I["nftCollections"][number], keyof QueryGetNftCollectionResponse>, never>)[] & Record<Exclude<keyof I["nftCollections"], keyof {
            id?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
            description?: string | undefined;
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
            owner?: string | undefined;
            creator?: string | undefined;
            opened?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "nftCollections">, never>>(object: I): QueryGetNftCollectionsResponse;
};
export declare const QueryGetCollectionNftsRequest: {
    encode(message: QueryGetCollectionNftsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionNftsRequest;
    fromJSON(object: any): QueryGetCollectionNftsRequest;
    toJSON(message: QueryGetCollectionNftsRequest): unknown;
    fromPartial<I extends {
        collectionCreator?: string | undefined;
        collectionId?: string | undefined;
    } & {
        collectionCreator?: string | undefined;
        collectionId?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryGetCollectionNftsRequest>, never>>(object: I): QueryGetCollectionNftsRequest;
};
export declare const QueryGetCollectionNftsResponse: {
    encode(message: QueryGetCollectionNftsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionNftsResponse;
    fromJSON(object: any): QueryGetCollectionNftsResponse;
    toJSON(message: QueryGetCollectionNftsResponse): unknown;
    fromPartial<I extends {
        nfts?: {
            id?: string | undefined;
            title?: string | undefined;
            did?: string | undefined;
            description?: string | undefined;
            images?: {
                type?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
            url?: string | undefined;
            links?: {
                type?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
            attributes?: {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            creator?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            collectionId?: string | undefined;
            resellable?: boolean | undefined;
        }[] | undefined;
    } & {
        nfts?: ({
            id?: string | undefined;
            title?: string | undefined;
            did?: string | undefined;
            description?: string | undefined;
            images?: {
                type?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
            url?: string | undefined;
            links?: {
                type?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
            attributes?: {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            creator?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            collectionId?: string | undefined;
            resellable?: boolean | undefined;
        }[] & ({
            id?: string | undefined;
            title?: string | undefined;
            did?: string | undefined;
            description?: string | undefined;
            images?: {
                type?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
            url?: string | undefined;
            links?: {
                type?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
            attributes?: {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            creator?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            collectionId?: string | undefined;
            resellable?: boolean | undefined;
        } & {
            id?: string | undefined;
            title?: string | undefined;
            did?: string | undefined;
            description?: string | undefined;
            images?: ({
                type?: string | undefined;
                url?: string | undefined;
            }[] & ({
                type?: string | undefined;
                url?: string | undefined;
            } & {
                type?: string | undefined;
                url?: string | undefined;
            } & Record<Exclude<keyof I["nfts"][number]["images"][number], keyof NftImage>, never>)[] & Record<Exclude<keyof I["nfts"][number]["images"], keyof {
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
            } & Record<Exclude<keyof I["nfts"][number]["links"][number], keyof NftLink>, never>)[] & Record<Exclude<keyof I["nfts"][number]["links"], keyof {
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
            } & Record<Exclude<keyof I["nfts"][number]["attributes"][number], keyof NftAttribute>, never>)[] & Record<Exclude<keyof I["nfts"][number]["attributes"], keyof {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[]>, never>) | undefined;
            owner?: string | undefined;
            creator?: string | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["nfts"][number]["data"], keyof Any>, never>) | undefined;
            collectionId?: string | undefined;
            resellable?: boolean | undefined;
        } & Record<Exclude<keyof I["nfts"][number], keyof QueryGetNftResponse>, never>)[] & Record<Exclude<keyof I["nfts"], keyof {
            id?: string | undefined;
            title?: string | undefined;
            did?: string | undefined;
            description?: string | undefined;
            images?: {
                type?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
            url?: string | undefined;
            links?: {
                type?: string | undefined;
                url?: string | undefined;
            }[] | undefined;
            attributes?: {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[] | undefined;
            owner?: string | undefined;
            creator?: string | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            collectionId?: string | undefined;
            resellable?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "nfts">, never>>(object: I): QueryGetCollectionNftsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a NftCollection. */
    NftCollection(request: QueryGetNftCollectionRequest): Promise<QueryGetNftCollectionResponse>;
    /** Queries a Nft. */
    Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>;
    /** Queries a list of NftCollections items. */
    NftCollections(request: QueryGetNftCollectionsRequest): Promise<QueryGetNftCollectionsResponse>;
    /** Queries a list of CollectionNfts items. */
    CollectionNfts(request: QueryGetCollectionNftsRequest): Promise<QueryGetCollectionNftsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    NftCollection(request: QueryGetNftCollectionRequest): Promise<QueryGetNftCollectionResponse>;
    Nft(request: QueryGetNftRequest): Promise<QueryGetNftResponse>;
    NftCollections(request: QueryGetNftCollectionsRequest): Promise<QueryGetNftCollectionsResponse>;
    CollectionNfts(request: QueryGetCollectionNftsRequest): Promise<QueryGetCollectionNftsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
