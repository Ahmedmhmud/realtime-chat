function validatePhoneNumberEG(pn) {
    const VALID_PREFIXES = new Set(["010", "011", "012", "015"]);

    if (typeof pn === 'string') {
        const len = pn.length;
        const prefix = pn.substring(0, 3);
        if (
            VALID_PREFIXES.has(prefix) 
            && len === 11
        ) return true;
    }

    return false;
}

export {
    validatePhoneNumberEG
}
