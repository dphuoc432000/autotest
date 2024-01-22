import Utils from "./common/Utils.js";
import Layer from "./konva/Layer.js";
import Stage from "./konva/Stage.js";
import Shapes from "./konva/shapes/Shapes.js";
import Text from "./konva/text/Text.js";
import "./libs/konva.js";

const STAGE_CONTAINER_ID = "canvas-container";
const stageWidth =
    document.getElementsByTagName("body")[0].offsetWidth;
const stageHeight =
    document.getElementsByTagName("body")[0].offsetHeight;
const stageObject = {
    containerId: STAGE_CONTAINER_ID,
    width: stageWidth,
    height: stageHeight,
};
const stage = Stage.createStage(
    stageObject.containerId,
    stageObject.width,
    stageObject.height,
);

const layer = Layer.createLayer();

const text = Text.createText({
    x: 20,
    y: 60,
    text: "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
    fontSize: 18,
    fontFamily: 'Calibri',
    fill: '#555',
    width: 300,
    padding: 20,
    align: 'center',
})

const rect = Shapes.createRectangle({
    x: 20,
    y: 20,
    width: 100,
    height: 500,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
});

Layer.addTextToShapeOfLayer(
    [
        {
            // x: 20,
            // y: 60,
            text: "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
            fontSize: 18,
            fontFamily: 'Calibri',
            fill: '#555',
            // width: 300,
            padding: 20,
            align: 'center',
        },
    ],
    rect,
    layer
)

// Layer.addShapeToLayer(rect, layer);
// Layer.addTextToLayer(text, layer)
Stage.addLayerToStage(layer, stage);




import "../database/Database.js";

