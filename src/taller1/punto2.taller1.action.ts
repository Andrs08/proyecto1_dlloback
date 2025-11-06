function resolvedorAction (a: number, b: number, c: number, raizPositiva: boolean): number {
    let mult: number
    if (raizPositiva) {
        mult = 1
    } else {
        mult = -1
    }
    return ((-1*b+mult*(b**2-4*a*c)**0.5)/(2*a))
}

export default resolvedorAction;