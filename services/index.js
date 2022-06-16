const Champion = require('../models/championModel')

const getChampion = async (name) => {
    try {
        const postFetched = await Champion.findOne(name);
        return {
            ...postFetched._doc,            
        }
    } catch (error) {
        throw error
    }
}

const getAllChampions = async () => {
    try {
        const championsFetched = await Champion.find()
        return championsFetched.map(post => {
            return {
            ...post._doc,          
            }
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
	champion: getChampion,
	allChampion: getAllChampions
}