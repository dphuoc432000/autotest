import "../libs/konva.js";
import Shapes from "./shapes/Shapes.js";

const Stage = {

    /**
     * Create new stage
     * @param {string} containerId
     * @param {string} width
     * @param {string} height
     * @returns {Stage} stage
     */
    createStage: (containerId, width, height) => {
        console.log(width, height);
        const stage = new Konva.Stage({
            container: containerId,   // id of container <div>
            width: width,
            height: height,
            draggable: true
        });
        return stage;
    },

    /**
     * Add layer to stage
     * @param {Layer} layer is layer object
     * @param {Stage}  stage is stage object
     */
    addLayerToStage: (layer, stage) => {
        stage.add(layer)
    },

};

export default Stage;