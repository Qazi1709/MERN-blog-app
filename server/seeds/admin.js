import RegisterModel from "../modals/registerModel.js";
import dbConnect from "../dbConnect.js";
dbConnect();

async function insertAdmin() {
    try {
        let admin = {
            name: "Qazi Hassan Siddiqui",
            email: "hassansiddiqui1709@gmail.com",
            password: "Hassan@123",
            role: "admin",
        };
        let adminData = new RegisterModel(admin);
        await adminData.save();
        console.log("Admin Added Successfully");
    } catch (error) {
        console.error(error);
    }
}

insertAdmin();