-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2025 at 10:22 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `milweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `user_id` int(11) NOT NULL,
  `soldier_id` blob NOT NULL,
  `soldier_password` blob NOT NULL,
  `salt` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `soldier_id`, `soldier_password`, `salt`) VALUES
(1, 0x0ef4357e530bd6db5d1bbaa60f19c6a5167a55ca735e5eb5823257173ffd83de7f56d9841ae192eaa1f508fa0bb693ca8ae537ae9d80198d5ea705bcf2c7a4cc46be279ff4223b62b09409f658f9cecc, 0xd4dea71e1294d075765787ed611b94296eb0427831d45008d3af3498d7c5679a22845edeccbd4247235f4e702d938a86be0f5e74cb7242bbbaf6d82733224c1946be279ff4223b62b09409f658f9cecc, 0x32054055cd62ab6b69a1f039b0a9a9fe46be279ff4223b62b09409f658f9cecc),
(2, 0x68c4add0669ba2eeb55a19acf2ef442ecd9703c102e73500b2696885881bcf9c65e5270540af1704b942886afd2462c780545fb53047297749bc9d1d5e00ed5e46be279ff4223b62b09409f658f9cecc, 0x7f53f07138a6e92c8fa04804b473b1dd30055296bead88321c5a1025b4d1a50c01dc9823decff67372c27833de806c41a4041fb1c82fda507c7541217b37a8cf46be279ff4223b62b09409f658f9cecc, 0xc77bff8491c1ce183bdd1ead2c9f3c1d46be279ff4223b62b09409f658f9cecc),
(3, 0xa4e26d0d49c24eaec71be3580154f255620e5141f5835563d3b9f978fe1b3e653b2a728e1548a4cb81b5fed8bacd82931dcdb0734235b1f8791dfaa910341f7d46be279ff4223b62b09409f658f9cecc, 0x8def026469aa9024efaac742283c3e8d8b5a09bbfc8c1acb53a18c18196ffa9a7ac3690350c4294defd76a69ed9b227de12bc84b6fc303187261efed0d450e4d46be279ff4223b62b09409f658f9cecc, 0xf863fe6b201fb7c87700c00de4eadf4a46be279ff4223b62b09409f658f9cecc),
(4, 0xf1e30d1bcc765ae0fcfa293320e9f8b4bdc4be0a88587c864a25d3c853a0856f1ce1871566960721955eee9ca1e5b7d35068aca2029e9781ac4534fe6650632f46be279ff4223b62b09409f658f9cecc, 0xdde7171e249afdaa4334266523ff32a5149401089388b5da3033766527a2312bc2fb206662c8c90bb31e2cef5a99c9e56dc8b354673aa21537f6561e21d41eea46be279ff4223b62b09409f658f9cecc, 0x61a91507e00766087bea68734d9b1d3446be279ff4223b62b09409f658f9cecc);

-- --------------------------------------------------------

--
-- Table structure for table `mission`
--

CREATE TABLE `mission` (
  `mission_id` int(11) NOT NULL,
  `name` blob NOT NULL,
  `description` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mission`
--

INSERT INTO `mission` (`mission_id`, `name`, `description`) VALUES
(1, 0x9d8b514cf6731b6efd4b8b2d347eef9b, 0x9d8b514cf6731b6efd4b8b2d347eef9b);

-- --------------------------------------------------------

--
-- Table structure for table `soldier`
--

