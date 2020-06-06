-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 06. Jun, 2020 12:43 PM
-- Tjener-versjon: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `way_in`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `bachelor_projects`
--

CREATE TABLE `bachelor_projects` (
  `id` int(3) NOT NULL,
  `title` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `project_description` varchar(1000) NOT NULL,
  `faculty` varchar(4) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_contact` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(2) NOT NULL,
  `no_of_students` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `bachelor_projects`
--

INSERT INTO `bachelor_projects` (`id`, `title`, `location`, `project_description`, `faculty`, `company_name`, `company_contact`, `email`, `phone`, `no_of_students`) VALUES
(1, 'Web solution for fishing industry', 'Oslo', 'In this bachelor project, you are expected to design and develop a websolution for us.\r\n<br><br>\r\nIt is exactly what it says on the tin. During this project a websolution will be designed, and later developed, by you and your group. We are a company that does not develop nor design websolutions, therefore we are looking to you students to help us with this.\r\n<br><br>\r\nThere are many things that need to be developed during this project as this will be a websolution that needs to satisfy the needs of the company. This list will be provided to you at a later date.\r\n<br><br>\r\nThe language of this websolution will be left to you, as we do not have much experience with these things, but we want to be included in the process as much as possible. This is a wonderful opportunity and will help you greatly. And also us, as we need a websolution to be designed and developed for us.', 'AD', 'ASCO', 'Eri Otto', 'erio@asco.com', 233222444, 3),
(2, 'Design a web solution', 'Oslo', '\r\nWe have an ambition to satisfy our customers 120%. In this project, you are going to work and design a web solution together with our team.\r\n<br><br>\r\nOur team has developed many solutions and during this bachelor project you will help them with a currently ongoing solution for one of our many clients. Our team leader will help and assist you in this process as you will be handed a certain amount of features to develop as a group.\r\n<br><br>\r\nThere are many things that need to be developed during this project as this will be a websolution that needs to satisfy the needs of the company. This list will be provided to you at a later date.\r\n<br><br>\r\nThe language of this websolution is already decided, it will not be PHP, as our team has already started development, but we want to be included in as many descicions made during the process as possible to impart a valuable learning opportunity. And also because we believe you will be able to bring important and useful insight.', 'AD', 'koss', 'Magnus Karl Karlsen', 'magnusk@koss.com', 233222563, 4),
(3, 'Design Human interaction', 'Trondheim', 'In this bachelor project, you are expected to design and develop a solution to an app for eldery people.\r\n<br><br>\r\nOur team has gotten an assignment that they have been working on and we would like to include you in this process. It is a big process, but we believe in you and your ability to excell even in difficult times.\r\n<br><br>\r\nThis solution would need to be developed as an app, as we mentioned in the first line in case you forgot, because that is what many elderly people use now I suppose. It will mainly be for IOS, but there is an opporunity for Android if you have the passion.\r\n<br><br>\r\nOur team will be there and support you the entire way. ', 'AD', 'Helse', 'Lauran Mari Loss', 'lauranml@helse.com', 23902344, 4),
(4, 'Design Researcher', 'Gjøvik', 'We are looking for you who is enthusiastic about design and human interaction.\r\n<br><br>\r\nIf this is you, we might be the company for you!\r\nWe are a small-scale company focused upon every aspect of human interaction and how we interact with design. We work close with humans in general, especially when they\'re clients, helping design and create user friendly solutions regardles of platform or device. \r\n<br><br>\r\nWith us you will get valuable work experience in a busy and hectic, but incredibly supportive, environment. Our offices are small and we foster a strong sense of community within the company. You will be followed up closely by your superiors, and all other humans who may enter our offices, and encouraged to participate in as many activites as possible.\r\n<br>\r\nWe also host human interaction study nights regularly that we encourage all our interns to participate in freely. \r\n<br>\r\nWe are localised centraly in whichever city the application says we\'re localised in. Easily accessibl', 'HF', 'CISCO', 'Karen Karson', 'Karen@Karson.com', 45678901, 1),
(5, 'UX-designer in Digital Banking Services', 'Trondheim', 'Are you passionate about interaction design?\r\nNeither are we! We are a very large company focused upon learning as much about interaction design as possible. \r\n<br><br>\r\nWe work close with several local and international clients creating user friendly solutions.\r\n<br><br>\r\nWith us you will get to teach us valuable information in a safe and encouraging environment. Our offices are big and we foster a strong sense of community within the company. You will be followed up closely by your superiors and encouraged to participate in as many activites as possible.\r\n\r\nWe also host WCAG 2.1 documentation reading evenings regularly that we encourage all our interns to participate in freely. <br>\r\n\r\n\r\n\r\nWhether you\'re interested in design, interaction, the U or the X in UX design or is even slightly passionate about the wcag regulations we encourage you to apply!', 'AD', 'Every', 'Lars Larsen', 'Lars@Larsen.com', 9876543, 1);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `chosen_bach_projects`
--

CREATE TABLE `chosen_bach_projects` (
  `Email` varchar(30) NOT NULL,
  `bach_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `chosen_bach_projects`
--

INSERT INTO `chosen_bach_projects` (`Email`, `bach_id`) VALUES
('paulmj@stud.ntnu.no', 1),
('paulmj@stud.ntnu.no', 2),
('kaiww@stud.ntnu.no', 1),
('kaiww@stud.ntnu.no', 2),
('kaiww@stud.ntnu.no', 3);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `chosen_projects`
--

CREATE TABLE `chosen_projects` (
  `Email` varchar(50) NOT NULL,
  `project_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `chosen_projects`
--

INSERT INTO `chosen_projects` (`Email`, `project_id`) VALUES
('tres@stud.ntnu.no', 1),
('tres@stud.ntnu.no', 2),
('tres@stud.ntnu.no', 3),
('gusseland@stud.ntnu.no', 1),
('mag@stud.ntnu.no', 1),
('hunm@stud.ntnu.no', 1),
('bug@stud.ntnu.no', 1),
('meganl@stud.ntnu.no', 1),
('meganl@stud.ntnu.no', 2),
('meganl@stud.ntnu.no', 3),
('lisamm@stud.ntnu.no', 1),
('lisamm@stud.ntnu.no', 2),
('karljj@stud.ntnu.no', 1),
('karljj@stud.ntnu.no', 2),
('doral@stud.ntnu.no', 1),
('doral@stud.ntnu.no', 2),
('doral@stud.ntnu.no', 3);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `companies`
--

CREATE TABLE `companies` (
  `company_id` int(3) NOT NULL,
  `company_name` varchar(60) NOT NULL,
  `contact_person` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `tel` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `companies`
--

INSERT INTO `companies` (`company_id`, `company_name`, `contact_person`, `Email`, `tel`) VALUES
(1, 'Evry', 'Marie Berit Hoff', 'mariebh@evry.com', '33422312'),
(2, 'Design coop.', 'Bjørn Geir Ralf', 'bjorngr@designcoop.com', '45543221'),
(3, 'ContaAS', 'Hansen Marin Stuff', 'hansenms@contaas.com', '90087655'),
(4, 'CISCO', 'Sari Inge Hage', 'sariih@cisco.com', '56343212'),
(5, 'InDesign', 'Lea Kristiansen', 'leak@indesign.com', '89997633');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `company_ba_suggestion`
--

CREATE TABLE `company_ba_suggestion` (
  `company_id` int(3) NOT NULL,
  `contact_person` varchar(60) NOT NULL,
  `phone_no` int(8) NOT NULL,
  `email` varchar(50) NOT NULL,
  `project_title` varchar(100) NOT NULL,
  `project_description` varchar(1000) NOT NULL,
  `project_duration` varchar(15) NOT NULL,
  `start_date` varchar(15) NOT NULL,
  `location` varchar(15) NOT NULL,
  `no_of_stud` enum('1','2','3','4') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `company_ba_suggestion`
--

INSERT INTO `company_ba_suggestion` (`company_id`, `contact_person`, `phone_no`, `email`, `project_title`, `project_description`, `project_duration`, `start_date`, `location`, `no_of_stud`) VALUES
(2, 'Kiki Mero Bosstad', 33355666, 'kikid@designcoop.com', 'Developing a new system', 'Challenge developing a solution with a new system!', 'less than 6 mon', 'fall 2020', 'Trondheim', '3'),
(3, 'Leo Davi', 55566788, 'leol@contaas.com', 'Web solution', 'Develop a web solution for our system', 'less than 6 mon', 'fall 2020', 'Stavanger', '2'),
(3, 'Merple Logan', 2344233, 'merplel@contaas.no', 'Design from the scratch ', 'This is a suitable bachelor project for ones who are ambitious and achieve a big thing.', 'less than 6 mon', 'spring2021', 'Oslo', '3');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `company_int_suggestion`
--

CREATE TABLE `company_int_suggestion` (
  `company_id` int(3) NOT NULL,
  `contact_person` varchar(60) NOT NULL,
  `phone_no` int(8) NOT NULL,
  `email` varchar(50) NOT NULL,
  `project_title` varchar(100) NOT NULL,
  `project_description` varchar(1000) NOT NULL,
  `project_duration` varchar(30) NOT NULL,
  `start_date` varchar(15) NOT NULL,
  `location` varchar(15) NOT NULL,
  `no_of_stud` enum('1','2','3','4') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `company_int_suggestion`
--

INSERT INTO `company_int_suggestion` (`company_id`, `contact_person`, `phone_no`, `email`, `project_title`, `project_description`, `project_duration`, `start_date`, `location`, `no_of_stud`) VALUES
(2, 'Lisa', 0, 'lisan@designcoop.com', 'Designing an application', 'An opportunity to learn the design process to develop an app!', '', '', 'Oslo', '2'),
(5, 'Yo', 456334232, 'yones@designint.com', 'UI project', '', 'moreThan6month', 'spring2020', 'Oslo', '1'),
(5, 'Joe Jon', 22344322, 'joej@indesign.coop', 'Web development', 'Develop a web solution with us!', 'lessThan6month', 'fall2020', 'Gjøvik', '2');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `internships`
--

CREATE TABLE `internships` (
  `id` int(3) NOT NULL,
  `title` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `project_description` text NOT NULL,
  `faculty` varchar(4) NOT NULL,
  `company_name` varchar(50) NOT NULL,
  `company_contact` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(2) NOT NULL,
  `no_of_students` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `internships`
--

INSERT INTO `internships` (`id`, `title`, `location`, `project_description`, `faculty`, `company_name`, `company_contact`, `email`, `phone`, `no_of_students`) VALUES
(1, 'Front-End Trainee Developer', 'Oslo', 'Are you interested in web development and challenge your skills? Then you can learn with us!\r\n<br><br>\r\nWe are a small-scale company focused upon every aspect of web development. We work close with several local and international clients creating websolutions.\r\n\r\nWith us you will get valuable work experience in a safe and encouraging environment. Our offices are small and we foster a strong sense of community within the company. You will be followed up closely by your superiors and encouraged to participate in as many activites as possible.\r\n\r\nWe also host coding nights regularly that we encourage all our interns to participate in freely. <br>\r\nWe are localised centraly in whichever city the application says we\'re localised in. Easily accessible both by bus, car, bike or just your legs if you prefer to walk. If you have any questions do not hesitate to give us a call!\r\n<br><br>\r\nWhether you\'re interested in front-end, back-end or just have the smallest of fire for the world wide web we encourage you to apply!\r\n', 'AD', 'ContaAS', 'Emil Emilsen', 'Emil@Emilsen.com', 12345678, 2),
(2, 'UX-designer in Digital Banking Services', 'Trondheim', 'Are you passionate about interaction design?\r\nNeither are we! We are a very large company focused upon learning as much about interaction design as possible. \r\n<br><br>\r\nWe work close with several local and international clients creating user friendly solutions.\r\n<br><br>\r\nWith us you will get to teach us valuable information in a safe and encouraging environment. Our offices are big and we foster a strong sense of community within the company. You will be followed up closely by your superiors and encouraged to participate in as many activites as possible.\r\n\r\nWe also host WCAG 2.1 documentation reading evenings regularly that we encourage all our interns to participate in freely. <br>\r\n\r\n\r\n\r\nWhether you\'re interested in design, interaction, the U or the X in UX design or is even slightly passionate about the wcag regulations we encourage you to apply!', 'AD', 'Every', 'Lars Larsen', 'Lars@Larsen.com', 9876543, 1),
(3, 'Design Researcher', 'Gjøvik', 'We are looking for you who is enthusiastic about design and human interaction.\r\n<br><br>\r\nIf this is you, we might be the company for you!\r\nWe are a small-scale company focused upon every aspect of human interaction and how we interact with design. We work close with humans in general, especially when they\'re clients, helping design and create user friendly solutions regardles of platform or device. \r\n<br><br>\r\nWith us you will get valuable work experience in a busy and hectic, but incredibly supportive, environment. Our offices are small and we foster a strong sense of community within the company. You will be followed up closely by your superiors, and all other humans who may enter our offices, and encouraged to participate in as many activites as possible.\r\n<br>\r\nWe also host human interaction study nights regularly that we encourage all our interns to participate in freely. \r\n<br>\r\nWe are localised centraly in whichever city the application says we\'re localised in. Easily accessible both by bus, car, bike or just your legs if you prefer to walk. If you have any questions do not hesitate to give us a call!\r\n<br><br>\r\nWhether you\'re interested in interacting, design, humans or all three we encourage you to apply!\r\n', 'HF', 'CISCO', 'Karen Karson', 'Karen@Karson.com', 45678901, 1),
(4, 'Web solution for fishing industry', 'Oslo', 'During this internship, you are expected to design and develop a websolution for us.\r\n<br><br>\r\nIt is exactly what it says on the tin. During this project a websolution will be designed, and later developed, by you and your group. We are a company that does not develop nor design websolutions, therefore we are looking to you students to help us with this.\r\n<br><br>\r\nThere are many things that need to be developed during this project as this will be a websolution that needs to satisfy the needs of the company. This list will be provided to you at a later date.\r\n<br><br>\r\nThe language of this websolution will be left to you, as we do not have much experience with these things, but we want to be included in the process as much as possible. This is a wonderful opportunity and will help you greatly. And also us, as we need a websolution to be designed and developed for us.', 'AD', 'ASCO', 'Eri Otto', 'erio@asco.com', 233222444, 3),
(5, 'Design Human interaction', 'Trondheim', 'In this bachelor project, you are expected to design and develop a solution to an app for eldery people.\r\n<br><br>\r\nOur team has gotten an assignment that they have been working on and we would like to include you in this process. It is a big process, but we believe in you and your ability to excell even in difficult times.\r\n<br><br>\r\nThis solution would need to be developed as an app, as we mentioned in the first line in case you forgot, because that is what many elderly people use now I suppose. It will mainly be for IOS, but there is an opporunity for Android if you have the passion.\r\n<br><br>\r\nOur team will be there and support you the entire way. ', 'AD', 'Helse', 'Lauran Mari Loss', 'lauranml@helse.com', 23902344, 4);

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `stud_ba_application`
--

CREATE TABLE `stud_ba_application` (
  `Email` varchar(50) NOT NULL,
  `Fname` varchar(20) NOT NULL,
  `Mname` varchar(20) NOT NULL,
  `Lname` varchar(20) NOT NULL,
  `programme_code` varchar(10) NOT NULL,
  `Mentor` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `stud_ba_application`
--

INSERT INTO `stud_ba_application` (`Email`, `Fname`, `Mname`, `Lname`, `programme_code`, `Mentor`) VALUES
('kaiww@stud.ntnu.no', 'Kai', 'Wao', 'Way', 'BIXD', 'Kari Nordmann'),
('koalal@stud.ntnu.no', 'Koala', 'Jun', 'Lokk', 'BMED', 'Tom Jackson'),
('laurajp@stud.ntnu.no', 'Laura', 'Jusmin', 'Paul', 'BIXD', 'Halard Gomez'),
('paulmj@stud.ntnu.no', 'Paul', 'Marik', 'Juss', 'BIXD', 'Kein Wassar');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `stud_int_application`
--

CREATE TABLE `stud_int_application` (
  `Email` varchar(50) NOT NULL,
  `Fname` varchar(20) NOT NULL,
  `Mname` varchar(20) NOT NULL,
  `Lname` varchar(20) NOT NULL,
  `programme_code` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `stud_int_application`
--

INSERT INTO `stud_int_application` (`Email`, `Fname`, `Mname`, `Lname`, `programme_code`) VALUES
('bug@stud.ntnu.no', 'bugsy', '', 'rogers', 'IMT3541'),
('doral@stud.ntnu.no', 'Dora', 'Lume', 'Lauk', 'IMT3541'),
('gusseland@stud.ntnu.no', 'Vegard', '', 'Gusseland', 'IMT3541'),
('hunm@stud.ntnu.no', 'hun', '', 'humus', 'IMT3541'),
('karljj@stud.ntnu.no', 'Karl', 'Johannes', 'Johan', 'IMT3541'),
('lisamm@stud.ntnu.no', 'Lisa', 'Mello', 'Moana', 'IMT3006'),
('mag@stud.ntnu.no', 'magne', '', 'magnus', 'IMT3541'),
('meganl@stud.ntnu.no', 'Megan', 'Koll', 'Lassel', 'IMT3541'),
('tres@stud.ntnu.no', 'Uno', '', 'Does', 'IMT3541');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `users`
--

CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `users`
--

INSERT INTO `users` (`username`, `password`) VALUES
('paulj', '$2y$10$NGfbm7MvdDoMuWt46mb1o.HqjjvfVyZOUMxKrbJa03NF0coEzAGty');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bachelor_projects`
--
ALTER TABLE `bachelor_projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chosen_bach_projects`
--
ALTER TABLE `chosen_bach_projects`
  ADD KEY `Email` (`Email`);

--
-- Indexes for table `chosen_projects`
--
ALTER TABLE `chosen_projects`
  ADD KEY `Email` (`Email`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `company_ba_suggestion`
--
ALTER TABLE `company_ba_suggestion`
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `company_int_suggestion`
--
ALTER TABLE `company_int_suggestion`
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `internships`
--
ALTER TABLE `internships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stud_ba_application`
--
ALTER TABLE `stud_ba_application`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `stud_int_application`
--
ALTER TABLE `stud_int_application`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bachelor_projects`
--
ALTER TABLE `bachelor_projects`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `company_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `internships`
--
ALTER TABLE `internships`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Begrensninger for dumpede tabeller
--

--
-- Begrensninger for tabell `chosen_bach_projects`
--
ALTER TABLE `chosen_bach_projects`
  ADD CONSTRAINT `chosen_bach_projects_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `stud_ba_application` (`Email`);

--
-- Begrensninger for tabell `chosen_projects`
--
ALTER TABLE `chosen_projects`
  ADD CONSTRAINT `chosen_projects_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `stud_int_application` (`Email`);

--
-- Begrensninger for tabell `company_ba_suggestion`
--
ALTER TABLE `company_ba_suggestion`
  ADD CONSTRAINT `company_ba_suggestion_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`);

--
-- Begrensninger for tabell `company_int_suggestion`
--
ALTER TABLE `company_int_suggestion`
  ADD CONSTRAINT `company_int_suggestion` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
