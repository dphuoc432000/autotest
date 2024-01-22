import data from "../../../../data/StageModel.json" assert { type: 'json' };

const stageModel = function () {
    this.width = 0;
    this.height = 0;
}

stageModel.prototype.parse = function(jsonString){
    // this = jsonString.stage
    console.log(stageModel);
}
console.log(data)
stageModel.prototype.parse(data)
