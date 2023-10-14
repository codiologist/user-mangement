const Joi = require("joi");

const profile = Joi.object({
	id: Joi.string().required(),
});

const active = Joi.object({
	id: Joi.string().required(),
});

const inactive = Joi.object({
	id: Joi.string().required(),
});

const update = Joi.object({
	firstName: Joi.string(),
	lastName: Joi.string(),
	date_of_birth: Joi.string(),
	expertise: Joi.array(),
	photo: Joi.string(),
	designation: Joi.string(),
	bio: Joi.string(),
	avatar: Joi.string(),
});

module.exports.UserValidator = {
	profile,
	active,
	inactive,
	update,
};
