-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2026 at 03:09 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `accesspay`
--

-- --------------------------------------------------------

--
-- Table structure for table `approvals`
--

CREATE TABLE IF NOT EXISTS `approvals` (
  `primkey` int(11) NOT NULL,
  `record_id` varchar(100) NOT NULL,
  `request_id` varchar(500) DEFAULT NULL,
  `staff_id` varchar(500) DEFAULT NULL,
  `approval_level` varchar(500) DEFAULT NULL,
  `approved_by` varchar(500) DEFAULT NULL,
  `approval_action` varchar(500) DEFAULT NULL,
  `approval_comments` longtext,
  `approved_on` datetime DEFAULT NULL,
  `approval_status` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `hive_site_id` varchar(100) DEFAULT NULL,
  `hive_site_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `disbursements`
--

CREATE TABLE IF NOT EXISTS `disbursements` (
  `primkey` int(11) NOT NULL,
  `record_id` varchar(100) NOT NULL,
  `request_id` varchar(500) DEFAULT NULL,
  `staff_id` varchar(500) DEFAULT NULL,
  `disbursement_number` varchar(500) DEFAULT NULL,
  `amount_disbursed` decimal(10,2) DEFAULT NULL,
  `reference_number` varchar(500) DEFAULT NULL,
  `payment_method` varchar(500) DEFAULT NULL,
  `disbursement_notes` longtext,
  `disbursed_by` varchar(500) DEFAULT NULL,
  `disbursed_on` datetime DEFAULT NULL,
  `disbursement_status` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `hive_site_id` varchar(100) DEFAULT NULL,
  `hive_site_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disbursements`
--

INSERT INTO `disbursements` (`primkey`, `record_id`, `request_id`, `staff_id`, `disbursement_number`, `amount_disbursed`, `reference_number`, `payment_method`, `disbursement_notes`, `disbursed_by`, `disbursed_on`, `disbursement_status`, `created_at`, `updated_at`, `hive_site_id`, `hive_site_name`) VALUES
(1, 'J2GIWN9', '7KPLRRN', 'R2KZTGQ', '75645342', '4500.00', '3453', '', '', '', '0000-00-00 00:00:00', '', '2026-05-29 15:00:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(2, '0F33YSS', 'WLKFXDR', 'R2KZTGQ', '35467ihgf', '0.00', '', '', '', '', '0000-00-00 00:00:00', '', '2026-05-29 15:18:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `primkey` int(11) NOT NULL,
  `record_id` varchar(100) NOT NULL,
  `request_id` varchar(500) DEFAULT NULL,
  `staff_id` varchar(500) DEFAULT NULL,
  `message_type` varchar(500) DEFAULT NULL,
  `recipient` varchar(500) DEFAULT NULL,
  `message_body` longtext,
  `delivery_status` varchar(500) DEFAULT NULL,
  `sent_on` datetime DEFAULT NULL,
  `message_status` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `hive_site_id` varchar(100) DEFAULT NULL,
  `hive_site_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mosy_sql_roll_back`
--

CREATE TABLE IF NOT EXISTS `mosy_sql_roll_back` (
  `primkey` int(255) NOT NULL,
  `roll_bk_key` varchar(500) NOT NULL,
  `table_name` varchar(500) NOT NULL,
  `roll_type` varchar(500) NOT NULL,
  `where_str` varchar(500) NOT NULL,
  `roll_timestamp` datetime NOT NULL,
  `value_entries` longblob NOT NULL,
  `hive_site_id` varchar(500) NOT NULL,
  `hive_site_name` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mosy_sql_roll_back`
--

INSERT INTO `mosy_sql_roll_back` (`primkey`, `roll_bk_key`, `table_name`, `roll_type`, `where_str`, `roll_timestamp`, `value_entries`, `hive_site_id`, `hive_site_name`) VALUES
(1, 'rbk_1780054888044_361', 'requests', 'UPDATE', 'primkey=''1''', '2026-05-29 14:41:28', 0x5b7b227072696d6b6579223a312c227265636f72645f6964223a22374b504c52524e222c2273746166665f6964223a2252324b5a544751222c22726571756573745f6e756d626572223a22343536373839222c22616d6f756e745f726571756573746564223a223830302e3030222c22726571756573745f726561736f6e223a22222c22616d6f756e745f617070726f766564223a22302e3030222c2263757272656e745f62616c616e6365223a22302e3030222c227265717565737465645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22617070726f7665645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22706169645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22636c65617265645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22726571756573745f737461747573223a22222c22726571756573745f72656d61726b73223a22222c22637265617465645f6174223a22323032362d30352d32395431313a33373a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(2, 'rbk_1780054897044_809', 'requests', 'UPDATE', 'primkey=''1''', '2026-05-29 14:41:37', 0x5b7b227072696d6b6579223a312c227265636f72645f6964223a22374b504c52524e222c2273746166665f6964223a2252324b5a544751222c22726571756573745f6e756d626572223a22343536373839222c22616d6f756e745f726571756573746564223a223830302e3030222c22726571756573745f726561736f6e223a22222c22616d6f756e745f617070726f766564223a22302e3030222c2263757272656e745f62616c616e6365223a22302e3030222c227265717565737465645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22617070726f7665645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22706169645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22636c65617265645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22726571756573745f737461747573223a22417070726f766564204c31222c22726571756573745f72656d61726b73223a22222c22637265617465645f6174223a22323032362d30352d32395431313a33373a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(3, 'rbk_1780054908086_721', 'requests', 'UPDATE', 'primkey=''1''', '2026-05-29 14:41:48', 0x5b7b227072696d6b6579223a312c227265636f72645f6964223a22374b504c52524e222c2273746166665f6964223a2252324b5a544751222c22726571756573745f6e756d626572223a22343536373839222c22616d6f756e745f726571756573746564223a223830302e3030222c22726571756573745f726561736f6e223a22222c22616d6f756e745f617070726f766564223a22302e3030222c2263757272656e745f62616c616e6365223a22302e3030222c227265717565737465645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22617070726f7665645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22706169645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22636c65617265645f6f6e223a22323032362d30352d32395431313a33373a30302e3030305a222c22726571756573745f737461747573223a2250616964222c22726571756573745f72656d61726b73223a22222c22637265617465645f6174223a22323032362d30352d32395431313a33373a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(4, 'rbk_1780055977653_135', 'payments', 'UPDATE', 'primkey=''2''', '2026-05-29 14:59:38', 0x5b7b227072696d6b6579223a322c227265636f72645f6964223a224c514137524c49222c22726571756573745f6964223a22374b504c52524e222c2273746166665f6964223a2252324b5a544751222c227061796d656e745f74797065223a22222c22616d6f756e74223a22333430302e3030222c227265666572656e63655f6e756d626572223a22222c227061796d656e745f6d6574686f64223a22222c227061796d656e745f6e6f746573223a22222c227265636f726465645f6279223a22222c227265636f726465645f6f6e223a22323032362d30352d32395431313a35393a30302e3030305a222c227061796d656e745f737461747573223a22222c22637265617465645f6174223a22323032362d30352d32395431313a35393a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(5, 'rbk_1780056289253_442', 'requests', 'UPDATE', 'primkey=''2''', '2026-05-29 15:04:49', 0x5b7b227072696d6b6579223a322c227265636f72645f6964223a223650574e354e38222c2273746166665f6964223a2252324b5a544751222c22726571756573745f6e756d626572223a22343536373839222c22616d6f756e745f726571756573746564223a223830302e3030222c22726571756573745f726561736f6e223a22222c22616d6f756e745f617070726f766564223a22302e3030222c2263757272656e745f62616c616e6365223a22302e3030222c227265717565737465645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22617070726f7665645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22706169645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22636c65617265645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22726571756573745f737461747573223a22222c22726571756573745f72656d61726b73223a22222c22637265617465645f6174223a22323032362d30352d32395431323a30343a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(6, 'rbk_1780056297854_227', 'requests', 'UPDATE', 'primkey=''2''', '2026-05-29 15:04:58', 0x5b7b227072696d6b6579223a322c227265636f72645f6964223a223650574e354e38222c2273746166665f6964223a2252324b5a544751222c22726571756573745f6e756d626572223a22343536373839222c22616d6f756e745f726571756573746564223a223830302e3030222c22726571756573745f726561736f6e223a22222c22616d6f756e745f617070726f766564223a22302e3030222c2263757272656e745f62616c616e6365223a22302e3030222c227265717565737465645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22617070726f7665645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22706169645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22636c65617265645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22726571756573745f737461747573223a22417070726f766564204c31222c22726571756573745f72656d61726b73223a22222c22637265617465645f6174223a22323032362d30352d32395431323a30343a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(7, 'rbk_1780056308079_376', 'requests', 'UPDATE', 'primkey=''2''', '2026-05-29 15:05:08', 0x5b7b227072696d6b6579223a322c227265636f72645f6964223a223650574e354e38222c2273746166665f6964223a2252324b5a544751222c22726571756573745f6e756d626572223a22343536373839222c22616d6f756e745f726571756573746564223a223830302e3030222c22726571756573745f726561736f6e223a22222c22616d6f756e745f617070726f766564223a22302e3030222c2263757272656e745f62616c616e6365223a22302e3030222c227265717565737465645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22617070726f7665645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22706169645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22636c65617265645f6f6e223a22323032362d30352d32395431323a30343a30302e3030305a222c22726571756573745f737461747573223a22417070726f766564204c32222c22726571756573745f72656d61726b73223a22222c22637265617465645f6174223a22323032362d30352d32395431323a30343a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(8, 'rbk_1780056765159_481', 'staff', 'UPDATE', 'primkey=''1''', '2026-05-29 15:12:45', 0x5b7b227072696d6b6579223a312c227265636f72645f6964223a2252324b5a544751222c2266756c6c5f6e616d65223a224a6572656d69616820416c6578222c2273746166665f6e756d626572223a2230303032222c2270686f6e655f6e756d626572223a2230373130373636333930222c22656d61696c5f61646472657373223a226a6572656173616e796140676d61696c2e636f6d222c226465706172746d656e74223a2253616c6573222c22706f736974696f6e223a22222c22616476616e63655f6c696d6974223a2237303030222c2263757272656e745f6f75747374616e64696e675f62616c616e6365223a22302e3030222c2273746166665f737461747573223a22416374697665222c22726567697374657265645f6f6e223a22323032362d30352d32395431313a33363a30302e3030305a222c22637265617465645f6174223a22323032362d30352d32395431313a33363a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(9, 'rbk_1780056782463_718', 'staff', 'UPDATE', 'primkey=''1''', '2026-05-29 15:13:02', 0x5b7b227072696d6b6579223a312c227265636f72645f6964223a2252324b5a544751222c2266756c6c5f6e616d65223a224a6572656d69616820416c6578222c2273746166665f6e756d626572223a2230303032222c2270686f6e655f6e756d626572223a2230373130373636333930222c22656d61696c5f61646472657373223a226a6572656173616e796140676d61696c2e636f6d222c226465706172746d656e74223a2253616c6573222c22706f736974696f6e223a22222c22616476616e63655f6c696d6974223a223139303030222c2263757272656e745f6f75747374616e64696e675f62616c616e6365223a22302e3030222c2273746166665f737461747573223a22416374697665222c22726567697374657265645f6f6e223a22323032362d30352d32395431313a33363a30302e3030305a222c22637265617465645f6174223a22323032362d30352d32395431313a33363a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(10, 'rbk_1780056784533_981', 'staff', 'UPDATE', 'primkey=''1''', '2026-05-29 15:13:05', 0x5b7b227072696d6b6579223a312c227265636f72645f6964223a2252324b5a544751222c2266756c6c5f6e616d65223a224a6572656d69616820416c6578222c2273746166665f6e756d626572223a2230303032222c2270686f6e655f6e756d626572223a2230373130373636333930222c22656d61696c5f61646472657373223a226a6572656173616e796140676d61696c2e636f6d222c226465706172746d656e74223a2253616c6573222c22706f736974696f6e223a22222c22616476616e63655f6c696d6974223a223139303030222c2263757272656e745f6f75747374616e64696e675f62616c616e6365223a22302e3030222c2273746166665f737461747573223a2253757370656e646564222c22726567697374657265645f6f6e223a22323032362d30352d32395431313a33363a30302e3030305a222c22637265617465645f6174223a22323032362d30352d32395431313a33363a30302e3030305a222c22757064617465645f6174223a6e756c6c2c22686976655f736974655f6964223a224c4c5252305a4b4f585254434f484e5f323032342d31322d32382d30372d34352d35362d706d222c22686976655f736974655f6e616d65223a22537570657261646d696e227d5d, 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `page_manifest_`
--

CREATE TABLE IF NOT EXISTS `page_manifest_` (
  `primkey` int(255) NOT NULL,
  `manikey` varchar(500) NOT NULL,
  `page_group` varchar(500) NOT NULL,
  `site_id` varchar(500) NOT NULL,
  `page_url` varchar(500) NOT NULL,
  `hive_site_id` varchar(500) NOT NULL,
  `hive_site_name` varchar(500) NOT NULL,
  `project_id` varchar(500) NOT NULL,
  `project_name` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `page_manifest_`
--

INSERT INTO `page_manifest_` (`primkey`, `manikey`, `page_group`, `site_id`, `page_url`, `hive_site_id`, `hive_site_name`, `project_id`, `project_name`) VALUES
(1, 'appdna', 'Mpesa', '', 'appdna', '', '', '', ''),
(2, 'disbursmentwebhook', 'Mpesa', '', 'disbursmentwebhook', '', '', '', ''),
(3, 'initrecon', 'Mpesa', '', 'initrecon', '', '', '', ''),
(4, 'mosy_paginate', 'Mpesa', '', 'mosy_paginate', '', '', '', ''),
(5, 'mpesacollections_list', 'Mpesa', '', 'mpesacollections_list', '', '', '', ''),
(6, 'mpesacollections_profile', 'Mpesa', '', 'mpesacollections_profile', '', '', '', ''),
(7, 'overall_user_functions_list', 'Mpesa', '', 'overall_user_functions_list', '', '', '', ''),
(8, 'paymentwebhook', 'Mpesa', '', 'paymentwebhook', '', '', '', ''),
(9, 'reconciliations_list', 'Mpesa', '', 'reconciliations_list', '', '', '', ''),
(10, 'reconciliations_profile', 'Mpesa', '', 'reconciliations_profile', '', '', '', ''),
(11, 'role_functions_list', 'Mpesa', '', 'role_functions_list', '', '', '', ''),
(12, 'role_functions_profile', 'Mpesa', '', 'role_functions_profile', '', '', '', ''),
(13, 'sysconfigs_list', 'Mpesa', '', 'sysconfigs_list', '', '', '', ''),
(14, 'sysconfigs_profile', 'Mpesa', '', 'sysconfigs_profile', '', '', '', ''),
(15, 'system_role_bundles_list', 'User role management', '', 'system_role_bundles_list', '', '', '', ''),
(16, 'system_role_bundles_profile', 'User role management', '', 'system_role_bundles_profile', '', '', '', ''),
(17, 'system_users_list', 'Mpesa', '', 'system_users_list', '', '', '', ''),
(18, 'system_users_profile', 'Mpesa', '', 'system_users_profile', '', '', '', ''),
(19, 'system_users_w_roles_list', 'Mpesa', '', 'system_users_w_roles_list', '', '', '', ''),
(20, 'system_users_w_roles_profile', 'Mpesa', '', 'system_users_w_roles_profile', '', '', '', ''),
(21, 'trxrecon', 'Mpesa', '', 'trxrecon', '', '', '', ''),
(22, 'acc_control', 'User roles', '', 'acc_control', '', '', '', ''),
(23, 'bundle_functions_list', 'User roles', '', 'bundle_functions_list', '', '', '', ''),
(24, 'bundle_functions_profile', 'User roles', '', 'bundle_functions_profile', '', '', '', ''),
(25, 'login', 'User roles', '', 'login', '', '', '', ''),
(26, 'register', 'User roles', '', 'register', '', '', '', ''),
(27, 'resetpassword', 'User roles', '', 'resetpassword', '', '', '', ''),
(28, 'saconfig', 'User roles', '', 'saconfig', '', '', '', ''),
(29, 'sasplash', 'User roles', '', 'sasplash', '', '', '', ''),
(30, 'sauth_oauth', 'User roles', '', 'sauth_oauth', '', '', '', ''),
(31, 'sauth_sessionlogout', 'User roles', '', 'sauth_sessionlogout', '', '', '', ''),
(32, 'sauth_sessionmonitor', 'User roles', '', 'sauth_sessionmonitor', '', '', '', ''),
(33, 'sa_access', 'User roles', '', 'sa_access', '', '', '', ''),
(34, 'superadmin_acc_control', 'User roles', '', 'superadmin_acc_control', '', '', '', ''),
(35, 'userdenied', 'Basic pages', '', 'userdenied', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE IF NOT EXISTS `payments` (
  `primkey` int(11) NOT NULL,
  `record_id` varchar(100) NOT NULL,
  `request_id` varchar(500) DEFAULT NULL,
  `staff_id` varchar(500) DEFAULT NULL,
  `payment_type` varchar(500) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `reference_number` varchar(500) DEFAULT NULL,
  `payment_method` varchar(500) DEFAULT NULL,
  `payment_notes` longtext,
  `recorded_by` varchar(500) DEFAULT NULL,
  `recorded_on` datetime DEFAULT NULL,
  `payment_status` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `hive_site_id` varchar(100) DEFAULT NULL,
  `hive_site_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`primkey`, `record_id`, `request_id`, `staff_id`, `payment_type`, `amount`, `reference_number`, `payment_method`, `payment_notes`, `recorded_by`, `recorded_on`, `payment_status`, `created_at`, `updated_at`, `hive_site_id`, `hive_site_name`) VALUES
(1, 'XK6HFQF', '7KPLRRN', 'R2KZTGQ', 'Mobile', '3400.00', '', '', '', '', '2026-05-29 14:38:00', '', '2026-05-29 14:38:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(2, 'LQA7RLI', '7KPLRRN', 'R2KZTGQ', '', '3400.00', '', '', '', '', '2026-05-29 14:59:00', 'Completed', '2026-05-29 14:59:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(3, 'PL06XTC', '6PWN5N8', 'R2KZTGQ', '', '0.00', '', '', '', '', '2026-05-29 15:06:00', '', '2026-05-29 15:06:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE IF NOT EXISTS `requests` (
  `primkey` int(11) NOT NULL,
  `record_id` varchar(100) NOT NULL,
  `staff_id` varchar(500) DEFAULT NULL,
  `request_number` varchar(500) DEFAULT NULL,
  `amount_requested` decimal(10,2) DEFAULT NULL,
  `request_reason` longtext,
  `amount_approved` decimal(10,2) DEFAULT NULL,
  `current_balance` decimal(10,2) DEFAULT NULL,
  `requested_on` datetime DEFAULT NULL,
  `approved_on` datetime DEFAULT NULL,
  `paid_on` datetime DEFAULT NULL,
  `cleared_on` datetime DEFAULT NULL,
  `request_status` varchar(500) DEFAULT NULL,
  `request_remarks` longtext,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `hive_site_id` varchar(100) DEFAULT NULL,
  `hive_site_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`primkey`, `record_id`, `staff_id`, `request_number`, `amount_requested`, `request_reason`, `amount_approved`, `current_balance`, `requested_on`, `approved_on`, `paid_on`, `cleared_on`, `request_status`, `request_remarks`, `created_at`, `updated_at`, `hive_site_id`, `hive_site_name`) VALUES
(1, '7KPLRRN', 'R2KZTGQ', '456789', '800.00', '', '0.00', '0.00', '2026-05-29 14:37:00', '2026-05-29 14:37:00', '2026-05-29 14:37:00', '2026-05-29 14:37:00', 'Cleared', '', '2026-05-29 14:37:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(2, '6PWN5N8', 'R2KZTGQ', '456789', '800.00', '', '0.00', '0.00', '2026-05-29 15:04:00', '2026-05-29 15:04:00', '2026-05-29 15:04:00', '2026-05-29 15:04:00', 'Rejected', '', '2026-05-29 15:04:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin'),
(3, 'WLKFXDR', 'R2KZTGQ', '67890oijh', '800.00', '', '0.00', '0.00', '2026-05-29 15:18:00', '2026-05-29 15:18:00', '2026-05-29 15:18:00', '2026-05-29 15:18:00', '', '', '2026-05-29 15:18:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE IF NOT EXISTS `settings` (
  `primkey` int(11) NOT NULL,
  `record_id` varchar(100) NOT NULL,
  `approval_levels` varchar(500) DEFAULT NULL,
  `default_currency` varchar(500) DEFAULT NULL,
  `sms_notifications` varchar(500) DEFAULT NULL,
  `email_notifications` varchar(255) DEFAULT NULL,
  `allow_partial_payments` varchar(500) DEFAULT NULL,
  `allow_partial_recoveries` varchar(500) DEFAULT NULL,
  `auto_generate_request_numbers` varchar(500) DEFAULT NULL,
  `default_approval_workflow` varchar(500) DEFAULT NULL,
  `system_status` varchar(500) DEFAULT NULL,
  `setting_remarks` longtext,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `hive_site_id` varchar(100) DEFAULT NULL,
  `hive_site_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE IF NOT EXISTS `staff` (
  `primkey` int(11) NOT NULL,
  `record_id` varchar(100) NOT NULL,
  `full_name` varchar(500) DEFAULT NULL,
  `staff_number` varchar(500) DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `department` varchar(500) DEFAULT NULL,
  `position` varchar(500) DEFAULT NULL,
  `advance_limit` varchar(500) DEFAULT NULL,
  `current_outstanding_balance` decimal(10,2) DEFAULT NULL,
  `staff_status` varchar(500) DEFAULT NULL,
  `registered_on` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `hive_site_id` varchar(100) DEFAULT NULL,
  `hive_site_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`primkey`, `record_id`, `full_name`, `staff_number`, `phone_number`, `email_address`, `department`, `position`, `advance_limit`, `current_outstanding_balance`, `staff_status`, `registered_on`, `created_at`, `updated_at`, `hive_site_id`, `hive_site_name`) VALUES
(1, 'R2KZTGQ', 'Jeremiah Alex', '0002', '0710766390', 'jereasanya@gmail.com', 'Sales', '', '19000', '0.00', 'Active', '2026-05-29 14:36:00', '2026-05-29 14:36:00', '0000-00-00 00:00:00', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin');

-- --------------------------------------------------------

--
-- Table structure for table `system_module_manifest_`
--

CREATE TABLE IF NOT EXISTS `system_module_manifest_` (
  `primkey` int(255) NOT NULL,
  `record_id` varchar(255) NOT NULL,
  `component_name` varchar(255) NOT NULL,
  `module_key` varchar(255) NOT NULL,
  `module_name` varchar(255) NOT NULL,
  `permission_type` varchar(100) NOT NULL,
  `capability_key` varchar(255) NOT NULL,
  `access_name` varchar(255) NOT NULL,
  `relative_path` varchar(500) NOT NULL,
  `hive_site_id` varchar(500) NOT NULL,
  `hive_site_name` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `system_module_manifest_`
--

INSERT INTO `system_module_manifest_` (`primkey`, `record_id`, `component_name`, `module_key`, `module_name`, `permission_type`, `capability_key`, `access_name`, `relative_path`, `hive_site_id`, `hive_site_name`) VALUES
(1, '', 'SystemmodulemanifestList', 'ACCESSCONTROL', 'Accesscontrol', 'VIEW', 'VIEW_SYSTEM_MODULE_MANIFEST_', 'View system module manifest ', 'accesscontrol/uiControl/SystemmodulemanifestList.jsx', '', ''),
(2, '', 'SystemmodulemanifestProfile', 'ACCESSCONTROL', 'Accesscontrol', 'MANAGE', 'MANAGE_SYSTEM_MODULE_MANIFEST_', 'Manage system module manifest ', 'accesscontrol/uiControl/SystemmodulemanifestProfile.jsx', '', ''),
(3, '', 'AppUsersProfile', 'APP_USERS', 'App users', 'MANAGE', 'APP_USERS_MANAGE', 'App users manage', 'app_users/uiControl/AppUsersProfile.jsx', '', ''),
(4, '', 'DigitalassetlistList', 'ASSETS', 'Assets', 'VIEW', 'VIEW_ASSETS', 'View assets', 'assets/uiControl/DigitalassetlistList.jsx', '', ''),
(5, '', 'DigitalassetlistProfile', 'ASSETS', 'Assets', 'MANAGE', 'MANAGE_ASSETS', 'Manage assets', 'assets/uiControl/DigitalassetlistProfile.jsx', '', ''),
(6, '', 'AssetpricingList', 'ASSET_PRICING', 'Asset pricing', 'VIEW', 'VIEW_ASSET_PRICING', 'View asset pricing', 'asset_pricing/uiControl/AssetpricingList.jsx', '', ''),
(7, '', 'AssetpricingProfile', 'ASSET_PRICING', 'Asset pricing', 'MANAGE', 'MANAGE_ASSET_PRICING', 'Manage asset pricing', 'asset_pricing/uiControl/AssetpricingProfile.jsx', '', ''),
(8, '', 'UserrolefunctionsList', 'BUNDLEFUNCTIONS', 'Bundlefunctions', 'VIEW', 'VIEW_USER_BUNDLE_ROLE_FUNCTIONS', 'View user bundle role functions', 'bundlefunctions/uiControl/UserrolefunctionsList.jsx', '', ''),
(9, '', 'UserrolefunctionsProfile', 'BUNDLEFUNCTIONS', 'Bundlefunctions', 'MANAGE', 'MANAGE_USER_BUNDLE_ROLE_FUNCTIONS', 'Manage user bundle role functions', 'bundlefunctions/uiControl/UserrolefunctionsProfile.jsx', '', ''),
(10, '', 'EntitlementsList', 'ENTITLEMENTS', 'Entitlements', 'VIEW', 'ENTITLEMENTS_VIEW', 'Entitlements view', 'entitlements/uiControl/EntitlementsList.jsx', '', ''),
(11, '', 'InvoicesList', 'INVOICES', 'Invoices', 'VIEW', 'VIEW_INVOICES', 'View invoices', 'invoices/uiControl/InvoicesList.jsx', '', ''),
(12, '', 'InvoicesProfile', 'INVOICES', 'Invoices', 'MANAGE', 'MANAGE_INVOICES', 'Manage invoices', 'invoices/uiControl/InvoicesProfile.jsx', '', ''),
(13, '', 'ManageassetpricingList', 'MANAGEPRICING', 'Managepricing', 'VIEW', 'VIEW_ASSET_PRICING', 'View asset pricing', 'managepricing/uiControl/ManageassetpricingList.jsx', '', ''),
(14, '', 'ManageassetpricingProfile', 'MANAGEPRICING', 'Managepricing', 'MANAGE', 'MANAGE_ASSET_PRICING', 'Manage asset pricing', 'managepricing/uiControl/ManageassetpricingProfile.jsx', '', ''),
(15, '', 'SentmessagesList', 'MESSAGES', 'Messages', 'VIEW', 'VIEW_SENT_MESSAGES', 'View sent messages', 'messages/uiControl/SentmessagesList.jsx', '', ''),
(16, '', 'SentmessagesProfile', 'MESSAGES', 'Messages', 'MANAGE', 'MANAGE_SENT_MESSAGES', 'Manage sent messages', 'messages/uiControl/SentmessagesProfile.jsx', '', ''),
(17, '', 'OrdersList', 'ORDERS', 'Orders', 'VIEW', 'VIEW_ORDERS', 'View orders', 'orders/uiControl/OrdersList.jsx', '', ''),
(18, '', 'OrdersProfile', 'ORDERS', 'Orders', 'MANAGE', 'MANAGE_ORDERS', 'Manage orders', 'orders/uiControl/OrdersProfile.jsx', '', ''),
(19, '', 'OrderItemsList', 'ORDER_ITEMS', 'Order items', 'VIEW', 'ORDER_ITEMS_VIEW', 'Order items view', 'order_items/uiControl/OrderItemsList.jsx', '', ''),
(20, '', 'PaymentsList', 'PAYMENTS', 'Payments', 'VIEW', 'VIEW_PAYMENTS', 'View payments', 'payments/uiControl/PaymentsList.jsx', '', ''),
(21, '', 'PaymentsProfile', 'PAYMENTS', 'Payments', 'MANAGE', 'MANAGE_PAYMENTS', 'Manage payments', 'payments/uiControl/PaymentsProfile.jsx', '', ''),
(22, '', 'SystemrolesList', 'ROLEBUNDLES', 'Rolebundles', 'VIEW', 'VIEW_SYSTEM_ROLE_BUNDLES', 'View system role bundles', 'rolebundles/uiControl/SystemrolesList.jsx', '', ''),
(23, '', 'SystemrolesProfile', 'ROLEBUNDLES', 'Rolebundles', 'MANAGE', 'MANAGE_SYSTEM_ROLE_BUNDLES', 'Manage system role bundles', 'rolebundles/uiControl/SystemrolesProfile.jsx', '', ''),
(24, '', 'SelectsubscriptiontoinvoiceList', 'SUBSCRIPTIONS', 'Subscriptions', 'VIEW', 'VIEW_SUBSCRIPTIONS', 'View subscriptions', 'subscriptions/uiControl/SelectsubscriptiontoinvoiceList.jsx', '', ''),
(25, '', 'SelectsubscriptiontoinvoiceProfile', 'SUBSCRIPTIONS', 'Subscriptions', 'MANAGE', 'MANAGE_SUBSCRIPTIONS', 'Manage subscriptions', 'subscriptions/uiControl/SelectsubscriptiontoinvoiceProfile.jsx', '', ''),
(26, '', 'SubscriptionsList', 'SUBSCRIPTIONS', 'Subscriptions', 'VIEW', 'VIEW_SUBSCRIPTIONS', 'View subscriptions', 'subscriptions/uiControl/SubscriptionsList.jsx', '', ''),
(27, '', 'SubscriptionsProfile', 'SUBSCRIPTIONS', 'Subscriptions', 'MANAGE', 'MANAGE_SUBSCRIPTIONS', 'Manage subscriptions', 'subscriptions/uiControl/SubscriptionsProfile.jsx', '', ''),
(28, '', 'SystemusersList', 'SYSUSERS', 'Sysusers', 'VIEW', 'VIEW_SYSTEM_USERS', 'View system users', 'sysusers/uiControl/SystemusersList.jsx', '', ''),
(29, '', 'SystemusersProfile', 'SYSUSERS', 'Sysusers', 'MANAGE', 'MANAGE_SYSTEM_USERS', 'Manage system users', 'sysusers/uiControl/SystemusersProfile.jsx', '', ''),
(30, '', 'ActiveappusersList', 'USERS', 'Users', 'VIEW', 'VIEW_APP_USERS', 'View app users', 'users/uiControl/ActiveappusersList.jsx', '', ''),
(31, '', 'ActiveappusersProfile', 'USERS', 'Users', 'MANAGE', 'MANAGE_APP_USERS', 'Manage app users', 'users/uiControl/ActiveappusersProfile.jsx', '', ''),
(32, '', 'ApiuserlistList', 'USERS', 'Users', 'VIEW', 'VIEW_APP_USERS', 'View app users', 'users/uiControl/ApiuserlistList.jsx', '', ''),
(33, '', 'ApiuserlistProfile', 'USERS', 'Users', 'MANAGE', 'MANAGE_APP_USERS', 'Manage app users', 'users/uiControl/ApiuserlistProfile.jsx', '', ''),
(34, '', 'InactiveusersList', 'USERS', 'Users', 'VIEW', 'VIEW_APP_USERS', 'View app users', 'users/uiControl/InactiveusersList.jsx', '', ''),
(35, '', 'InactiveusersProfile', 'USERS', 'Users', 'MANAGE', 'MANAGE_APP_USERS', 'Manage app users', 'users/uiControl/InactiveusersProfile.jsx', '', ''),
(36, '', 'PlatformuserlistList', 'USERS', 'Users', 'VIEW', 'VIEW_APP_USERS', 'View app users', 'users/uiControl/PlatformuserlistList.jsx', '', ''),
(37, '', 'PlatformuserlistProfile', 'USERS', 'Users', 'MANAGE', 'MANAGE_APP_USERS', 'Manage app users', 'users/uiControl/PlatformuserlistProfile.jsx', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `system_role_bundles`
--

CREATE TABLE IF NOT EXISTS `system_role_bundles` (
  `primkey` int(255) NOT NULL,
  `record_id` varchar(500) NOT NULL,
  `bundle_id` varchar(500) NOT NULL,
  `bundle_name` varchar(500) NOT NULL,
  `remark` longtext NOT NULL,
  `hive_site_id` varchar(500) NOT NULL,
  `hive_site_name` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `system_role_bundles`
--

INSERT INTO `system_role_bundles` (`primkey`, `record_id`, `bundle_id`, `bundle_name`, `remark`, `hive_site_id`, `hive_site_name`) VALUES
(2, 'SAKKRGH', 'ZHQBB44RD1', 'Station manager', 'Station manager role', '', ''),
(4, 'EEYP1J3', '', 'Station attendant', 'Station attendant', '', ''),
(5, 'OY9TU6C', '', 'Regional manager', 'Regional manager', '', ''),
(6, '3TT9BJ2', '', 'Finance manager', 'Finance manager', '', ''),
(7, '4I9JFN3', '', 'Team lead', '', '', ''),
(8, 'YEPA2OZ', '', 'Invoice manager', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `system_users`
--

CREATE TABLE IF NOT EXISTS `system_users` (
  `primkey` int(255) NOT NULL,
  `record_id` varchar(500) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `tel` varchar(500) NOT NULL,
  `login_password` varchar(500) NOT NULL,
  `ref_id` varchar(500) NOT NULL,
  `regdate` datetime NOT NULL,
  `user_no` varchar(500) NOT NULL,
  `user_pic` varchar(500) NOT NULL,
  `user_gender` varchar(500) NOT NULL,
  `last_seen` varchar(500) NOT NULL,
  `about` longtext NOT NULL,
  `hive_site_id` varchar(500) NOT NULL,
  `hive_site_name` varchar(500) NOT NULL,
  `auth_token` varchar(500) NOT NULL,
  `token_status` varchar(500) NOT NULL,
  `token_expiring_in` varchar(500) NOT NULL,
  `project_id` varchar(500) NOT NULL,
  `project_name` varchar(500) NOT NULL,
  `user_role` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `system_users`
--

INSERT INTO `system_users` (`primkey`, `record_id`, `name`, `email`, `tel`, `login_password`, `ref_id`, `regdate`, `user_no`, `user_pic`, `user_gender`, `last_seen`, `about`, `hive_site_id`, `hive_site_name`, `auth_token`, `token_status`, `token_expiring_in`, `project_id`, `project_name`, `user_role`) VALUES
(1, '1FN4ZHN', 'Superadmin', 'superadmin', '', 'admin001', 'ZH1OA9PUWQ', '2024-12-28 00:00:00', '', 'media/system_users/1771736164066_4f364804-58bb-427b-a566-2ffbd2f78268.png', '', '', '', 'LLRR0ZKOXRTCOHN_2024-12-28-07-45-56-pm', 'Superadmin', '08ZQCN6TVG02X3LPBJJGGAWJ49COOYV2ZC5FDV9ZPJRHASR40LVL6G66MAAJRL9WCCP0SZP2WIWS1DBE1JMM9HUOJ6L9630M37MGKYKZHCEY6T9JHCPIQEV1SYBV0H477XWSQTRTG1A0O4KLA079L69AFLDC7QMOOKKZ9JDHSM', 'Active', '2025-03-18 16:42:55', '', '', 'OY9TU6C'),
(3, 'NCPLHWZ', 'Jeremiah Alex mgr', 'jereasanya@gmail.com', '0710766390', 'alex', 'SHZMXAWFO0', '2025-03-12 00:00:00', '', 'media/system_users/1771710613108_gift_basket (1).png', 'Male', '', '', '', '', '', '', '', '', '', 'YEPA2OZ');

-- --------------------------------------------------------

--
-- Table structure for table `user_bundle_role_functions`
--

CREATE TABLE IF NOT EXISTS `user_bundle_role_functions` (
  `primkey` int(255) NOT NULL,
  `record_id` varchar(500) NOT NULL,
  `bundle_id` varchar(500) NOT NULL,
  `bundle_name` varchar(500) NOT NULL,
  `role_id` varchar(500) NOT NULL,
  `role_name` varchar(500) NOT NULL,
  `remark` longtext NOT NULL,
  `hive_site_id` varchar(500) NOT NULL,
  `hive_site_name` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_bundle_role_functions`
--

INSERT INTO `user_bundle_role_functions` (`primkey`, `record_id`, `bundle_id`, `bundle_name`, `role_id`, `role_name`, `remark`, `hive_site_id`, `hive_site_name`) VALUES
(1, 'RHZGTZE', '5PT77YI2YB', 'Accountant', 'Basic pages', '', '', '', ''),
(2, 'T5D609X', '5PT77YI2YB', 'Accountant', 'User roles', '', '', '', ''),
(3, 'G6C5BJX', '5PT77YI2YB', 'Accountant', 'Mpesa', '', '', '', ''),
(4, 'NYZME5V', '5PT77YI2YB', 'Accountant', 'User role management', '', '', '', ''),
(10, 'MRKWT1A', '', '', 'MAKE_PAYMENTS', '', '', '', ''),
(12, 'MILI2X3', '', '', 'MAKE_PAYMENTS', '', '', '', ''),
(13, 'IF6U5QX', '', '', 'MAKE_PAYMENTS', '', '', '', ''),
(14, '1X2VHDW', '', '', 'MAKE_PAYMENTS', 'Make payments', '', '', ''),
(15, 'HRO5F9S', '3TT9BJ2', 'Finance manager', 'MAKE_PAYMENTS', 'Make payments', '', '', ''),
(16, 'MLDYGNJ', '3TT9BJ2', 'Finance manager', 'MANAGE_SUBSCRIPTIONS', 'Manage subscriptions', '', '', ''),
(17, 'NTE4MS2', '3TT9BJ2', 'Finance manager', 'MANAGE_INVOICES', 'Manage invoices', '', '', ''),
(18, 'JEGJRHY', '3TT9BJ2', 'Finance manager', 'MANAGE_ASSETS', 'Manage assets', '', '', ''),
(19, 'ZJBOCIM', '3TT9BJ2', 'Finance manager', 'VIEW_ASSETS', 'View assets', '', '', ''),
(21, '9XN90ZB', '3TT9BJ2', 'Finance manager', 'VIEW_ASSET_PRICING', 'View asset pricing', '', '', ''),
(22, '3N4THMW', '3TT9BJ2', 'Finance manager', 'VIEW_APP_USERS', 'View app users', '', '', ''),
(24, '966AV2A', 'OY9TU6C', 'Regional manager', 'VIEW_ASSETS', 'View assets', '', '', ''),
(25, 'Z37NJL1', 'OY9TU6C', 'Regional manager', 'MANAGE_ASSETS', 'Manage assets', '', '', ''),
(26, 'VIE12XX', 'OY9TU6C', 'Regional manager', 'MANAGE_INVOICES', 'Manage invoices', '', '', ''),
(27, 'T7R2WBG', 'OY9TU6C', 'Regional manager', 'VIEW_INVOICES', 'View invoices', '', '', ''),
(28, 'T2SZOQO', 'OY9TU6C', 'Regional manager', 'VIEW_APP_USERS', 'View app users', '', '', ''),
(29, 'SOMU4LO', 'OY9TU6C', 'Regional manager', 'MANAGE_APP_USERS', 'Manage app users', '', '', ''),
(30, 'LVJHQ6R', 'EEYP1J3', 'Station attendant', 'VIEW_APP_USERS', 'View app users', '', '', ''),
(32, '9DJY1WW', '4I9JFN3', 'Team lead', 'VIEW_SYSTEM_MODULE_MANIFEST_', 'View system module manifest ', '', '', ''),
(33, 'QI3S2ZC', '4I9JFN3', 'Team lead', 'MAKE_PAYMENTS', 'Make payments', '', '', ''),
(34, 'HU6I303', 'SAKKRGH', 'Station manager', 'MANAGE_APP_USERS', 'Manage app users', '', '', ''),
(35, 'I056CXU', 'SAKKRGH', 'Station manager', 'MANAGE_SUBSCRIPTIONS', 'Manage subscriptions', '', '', ''),
(36, 'I53TGRW', 'YEPA2OZ', 'Invoice manager', 'VIEW_INVOICES', 'View invoices', '', '', ''),
(37, '4PMTKIZ', 'YEPA2OZ', 'Invoice manager', 'VIEW_PAYMENTS', 'View payments', '', '', ''),
(39, 'VV2USQ6', 'YEPA2OZ', 'Invoice manager', 'MANAGE_SYSTEM_ROLE_BUNDLES', 'Manage system role bundles', '', '', ''),
(41, '2KKNSL3', 'YEPA2OZ', 'Invoice manager', 'VIEW_USER_BUNDLE_ROLE_FUNCTIONS', 'View user bundle role functions', '', '', ''),
(42, 'Q7HQFR3', 'YEPA2OZ', 'Invoice manager', 'MANAGE_USER_BUNDLE_ROLE_FUNCTIONS', 'Manage user bundle role functions', '', '', ''),
(43, 'ZGL4382', 'YEPA2OZ', 'Invoice manager', 'MANAGE_APP_USERS', 'Manage app users', '', '', ''),
(44, '0SXKKYM', 'YEPA2OZ', 'Invoice manager', 'VIEW_APP_USERS', 'View app users', '', '', ''),
(45, 'TBWG3G1', 'YEPA2OZ', 'Invoice manager', 'VIEW_SYSTEM_ROLE_BUNDLES', 'View system role bundles', '', '', ''),
(46, 'FVZROJU', 'YEPA2OZ', 'Invoice manager', 'VIEW_SYSTEM_MODULE_MANIFEST_', 'View system module manifest ', '', '', ''),
(47, 'ZPQ8AJF', 'YEPA2OZ', 'Invoice manager', 'MANAGE_SYSTEM_MODULE_MANIFEST_', 'Manage system module manifest ', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `user_manifest_`
--

CREATE TABLE IF NOT EXISTS `user_manifest_` (
  `primkey` int(255) NOT NULL,
  `admin_mkey` varchar(500) NOT NULL,
  `user_id` varchar(500) NOT NULL,
  `user_name` varchar(500) NOT NULL,
  `role_id` varchar(500) NOT NULL,
  `site_id` varchar(500) NOT NULL,
  `role_name` varchar(500) NOT NULL,
  `hive_site_id` varchar(500) NOT NULL,
  `hive_site_name` varchar(500) NOT NULL,
  `project_id` varchar(500) NOT NULL,
  `project_name` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `approvals`
--
ALTER TABLE `approvals`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `disbursements`
--
ALTER TABLE `disbursements`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `mosy_sql_roll_back`
--
ALTER TABLE `mosy_sql_roll_back`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `page_manifest_`
--
ALTER TABLE `page_manifest_`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `system_module_manifest_`
--
ALTER TABLE `system_module_manifest_`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `system_role_bundles`
--
ALTER TABLE `system_role_bundles`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `system_users`
--
ALTER TABLE `system_users`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `user_bundle_role_functions`
--
ALTER TABLE `user_bundle_role_functions`
  ADD PRIMARY KEY (`primkey`);

--
-- Indexes for table `user_manifest_`
--
ALTER TABLE `user_manifest_`
  ADD PRIMARY KEY (`primkey`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `approvals`
--
ALTER TABLE `approvals`
  MODIFY `primkey` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `disbursements`
--
ALTER TABLE `disbursements`
  MODIFY `primkey` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `primkey` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mosy_sql_roll_back`
--
ALTER TABLE `mosy_sql_roll_back`
  MODIFY `primkey` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `page_manifest_`
--
ALTER TABLE `page_manifest_`
  MODIFY `primkey` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `primkey` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `primkey` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `primkey` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `primkey` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `system_module_manifest_`
--
ALTER TABLE `system_module_manifest_`
  MODIFY `primkey` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `system_role_bundles`
--
ALTER TABLE `system_role_bundles`
  MODIFY `primkey` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `system_users`
--
ALTER TABLE `system_users`
  MODIFY `primkey` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_bundle_role_functions`
--
ALTER TABLE `user_bundle_role_functions`
  MODIFY `primkey` int(255) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `user_manifest_`
--
ALTER TABLE `user_manifest_`
  MODIFY `primkey` int(255) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
