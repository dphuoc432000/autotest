const Group = {

    /**
     * Create new group object in layer
     * @param {object} properties are object contains the group's attributes
     * @return {Group}
     * @link https://konvajs.org/docs/groups_and_layers/Groups.html
     * @link https://konvajs.org/api/Konva.Group.html
     * @description Refer to the attribute of properties at '@link'
     */
    createGroup: (properties) => {
        if(typeof properties === "object")
            return new Konva.Group(properties);
        throw "Error: properties passed createGroup function should be object" 
    },
    
}

export default Group;