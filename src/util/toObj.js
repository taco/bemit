import isEmpty from 'is-empty';

export const toObj = val => {
    if (isEmpty(val)) {
        return undefined;
    }

    if (typeof val === 'string') {
        return { [val]: true };
    }

    if (Array.isArray(val)) {
        return val.reduce((prev, v) => {
            prev[v] = true;
            return prev;
        }, {});
    }

    if (typeof val === 'object') {
        return val;
    }

    return undefined;
};
