
export default function clone(fn) {
    let func = new Function('return ' + (fn || this).toString())();
    return Object.assign(func, this);
}
