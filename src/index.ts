import mongoose from "mongoose";
import Password from "./schema-types/password";


// Register the custom schema types with Mongoose
(mongoose.Schema.Types as any).Password = Password;

// Export the schema type for external use
export { 
    Password
};
