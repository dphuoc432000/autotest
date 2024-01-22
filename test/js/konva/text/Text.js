import "../../libs/konva.js";

const Text = {

    /**
     * Create new text object in layer
     * @param {object} properties are object contains the text's attributes
     * @return {Text}
     * @link https://konvajs.org/docs/shapes/Text.html
     * @link https://konvajs.org/api/Konva.Text.html
     * @description Refer to the attribute of properties at '@link'
     */
    createText: (properties) => {
        if(typeof properties === "object")
            return new Konva.Text(properties)
        throw "properties passed createText function should be object" 
    }
};

export default Text;