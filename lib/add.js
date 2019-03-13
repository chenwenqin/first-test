/**
 * 大数相加
 * @param {长字符串，由数字组成，且超过js默认能处理的数字长度} a 
 * @param {长字符串，由数字组成，且超过js默认能处理的数字长度} b 
 */
function add(a, b) {
    const aLength = a.length;
    const bLength = b.length;
    let maxLength = aLength > bLength ? aLength + 1 : bLength + 1;
    let aa = a.padStart(maxLength, 0);
    let bb = b.padStart(maxLength, 0);
    console.log('aa', aa);
    console.log('bb', bb);
    let cc = [];
    let isOver = false;
    for (let i = maxLength - 1; i >= 0; i--) {
        const ai = parseInt(aa[i]);
        const bi = parseInt(bb[i]);
        let ci = ai + bi;
        console.log('ai', ai);
        console.log('bi', bi);
        console.log('ci', ci);
        if (isOver) {
            ci++;
        }
        isOver = false;
        if (ci >= 10) {
            isOver = true;
            ci -= 10;
        }
        cc.unshift(ci);
    }
    if (cc[0] === 0) {
        cc.shift();
    }
    return cc.join('');
}

module.exports = add;