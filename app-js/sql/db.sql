CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

create table employee (
	id UUID primary key default uuid_generate_v4(),
	name VARCHAR(255) not null,
	role VARCHAR(255),
	birthday DATE
);

insert into employee (name, role, birthday) 
values ('José Antonio Silva', 'Product Manager', '1982-05-15');