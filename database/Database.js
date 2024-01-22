const JSON_DB_WRITE_PATH = "./database/db.json";
const JSON_DB_READ_PATH = "./database/db.json";
const fs = require('fs');
const { randomUUID } = require("crypto");
const QUERY_TYPE_SELECT = "select";
const QUERY_TYPE_INSERT = "insert";
const QUERY_TYPE_UPDATE = "update";
const QUERY_TYPE_DELETE = "delete";

/**
 * Create id
 * @returns {string} id 
 */
const getRandomId = () => {
    return randomUUID();
}

/**
 * Get current datetime
 * @returns {string} current datetime
 */
const getCurrentDateTime = () => {
    return new Date().toJSON();
}

// FUNCTION IS OK
// const checkCondition = (dataCompare, data) => {
//     let dataCompareType = Array.isArray(dataCompare) ? "array" : typeof dataCompare;
//     let dataType = Array.isArray(data) ? "array" : typeof data;
//     let result = false;
//     // console.log(dataCompareType, dataType)
//     if(dataType === dataCompareType){
//         switch (dataCompareType) {
//             case "object":
//                 for (let key in dataCompare) {
//                     // check key of data has key of dataCompare
//                     // if not
//                     if(!data.hasOwnProperty(key)){
//                         result = false;
//                     }
//                     // Otherwise
//                     else{
//                         result = checkCondition(dataCompare[key], data[key]);
//                     }
//                     if(!result)
//                         return result;
//                 }
//                 break;
//             case "array":
//                 const arrayPrimitive_dataCompare = [];
//                 const arrayObject_dataCompare = [];

//                 // Divide data into 2 arrays according to type
//                 dataCompare.forEach(element => {
//                     // data type is primitive
//                     if(["string", "number", "boolean"].includes((typeof element)))
//                         arrayPrimitive_dataCompare.push(element);
//                     // data type is object
//                     else
//                         arrayObject_dataCompare.push(element);
//                 });

//                 // CHECK DATA PRIMITIVE OF dataCompare ARRAY
//                 // If the dataCompare array has data of type primitive
//                 // and all data of primitive type in dataCompare array is part in data array
//                 if(arrayPrimitive_dataCompare.length > 0){
//                     result = arrayPrimitive_dataCompare.every(value => data.includes(value));
//                     if(!result)
//                         return result;
//                 }

//                 // CHECK DATA OBJECT OF data ARRAY
//                 // If the dataCompare array has data of type object
//                 if(arrayObject_dataCompare.length > 0){
//                     // Get data of object type in data
//                     const arrayObject_data = data.filter(element => {
//                         return typeof element === "object";
//                     });

//                     // If the data array does not have data of type object
//                     // -> all data of object type in dataCompare array isn't part in data array
//                     if(!arrayObject_data)
//                         return false;

//                     // If the dataCompare array has more object data than the data array
//                     // -> all data of object type in dataCompare array isn't part in data array
//                     if(arrayObject_dataCompare.length  > arrayObject_data.length)
//                         return false;

//                     // Contrast with the above two conditions
//                     arrayObject_dataCompare.forEach(element_dataCompare => {
//                         arrayObject_data.forEach(element_data => {
//                             result = checkCondition(element_dataCompare, element_data);
//                             if (!result )
//                                 return false;
//                         })
//                     });
//                 }
//                 break;
//             case "string":
//                 result = (dataCompare === data);
//                 // console.log(`compare ${dataCompare} vs ${data}: `, result);
//                 break;
//             case "number":
//                 result = (dataCompare === data);
//                 // console.log(`compare ${dataCompare} vs ${data}: `, result);
//                 break;
//             case "boolean":
//                 result = (dataCompare === data);
//                 // console.log(`compare ${dataCompare} vs ${data}: `, result);
//                 break;
//             default:
//                 result = false
//                 break;
//         }
//     }

//     return result;
// }




// Đang sai: 
//      Lặp theo mảng con (condition)
//      Không cần thiết truyền condition_key_parent, condition_key, data_key_parent, data_key
// Đúng:
//      Lặp theo mảng cha (data)
//      Xoá param truyền không cần thiết  condition_key_parent, condition_key, data_key_parent, data_key
// const getDataByCondition = (condition, condition_key_parent, condition_key, 
//     data, data_key_parent, data_key, tmp) => {
//     if(tmp === null)
//         tmp = {}

//     const dataTemp = {
//         ... data
//     };

//     let isCheck = true;
//     let dataReturn = {};