CREATE TABLE `soldier` (
  `user_id` int(11) NOT NULL,
  `status` blob NOT NULL,
  `callsign` blob NOT NULL,
  `permission` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `soldier`
--

INSERT INTO `soldier` (`user_id`, `status`, `callsign`, `permission`) VALUES
(1, 0x23fede8c774ce7f1289740dc78bbcd14, 0x0a8a1ba35210846edd442ee407805e04, 0x1284afb73ee4980a1fe75fbfefe8c5ef),
(2, 0x23fede8c774ce7f1289740dc78bbcd14, 0x587644510520e7f54a24c26807376c8d, 0x1a85abcdb0ad502595a10e4547e4fa54),
(3, 0x23fede8c774ce7f1289740dc78bbcd14, 0x41676e0c8305e837d3f16b9f3a56e392, 0x53bf8419605aff611d4759e705121e4e),
(4, 0x23fede8c774ce7f1289740dc78bbcd14, 0x8e9d152a7b041b50a0eabb3fe293ac57, 0x1a85abcdb0ad502595a10e4547e4fa54);

-- --------------------------------------------------------

--
-- Table structure for table `squad`
--

CREATE TABLE `squad` (
  `squad_id` int(11) NOT NULL,
  `mission_id` int(11) NOT NULL,
  `callsign` blob NOT NULL,
  `weapon_status` blob NOT NULL,
  `food_status` blob NOT NULL,
  `general_status` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `squad`
--

INSERT INTO `squad` (`squad_id`, `mission_id`, `callsign`, `weapon_status`, `food_status`, `general_status`) VALUES
(1, 1, 0xc31242b2a187140c9dcd20e9696bc32d, 0x0892be6f1cb2ccd0d8ae41d5854f007a, 0xf44aa625e12361e385625e91bc882d00, 0xc0b2e50b50984a34617f2b3eceed587f),
(2, 1, 0x2bc87af0772455cd800e0a314d8450b4, 0x0892be6f1cb2ccd0d8ae41d5854f007a, 0xf44aa625e12361e385625e91bc882d00, 0xc0b2e50b50984a34617f2b3eceed587f),
(3, 1, 0x6cef345bcaf8315d1759c5065871cba9, 0x0892be6f1cb2ccd0d8ae41d5854f007a, 0xf44aa625e12361e385625e91bc882d00, 0xc0b2e50b50984a34617f2b3eceed587f),
(4, 1, 0xd24a13a055e5b2684f2c674f82c9773a, 0x390c5301b46a57b776ae5c110115e22f91bd51926d24c123099ed7abaec72c62, 0xf07c843589f1f5d681171fa26ae9c881, 0xdd60259aa6c9fc2e68bfa88001a23e38);

-- --------------------------------------------------------

--
-- Table structure for table `squad_location`
--

CREATE TABLE `squad_location` (
  `squad_id` int(11) NOT NULL,
  `latitude` blob NOT NULL,
  `longitude` blob NOT NULL,
  `time` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `squad_location`
--

INSERT INTO `squad_location` (`squad_id`, `latitude`, `longitude`, `time`) VALUES
(2, 0xce059402c38410829ec4110647e689af, 0xa58a051c705593dda60ec00b3bd7a4e4, 0xf62f19d4fecc77f63f0b3d16ba8a50b35c58641c2e07b3679aa2261001f9206c),
(1, 0x515749518697d199184d4970a4f35cb1, 0xa58a051c705593dda60ec00b3bd7a4e4, 0xf62f19d4fecc77f63f0b3d16ba8a50b3c499e024bb87dc67f14d19835714cb86),
(3, 0x515749518697d199184d4970a4f35cb1, 0x03b783a956aca9516951ce1fefb6ecd9, 0xf62f19d4fecc77f63f0b3d16ba8a50b33114273fcb9d7b6d3494dcaf9c84c237),
(3, 0xca7b3cb81640c56d8cfdf49af9db030e, 0x7dea61ace1d0610de087461e4bf3b0a8, 0x15ceb908f98bce9bad14716886a9a7ebee7a25bc8cfaf9df9159761837e8e6b2),
(3, 0xca7b3cb81640c56d8cfdf49af9db030e, 0x4b9eb0987fe899975dd1977d7721a33d, 0x15ceb908f98bce9bad14716886a9a7eb53b4358e3564f03723a95661225e0b21),
(3, 0xca7b3cb81640c56d8cfdf49af9db030e, 0x0a66f3d53504379dd9d1af2061d26cd3, 0x30a5ebc5786132838461f54236c67f823ecbdab1c92eb58aa6fccf874953b151),
(3, 0xca7b3cb81640c56d8cfdf49af9db030e, 0x64a8a5df604cf5467db1e9d02163e74b, 0x30a5ebc5786132838461f54236c67f823baff59b68e498f2068b3bd6731112f0),
(3, 0xa0152e42795c9710ddf1660478a7e90d, 0x7dea61ace1d0610de087461e4bf3b0a8, 0x30a5ebc5786132838461f54236c67f821c2bf7223ba07abdd72340fc6907a8cb),
(3, 0x7be81ba509a6e7dc6e7e9249a3826c96, 0x7dea61ace1d0610de087461e4bf3b0a8, 0xf2caa0f2b43586046574b397f93c1c79e871c50c0d66a233afd298ee749b2344),
(4, 0xfd9196a18ffbab375082cda8affd024a, 0xe38ee844c0c6bc0a9bc79cbf3f7abeb7, 0x35756d8030b48d194f9a160120f647b59e2226084f6018fd5b877810177c9dc9),
(4, 0xc18e74a175cc260e4df0673af105007d, 0xe38ee844c0c6bc0a9bc79cbf3f7abeb7, 0x5e139bbdb6df293b3d44baaa1f8af3a944333e517f4f41bc45b3a01c3c06c439),
(4, 0xc894f34768358eb4df32e9a6c0ea79d6, 0xe38ee844c0c6bc0a9bc79cbf3f7abeb7, 0x103a740b6f6270932327f08007639672d238608cd4aab2459151dce9bd0149cf),
(4, 0x7c5d7e25d2de1481b6d477c5d0552724, 0xe38ee844c0c6bc0a9bc79cbf3f7abeb7, 0x103a740b6f6270932327f0800763967234ed277bd2b861dcacae78e82339ba34),
(4, 0x7c5d7e25d2de1481b6d477c5d0552724, 0xacd601ac1067b8fedb4c758f89171811, 0xf10139435a9629c61318a8dbc9ef2a1fd76e651f66032b942fe0aaf366003088),
(4, 0x7c5d7e25d2de1481b6d477c5d0552724, 0xe903087c651deb745000568f72bd1767, 0xf10139435a9629c61318a8dbc9ef2a1fd990ea2be5c8622065dfad8be8833306),
(4, 0x3f124bb65ca7532a90f4a07712c323ca, 0x9ebc8805b1713793b4f2089af5cf3bce, 0xf10139435a9629c61318a8dbc9ef2a1f36ce6a1ac043828a055c8f852b16cfe9),
(4, 0x8d3219bb24a12f7c96cc3ec7c37b8167, 0x9ebc8805b1713793b4f2089af5cf3bce, 0x4b2269e48b4ebacbe06898258536275feb20f095273a42f8c22cef42727c1639),
(4, 0xcb8f22bfe3f8a8625ea27931ed5ae196, 0x9ebc8805b1713793b4f2089af5cf3bce, 0x4b2269e48b4ebacbe06898258536275f76a6821a85ef94dd8a0aa73566f66723),
(4, 0x6bc092d3e67bdf3d693e40b38418fd15, 0x9ebc8805b1713793b4f2089af5cf3bce, 0x4b2269e48b4ebacbe06898258536275fc436c161ddb75a977861c8c3b32d147e),
(4, 0x13e0ef7e397b772ac82369675a412e90, 0x9ebc8805b1713793b4f2089af5cf3bce, 0xa8190e61c01ab814347021a919251baf01e552a88f3c7e7f92973297418be9c5),
(4, 0x8d3219bb24a12f7c96cc3ec7c37b8167, 0x9ebc8805b1713793b4f2089af5cf3bce, 0xa8190e61c01ab814347021a919251baf61cd8094d8da19405b4f57fe8b61af81),
(4, 0x3f124bb65ca7532a90f4a07712c323ca, 0x9ebc8805b1713793b4f2089af5cf3bce, 0xa8190e61c01ab814347021a919251bafdecc7e235ab95e9c9bedc856ee3e7911),
(4, 0xac0a971ca06b4499af3aee762c8aeb7d, 0x9ebc8805b1713793b4f2089af5cf3bce, 0x508198c389bb7653de65e6ffd897c9484d2d8954e5375b7f7623f312ebeefa03),
(3, 0xce059402c38410829ec4110647e689af, 0xa58a051c705593dda60ec00b3bd7a4e4, 0xbcd2ec6f193812f765734efe2e4e8603c70f320ff28df69a901468600114397f),
(3, 0xce059402c38410829ec4110647e689af, 0xa58a051c705593dda60ec00b3bd7a4e4, 0x158fbdea4183156891d656d5b76e380bfaa40a5f76796b0c6c1d1ac4dfde93cc),
(3, 0xd411c3d3efe8daf3451609443d655db5, 0xd411c3d3efe8daf3451609443d655db5, 0xcdbddb78fb53df6a36740ec8a0b7fb0acfb1556fe43935aa759e8f10477067f8),
(3, 0xce059402c38410829ec4110647e689af, 0xa58a051c705593dda60ec00b3bd7a4e4, 0x14e67a06f280ab7cfded8971eee5a75d0f9b693b3d8379db3271d8557b0f1379),
(3, 0xce059402c38410829ec4110647e689af, 0xa58a051c705593dda60ec00b3bd7a4e4, 0xf7eeaff63dd3f8264ff4c40725e1ccc6c3c40ed37d680b42442cdf15b9b160db),
(1, 0xd411c3d3efe8daf3451609443d655db5, 0xd411c3d3efe8daf3451609443d655db5, 0xb38213a34c31cfb843f02c7ba3cbf8071d044d4b27fd1766491f5e4338c3569b);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
