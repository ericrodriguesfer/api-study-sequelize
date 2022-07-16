import { Joi } from "celebrate";

const createTeacherValidator = Joi.object().keys({
  name: Joi.string().required(),
});

const createCourseValidator = Joi.object().keys({
  name: Joi.string().required(),
  id_teacher: Joi.number().required(),
});

const createSessionValidator = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const checkTokenValidator = Joi.object({
  authorization: Joi.string().required(),
}).unknown();

export {
  createTeacherValidator,
  createCourseValidator,
  createSessionValidator,
  checkTokenValidator,
};
