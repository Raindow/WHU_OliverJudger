/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : WHU_OliverJudger

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 09/05/2020 10:05:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for announcement
-- ----------------------------
DROP TABLE IF EXISTS `announcement`;
CREATE TABLE `announcement` (
  `Title` varchar(255) NOT NULL,
  `Content` varchar(1000) DEFAULT NULL,
  `Time` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of announcement
-- ----------------------------
BEGIN;
INSERT INTO `announcement` VALUES ('何老师', '何老师何老师何老师何老师何老师何老师', '2020年5月5日');
INSERT INTO `announcement` VALUES ('开发人员', '本项目的开发人员为石泽坤，陈添，黄文柯，指导老师何承达', '2020年3月27日');
INSERT INTO `announcement` VALUES ('开服公告', '这个项目的使用人员需要为武汉大学学生哦', '2020年6月20日');
INSERT INTO `announcement` VALUES ('新年快乐', '新年快乐baby', '2020年9月1日');
INSERT INTO `announcement` VALUES ('昆宝昆宝', '昆宝昆宝昆宝昆宝昆宝昆宝昆宝昆宝', '2020年3月3日');
INSERT INTO `announcement` VALUES ('柯宝柯宝', '柯宝柯宝柯宝柯宝柯宝柯宝柯宝柯宝', '2020年4月4日');
INSERT INTO `announcement` VALUES ('武汉大学', '武汉大学武汉大学武汉大学武汉大学武汉大学', '2020年6月6日');
INSERT INTO `announcement` VALUES ('武汉大学计算机学院', '武汉大学计算机学院好啊，快来报名', '2020年1月17日');
INSERT INTO `announcement` VALUES ('添宝添宝', '添宝添宝添宝添宝添宝添宝添宝添宝', '2020年2月2日');
COMMIT;

-- ----------------------------
-- Table structure for chapter
-- ----------------------------
DROP TABLE IF EXISTS `chapter`;
CREATE TABLE `chapter` (
  `Chapter` varchar(255) DEFAULT NULL,
  `Chapter_Sub_CN` varchar(255) DEFAULT NULL,
  `Chapter_Sub_ENG` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of chapter
-- ----------------------------
BEGIN;
INSERT INTO `chapter` VALUES ('queue-stack', '队列：先入先出的数据结构', 'Queue_FIFO');
INSERT INTO `chapter` VALUES ('queue-stack', '队列和广度优先搜索', 'Queue_BFS');
INSERT INTO `chapter` VALUES ('queue-stack', '栈：后入先出的数据结构', 'Stack_LIFO');
INSERT INTO `chapter` VALUES ('queue-stack', '栈和深度优先搜索', 'Stack_DFS');
INSERT INTO `chapter` VALUES ('queue-stack', '小结', 'QueueandStack_Summary');
INSERT INTO `chapter` VALUES ('array-string', '数组字符串概览', 'Array_String_Abstract');
INSERT INTO `chapter` VALUES ('array-string', '二维数组', 'Array_String_Two-Dimensional-Array');
INSERT INTO `chapter` VALUES ('array-string', '双指针技巧', 'Array_String_Double-Link');
COMMIT;

-- ----------------------------
-- Table structure for chapterproblems
-- ----------------------------
DROP TABLE IF EXISTS `chapterproblems`;
CREATE TABLE `chapterproblems` (
  `proIndex` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `proLevel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`proIndex`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of chapterproblems
-- ----------------------------
BEGIN;
INSERT INTO `chapterproblems` VALUES (2, 'a+b', '简单', 'Queue_FiFo');
INSERT INTO `chapterproblems` VALUES (3, 'aaa', '简单', 'Queue_FiFo');
COMMIT;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `navItem` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `navIndex` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `imgSrc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`navItem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of class
-- ----------------------------
BEGIN;
INSERT INTO `class` VALUES ('C++程序设计', 'Cplusplus', '/Courses/Cplusplus', 'https://pic.downk.cc/item/5e9a6032c2a9a83be55c1cf8.jpg');
INSERT INTO `class` VALUES ('Objective-C', 'Objective-C', '/Courses/Objective-C', 'https://pic.downk.cc/item/5e9a606ec2a9a83be55c4b4d.jpg');
INSERT INTO `class` VALUES ('数据库系统', 'Mysql', '/Courses/Mysql', 'https://pic.downk.cc/item/5e9a60a6c2a9a83be55c7362.jpg');
INSERT INTO `class` VALUES ('数据结构', 'Data_Structure', '/Courses/Data_Structure', 'https://pic.downk.cc/item/5e9a5fc7c2a9a83be55bc51a.jpg');
INSERT INTO `class` VALUES ('面向对象程序设计Java', 'Java', '/Courses/Java', 'https://pic.downk.cc/item/5e9a601fc2a9a83be55c0cb4.jpg');
COMMIT;

-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `Class` varchar(255) DEFAULT NULL,
  `Chapter` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of course
-- ----------------------------
BEGIN;
INSERT INTO `course` VALUES ('Data_Structure', '队列&栈', '/Courses/Data_Structure/queue-stack', 'queue-stack');
INSERT INTO `course` VALUES ('Data_Structure', '数组和字符串', '/Courses/Data_Structure/array-string', 'array-string');
INSERT INTO `course` VALUES ('Data_Structure', '链表', '/Courses/Data_Structure/linked-list', 'linked-list');
INSERT INTO `course` VALUES ('Data_Structure', '哈希表', '/Courses/Data_Structure/hash-map', 'hash-map');
INSERT INTO `course` VALUES ('Data_Structure', '二分查找', '/Courses/Data_Structure/binary-search', 'binary-search');
INSERT INTO `course` VALUES ('Data_Structure', '二叉树', '/Courses/Data_Structure/binary-tree', 'binary-tree');
INSERT INTO `course` VALUES ('Data_Structure', 'N缀树', '/Courses/Data_Structure/n-tree', 'n-tree');
INSERT INTO `course` VALUES ('Data_Structure', '前缀树', '/Courses/Data_Structure/prefix-tree', 'prefix-tree');
INSERT INTO `course` VALUES ('Mysql', '增删改查', '/Courses/Mysql/adus', 'adus');
INSERT INTO `course` VALUES ('Mysql', '查询子句', '/Courses/Mysql/substatement', 'substatement');
INSERT INTO `course` VALUES ('Mysql', '范式', '/Courses/Mysql/paradigm', 'paradigm');
COMMIT;

-- ----------------------------
-- Table structure for problems
-- ----------------------------
DROP TABLE IF EXISTS `problems`;
CREATE TABLE `problems` (
  `proIndex` bigint(20) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `proLevel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `exampleInandOut` varchar(500) DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `python` varchar(255) DEFAULT NULL,
  `cpp` varchar(255) DEFAULT NULL,
  `java` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`title`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of problems
-- ----------------------------
BEGIN;
INSERT INTO `problems` VALUES (1, 'a_b_sqrt2', '简单', '计算形如(a+b)^2的值', 'array(float) \\n 	void', 0, 'a_b_sqrt2', 'a_b_sqrt2', 'ABSqrt2');
INSERT INTO `problems` VALUES (2, 'absent_value_array', '中等', 'Find the missing element in the value array', 'array(int)	void \\n  void', 1, 'absent_value_array', 'absent_value_array', 'AbsentValueArray');
INSERT INTO `problems` VALUES (3, 'adding_credits', '中等', '1', 'array(tuple(string[operation], string[string arg], int[int arg])) \\n  void', 0, 'adding_credits', 'adding_credits', 'AddingCredits');
INSERT INTO `problems` VALUES (4, 'advance_by_offsets', '中等', '1', 'array(int) \\n bool', 0, 'advance_by_offsets', 'advance_by_offsets', 'AdvanceByOffsets');
INSERT INTO `problems` VALUES (5, 'alternating_array', '中等', '1', 'array(int) \\n void', 0, 'alternating_array', 'alternating_array', 'AlternatingArray');
INSERT INTO `problems` VALUES (6, 'anagrams', '中等', '1', 'array(string) \\n array(array(string))', 0, 'anagrams', 'anagrams', 'Anagrams');
INSERT INTO `problems` VALUES (7, 'apply_permutation', '中等', '1', 'array(int)[permutation] \\n array(int)[data]', 0, 'apply_permutation', 'apply_permutation', 'ApplyPermutation');
INSERT INTO `problems` VALUES (8, 'arbitrage', '中等', '1', 'array(array(float)) \\n bool', 0, 'arbitrage', 'arbitrage', 'Arbitrage');
INSERT INTO `problems` VALUES (9, 'binomial_coefficients', '中等', '1', 'int \\n int', 0, 'binomial_coefficients', 'binomial_coefficients', 'BinomialCoefficients');
INSERT INTO `problems` VALUES (10, 'bonus', '中等', '1', 'array(int) \\n int', 0, 'bonus', 'bonus', 'Bonus');
INSERT INTO `problems` VALUES (11, 'bst_from_preorder', '中等', '1', 'array(int) \\n binary_tree(int)', 0, 'bst_from_preorder', 'bst_from_preorder', 'BstFromPreorder');
INSERT INTO `problems` VALUES (12, 'bst_from_sorted_array', '中等', '1', 'array(int) \\n int', 0, 'bst_from_sorted_array', 'bst_from_sorted_array', 'BstFromSortedArray');
INSERT INTO `problems` VALUES (13, 'bst_merge', '中等', '1', 'binary_tree(int) \\n binary_tree(int)', 0, 'bst_merge', 'bst_merge', 'BstMerge');
INSERT INTO `problems` VALUES (14, 'bst_to_sorted_list', '中等', '1', 'binary_tree(int) \\n array(int)', 0, 'bst_to_sorted_list', 'bst_to_sorted_list', 'BstToSortedList');
INSERT INTO `problems` VALUES (17, 'buy_and_sell_stock', '中等', '1', 'array(float) \\n float', 0, 'buy_and_sell_stock', 'buy_and_sell_stock', 'BuyAndSellStock');
INSERT INTO `problems` VALUES (15, 'buy_and_sell_stock_k_times', '中等', '1', 'array(float) \\n int float', 0, 'buy_and_sell_stock_k_times', 'buy_and_sell_stock_k_times', 'BuyAndSellStock');
INSERT INTO `problems` VALUES (16, 'buy_and_sell_stock_twice', '中等', '1', 'array(float) \\n float', 0, 'buy_and_sell_stock_twice', 'buy_and_sell_stock_twice', 'BuyAndSellStockTwice');
INSERT INTO `problems` VALUES (18, 'calendar_rendering', '中等', '1', 'array(tuple(int[start], int[finish])) \\n int', 0, 'calendar_rendering', 'calendar_rendering', 'CalendarRendering');
INSERT INTO `problems` VALUES (19, 'circular_queue', '中等', '1', 'array(tuple(string[op], int[argument])) \\n void', 0, 'circular_queue', 'circular_queue', 'CircularQueue');
INSERT INTO `problems` VALUES (20, 'closest_int_same_weight', '中等', '1', ' long \\n long', NULL, 'closest_int_same_weight', 'closest_int_same_weight', 'ClosestIntSameWeight');
COMMIT;

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `StudentID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Major` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Solved` varchar(255) DEFAULT NULL,
  `Submission` varchar(255) DEFAULT NULL,
  `Score` varchar(255) DEFAULT NULL,
  `imgSrc` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of students
-- ----------------------------
BEGIN;
INSERT INTO `students` VALUES ('1', '1', '黄文柯', '计算机', '591852399@qq.com', '4', '8', '95', NULL);
INSERT INTO `students` VALUES ('2', '2', '2', '2', '2', NULL, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for submission
-- ----------------------------
DROP TABLE IF EXISTS `submission`;
CREATE TABLE `submission` (
  `studentID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `submissionTime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `submissionStatus` varchar(255) DEFAULT NULL,
  `problemIndex` varchar(255) DEFAULT NULL,
  `problemName` varchar(255) DEFAULT NULL,
  `usingTime` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `usingLanguage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `failReason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of submission
-- ----------------------------
BEGIN;
INSERT INTO `submission` VALUES ('1', '2', '3', '8', '4', '5', '7', '9');
INSERT INTO `submission` VALUES ('1', 'b', 'c', 'd', 'e', 'f', 'h', 'i');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
