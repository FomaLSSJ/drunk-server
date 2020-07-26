const { Schema, model } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const UserSchema = new Schema({
	username: {
		type: String,
		unique: false,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	passhash: {
		type: String,
		unique: false,
		required: true,
		select: false
	},
	data: []
}, {
	timestamps: true
});

UserSchema.plugin(paginate);

module.exports = model('User', UserSchema);