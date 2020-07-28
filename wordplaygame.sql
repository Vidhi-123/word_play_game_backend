-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2020 at 10:16 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wordplaygame`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_tbl`
--

CREATE TABLE `user_tbl` (
  `u_id` int(11) NOT NULL,
  `email_id` varchar(70) NOT NULL,
  `u_name` varchar(50) NOT NULL,
  `u_birthyear` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_tbl`
--

INSERT INTO `user_tbl` (`u_id`, `email_id`, `u_name`, `u_birthyear`) VALUES
(1, 'priyanshi@gmail.com', 'Patel Priyanshi', 1998),
(2, 'deep@gmail.com', 'Deep Bhavsar', 1997),
(3, 'meet@gmail.com', 'Meet Shah', 1995),
(4, 'victorjones@outlook.com', 'Victor Jones', 1993),
(5, 'shreejay@gmail.com', 'Shreejay Badshah', 1994);

-- --------------------------------------------------------

--
-- Table structure for table `word_tbl`
--

CREATE TABLE `word_tbl` (
  `w_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `w_name` varchar(200) NOT NULL,
  `w_rating` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `word_tbl`
--

INSERT INTO `word_tbl` (`w_id`, `u_id`, `w_name`, `w_rating`) VALUES
(1, 1, 'Mystical - Miss Tickle', 3.5),
(2, 2, 'Misty - Miss Tea', 3.4),
(3, 3, 'I Missed You - I Mist You', 4),
(4, 4, 'It\'s not - It\'s snot', 4.5),
(5, 5, 'Tigor - Tiger', 2.3),
(6, 3, 'See - Sea', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_tbl`
--
ALTER TABLE `user_tbl`
  ADD PRIMARY KEY (`u_id`);

--
-- Indexes for table `word_tbl`
--
ALTER TABLE `word_tbl`
  ADD PRIMARY KEY (`w_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_tbl`
--
ALTER TABLE `user_tbl`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `word_tbl`
--
ALTER TABLE `word_tbl`
  MODIFY `w_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
