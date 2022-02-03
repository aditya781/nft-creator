class CreateNftLayers{
    constructor(width, height, defaultEdition){
        this.layersOrder=[];
        this.width=width;
        this.height=height;
        this.defaultEdition=defaultEdition;
    }

    insertLayer(name, number){
        this.layersOrder.push({name:name, number:number});
    }
}


const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];
