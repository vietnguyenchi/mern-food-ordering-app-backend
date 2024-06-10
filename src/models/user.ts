import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	auth0Id: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
	},
	addressLine1: {
		type: String,
	},
	country: {
		type: String,
	},
	city: {
		type: String,
	},
});

const User = mongoose.model('User', userSchema);

export default User;
