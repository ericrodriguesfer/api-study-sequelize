import { Joi } from "celebrate";

const createTeacherValidator = Joi.object().keys({
  name: Joi.string().required(),
});

const createCourseValidator = Joi.object().keys({
  name: Joi.string().required(),
  id_teacher: Joi.number().required(),
});

export { createTeacherValidator, createCourseValidator };