//     for(let [key, value] of Object.entries(condition)) {
//         if(data.hasOwnProperty(key)){
//             if(
//                 typeof value !== "object" 
//                 && typeof data[key] !== "object"
//                 && typeof value === typeof data[key]
//             ){
//                 if(value === data[key]){
//                     tmp[key] = data[key]
//                     delete dataTemp[key];
//                 }
//                 else
//                     return undefined;
//             }
//             else if(
//                 typeof value === "object" 
//                 && typeof data[key] === "object"
//             ) {
//                 dataReturn = {
//                     ...dataReturn,
//                     ...tmp,
//                 };
//                 dataReturn[key] = getDataByCondition(
//                     condition[key]
//                     , null
//                     , null
//                     , data[key]
//                     , null
//                     , null
//                     , null
//                 );
//                 if(!dataReturn[key])
//                     return undefined
//             }
//         }
//         else
//             return undefined;
//     }

//     if(isCheck){
//         dataReturn = {
//             ...dataReturn,
//             ...tmp,
//             ...dataTemp
//         }
//         return dataReturn;
//     }
//     return undefined;
// }

// var dataReturn2 = {
// };

// var loopBoolean = true;

// const objectTest1 = {
//     "a": 1,
//     "b": 2,
//     // "c": 3,
//     // "d": [
//     //     1, 3, 2, {
//     //         "e": 4,
//     //         "f": "2",
//     //         "g": "5",
//     //         "h": ["6", [7, 8], {
//     //             "i": "8"
//     //         }],
//     //     }
//     // ],
//     j: {
//         "k": 1,
//         "l": 2,
//     }
// }

// const objectTest2 = {
//     "a": 1,
//     "b": 2,
//     "c": 3,
//     // "d": [
//     //     1, 2, 3, {
//     //         "e": 4,
//     //         "f": "2",
//     //         "g": "5",
//     //         "h": ["6", [7, 8], {
//     //             "f": 8
//     //         }],
//     //     }
//     // ],
//     j: {
//         "k": 1,
//         "l": 2,
//         "g": 3,
//     }
// }
// dataReturn2 = getDataByCondition(objectTest1, null, null, objectTest2, null, null, null)
// console.log("dataReturn: ", dataReturn2);

/**
 * Database module
 * @function getDB()
 * @function saveDB(dataJson)
 * @function select()
 * @function insert(data, model)
 * @function update(data, model, condition)
 * @function delete
 */
const Database = {
    /**
     * Get database with Json file
     * @returns {JSON} data
     * @description read file json
     */
    getDB: () => {
        const readFile = fs.readFileSync(JSON_DB_READ_PATH);
        return JSON.parse(readFile);
    },

    /**
     * Save dataJson to Json file
     * @param {JSON} dataJson is JSON data 
     */
    saveDB: (dataJson) => {
        fs.writeFileSync(JSON_DB_WRITE_PATH, JSON.stringify(dataJson));
    },

    /**
     * Insert data to model in database
     * @param {object} data 
     * @param {string} model 
     */
    insert: (data, model) => {
        const db = getDB();
        const id = getRandomId();
        const currentDateTime = getCurrentDateTime();
        const dataInsert = {
            ...data,
            id,
            createTime: currentDateTime,
            updateTime: currentDateTime,
        };

        if (model && data) {
            if (!db[model])
                db[model] = [];
            db[model].push(dataInsert);
            Database.saveDB(db)
        }
    },

    /**
     * Update data of model in database
     * @param {object} dataUpdate 
     * @param {string} model 
     * @param {string} id 
     * @returns {object}
     * @description if the update is a success, return the data update before
     */
    updateByModelId: (dataUpdate, model, model_id) => {
        const db = Database.getDB();
        let dataBeforeUpdate = {};
        let index = null;
        if (db[model]) {
            index = db[model].findIndex((e) => {
                return e.id === model_id
            })

            if (index >= 0 && dataUpdate) {
                let data = db[model][index];
                data = {
                    ...data,
                    ...dataUpdate
                }
                dataBeforeUpdate = { ...(db[model].splice(index, 1, data))[0] };
                Database.saveDB(db);
                return dataBeforeUpdate;
            }
        }
        return {};
    },

    /**
     * Update data of model in database
     * @param {object} data 
     * @param {string} model 
     * @param {object} condition 
     * @description CHƯA PHÁT TRIỂN
     */
    updateByCondition: (data, model, condition) => { return 0; },

    /**
     * select data of model in database
     * @param {string} model 
     * @param {string} id
     * @returns {array}
     * @description If id is null, return all data of the model, otherwise return data mapping id
     */
    selectByModelId: (model, model_id = null) => {
        const db = Database.getDB();
        if (model) {
            if (db[model]) {
                if (model_id === null)
                    return db[model];
                return db[model].filter((e) => e.id === model_id);
            }
        }
        return [];
    },

    /**
     * select data of model in database
     * @param {object} data 
     * @param {string} model 
     * @param {object} condition 
     * @returns {array}
     * @description CHƯA PHÁT TRIỂN
     */
    selectByCondition: (data, model, condition) => { return 0; }
}

// export default Database;

// Database.insert("stages2", {
//     "id": "stage_id_5",
//     "config": {
//         "width": 100,
//         "height": 100
//     },
//     "workplaceId": "workplace_id_1"

// })
