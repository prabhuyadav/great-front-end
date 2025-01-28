type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined;
type ClassDictionary = Record<string, any>;
type ClassArray = Array<ClassValue>;

function classNames(...args: Array<ClassValue>) : string {
    const classes: Array<string> = []

    args.forEach(arg => {
        // Ignore falsy values
        if (!arg) {
            return
        }

        const argType = typeof arg

        // Handle strings and numbers
        if (argType === 'string' || argType === 'number') {
            classes.push(String(arg))
            return
        }

        // Handle arrays
        if (Array.isArray(arg)) {
            classes.push(classNames(...arg))
            return
        }

        // Handle objects
        if (argType === 'object') {
            const objArg = arg as ClassDictionary
            for (const key in objArg) {
                if (Object.hasOwn(objArg, key) && objArg[key]) {
                    classes.push(key)
                }
            }
            return
        }
    })

    return classes.join(' ')
}