const toJSON = (data: Map<any, any>) => {
    const json: { [key: string]: any } = {};
    for (const [key, value] of data) {
        if (json.hasOwnProperty(key)) {
            if (!Array.isArray(json[key])) {
                json[key] = [json[key]];
            }
            json[key].push(value);
        } else {
            json[key] = value;
        }
    }
    return json;
};

const isObject = (val: any) => val && typeof val === "object" && !Array.isArray(val);

const flatten = (obj: { [key: string]: any }) => {
    if (obj === undefined || obj === null) {
        return {};
    }

    const flattened: { [key: string]: any } = {};
    Object.keys(obj).forEach((key) => {
        const value = obj[key];

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            Object.assign(flattened, flatten(value));
        } else {
            flattened[key] = value;
        }
    });

    return flattened;
};

export { toJSON, flatten, isObject };
