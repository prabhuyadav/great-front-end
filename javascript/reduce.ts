interface Array<T> {
    myReduce<U>(callbackFn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U): U
}

Array.prototype.myReduce = function (callbackFn, initialValue) {
    const noInitialValue = initialValue === undefined
    const len = this.length

    if (noInitialValue && len === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let acc = noInitialValue ? this[0] : initialValue
    let startingIndex = noInitialValue ? 1 : 0
    
    for (let i = startingIndex; i < len; i++) {
        if (Object.hasOwn(this, i)) {
            acc = callbackFn(acc, this[i], i, this)
        }
    }

    return acc
}