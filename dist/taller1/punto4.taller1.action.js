"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function peorParidad(num2) {
    let n = num2;
    while (n > 0) {
        n = n - 2;
    }
    if (n == 0) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = peorParidad;
