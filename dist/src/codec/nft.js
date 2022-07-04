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
exports.NftLink = exports.NftImage = exports.NftAttribute = exports.Nft = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "LimeChain.mantrachain.mdb.v1";
function createBaseNft() {
    return {
        index: new Uint8Array(),
        title: "",
        did: "",
        images: [],
        url: "",
        description: "",
        links: [],
        attributes: [],
        resellable: false,
        creator: new Uint8Array(),
        collectionId: "",
        collectionIndex: new Uint8Array(),
    };
}
exports.Nft = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index.length !== 0) {
            writer.uint32(10).bytes(message.index);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.did !== "") {
            writer.uint32(26).string(message.did);
        }
        for (const v of message.images) {
            exports.NftImage.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.url !== "") {
            writer.uint32(42).string(message.url);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        for (const v of message.links) {
            exports.NftLink.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.attributes) {
            exports.NftAttribute.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.resellable === true) {
            writer.uint32(72).bool(message.resellable);
        }
        if (message.creator.length !== 0) {
            writer.uint32(82).bytes(message.creator);
        }
        if (message.collectionId !== "") {
            writer.uint32(90).string(message.collectionId);
        }
        if (message.collectionIndex.length !== 0) {
            writer.uint32(98).bytes(message.collectionIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNft();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.bytes();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.did = reader.string();
                    break;
                case 4:
                    message.images.push(exports.NftImage.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.url = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.links.push(exports.NftLink.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.attributes.push(exports.NftAttribute.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.resellable = reader.bool();
                    break;
                case 10:
                    message.creator = reader.bytes();
                    break;
                case 11:
                    message.collectionId = reader.string();
                    break;
                case 12:
                    message.collectionIndex = reader.bytes();
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
            index: isSet(object.index)
                ? bytesFromBase64(object.index)
                : new Uint8Array(),
            title: isSet(object.title) ? String(object.title) : "",
            did: isSet(object.did) ? String(object.did) : "",
            images: Array.isArray(object?.images)
                ? object.images.map((e) => exports.NftImage.fromJSON(e))
                : [],
            url: isSet(object.url) ? String(object.url) : "",
            description: isSet(object.description) ? String(object.description) : "",
            links: Array.isArray(object?.links)
                ? object.links.map((e) => exports.NftLink.fromJSON(e))
                : [],
            attributes: Array.isArray(object?.attributes)
                ? object.attributes.map((e) => exports.NftAttribute.fromJSON(e))
                : [],
            resellable: isSet(object.resellable) ? Boolean(object.resellable) : false,
            creator: isSet(object.creator)
                ? bytesFromBase64(object.creator)
                : new Uint8Array(),
            collectionId: isSet(object.collectionId)
                ? String(object.collectionId)
                : "",
            collectionIndex: isSet(object.collectionIndex)
                ? bytesFromBase64(object.collectionIndex)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined &&
            (obj.index = base64FromBytes(message.index !== undefined ? message.index : new Uint8Array()));
        message.title !== undefined && (obj.title = message.title);
        message.did !== undefined && (obj.did = message.did);
        if (message.images) {
            obj.images = message.images.map((e) => e ? exports.NftImage.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        message.url !== undefined && (obj.url = message.url);
        message.description !== undefined &&
            (obj.description = message.description);
        if (message.links) {
            obj.links = message.links.map((e) => (e ? exports.NftLink.toJSON(e) : undefined));
        }
        else {
            obj.links = [];
        }
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? exports.NftAttribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        message.resellable !== undefined && (obj.resellable = message.resellable);
        message.creator !== undefined &&
            (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.collectionIndex !== undefined &&
            (obj.collectionIndex = base64FromBytes(message.collectionIndex !== undefined
                ? message.collectionIndex
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNft();
        message.index = object.index ?? new Uint8Array();
        message.title = object.title ?? "";
        message.did = object.did ?? "";
        message.images = object.images?.map((e) => exports.NftImage.fromPartial(e)) || [];
        message.url = object.url ?? "";
        message.description = object.description ?? "";
        message.links = object.links?.map((e) => exports.NftLink.fromPartial(e)) || [];
        message.attributes =
            object.attributes?.map((e) => exports.NftAttribute.fromPartial(e)) || [];
        message.resellable = object.resellable ?? false;
        message.creator = object.creator ?? new Uint8Array();
        message.collectionId = object.collectionId ?? "";
        message.collectionIndex = object.collectionIndex ?? new Uint8Array();
        return message;
    },
};
function createBaseNftAttribute() {
    return { type: "", value: "", subValue: "" };
}
exports.NftAttribute = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.subValue !== "") {
            writer.uint32(26).string(message.subValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNftAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.subValue = reader.string();
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
            type: isSet(object.type) ? String(object.type) : "",
            value: isSet(object.value) ? String(object.value) : "",
            subValue: isSet(object.subValue) ? String(object.subValue) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.value !== undefined && (obj.value = message.value);
        message.subValue !== undefined && (obj.subValue = message.subValue);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNftAttribute();
        message.type = object.type ?? "";
        message.value = object.value ?? "";
        message.subValue = object.subValue ?? "";
        return message;
    },
};
function createBaseNftImage() {
    return { type: "", url: "" };
}
exports.NftImage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNftImage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
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
            type: isSet(object.type) ? String(object.type) : "",
            url: isSet(object.url) ? String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNftImage();
        message.type = object.type ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function createBaseNftLink() {
    return { type: "", url: "" };
}
exports.NftLink = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNftLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
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
            type: isSet(object.type) ? String(object.type) : "",
            url: isSet(object.url) ? String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNftLink();
        message.type = object.type ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=nft.js.map