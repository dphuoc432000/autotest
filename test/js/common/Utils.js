import "../libs/konva.js";

const Utils = {
    checkDataType: (data, type) => {
        if(typeof data === type)
            return;
        throw `Error: ${data} should be ${type}`;
    },

    checkArray: (array) => {
        const result = Array.isArray(array);
        if(result)
            return;
        throw `Error: ${array} should be array`;
    },

    checkShapeKonva: (shape) => {
        if(shape instanceof Konva.Shape)
            return;
        throw `Error: ${shape} should be the Konva's shape`;
    }
}

export default Utils;