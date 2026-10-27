const prisma = require("../database/prisma");

async function getAllEquipments(){
    return await prisma.equipment.findMany({
        orderBy:{id: "desc"}
    });
};

async function getEquipmentById(id){
    return await prisma.equipment.findUnique({
        where: {
            id
        }
    });
};

async function createEquipment(data){
    return await prisma.equipment.create({
        data
    });
};

async function updateEquipment(id,data){
    return await prisma.equipment.update({
        where: {id}, 
        data
    });
};

async function daleteEquipment(id){
    return await prisma.equipment.dalete({
        where: {id}
    });
};

module.exports ={
    getAllEquipments,
    getEquipmentById,
    createEquipment,
    updateEquipment,
    daleteEquipment
};