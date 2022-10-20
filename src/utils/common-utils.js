export class CommonUtils {
    static isNullOrEmpty = (obj) => {
        // kiểm tra tham số truyền vào có giá trị hay không ?
        if (obj instanceof Object) {
            if (obj instanceof Array) {
                return obj.length === 0 ? true : false;
            } else {
                const entry = Object.keys(obj);
                return entry.length == 0 ? true : false;
            }
        }
        if (obj == '' || !obj) {
            return true;
        }
        return false;
    };

    static myScroll = (e, time, amount, start) => {
        var eAmt = amount / 100;
        var curTime = 0;
        var scrollCouter = 0;
        const y = window.scrollY;
        while (curTime <= time) {
            window.setTimeout(this.SHS_B, curTime, e, scrollCouter, eAmt, start, y);
            curTime += time / 100;
            scrollCouter++;
        }
        window.scroll(0, y);
    };

    static SHS_B = (e, sc, eAmt, start, y) => {
        let gap = eAmt > 0 ? 10 : -10;
        e.scrollLeft = eAmt * sc + start + gap;
    };
}
