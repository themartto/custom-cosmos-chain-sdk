import { Any } from "./google/protobuf/any";
import Long from "long";
import { NftCollectionImage, NftCollectionLink, NftCollectionOption } from "./nft_collection";
import { NftImage, NftLink, NftAttribute } from "./nft";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "LimeChain.mantrachain.mdb.v1";
export interface MsgCreateNftCollection {
    creator: string;
    collection: MsgCreateNftCollectionMetadata;
    pubKeyHex: string;
    pubKeyType: string;
}
export interface MsgCreateNftCollectionMetadata {
    id: string;
    name: string;
    images: NftCollectionImage[];
    url: string;
    description: string;
    links: NftCollectionLink[];
    options: NftCollectionOption[];
    category: string;
    symbol: string;
    opened: boolean;
    data: Any;
}
export interface MsgCreateNftCollectionResponse {
    id: string;
}
export interface MsgMintNfts {
    creator: string;
    collectionCreator: string;
    collectionId: string;
    nfts: MsgNftsMetadata;
    pubKeyHex: string;
    pubKeyType: string;
}
export interface MsgNftsMetadata {
    nfts: MsgNftMetadata[];
}
export interface MsgNftMetadata {
    id: string;
    title: string;
    images: NftImage[];
    url: string;
    description: string;
    links: NftLink[];
    attributes: NftAttribute[];
    data: Any;
    resellable: boolean;
}
export interface MsgMintNftsResponse {
    ids: string[];
}
export interface MsgBurnNfts {
    creator: string;
    collectionCreator: string;
    collectionId: string;
    nfts: MsgNftsIds;
    pubKeyHex: string;
    pubKeyType: string;
}
export interface MsgNftsIds {
    nftsIds: string[];
}
export interface MsgBurnNftsResponse {
    ids: string[];
}
export declare const MsgCreateNftCollection: {
    encode(message: MsgCreateNftCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNftCollection;
    fromJSON(object: any): MsgCreateNftCollection;
    toJSON(message: MsgCreateNftCollection): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        collection?: {
            id?: string | undefined;
            name?: string | undefined;
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
            options?: {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[] | undefined;
            category?: string | undefined;
            symbol?: string | undefined;
            opened?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        pubKeyHex?: string | undefined;
        pubKeyType?: string | undefined;
    } & {
        creator?: string | undefined;
        collection?: ({
            id?: string | undefined;
            name?: string | undefined;
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
            options?: {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[] | undefined;
            category?: string | undefined;
            symbol?: string | undefined;
            opened?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            images?: ({
                type?: string | undefined;
                url?: string | undefined;
            }[] & ({
                type?: string | undefined;
                url?: string | undefined;
            } & {
                type?: string | undefined;
                url?: string | undefined;
            } & Record<Exclude<keyof I["collection"]["images"][number], keyof NftCollectionImage>, never>)[] & Record<Exclude<keyof I["collection"]["images"], keyof {
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
            } & Record<Exclude<keyof I["collection"]["links"][number], keyof NftCollectionLink>, never>)[] & Record<Exclude<keyof I["collection"]["links"], keyof {
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
            } & Record<Exclude<keyof I["collection"]["options"][number], keyof NftCollectionOption>, never>)[] & Record<Exclude<keyof I["collection"]["options"], keyof {
                type?: string | undefined;
                value?: string | undefined;
                subValue?: string | undefined;
            }[]>, never>) | undefined;
            category?: string | undefined;
            symbol?: string | undefined;
            opened?: boolean | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["collection"]["data"], keyof Any>, never>) | undefined;
        } & Record<Exclude<keyof I["collection"], keyof MsgCreateNftCollectionMetadata>, never>) | undefined;
        pubKeyHex?: string | undefined;
        pubKeyType?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateNftCollection>, never>>(object: I): MsgCreateNftCollection;
};
export declare const MsgCreateNftCollectionMetadata: {
    encode(message: MsgCreateNftCollectionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNftCollectionMetadata;
    fromJSON(object: any): MsgCreateNftCollectionMetadata;
    toJSON(message: MsgCreateNftCollectionMetadata): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
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
        options?: {
            type?: string | undefined;
            value?: string | undefined;
            subValue?: string | undefined;
        }[] | undefined;
        category?: string | undefined;
        symbol?: string | undefined;
        opened?: boolean | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
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
        symbol?: string | undefined;
        opened?: boolean | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateNftCollectionMetadata>, never>>(object: I): MsgCreateNftCollectionMetadata;
};
export declare const MsgCreateNftCollectionResponse: {
    encode(message: MsgCreateNftCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateNftCollectionResponse;
    fromJSON(object: any): MsgCreateNftCollectionResponse;
    toJSON(message: MsgCreateNftCollectionResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): MsgCreateNftCollectionResponse;
};
export declare const MsgMintNfts: {
    encode(message: MsgMintNfts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNfts;
    fromJSON(object: any): MsgMintNfts;
    toJSON(message: MsgMintNfts): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        collectionCreator?: string | undefined;
        collectionId?: string | undefined;
        nfts?: {
            nfts?: {
                id?: string | undefined;
                title?: string | undefined;
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
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                resellable?: boolean | undefined;
            }[] | undefined;
        } | undefined;
        pubKeyHex?: string | undefined;
        pubKeyType?: string | undefined;
    } & {
        creator?: string | undefined;
        collectionCreator?: string | undefined;
        collectionId?: string | undefined;
        nfts?: ({
            nfts?: {
                id?: string | undefined;
                title?: string | undefined;
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
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                resellable?: boolean | undefined;
            }[] | undefined;
        } & {
            nfts?: ({
                id?: string | undefined;
                title?: string | undefined;
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
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                resellable?: boolean | undefined;
            }[] & ({
                id?: string | undefined;
                title?: string | undefined;
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
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                resellable?: boolean | undefined;
            } & {
                id?: string | undefined;
                title?: string | undefined;
                images?: ({
                    type?: string | undefined;
                    url?: string | undefined;
                }[] & ({
                    type?: string | undefined;
                    url?: string | undefined;
                } & {
                    type?: string | undefined;
                    url?: string | undefined;
                } & Record<Exclude<keyof I["nfts"]["nfts"][number]["images"][number], keyof NftImage>, never>)[] & Record<Exclude<keyof I["nfts"]["nfts"][number]["images"], keyof {
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
                } & Record<Exclude<keyof I["nfts"]["nfts"][number]["links"][number], keyof NftLink>, never>)[] & Record<Exclude<keyof I["nfts"]["nfts"][number]["links"], keyof {
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
                } & Record<Exclude<keyof I["nfts"]["nfts"][number]["attributes"][number], keyof NftAttribute>, never>)[] & Record<Exclude<keyof I["nfts"]["nfts"][number]["attributes"], keyof {
                    type?: string | undefined;
                    value?: string | undefined;
                    subValue?: string | undefined;
                }[]>, never>) | undefined;
                data?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["nfts"]["nfts"][number]["data"], keyof Any>, never>) | undefined;
                resellable?: boolean | undefined;
            } & Record<Exclude<keyof I["nfts"]["nfts"][number], keyof MsgNftMetadata>, never>)[] & Record<Exclude<keyof I["nfts"]["nfts"], keyof {
                id?: string | undefined;
                title?: string | undefined;
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
                data?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                resellable?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["nfts"], "nfts">, never>) | undefined;
        pubKeyHex?: string | undefined;
        pubKeyType?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgMintNfts>, never>>(object: I): MsgMintNfts;
};
export declare const MsgNftsMetadata: {
    encode(message: MsgNftsMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNftsMetadata;
    fromJSON(object: any): MsgNftsMetadata;
    toJSON(message: MsgNftsMetadata): unknown;
    fromPartial<I extends {
        nfts?: {
            id?: string | undefined;
            title?: string | undefined;
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
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            resellable?: boolean | undefined;
        }[] | undefined;
    } & {
        nfts?: ({
            id?: string | undefined;
            title?: string | undefined;
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
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            resellable?: boolean | undefined;
        }[] & ({
            id?: string | undefined;
            title?: string | undefined;
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
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            resellable?: boolean | undefined;
        } & {
            id?: string | undefined;
            title?: string | undefined;
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
            data?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["nfts"][number]["data"], keyof Any>, never>) | undefined;
            resellable?: boolean | undefined;
        } & Record<Exclude<keyof I["nfts"][number], keyof MsgNftMetadata>, never>)[] & Record<Exclude<keyof I["nfts"], keyof {
            id?: string | undefined;
            title?: string | undefined;
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
            data?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            resellable?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "nfts">, never>>(object: I): MsgNftsMetadata;
};
export declare const MsgNftMetadata: {
    encode(message: MsgNftMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNftMetadata;
    fromJSON(object: any): MsgNftMetadata;
    toJSON(message: MsgNftMetadata): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        title?: string | undefined;
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
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        resellable?: boolean | undefined;
    } & {
        id?: string | undefined;
        title?: string | undefined;
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
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["data"], keyof Any>, never>) | undefined;
        resellable?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof MsgNftMetadata>, never>>(object: I): MsgNftMetadata;
};
export declare const MsgMintNftsResponse: {
    encode(message: MsgMintNftsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNftsResponse;
    fromJSON(object: any): MsgMintNftsResponse;
    toJSON(message: MsgMintNftsResponse): unknown;
    fromPartial<I extends {
        ids?: string[] | undefined;
    } & {
        ids?: (string[] & string[] & Record<Exclude<keyof I["ids"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "ids">, never>>(object: I): MsgMintNftsResponse;
};
export declare const MsgBurnNfts: {
    encode(message: MsgBurnNfts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNfts;
    fromJSON(object: any): MsgBurnNfts;
    toJSON(message: MsgBurnNfts): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        collectionCreator?: string | undefined;
        collectionId?: string | undefined;
        nfts?: {
            nftsIds?: string[] | undefined;
        } | undefined;
        pubKeyHex?: string | undefined;
        pubKeyType?: string | undefined;
    } & {
        creator?: string | undefined;
        collectionCreator?: string | undefined;
        collectionId?: string | undefined;
        nfts?: ({
            nftsIds?: string[] | undefined;
        } & {
            nftsIds?: (string[] & string[] & Record<Exclude<keyof I["nfts"]["nftsIds"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["nfts"], "nftsIds">, never>) | undefined;
        pubKeyHex?: string | undefined;
        pubKeyType?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgBurnNfts>, never>>(object: I): MsgBurnNfts;
};
export declare const MsgNftsIds: {
    encode(message: MsgNftsIds, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgNftsIds;
    fromJSON(object: any): MsgNftsIds;
    toJSON(message: MsgNftsIds): unknown;
    fromPartial<I extends {
        nftsIds?: string[] | undefined;
    } & {
        nftsIds?: (string[] & string[] & Record<Exclude<keyof I["nftsIds"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "nftsIds">, never>>(object: I): MsgNftsIds;
};
export declare const MsgBurnNftsResponse: {
    encode(message: MsgBurnNftsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnNftsResponse;
    fromJSON(object: any): MsgBurnNftsResponse;
    toJSON(message: MsgBurnNftsResponse): unknown;
    fromPartial<I extends {
        ids?: string[] | undefined;
    } & {
        ids?: (string[] & string[] & Record<Exclude<keyof I["ids"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "ids">, never>>(object: I): MsgBurnNftsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateNftCollection(request: MsgCreateNftCollection): Promise<MsgCreateNftCollectionResponse>;
    MintNfts(request: MsgMintNfts): Promise<MsgMintNftsResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    BurnNfts(request: MsgBurnNfts): Promise<MsgBurnNftsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateNftCollection(request: MsgCreateNftCollection): Promise<MsgCreateNftCollectionResponse>;
    MintNfts(request: MsgMintNfts): Promise<MsgMintNftsResponse>;
    BurnNfts(request: MsgBurnNfts): Promise<MsgBurnNftsResponse>;
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
