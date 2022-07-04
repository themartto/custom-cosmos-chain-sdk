"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("./modules");
class SDK {
    constructor(client, urls) {
        this.client = client;
        this.urls = urls;
        this.mdbModule = new modules_1.MdbModule(this.client, this.urls);
    }
}
exports.default = SDK;
//# sourceMappingURL=SDK.js.map