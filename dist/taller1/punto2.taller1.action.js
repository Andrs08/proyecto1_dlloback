"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resolvedor(a, b, c, raizPositiva) {
    let mult;
    if (raizPositiva) {
        mult = 1;
    }
    else {
        mult = -1;
    }
    return ((-1 * b + mult * (b ** 2 - 4 * a * c) ** 0.5) / (2 * a));
}
exports.default = resolvedor;
