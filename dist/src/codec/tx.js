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
exports.MsgClientImpl = exports.MsgBurnNftsResponse = exports.MsgNftsIds = exports.MsgBurnNfts = exports.MsgMintNftsResponse = exports.MsgNftMetadata = exports.MsgNftsMetadata = exports.MsgMintNfts = exports.MsgCreateNftCollectionResponse = exports.MsgCreateNftCollectionMetadata = exports.MsgCreateNftCollection = exports.protobufPackage = void 0;
/* eslint-disable */
const any_1 = require("./google/protobuf/any");
const long_1 = __importDefault(require("long"));
const nft_collection_1 = require("./nft_collection");
const nft_1 = require("./nft");
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "LimeChain.mantrachain.mdb.v1";
function createBaseMsgCreateNftCollection() {
    return { creator: "", collection: undefined, pubKeyHex: "", pubKeyType: "" };
}
exports.MsgCreateNftCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collection !== undefined) {
            exports.MsgCreateNftCollectionMetadata.encode(message.collection, writer.uint32(18).fork()).ldelim();
        }
        if (message.pubKeyHex !== "") {
            writer.uint32(26).string(message.pubKeyHex);
        }
        if (message.pubKeyType !== "") {
            writer.uint32(34).string(message.pubKeyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateNftCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collection = exports.MsgCreateNftCollectionMetadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.pubKeyHex = reader.string();
                    break;
                case 4:
                    message.pubKeyType = reader.string();
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
            collection: isSet(object.collection)
                ? exports.MsgCreateNftCollectionMetadata.fromJSON(object.collection)
                : undefined,
            pubKeyHex: isSet(object.pubKeyHex) ? String(object.pubKeyHex) : "",
            pubKeyType: isSet(object.pubKeyType) ? String(object.pubKeyType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collection !== undefined &&
            (obj.collection = message.collection
                ? exports.MsgCreateNftCollectionMetadata.toJSON(message.collection)
                : undefined);
        message.pubKeyHex !== undefined && (obj.pubKeyHex = message.pubKeyHex);
        message.pubKeyType !== undefined && (obj.pubKeyType = message.pubKeyType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateNftCollection();
        message.creator = object.creator ?? "";
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? exports.MsgCreateNftCollectionMetadata.fromPartial(object.collection)
                : undefined;
        message.pubKeyHex = object.pubKeyHex ?? "";
        message.pubKeyType = object.pubKeyType ?? "";
        return message;
    },
};
function createBaseMsgCreateNftCollectionMetadata() {
    return {
        id: "",
        name: "",
        images: [],
        url: "",
        description: "",
        links: [],
        options: [],
        category: "",
        symbol: "",
        opened: false,
        data: undefined,
    };
}
exports.MsgCreateNftCollectionMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.images) {
            nft_collection_1.NftCollectionImage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        for (const v of message.links) {
            nft_collection_1.NftCollectionLink.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.options) {
            nft_collection_1.NftCollectionOption.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.category !== "") {
            writer.uint32(66).string(message.category);
        }
        if (message.symbol !== "") {
            writer.uint32(74).string(message.symbol);
        }
        if (message.opened === true) {
            writer.uint32(80).bool(message.opened);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateNftCollectionMetadata();
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
                    message.images.push(nft_collection_1.NftCollectionImage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.links.push(nft_collection_1.NftCollectionLink.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options.push(nft_collection_1.NftCollectionOption.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.category = reader.string();
                    break;
                case 9:
                    message.symbol = reader.string();
                    break;
                case 10:
                    message.opened = reader.bool();
                    break;
                case 11:
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
            images: Array.isArray(object?.images)
                ? object.images.map((e) => nft_collection_1.NftCollectionImage.fromJSON(e))
                : [],
            url: isSet(object.url) ? String(object.url) : "",
            description: isSet(object.description) ? String(object.description) : "",
            links: Array.isArray(object?.links)
                ? object.links.map((e) => nft_collection_1.NftCollectionLink.fromJSON(e))
                : [],
            options: Array.isArray(object?.options)
                ? object.options.map((e) => nft_collection_1.NftCollectionOption.fromJSON(e))
                : [],
            category: isSet(object.category) ? String(object.category) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            opened: isSet(object.opened) ? Boolean(object.opened) : false,
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        if (message.images) {
            obj.images = message.images.map((e) => e ? nft_collection_1.NftCollectionImage.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        message.url !== undefined && (obj.url = message.url);
        message.description !== undefined &&
            (obj.description = message.description);
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
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.opened !== undefined && (obj.opened = message.opened);
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateNftCollectionMetadata();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.images =
            object.images?.map((e) => nft_collection_1.NftCollectionImage.fromPartial(e)) || [];
        message.url = object.url ?? "";
        message.description = object.description ?? "";
        message.links =
            object.links?.map((e) => nft_collection_1.NftCollectionLink.fromPartial(e)) || [];
        message.options =
            object.options?.map((e) => nft_collection_1.NftCollectionOption.fromPartial(e)) || [];
        message.category = object.category ?? "";
        message.symbol = object.symbol ?? "";
        message.opened = object.opened ?? false;
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        return message;
    },
};
function createBaseMsgCreateNftCollectionResponse() {
    return { id: "" };
}
exports.MsgCreateNftCollectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateNftCollectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateNftCollectionResponse();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMsgMintNfts() {
    return {
        creator: "",
        collectionCreator: "",
        collectionId: "",
        nfts: undefined,
        pubKeyHex: "",
        pubKeyType: "",
    };
}
exports.MsgMintNfts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionCreator !== "") {
            writer.uint32(18).string(message.collectionCreator);
        }
        if (message.collectionId !== "") {
            writer.uint32(26).string(message.collectionId);
        }
        if (message.nfts !== undefined) {
            exports.MsgNftsMetadata.encode(message.nfts, writer.uint32(34).fork()).ldelim();
        }
        if (message.pubKeyHex !== "") {
            writer.uint32(42).string(message.pubKeyHex);
        }
        if (message.pubKeyType !== "") {
            writer.uint32(50).string(message.pubKeyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintNfts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionCreator = reader.string();
                    break;
                case 3:
                    message.collectionId = reader.string();
                    break;
                case 4:
                    message.nfts = exports.MsgNftsMetadata.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.pubKeyHex = reader.string();
                    break;
                case 6:
                    message.pubKeyType = reader.string();
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
            collectionCreator: isSet(object.collectionCreator)
                ? String(object.collectionCreator)
                : "",
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            nfts: isSet(object.nfts)
                ? exports.MsgNftsMetadata.fromJSON(object.nfts)
                : undefined,
            pubKeyHex: isSet(object.pubKeyHex) ? String(object.pubKeyHex) : "",
            pubKeyType: isSet(object.pubKeyType) ? String(object.pubKeyType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionCreator !== undefined &&
            (obj.collectionCreator = message.collectionCreator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.nfts !== undefined &&
            (obj.nfts = message.nfts
                ? exports.MsgNftsMetadata.toJSON(message.nfts)
                : undefined);
        message.pubKeyHex !== undefined && (obj.pubKeyHex = message.pubKeyHex);
        message.pubKeyType !== undefined && (obj.pubKeyType = message.pubKeyType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMintNfts();
        message.creator = object.creator ?? "";
        message.collectionCreator = object.collectionCreator ?? "";
        message.collectionId = object.collectionId ?? "";
        message.nfts =
            object.nfts !== undefined && object.nfts !== null
                ? exports.MsgNftsMetadata.fromPartial(object.nfts)
                : undefined;
        message.pubKeyHex = object.pubKeyHex ?? "";
        message.pubKeyType = object.pubKeyType ?? "";
        return message;
    },
};
function createBaseMsgNftsMetadata() {
    return { nfts: [] };
}
exports.MsgNftsMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.nfts) {
            exports.MsgNftMetadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgNftsMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nfts.push(exports.MsgNftMetadata.decode(reader, reader.uint32()));
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
                ? object.nfts.map((e) => exports.MsgNftMetadata.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map((e) => e ? exports.MsgNftMetadata.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgNftsMetadata();
        message.nfts = object.nfts?.map((e) => exports.MsgNftMetadata.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgNftMetadata() {
    return {
        id: "",
        title: "",
        images: [],
        url: "",
        description: "",
        links: [],
        attributes: [],
        data: undefined,
        resellable: false,
    };
}
exports.MsgNftMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        for (const v of message.images) {
            nft_1.NftImage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        for (const v of message.links) {
            nft_1.NftLink.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.attributes) {
            nft_1.NftAttribute.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(66).fork()).ldelim();
        }
        if (message.resellable === true) {
            writer.uint32(72).bool(message.resellable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgNftMetadata();
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
                    message.images.push(nft_1.NftImage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.links.push(nft_1.NftLink.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.attributes.push(nft_1.NftAttribute.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 9:
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
            images: Array.isArray(object?.images)
                ? object.images.map((e) => nft_1.NftImage.fromJSON(e))
                : [],
            url: isSet(object.url) ? String(object.url) : "",
            description: isSet(object.description) ? String(object.description) : "",
            links: Array.isArray(object?.links)
                ? object.links.map((e) => nft_1.NftLink.fromJSON(e))
                : [],
            attributes: Array.isArray(object?.attributes)
                ? object.attributes.map((e) => nft_1.NftAttribute.fromJSON(e))
                : [],
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
            resellable: isSet(object.resellable) ? Boolean(object.resellable) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.title !== undefined && (obj.title = message.title);
        if (message.images) {
            obj.images = message.images.map((e) => e ? nft_1.NftImage.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        message.url !== undefined && (obj.url = message.url);
        message.description !== undefined &&
            (obj.description = message.description);
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
        message.data !== undefined &&
            (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.resellable !== undefined && (obj.resellable = message.resellable);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgNftMetadata();
        message.id = object.id ?? "";
        message.title = object.title ?? "";
        message.images = object.images?.map((e) => nft_1.NftImage.fromPartial(e)) || [];
        message.url = object.url ?? "";
        message.description = object.description ?? "";
        message.links = object.links?.map((e) => nft_1.NftLink.fromPartial(e)) || [];
        message.attributes =
            object.attributes?.map((e) => nft_1.NftAttribute.fromPartial(e)) || [];
        message.data =
            object.data !== undefined && object.data !== null
                ? any_1.Any.fromPartial(object.data)
                : undefined;
        message.resellable = object.resellable ?? false;
        return message;
    },
};
function createBaseMsgMintNftsResponse() {
    return { ids: [] };
}
exports.MsgMintNftsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ids) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintNftsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ids.push(reader.string());
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
            ids: Array.isArray(object?.ids)
                ? object.ids.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMintNftsResponse();
        message.ids = object.ids?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgBurnNfts() {
    return {
        creator: "",
        collectionCreator: "",
        collectionId: "",
        nfts: undefined,
        pubKeyHex: "",
        pubKeyType: "",
    };
}
exports.MsgBurnNfts = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.collectionCreator !== "") {
            writer.uint32(18).string(message.collectionCreator);
        }
        if (message.collectionId !== "") {
            writer.uint32(26).string(message.collectionId);
        }
        if (message.nfts !== undefined) {
            exports.MsgNftsIds.encode(message.nfts, writer.uint32(34).fork()).ldelim();
        }
        if (message.pubKeyHex !== "") {
            writer.uint32(42).string(message.pubKeyHex);
        }
        if (message.pubKeyType !== "") {
            writer.uint32(50).string(message.pubKeyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnNfts();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.collectionCreator = reader.string();
                    break;
                case 3:
                    message.collectionId = reader.string();
                    break;
                case 4:
                    message.nfts = exports.MsgNftsIds.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.pubKeyHex = reader.string();
                    break;
                case 6:
                    message.pubKeyType = reader.string();
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
            collectionCreator: isSet(object.collectionCreator)
                ? String(object.collectionCreator)
                : "",
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            nfts: isSet(object.nfts) ? exports.MsgNftsIds.fromJSON(object.nfts) : undefined,
            pubKeyHex: isSet(object.pubKeyHex) ? String(object.pubKeyHex) : "",
            pubKeyType: isSet(object.pubKeyType) ? String(object.pubKeyType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.collectionCreator !== undefined &&
            (obj.collectionCreator = message.collectionCreator);
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.nfts !== undefined &&
            (obj.nfts = message.nfts ? exports.MsgNftsIds.toJSON(message.nfts) : undefined);
        message.pubKeyHex !== undefined && (obj.pubKeyHex = message.pubKeyHex);
        message.pubKeyType !== undefined && (obj.pubKeyType = message.pubKeyType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBurnNfts();
        message.creator = object.creator ?? "";
        message.collectionCreator = object.collectionCreator ?? "";
        message.collectionId = object.collectionId ?? "";
        message.nfts =
            object.nfts !== undefined && object.nfts !== null
                ? exports.MsgNftsIds.fromPartial(object.nfts)
                : undefined;
        message.pubKeyHex = object.pubKeyHex ?? "";
        message.pubKeyType = object.pubKeyType ?? "";
        return message;
    },
};
function createBaseMsgNftsIds() {
    return { nftsIds: [] };
}
exports.MsgNftsIds = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.nftsIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgNftsIds();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nftsIds.push(reader.string());
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
            nftsIds: Array.isArray(object?.nftsIds)
                ? object.nftsIds.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nftsIds) {
            obj.nftsIds = message.nftsIds.map((e) => e);
        }
        else {
            obj.nftsIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgNftsIds();
        message.nftsIds = object.nftsIds?.map((e) => e) || [];
        return message;
    },
};
function createBaseMsgBurnNftsResponse() {
    return { ids: [] };
}
exports.MsgBurnNftsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ids) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnNftsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ids.push(reader.string());
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
            ids: Array.isArray(object?.ids)
                ? object.ids.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map((e) => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBurnNftsResponse();
        message.ids = object.ids?.map((e) => e) || [];
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateNftCollection = this.CreateNftCollection.bind(this);
        this.MintNfts = this.MintNfts.bind(this);
        this.BurnNfts = this.BurnNfts.bind(this);
    }
    CreateNftCollection(request) {
        const data = exports.MsgCreateNftCollection.encode(request).finish();
        const promise = this.rpc.request("LimeChain.mantrachain.mdb.v1.Msg", "CreateNftCollection", data);
        return promise.then((data) => exports.MsgCreateNftCollectionResponse.decode(new _m0.Reader(data)));
    }
    MintNfts(request) {
        const data = exports.MsgMintNfts.encode(request).finish();
        const promise = this.rpc.request("LimeChain.mantrachain.mdb.v1.Msg", "MintNfts", data);
        return promise.then((data) => exports.MsgMintNftsResponse.decode(new _m0.Reader(data)));
    }
    BurnNfts(request) {
        const data = exports.MsgBurnNfts.encode(request).finish();
        const promise = this.rpc.request("LimeChain.mantrachain.mdb.v1.Msg", "BurnNfts", data);
        return promise.then((data) => exports.MsgBurnNftsResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map