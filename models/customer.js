const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const customerSchema = new mongoose.Schema(
	{
		name: String,
		password: String,
		address: String,

		// primary key
		email: {
			type: String,
			unique: true
		},

		contact: String
	},
	{
		versionKey: false
	}
);

customerSchema.pre("save", function(next) {
	let user = this;
	if (!user.isModified("password")) {
		return next();
	}
	let hash = bcrypt.hashSync(user.password);
	user.password = hash;
	next();
});

customerSchema.methods.comparePassword = function(password) {
	var user = this;
	return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model("Customer", customerSchema);
