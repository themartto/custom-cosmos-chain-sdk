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
exports.NftCollectionLink = exports.NftCollectionImage = exports.NftCollectionOption = exports.NftCollection = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "LimeChain.mantrachain.mdb.v1";
function createBaseNftCollection() {
    return {
        index: new Uint8Array(),
        did: "",
        images: [],
        url: "",
        links: [],
        options: [],
        category: "",
        opened: false,
        owner: new Uint8Array(),
        creator: new Uint8Array(),
    };
}
exports.NftCollection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index.length !== 0) {
            writer.uint32(10).bytes(message.index);
        }
        if (message.did !== "") {
            writer.uint32(18).string(message.did);
        }
        for (const v of message.images) {
            exports.NftCollectionImage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.url !== "") {
            writer.uint32(34).string(message.url);
        }
        for (const v of message.links) {
            exports.NftCollectionLink.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.options) {
            exports.NftCollectionOption.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.category !== "") {
            writer.uint32(58).string(message.category);
        }
        if (message.opened === true) {
            writer.uint32(64).bool(message.opened);
        }
        if (message.owner.length !== 0) {
            writer.uint32(74).bytes(message.owner);
        }
        if (message.creator.length !== 0) {
            writer.uint32(82).bytes(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNftCollection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.bytes();
                    break;
                case 2:
                    message.did = reader.string();
                    break;
                case 3:
                    message.images.push(exports.NftCollectionImage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.url = reader.string();
                    break;
                case 5:
                    message.links.push(exports.NftCollectionLink.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.options.push(exports.NftCollectionOption.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.category = reader.string();
                    break;
                case 8:
                    message.opened = reader.bool();
                    break;
                case 9:
                    message.owner = reader.bytes();
                    break;
                case 10:
                    message.creator = reader.bytes();
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
            did: isSet(object.did) ? String(object.did) : "",
            images: Array.isArray(object?.images)
                ? object.images.map((e) => exports.NftCollectionImage.fromJSON(e))
                : [],
            url: isSet(object.url) ? String(object.url) : "",
            links: Array.isArray(object?.links)
                ? object.links.map((e) => exports.NftCollectionLink.fromJSON(e))
                : [],
            options: Array.isArray(object?.options)
                ? object.options.map((e) => exports.NftCollectionOption.fromJSON(e))
                : [],
            category: isSet(object.category) ? String(object.category) : "",
            opened: isSet(object.opened) ? Boolean(object.opened) : false,
            owner: isSet(object.owner)
                ? bytesFromBase64(object.owner)
                : new Uint8Array(),
            creator: isSet(object.creator)
                ? bytesFromBase64(object.creator)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined &&
            (obj.index = base64FromBytes(message.index !== undefined ? message.index : new Uint8Array()));
        message.did !== undefined && (obj.did = message.did);
        if (message.images) {
            obj.images = message.images.map((e) => e ? exports.NftCollectionImage.toJSON(e) : undefined);
        }
        else {
            obj.images = [];
        }
        message.url !== undefined && (obj.url = message.url);
        if (message.links) {
            obj.links = message.links.map((e) => e ? exports.NftCollectionLink.toJSON(e) : undefined);
        }
        else {
            obj.links = [];
        }
        if (message.options) {
            obj.options = message.options.map((e) => e ? exports.NftCollectionOption.toJSON(e) : undefined);
        }
        else {
            obj.options = [];
        }
        message.category !== undefined && (obj.category = message.category);
        message.opened !== undefined && (obj.opened = message.opened);
        message.owner !== undefined &&
            (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array()));
        message.creator !== undefined &&
            (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNftCollection();
        message.index = object.index ?? new Uint8Array();
        message.did = object.did ?? "";
        message.images =
            object.images?.map((e) => exports.NftCollectionImage.fromPartial(e)) || [];
        message.url = object.url ?? "";
        message.links =
            object.links?.map((e) => exports.NftCollectionLink.fromPartial(e)) || [];
        message.options =
            object.options?.map((e) => exports.NftCollectionOption.fromPartial(e)) || [];
        message.category = object.category ?? "";
        message.opened = object.opened ?? false;
        message.owner = object.owner ?? new Uint8Array();
        message.creator = object.creator ?? new Uint8Array();
        return message;
    },
};
function createBaseNftCollectionOption() {
    return { type: "", value: "", subValue: "" };
}
exports.NftCollectionOption = {
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
        const message = createBaseNftCollectionOption();
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
        const message = createBaseNftCollectionOption();
        message.type = object.type ?? "";
        message.value = object.value ?? "";
        message.subValue = object.subValue ?? "";
        return message;
    },
};
function createBaseNftCollectionImage() {
    return { type: "", url: "" };
}
exports.NftCollectionImage = {
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
        const message = createBaseNftCollectionImage();
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
        const message = createBaseNftCollectionImage();
        message.type = object.type ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function createBaseNftCollectionLink() {
    return { type: "", url: "" };
}
exports.NftCollectionLink = {
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
        const message = createBaseNftCollectionLink();
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
        const message = createBaseNftCollectionLink();
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
//# sourceMappingURL=nft_collection.js.map