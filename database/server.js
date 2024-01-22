// const config = require('dotenv').config().parsed;

// const JSON_SERVER_HOST = config.JSON_SERVER_HOST;

// const converLink = (...params) => {
//     let link = JSON_SERVER_HOST;
//     params.forEach(param => {
//         link += "/" + param;
//     })
//     return link;
// }

const JsonGateway = {

    /**
     * @param {string} model
     * @param {string} queryType
     * @returns {JSON}
     * @link https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file#routes
     * @description Using Routes pattern
     */
    route: (model, queryType = QUERY_TYPE_SELECT) => {
        return db[model];
    },

    /**
     * @param {string} model
     * @param {string} id
     * @returns {JSON}
     * @link https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file#routes
     * @description Using Routes pattern. get json of model by id 
     */
    routeId: (model, id) => {
        const modelData = db[model];
        return modelData.filter((data) => {
            return data.id === id;
        });
    }
}

// console.log(JsonGateway.routeId("stages", "stage_id_3"));

// export default JsonGateway;