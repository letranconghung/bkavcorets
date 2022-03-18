"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wanttoincludethis = exports.greetgreet2 = exports.greetgreet = void 0;
const greet_1 = require("./greet");
function greetgreet(name) {
    return `Hello from greetgreet${name}`;
}
exports.greetgreet = greetgreet;
function greetgreet2(name) {
    return `Hello from greettgreet2 ${name}`;
}
exports.greetgreet2 = greetgreet2;
function wanttoincludethis(x, y) {
    const a = (0, greet_1.dontwanttoincludethis)(x, y);
    return a * 2;
}
exports.wanttoincludethis = wanttoincludethis;
//# sourceMappingURL=index.js.map