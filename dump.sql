-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: gcampus
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `classId` int NOT NULL,
  `class` varchar(10) NOT NULL,
  `deptId` int NOT NULL,
  `facultyId` int NOT NULL,
  `fees` int NOT NULL,
  PRIMARY KEY (`classId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1101,'FY',101,11005,6765),(1102,'SY',101,11006,6275),(1103,'TY',101,11007,6925),(1104,'FY',102,11008,6765),(1105,'SY',102,11009,6275),(1106,'TY',102,11010,6925),(1107,'FY',103,11011,11425),(1108,'SY',103,11012,12345),(1109,'TY',103,11013,11725),(1110,'FY',104,11014,15625),(1111,'SY',104,11015,13945),(1112,'TY',104,11016,13365);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `deptId` int NOT NULL,
  `deptName` varchar(50) NOT NULL,
  `medium` varchar(10) NOT NULL,
  `headOfDept` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (101,'Bachelors of Commerce','Gujarati',11001),(102,'Bachelors of Commerce','English',11002),(103,'Bachelor of Business Administration','English',11003),(104,'Bechelors of Computer Application','English',11004);
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculties`
--

DROP TABLE IF EXISTS `faculties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculties` (
  `facultyId` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(15) NOT NULL,
  `lname` varchar(15) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `qualification` varchar(20) DEFAULT NULL,
  `classId` int DEFAULT NULL,
  `experience` int DEFAULT NULL,
  `profile` varchar(40) NOT NULL,
  `password` varchar(16) DEFAULT NULL,
  `status` varchar(10) DEFAULT 'active',
  PRIMARY KEY (`facultyId`)
) ENGINE=InnoDB AUTO_INCREMENT=11019 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculties`
--

LOCK TABLES `faculties` WRITE;
/*!40000 ALTER TABLE `faculties` DISABLE KEYS */;
INSERT INTO `faculties` VALUES (11001,'Jatin','Patel','Male','MCOM',NULL,10,'Downpic.cc-1005817658.jpg',NULL,'active'),(11002,'Priyanka','Shah','Female','MCOM',NULL,11,'Downpic.cc-1310208267.jpg',NULL,'active'),(11003,'Anjali','Verma','Female','MBA',NULL,9,'Downpic.cc-1369845141.jpg',NULL,'active'),(11004,'Ramashankar','Pandey','Male','MCA',NULL,10,'men_faculty.jpg',NULL,'active'),(11005,'Mahesh','Jha','Male','MCOM',1101,8,'Downpic.cc-1288039261.jpg',NULL,'active'),(11006,'Satish','Reddy','Male','MCOM',1102,7,'pexels-vanessa-garcia-6325958.jpg',NULL,'active'),(11007,'Sakshi','Patil','Female','MCOM',1103,2,'Downpic.cc-1148232146.jpg',NULL,'active'),(11008,'Reshma','Khana','Female','MCOM',1104,5,'Downpic.cc-1331422830.jpg',NULL,'active'),(11009,'Malik','Sheikh','Male','MCOM',1105,4,'Downpic.cc-493107388.jpg',NULL,'active'),(11010,'Aditya','Pathak','Male','MCOM',1106,2,'Downpic.cc-1148232039.jpg',NULL,'active'),(11011,'Sheetal','Shukla','Female','MBA',1107,4,'Downpic.cc-678420986.jpg',NULL,'active'),(11012,'Pradeep','Malik','Male','MBA',1108,4,'Downpic.cc-830979102.jpg',NULL,'active'),(11013,'Ronak','Medhat','Male','MBA',1109,2,'Downpic.cc-1420975024.jpg',NULL,'active'),(11014,'Payal','Mishra','Female','MCA',1110,3,'pexels-max-fischer-5212321.jpg',NULL,'active'),(11015,'Bhagyashree','Soni','Female','MCA',1111,4,'Downpic.cc-493069443.jpg',NULL,'active'),(11016,'Shyam','Singh','Male','MCA',1112,2,'Downpic.cc-1500037517.jpg',NULL,'active'),(11017,'Manish','pandey','Male','MCA',NULL,3,'Downpic.cc-1149266269.jpg','manish','active'),(11018,'Ayush','Varma','Male','MCA',NULL,3,'faculty-1711775052624.jpeg','1101','active');
/*!40000 ALTER TABLE `faculties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedbacks`
--

DROP TABLE IF EXISTS `feedbacks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedbacks` (
  `srno` int NOT NULL,
  `fullname` varchar(20) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `phone` varchar(10) NOT NULL,
  `message` varchar(255) NOT NULL,
  `status` varchar(10) DEFAULT 'active',
  `time_stamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedbacks`
--

LOCK TABLES `feedbacks` WRITE;
/*!40000 ALTER TABLE `feedbacks` DISABLE KEYS */;
INSERT INTO `feedbacks` VALUES (1,'Kishore Sunchu','kishoresunchu@gmail.com','8733887244','Good to study here','active','2024-01-20 17:53:15'),(2,'Ayush Varma','Ayush143@gmail.com','9876543210','Faculties are very supportive','active','2024-01-20 19:15:05'),(3,'Sanju','ramashankarpandey@gmail.com','9313384023','College campus is neat and clean','active','2024-02-03 13:57:33'),(4,'Shaym Shukla','shuklashyam@gmail.com','9099285010','I gonna take admission here','active','2024-02-14 03:11:01'),(5,'Ritesh Patel','prites@gmail.com','8778697867','i lived best years of my life','active','2024-02-14 03:21:25'),(6,'Sweta Pandey','psweta@gmail.com','9876543210','Cricket tournament update ?','active','2024-04-07 07:58:25'),(6,'Ronak Pandit','rpandit@gmail.com','9543216782','When does Internal Examination Marks will release ?','active','2024-04-08 10:30:01');
/*!40000 ALTER TABLE `feedbacks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_fees`
--

DROP TABLE IF EXISTS `student_fees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_fees` (
  `feeId` int NOT NULL AUTO_INCREMENT,
  `classId` int NOT NULL,
  `sid` int NOT NULL,
  `status` varchar(5) NOT NULL DEFAULT 'true',
  PRIMARY KEY (`feeId`)
) ENGINE=InnoDB AUTO_INCREMENT=100006 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_fees`
--

LOCK TABLES `student_fees` WRITE;
/*!40000 ALTER TABLE `student_fees` DISABLE KEYS */;
INSERT INTO `student_fees` VALUES (100004,1110,202411003,'true'),(100005,1112,202411001,'true');
/*!40000 ALTER TABLE `student_fees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(20) NOT NULL,
  `mname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(10) NOT NULL,
  `blood` varchar(5) NOT NULL,
  `address` varchar(75) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state` varchar(20) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tenthSchool` varchar(40) NOT NULL,
  `tenthPassingYear` year NOT NULL,
  `tenthPercentage` varchar(5) NOT NULL,
  `twelfthSchool` varchar(40) NOT NULL,
  `twelfthPassingYear` year NOT NULL,
  `twelfthPercentage` varchar(5) NOT NULL,
  `deptId` int NOT NULL,
  `classId` int NOT NULL DEFAULT '0',
  `password` varchar(16) NOT NULL DEFAULT '',
  `profile` varchar(50) NOT NULL,
  `status` varchar(10) DEFAULT 'inactive',
  `verified` varchar(10) NOT NULL DEFAULT 'false',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=202411015 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (202411001,'Ayush','agnivesh','varma','2003-01-11','male','A+','Priyana Green City, Bhestan','Surat','Gujarat','9876543210','ayushverma1101@gmail.com','G.N. Pandya',2018,'80','G.N. Pandya',2020,'78',104,1112,'1101','Ayush.png','active','true'),(202411002,'Ramashanker','Manoj','Pandey','2003-02-13','male','A+','Bhestan','Surat','Gujarat','9313384023','ramashankarpandey@gmail.com','Guru Krupa School',2019,'80','Guru Krupa School',2021,'78',104,1111,'1302','Sanju.jpg','active','true'),(202411003,'Kishore','ambadas','sunchu','2003-12-04','male','A+','kanakpur','Surat','Gujarat','8733887244','kishoresunchu412@gmail.com','L.D. High School',2019,'80','L.D. High School',2021,'78',104,1110,'1101','','active','true'),(202411004,'Komal','Sahebrao','Sonaware','2004-09-09','female','A+','Dindoli','Surat','Gujarat','9099285010','patilkomal939@gmail.com','12 Chhatrapati high school',2019,'80','12 Chhatrapati high school',2021,'78',103,1109,'0909','Komal.jpg','active','true'),(202411005,'Sweta','Sheshnath','Pandey','2004-09-09','female','A+','Bhestan','Surat','Gujarat','7698638209','swetapandey@gmail.com','G.N. Pandya',2019,'80','G.N. Pandya',2021,'78',103,1108,'2904','Sweta.jpg','active','true'),(202411006,'Devanshu','Manoj','Pawar','2004-09-09','male','A+','Sachin','Surat','Gujarat','9510675865','pawardeva@gmail.com','Sunlight School',2019,'80','Sunlight School',2021,'78',103,1107,'1109','Devanshu.png','active','true'),(202411007,'Yash','Dinesh','Makhwana','2003-09-19','male','A+','Sachin','Surat','Gujarat','9913854802','makwanayash@gmail.com','L.D. High School',2019,'80','L.D. High School',2021,'78',102,1106,'1109','Yash.png','active','true'),(202411008,'Dhiraj','Lewis','Sali','2004-08-12','male','A+','Dindoli','Surat','Gujarat','9876543210','salidheeraj@gmail.com','L.D. High School',2019,'80','L.D. High School',2021,'78',102,1105,'1109','Dhiraj.png','active','true'),(202411009,'Akash','Michael','Maurya','2002-10-25','male','A+','Pandesara','Surat','Gujarat','6355923492','akashmaurya@gmail.com','Saraswati Hindi Mandir',2019,'80','Saraswati Hindi Mandir',2021,'78',102,1104,'2510','Akash.jpg','active','true'),(202411010,'Aditya','Michael','Pathak','2003-06-20','male','A+','Pandesara','Surat','Gujarat','7600307488','adityarp07@gmail.com','Saraswati Hindi Mandir',2019,'80','Saraswati Hindi Mandir',2021,'78',101,1103,'2006','Aditya.jpg','active','true'),(202411011,'Vivek','Charles','Vasaa','2003-10-15','male','A+','Sahara Darwaja','Surat','Gujarat','9099811909','vivekvasav07@gmail.com','Saraswati Hindi Mandir',2019,'80','Saraswati Hindi Mandir',2021,'78',101,1102,'1510','Vivek.png','active','true'),(202411012,'Adarsh','Michael','Pathak','2003-02-03','male','A+','Pali','Surat','Gujarat','7600307488','adarsh@gmail.com','Saraswati Hindi Mandir',2019,'80','Saraswati Hindi Mandir',2021,'78',101,1101,'0302','Adarsh.png','active','true'),(202411013,'Ayush','Agnivesh','Varma','2003-01-11','male','B+','179, Priyanka Green Park, Bhestan','Surat','Gujarat','8732953410','vayush7980@gmail.com','Saraswati hindi vidhyalay',2018,'75','Sunflower English Medium school',2020,'60',101,0,'','profilePic-1712550044130.jpeg','inactive','false'),(202411014,'Ayush','Agnivesh','Varma','2003-01-11','male','B+','179, Priyanka Green Park, Bhestan','Saligao','Gujarat','8732953410','vayush798@gmail.com','Saraswati hindi vidhyalay',2018,'80','Sunflower English Medium school',2020,'60',101,0,'','profilePic-1712556126177.png','inactive','false');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-15  2:00:55
