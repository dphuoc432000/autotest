import Utils from "../common/Utils.js";
import "../libs/konva.js";
import Text from "./text/Text.js";
import Group from "./Group.js";

const Layer = { 

    /**
     * Create new layer
     * @returns {Layer} Layer
     */
    createLayer: () => {
        const layer = new Konva.Layer();
        return layer;
    },

    /**
     * Add shape to layer
     * @param {Shape} shape is shape object
     * @param {Layer} layer is layer object 
     */
    addShapeToLayer: (shape, layer) => {
        layer.add(shape);
    },

    /**
     * Add text to layer
     * @param {Text} text is text object
     * @param {Layer} layer is layer object 
     */
    addTextToLayer: (text, layer) => {
        layer.add(text);
    },

    addTextToShapeOfLayer: (textObjArray, shape, layer) => {
        
        // If the check shows no errors, continue. 
        // Otherwise stop
        Utils.checkShapeKonva(shape);
        Utils.checkArray(textObjArray);
        const attrsShape = shape.attrs;

        // Convert text element in textObjList list to Konva's text object
        const textObjList = textObjArray.map((textObj) => {
            textObj.wrap = "word";
            textObj.x = attrsShape.x;
            textObj.y = attrsShape.y;
            textObj.width = attrsShape.width;
            textObj.height = attrsShape.height
            return Text.createText(textObj);
        })

        const group = Group.createGroup({...attrsShape, draggable: true});
        group.add(shape);
        textObjList.forEach(textObj => {
            group.add(textObj);
        });
        layer.add(group)
        console.log(group)

    }
};

export default Layer;