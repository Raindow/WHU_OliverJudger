/*
Navicat MySQL Data Transfer

Source Server         : myRoot
Source Server Version : 80013
Source Host           : localhost:3306
Source Database       : whu_oliverjudger

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2020-04-16 16:44:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for announcement
-- ----------------------------
DROP TABLE IF EXISTS `announcement`;
CREATE TABLE `announcement` (
  `Title` varchar(255) NOT NULL,
  `Content` varchar(1000) DEFAULT NULL,
  `Time` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of announcement
-- ----------------------------
INSERT INTO `announcement` VALUES ('开发人员', '本项目的开发人员为石泽坤，陈添，黄文柯，指导老师何承达', '2020年3月27日');
INSERT INTO `announcement` VALUES ('开服公告', '这个项目的使用人员需要为武汉大学学生哦', '2020年6月20日');
INSERT INTO `announcement` VALUES ('新年快乐', '新年快乐baby', '2020年9月1日');
INSERT INTO `announcement` VALUES ('武汉大学计算机学院', '武汉大学计算机学院好啊，快来报名', '2020年1月17日');
INSERT INTO `announcement` VALUES ('添宝添宝', '添宝添宝添宝添宝添宝添宝添宝添宝', '2020年2月2日');
INSERT INTO `announcement` VALUES ('昆宝昆宝', '昆宝昆宝昆宝昆宝昆宝昆宝昆宝昆宝', '2020年3月3日');
INSERT INTO `announcement` VALUES ('柯宝柯宝', '柯宝柯宝柯宝柯宝柯宝柯宝柯宝柯宝', '2020年4月4日');
INSERT INTO `announcement` VALUES ('何老师', '何老师何老师何老师何老师何老师何老师', '2020年5月5日');
INSERT INTO `announcement` VALUES ('武汉大学', '武汉大学武汉大学武汉大学武汉大学武汉大学', '2020年6月6日');

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
INSERT INTO `chapter` VALUES ('queue-stack', '概览', 'QueueandStack_Abstract');
INSERT INTO `chapter` VALUES ('queue-stack', '队列：先入先出的数据结构', 'Queue_FIFO');
INSERT INTO `chapter` VALUES ('queue-stack', '队列和广度优先搜索', 'Queue_BFS');
INSERT INTO `chapter` VALUES ('queue-stack', '栈：后入先出的数据结构', 'Stack_LIFO');
INSERT INTO `chapter` VALUES ('queue-stack', '栈和深度优先搜索', 'Stack_DFS');
INSERT INTO `chapter` VALUES ('queue-stack', '小结', 'QueueandStack_Summary');
INSERT INTO `chapter` VALUES ('array-string', '数组字符串概览', 'Array_String_Abstract');
INSERT INTO `chapter` VALUES ('array-string', '二维数组', 'Array_String_Two-Dimensional-Array');
INSERT INTO `chapter` VALUES ('array-string', '双指针技巧', 'Array_String_Double-Link');
INSERT INTO `chapter` VALUES ('array-string', '小结', 'Array_String_Summary');

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

-- ----------------------------
-- Table structure for problems
-- ----------------------------
DROP TABLE IF EXISTS `problems`;
CREATE TABLE `problems` (
  `proIndex` bigint(20) NOT NULL,
  `title` varchar(255) NOT NULL,
  `proLevel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `exampleInandOut` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`proIndex`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of problems
-- ----------------------------
INSERT INTO `problems` VALUES ('1', '武汉大学', '简单', '武汉大学（Wuhan University），简称“武大”，是中华人民共和国教育部直属的综合性全国重点大学，国家首批“世界一流大学建设高校A类”、”985工程“和”211工程“重点建设高校；入选国家”珠峰计划“、”2011计划“、”111计划“、卓越医生教育培养计划、卓越法律人才教育培养计划、卓越工程师教育培养计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划、国家建设高水平大学公派研究生项目、新工科研究与实践项目，是全国首批深化创新创业教育改革示范高校、中国政府奖学金来华留学生接收院校、医学“双一流”建设联盟成员、首批学位授权自主审核单位、“强基计划”试点高校。', '给定\\nnums = [2, 7, 11, 15], target = 9\\n因为nums[0] + nums[1] = 2 + 7 = 9\\n所以返回 [0, 1]\n');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `ID` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '1');
