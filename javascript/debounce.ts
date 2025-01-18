function debounce(func: Function, wait: number = 0) : Function {
    let timerId: ReturnType<typeof setTimeout> | null = null

    return function(...args: any[]) {
        clearTimeout(timerId ?? undefined)

        timerId = setTimeout(() => func.apply(this, args), wait)
    }
}