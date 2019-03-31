export const obj2arr = (obj: Object) =>
    Object.entries(obj).reduce<string[]>((acc, a) => [...acc, ...a], []);