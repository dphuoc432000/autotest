import "../../libs/konva.js";

const Shapes = {

    /**
     * Create new rectangle object in layer
     * @param {object} properties are object contains the rectangle's attributes
     * @return {Rect}
     * @link https://konvajs.org/docs/shapes/Rect.html
     * @link https://konvajs.org/api/Konva.Rect.html
     * @description Refer to the attribute of properties at '@link'
     */
    createRectangle: (properties) => {
        if(typeof properties === "object")
            return new Konva.Rect(properties)
        throw "Error: properties passed createRectangle function should be object" 
    }
};

export default Shapes;