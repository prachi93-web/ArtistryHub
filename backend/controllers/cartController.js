import userModel from "../models/userModel.js"

// add products to user cart
const addToCart = async (req,res) => {
    try {

        const { userId, itemId } = req.body
        
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            cartData[itemId] += 1
        } else {
            cartData[itemId] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success:true, message:"Added To Cart"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}

// update products to user cart
const updateCart = async (req,res) => {

}

// get products added in user cart
const getUserCart = async (req,res) => {

}

export { addToCart,updateCart,getUserCart }