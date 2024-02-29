-- run commands one after one

-- create database gcampus;

-- use gcampus;

create table departments(
deptId int primary key,
deptName varchar(5) not null,
medium varchar(10) not null,
headOfDept int not null
);

insert into departments (deptId,deptName,medium,headOfDept) values (101,"BCOM","Gujarati",11001);
insert into departments (deptId,deptName,medium,headOfDept) values (102,"BCOM","English",11002);
insert into departments (deptId,deptName,medium,headOfDept) values (103,"BBA","English",11003);
insert into departments (deptId,deptName,medium,headOfDept) values (104,"BCA","English",11004);

-- select * from departments;

create table classes(
classId int primary key,
class varchar(10) not null,
deptId int not null,
facultyId int not null,
fees int not null
);

insert into classes (classId,class,deptId,facultyId,fees) values (1101,"FY",101,11005,6765);
insert into classes (classId,class,deptId,facultyId,fees) values (1102,"SY",101,11006,6275);
insert into classes (classId,class,deptId,facultyId,fees) values (1103,"TY",101,11007,6925);
insert into classes (classId,class,deptId,facultyId,fees) values (1104,"FY",102,11008,6765);
insert into classes (classId,class,deptId,facultyId,fees) values (1105,"SY",102,11009,6275);
insert into classes (classId,class,deptId,facultyId,fees) values (1106,"TY",102,11010,6925);
insert into classes (classId,class,deptId,facultyId,fees) values (1107,"FY",103,11011,11425);
insert into classes (classId,class,deptId,facultyId,fees) values (1108,"SY",103,11012,12345);
insert into classes (classId,class,deptId,facultyId,fees) values (1109,"TY",103,11013,11725);
insert into classes (classId,class,deptId,facultyId,fees) values (1110,"FY",104,11014,15625);
insert into classes (classId,class,deptId,facultyId,fees) values (1111,"SY",104,11015,13945);
insert into classes (classId,class,deptId,facultyId,fees) values (1112,"TY",104,11016,13365);

-- SELECT * FROM CLASSES;

create table faculties(
facultyId int primary key,
fname varchar(15) not null,
lname varchar(15) not null,
gender varchar(10) not null,
qualification varchar(20),
classId int,
status varchar(10) default "active"
);

insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11001,"Jatin","Patel","Male","MCOM",NULL);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11002,"Priyanka","Shah","Female","MCOM",NULL);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11003,"Anjali","Verma","Male","MBA",NULL);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11004,"Ramashankar","Pandey","Male","MCA",NULL);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11005,"Mahesh","Jha","Male","MCOM",1101);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11006,"Satish","Reddy","Male","MCOM",1102);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11007,"Sakshi","Patil","Female","MCOM",1103);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11008,"Reshma","Khana","Female","MCOM",1104);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11009,"Malik","Sheikh","Male","MCOM",1105);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11010,"Aditya","Pathak","Male","MCOM",1106);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11011,"Sheetal","Shukla","Female","MBA",1107);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11012,"Pradeep","Malik","Male","MBA",1108);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11013,"Ronak","Medhat","Male","MBA",1109);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11014,"Payal","Mishra","Female","MCA",1110);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11015,"Bhagyashree","Soni","Male","MCA",1111);
insert into faculties (facultyId,fname,lname,gender,qualification,classId) values (11016,"Shyam","Kumar","Male","MCA",1112);

-- select * from faculties;

create table students(
sid int primary key auto_increment,
fname varchar(20) not null,
mname varchar(20) not null,
lname varchar(20) not null,
dob date not null,
gender varchar(10) not null,
blood varchar(5) not null,
address varchar(75) not null,
city varchar(20) not null,
state varchar(20) not null,
phone varchar(10) not null,
email varchar(40) not null,
tenthSchool varchar(40) not null,
tenthPassingYear Year not null,
tenthPercentage varchar(5) not null,
twelfthSchool varchar(40) not null,
twelfthPassingYear Year not null,
twelfthPercentage varchar(5) not null,
deptId int not null,
classId int not null,
status varchar(10) default "inactive"
);

-- select * from students;
 
-- drop table students;

insert into students
(fname,mname,lname,dob,gender,blood,
address,city,state,phone,email,
tenthSchool,tenthPassingYear,tenthPercentage,
twelfthSchool,twelfthPassingYear,twelfthPercentage,
deptId,classId)
 values 
('ayush','sanju','kishore','2024-01-01',
'Male','A+','Bhestan','Surat','Gujarat',
'9876543210',
'web.developers.2021.2024@gmail.com','Gurukrupa',
'2019','85','SMT GN Pandya','2021','80',104,1112);


create table feedbacks(
srno int primary key auto_increment,
fullname varchar(20) not null, 
email varchar(40) unique,
phone varchar(10) not null,
message varchar(255) not null,
status varchar(10) default "active" 
);

-- drop table feedbacks;


select * from feedbacks;
update feedbacks set status = 'active';

select * from departments;
select d.deptId, d.deptName, d.medium, concat(f.fname," ",f.lname) as headOfDept, count(s.sid)  from departments d, faculties f,students s where d.headOfDept = f.facultyId and d.deptId = s.deptId group by s.deptId;

select * from faculties where status = 'active';
