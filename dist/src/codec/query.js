"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetCollectionNftsResponse = exports.QueryGetCollectionNftsRequest = exports.QueryGetNftCollectionsResponse = exports.QueryGetNftCollectionsRequest = exports.QueryGetNftResponse = exports.QueryGetNftRequest = exports.QueryGetNftCollectionResponse = exports.QueryGetNftCollectionRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const params_1 = require("./params");
const any_1 = require("./google/protobuf/any");
const long_1 = __importDefault(require("long"));
const nft_collection_1 = require("./nft_collection");
const nft_1 = require("./nft");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "LimeChain.mantrachain.mdb.v1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQueryGetNftCollectionRequest() {
    return { creator: "", id: "" };
}
exports.QueryGetNftCollectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNftCollectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetNftCollectionRequest();
        message.creator = object.creator ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryGetNftCollectionResponse() {
    return {
        id: "",
        name: "",
        symbol: "",
        description: "",
        did: "",
        images: [],
        url: "",
        links: [],
        options: [],
        category: "",
        owner: "",
        creator: "",
        opened: false,
        data: undefined,
    };
}
exports.QueryGetNftCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.did !== "") {
            writer.uint32(42).string(message.did);
        }
        for (const v of message.images) {
            nft_collection_1.NftCollectionImage.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.url !== "") {
            writer.uint32(58).string(message.url);
        }
        for (const v of message.links) {
            nft_collection_1.NftCollectionLink.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.options) {
            nft_collection_1.NftCollectionOption.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.category !== "") {
            writer.uint32(82).string(message.category);
        }
        if (message.owner !== "") {
            writer.uint32(90).string(message.owner);
        }
        if (message.creator !== "") {
            writer.uint32(98).string(message.creator);
        }
        if (message.opened === true) {
            writer.uint32(104).bool(message.opened);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNftCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.did = reader.string();
                    break;
                case 6:
                    message.images.push(nft_collection_1.NftCollectionImage.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.url = reader.string();
                    break;
                case 8:
                    message.links.push(nft_collection_1.NftCollectionLink.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.options.push(nft_collection_1.NftCollectionOption.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.category = reader.string();
                    break;
                case 11:
                    message.owner = reader.string();
                    break;
                case 12:
                    message.creator = reader.string();
                    break;
                case 13:
                    message.opened = reader.bool();
                    break;
                case 14:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            description: isSet(object.description) ? String(object.description) : "",
            did: isSet(object.did) ? String(object.did) : "",
            images: Array.isArray(object?.images)
                ? object.images.map((e) => nft_collection_1.NftCollectionImage.fromJSON(e))
                : [],
            url: isSet(object.url) ? String(object.url) : "",
            links: Array.isArray(object?.links)
                ? object.links.map((e) => nft_collection_1.NftCollectionLink.fromJSON(e))
                : [],
            options: Array.isArray(object?.options)
                ? object.options.map((e) => nft_collection_1.NftCollectionOption.fromJSON(e))
                : [],
            category: isSet(object.category) ? String(object.category) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
            opened: isSet(object.opened) ? Boolean(object.opened) : false,
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.description !== undefined &&
            (obj.description = message.description);
        message.did !== undefined && (obj.did = message.did);
        if (message.images) {
            obj.images = message.images.map((e) => e ? nft_collection_1.NftCollectionImage.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        message.url !== undefined && (obj.url = message.url);
        if (message.links) {
            obj.links = message.links.map((e) => e ? nft_collection_1.NftCollectionLink.toJSON(e) : undefined);
        }
        else {
            obj.links = [];
        }
        if (message.options) {
            obj.options = message.options.map((e) => e ? nft_collection_1.NftCollectionOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        message.category !== undefined && (obj.category = message.category);
        message.owner !== undefined && (obj.owner = message.owner);
        message.creator !== undefined && (obj.creator = message.creator);
        message.opened !== undefined && (obj.opened = message.opened);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetNftCollectionResponse();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.description = object.description ?? "";
        message.did = object.did ?? "";
        message.images =
            object.images?.map((e) => nft_collection_1.NftCollectionImage.fromPartial(e)) || [];
        message.url = object.url ?? "";
        message.links =
            object.links?.map((e) => nft_collection_1.NftCollectionLink.fromPartial(e)) || [];
        message.options =
            object.options?.map((e) => nft_collection_1.NftCollectionOption.fromPartial(e)) || [];
        message.category = object.category ?? "";
        message.owner = object.owner ?? "";
        message.creator = object.creator ?? "";
        message.opened = object.opened ?? false;
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        return message;
    },
};
function createBaseQueryGetNftRequest() {
    return { collectionCreator: "", collectionId: "", id: "" };
}
exports.QueryGetNftRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionCreator !== "") {
            writer.uint32(10).string(message.collectionCreator);
        }
        if (message.collectionId !== "") {
            writer.uint32(18).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNftRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionCreator = reader.string();
                    break;
                case 2:
                    message.collectionId = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionCreator: isSet(object.collectionCreator)
                ? String(object.collectionCreator)
                : "",
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionCreator !== undefined &&
            (obj.collectionCreator = message.collectionCreator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetNftRequest();
        message.collectionCreator = object.collectionCreator ?? "";
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryGetNftResponse() {
    return {
        id: "",
        title: "",
        did: "",
        description: "",
        images: [],
        url: "",
        links: [],
        attributes: [],
        owner: "",
        creator: "",
        data: undefined,
        collectionId: "",
        resellable: false,
    };
}
exports.QueryGetNftResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.did !== "") {
            writer.uint32(26).string(message.did);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        for (const v of message.images) {
            nft_1.NftImage.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.url !== "") {
            writer.uint32(50).string(message.url);
        }
        for (const v of message.links) {
            nft_1.NftLink.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.attributes) {
            nft_1.NftAttribute.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(74).string(message.owner);
        }
        if (message.creator !== "") {
            writer.uint32(82).string(message.creator);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(90).fork()).ldelim();
        }
        if (message.collectionId !== "") {
            writer.uint32(98).string(message.collectionId);
        }
        if (message.resellable === true) {
            writer.uint32(104).bool(message.resellable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNftResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.did = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.images.push(nft_1.NftImage.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.url = reader.string();
                    break;
                case 7:
                    message.links.push(nft_1.NftLink.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.attributes.push(nft_1.NftAttribute.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.owner = reader.string();
                    break;
                case 10:
                    message.creator = reader.string();
                    break;
                case 11:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.collectionId = reader.string();
                    break;
                case 13:
                    message.resellable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            title: isSet(object.title) ? String(object.title) : "",
            did: isSet(object.did) ? String(object.did) : "",
            description: isSet(object.description) ? String(object.description) : "",
            images: Array.isArray(object?.images)
                ? object.images.map((e) => nft_1.NftImage.fromJSON(e))
                : [],
            url: isSet(object.url) ? String(object.url) : "",
            links: Array.isArray(object?.links)
                ? object.links.map((e) => nft_1.NftLink.fromJSON(e))
                : [],
            attributes: Array.isArray(object?.attributes)
                ? object.attributes.map((e) => nft_1.NftAttribute.fromJSON(e))
                : [],
            owner: isSet(object.owner) ? String(object.owner) : "",
            creator: isSet(object.creator) ? String(object.creator) : "",
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            resellable: isSet(object.resellable) ? Boolean(object.resellable) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.title !== undefined && (obj.title = message.title);
        message.did !== undefined && (obj.did = message.did);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.images) {
            obj.images = message.images.map((e) => e ? nft_1.NftImage.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        message.url !== undefined && (obj.url = message.url);
        if (message.links) {
            obj.links = message.links.map((e) => (e ? nft_1.NftLink.toJSON(e) : undefined));
        }
        else {
            obj.links = [];
        }
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? nft_1.NftAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        message.creator !== undefined && (obj.creator = message.creator);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.resellable !== undefined && (obj.resellable = message.resellable);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetNftResponse();
        message.id = object.id ?? "";
        message.title = object.title ?? "";
        message.did = object.did ?? "";
        message.description = object.description ?? "";
        message.images = object.images?.map((e) => nft_1.NftImage.fromPartial(e)) || [];
        message.url = object.url ?? "";
        message.links = object.links?.map((e) => nft_1.NftLink.fromPartial(e)) || [];
        message.attributes =
            object.attributes?.map((e) => nft_1.NftAttribute.fromPartial(e)) || [];
        message.owner = object.owner ?? "";
        message.creator = object.creator ?? "";
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        message.collectionId = object.collectionId ?? "";
        message.resellable = object.resellable ?? false;
        return message;
    },
};
function createBaseQueryGetNftCollectionsRequest() {
    return { creator: "" };
}
exports.QueryGetNftCollectionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNftCollectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetNftCollectionsRequest();
        message.creator = object.creator ?? "";
        return message;
    },
};
function createBaseQueryGetNftCollectionsResponse() {
    return { nftCollections: [] };
}
exports.QueryGetNftCollectionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.nftCollections) {
            exports.QueryGetNftCollectionResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetNftCollectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nftCollections.push(exports.QueryGetNftCollectionResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            nftCollections: Array.isArray(object?.nftCollections)
                ? object.nftCollections.map((e) => exports.QueryGetNftCollectionResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nftCollections) {
            obj.nftCollections = message.nftCollections.map((e) => e ? exports.QueryGetNftCollectionResponse.toJSON(e) : undefined);
        }
        else {
            obj.nftCollections = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetNftCollectionsResponse();
        message.nftCollections =
            object.nftCollections?.map((e) => exports.QueryGetNftCollectionResponse.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGetCollectionNftsRequest() {
    return { collectionCreator: "", collectionId: "" };
}
exports.QueryGetCollectionNftsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionCreator !== "") {
            writer.uint32(10).string(message.collectionCreator);
        }
        if (message.collectionId !== "") {
            writer.uint32(18).string(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCollectionNftsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionCreator = reader.string();
                    break;
                case 2:
                    message.collectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionCreator: isSet(object.collectionCreator)
                ? String(object.collectionCreator)
                : "",
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionCreator !== undefined &&
            (obj.collectionCreator = message.collectionCreator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetCollectionNftsRequest();
        message.collectionCreator = object.collectionCreator ?? "";
        message.collectionId = object.collectionId ?? "";
        return message;
    },
};
function createBaseQueryGetCollectionNftsResponse() {
    return { nfts: [] };
}
exports.QueryGetCollectionNftsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.nfts) {
            exports.QueryGetNftResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCollectionNftsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nfts.push(exports.QueryGetNftResponse.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            nfts: Array.isArray(object?.nfts)
                ? object.nfts.map((e) => exports.QueryGetNftResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map((e) => e ? exports.QueryGetNftResponse.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetCollectionNftsResponse();
        message.nfts =
            object.nfts?.map((e) => exports.QueryGetNftResponse.fromPartial(e)) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.NftCollection = this.NftCollection.bind(this);
        this.Nft = this.Nft.bind(this);
        this.NftCollections = this.NftCollections.bind(this);
        this.CollectionNfts = this.CollectionNfts.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("LimeChain.mantrachain.mdb.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    NftCollection(request) {
        const data = exports.QueryGetNftCollectionRequest.encode(request).finish();
        const promise = this.rpc.request("LimeChain.mantrachain.mdb.v1.Query", "NftCollection", data);
        return promise.then((data) => exports.QueryGetNftCollectionResponse.decode(new _m0.Reader(data)));
    }
    Nft(request) {
        const data = exports.QueryGetNftRequest.encode(request).finish();
        const promise = this.rpc.request("LimeChain.mantrachain.mdb.v1.Query", "Nft", data);
        return promise.then((data) => exports.QueryGetNftResponse.decode(new _m0.Reader(data)));
    }
    NftCollections(request) {
        const data = exports.QueryGetNftCollectionsRequest.encode(request).finish();
        const promise = this.rpc.request("LimeChain.mantrachain.mdb.v1.Query", "NftCollections", data);
        return promise.then((data) => exports.QueryGetNftCollectionsResponse.decode(new _m0.Reader(data)));
    }
    CollectionNfts(request) {
        const data = exports.QueryGetCollectionNftsRequest.encode(request).finish();
        const promise = this.rpc.request("LimeChain.mantrachain.mdb.v1.Query", "CollectionNfts", data);
        return promise.then((data) => exports.QueryGetCollectionNftsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map