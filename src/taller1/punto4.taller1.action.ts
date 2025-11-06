function peorParidadAction (num2: number): boolean {
    let n = num2
    while (n > 0) {
        n = n -2
    }
    if (n == 0) {
        return true
    } else {
        return false
    }
}

export default peorParidadAction;