// const Favorite = require('../models/favorite');
// const Product = require('../models/product');
// const shop = require('../models/shop');
// const User = require('../models/user')

const { fakeUser, fakeProduct, fakeShop, fakeFavorite } = require("../database/fakeDatabase");


const emailExist = async (email = "") =>{
    const exist =  fakeUser.find(user => {return user.email === email && user.platform === "vitromex"})
    if(exist){
        throw new Error("Email ya registrado")
    }
}
const emailExistArko = async (email = "") =>{
    const exist =  fakeUser.find(user => {return user.email === email && user.platform === "arko"})
    if(exist){
        throw new Error("Email ya registrado")
    }
}

const exitUserById =async ( id ) => {
    const exist = fakeUser.find(user => {return user.id === parseInt(id)})
    if(!exist){
        throw new Error(`El id no existe ${id}`);
    }
}
const exitProductById =async ( id ) => {
    const exist = fakeProduct.find(product => {return product.id === parseInt(id)})
    if(!exist){
        throw new Error(`El producto con el id no existe ${id}`);
    }
}
const existShopById =async ( id ) => {
    const exist = fakeShop.find(shop => {return shop.id === parseInt(id)})
    if(!exist){
        throw new Error(`la tienda con el id no existe ${id}`);
    }
}

const existFavoriteId =async ( id ) => {
    const exist = fakeFavorite.find(favorite => {return favorite.id === parseInt(id)})
    if(!exist){
        throw new Error(`El id no existe ${id}`);
    }
}


module.exports = {
    emailExist,
    exitUserById,
    exitProductById,
    existFavoriteId,
    existShopById,
    emailExistArko
}