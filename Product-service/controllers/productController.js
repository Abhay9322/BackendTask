import { Product } from "../models/product.js";


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: products });
    } catch (error) {
        res.status(500).json("something went wrong");
        console.log(error.message);
    }
}
export const createProduct = async (req, res) => {
    try {
        const { title, description, price, stock, isActive } = req.body;
        const product = await Product({ title, description, price, stock, isActive });
        await product.save();

        res.status(200).json({ message: "Product created successfully" });
    } catch (error) {
        res.status(500).json("Something went wrong");
        console.log({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params, id, req.body, { new: true });
        if (!product) {
            res.status(500).json({ message: "product doesnt exit" });
        }

        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete(req.params.id);
        res.status(200).json({ message: "product deleted successfully" });

    } catch (error) {
        res.status(500).json("Something went wrong");
        console.log(error.message);

    }
}