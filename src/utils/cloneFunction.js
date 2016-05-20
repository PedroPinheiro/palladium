
export default function clone() {
    let func = new Function('return ' + this.toString())();
    return Object.assign(func, this);
}
