# Mongoose Schema Types

This repository offers custom schema types for Mongoose, designed to elevate the functionality and security of your MongoDB schemas. Simplify database interactions and ensure robust data validation with these specialized schema types.

## Installation

To install, use npm:

```bash
npm install git+https://github.com/sikandarmoyaldev/mongoose-schema-types.git
```

## Usage

Example Usage

```ts
import mongoose from "mongoose";
import { Password } from "mongoose-schema-types"


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: Password,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);
export default User;
````

## Available Schema Types

- **Password**: Hashes passwords securely using bcrypt for storage.

## Contributing

If you want to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Please make sure to review the [Contribution Guidelines](CONTRIBUTING.md) before contributing.
