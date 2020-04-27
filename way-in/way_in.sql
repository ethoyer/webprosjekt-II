-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2020 at 01:06 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
-- Table structure for table `internships`
--

CREATE TABLE `internships` (
  `id` int(3) NOT NULL,
  `title` varchar(50) NOT NULL,
  `location` varchar(50) NOT NULL,
  `project description` varchar(1000) NOT NULL,
  `faculty` varchar(4) NOT NULL,
  `company name` varchar(50) NOT NULL,
  `company contact` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(2) NOT NULL,
  `no. of students` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `internships`
--

INSERT INTO `internships` (`id`, `title`, `location`, `project description`, `faculty`, `company name`, `company contact`, `email`, `phone`, `no. of students`) VALUES
(1, 'Front-End Trainee Utvikler', 'Oslo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem ex. Proin ac neque arcu. Donec eu auctor metus, vitae faucibus magna. Donec non massa est. Donec ornare ante posuere condimentum rutrum. Donec vel erat sed lectus pharetra sodales. Sed pulvinar scelerisque neque, vel auctor enim iaculis nec. Ut bibendum facilisis dui vel consequat. Phasellus fermentum lectus eleifend ipsum lobortis, id convallis nunc ultricies. Curabitur pretium nec sem eget lacinia. Quisque at est semper nunc vehicula ultrices. Morbi eget leo vel elit imperdiet vestibulum. Praesent sit amet ultrices augue. Fusce lacinia sagittis porta. Proin ut ornare orci. Quisque efficitur ante augue, non viverra ex commodo ac. Nam accumsan ante vel mi gravida euismod. Maecenas lobortis ligula fringilla libero euismod semper. Nam ac diam sed tellus consectetur commodo at et libero. Curabitur magna dolor, iaculis at laoreet ac, molestie eu sem. Proin ullamcorper lorem in quam pretium molestie. Donec id imperdi', 'AD', 'ContaAS', 'Emil Emilsen', 'Emil@Emilsen.com', 12345678, 2),
(2, 'UX-designer i Digital Banking Services', 'Trondheim', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem ex. Proin ac neque arcu. Donec eu auctor metus, vitae faucibus magna. Donec non massa est. Donec ornare ante posuere condimentum rutrum. Donec vel erat sed lectus pharetra sodales. Sed pulvinar scelerisque neque, vel auctor enim iaculis nec. Ut bibendum facilisis dui vel consequat. Phasellus fermentum lectus eleifend ipsum lobortis, id convallis nunc ultricies. Curabitur pretium nec sem eget lacinia. Quisque at est semper nunc vehicula ultrices. Morbi eget leo vel elit imperdiet vestibulum. Praesent sit amet ultrices augue. Fusce lacinia sagittis porta. Proin ut ornare orci. Quisque efficitur ante augue, non viverra ex commodo ac. Nam accumsan ante vel mi gravida euismod. Maecenas lobortis ligula fringilla libero euismod semper. Nam ac diam sed tellus consectetur commodo at et libero. Curabitur magna dolor, iaculis at laoreet ac, molestie eu sem. Proin ullamcorper lorem in quam pretium molestie. Donec id imperdi', 'AD', 'Every', 'Lars Larsen', 'Lars@Larsen.com', 9876543, 1),
(3, 'Design Researcher', 'Gjøvik', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem ex. Proin ac neque arcu. Donec eu auctor metus, vitae faucibus magna. Donec non massa est. Donec ornare ante posuere condimentum rutrum. Donec vel erat sed lectus pharetra sodales. Sed pulvinar scelerisque neque, vel auctor enim iaculis nec. Ut bibendum facilisis dui vel consequat. Phasellus fermentum lectus eleifend ipsum lobortis, id convallis nunc ultricies. Curabitur pretium nec sem eget lacinia. Quisque at est semper nunc vehicula ultrices. Morbi eget leo vel elit imperdiet vestibulum. Praesent sit amet ultrices augue. Fusce lacinia sagittis porta. Proin ut ornare orci. Quisque efficitur ante augue, non viverra ex commodo ac. Nam accumsan ante vel mi gravida euismod. Maecenas lobortis ligula fringilla libero euismod semper. Nam ac diam sed tellus consectetur commodo at et libero. Curabitur magna dolor, iaculis at laoreet ac, molestie eu sem. Proin ullamcorper lorem in quam pretium molestie. Donec id imperdi', 'HF', 'CISCO', 'Karen Karson', 'Karen@Karson.com', 45678901, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `internships`
--
ALTER TABLE `internships`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `internships`
--
ALTER TABLE `internships`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
