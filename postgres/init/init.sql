CREATE TABLE IF NOT EXISTS public.teachers (
	id SERIAL NOT NULL PRIMARY KEY,
  	name VARCHAR(100) NOT NULL,
  	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NULL
);

ALTER TABLE public.teachers OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS public.courses (
	id SERIAL NOT NULL PRIMARY KEY,
  	name VARCHAR(30) NOT NULL,
  	id_teacher INTEGER NOT NULL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP NULL,
  
  	CONSTRAINT courses_teacher_fkey FOREIGN KEY (id_teacher) REFERENCES public.teachers(id)
);

ALTER TABLE public.courses OWNER TO "postgres";

INSERT INTO public.teachers (name, created_at, updated_at) VALUES ('Maria Góis Santos', '2022-07-16T18:42:36.719Z', '2022-07-16T18:42:36.719Z');
INSERT INTO public.teachers (name, created_at, updated_at) VALUES ('João da Silva', '2022-07-16T18:42:36.719Z', '2022-07-16T18:42:36.719Z');

INSERT INTO public.courses (name, id_teacher, created_at, updated_at) VALUES ('Engenharia de Software', '1', '2022-07-16T18:42:36.719Z', '2022-07-16T18:42:36.719Z');
INSERT INTO public.courses (name, id_teacher, created_at, updated_at) VALUES ('Engenharia da Computação', '1', '2022-07-16T18:42:36.719Z', '2022-07-16T18:42:36.719Z');
INSERT INTO public.courses (name, id_teacher, created_at, updated_at) VALUES ('Design Digital', '2', '2022-07-16T18:42:36.719Z', '2022-07-16T18:42:36.719Z');
INSERT INTO public.courses (name, id_teacher, created_at, updated_at) VALUES ('Sistemas da Informação', '2', '2022-07-16T18:42:36.719Z', '2022-07-16T18:42:36.719Z');
INSERT INTO public.courses (name, id_teacher, created_at, updated_at) VALUES ('Ciência da Computação', '1', '2022-07-16T18:42:36.719Z', '2022-07-16T18:42:36.719Z');


