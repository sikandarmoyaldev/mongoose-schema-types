import bcrypt from "bcrypt";
import mongoose, { SchemaTypeOptions } from "mongoose";


// Define the number of salt rounds for bcrypt hashing
const SALT_ROUNDS = 10;


export default class Password extends mongoose.SchemaType {    
    constructor(
        key: string, 
        options: SchemaTypeOptions<string>
    ) {
        // Call the parent constructor with the key, options, and type name
        super(key, options, "Password");
    };


    cast(value: string) {
        return bcrypt.hashSync(value, SALT_ROUNDS);
    };


    static compare(password: string, hash: string) {
        return bcrypt.compareSync(password, hash);
    };
};
