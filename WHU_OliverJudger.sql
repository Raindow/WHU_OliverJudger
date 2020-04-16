/*
Navicat MySQL Data Transfer

Source Server         : szkqwer
Source Server Version : 80015
Source Host           : localhost:3306
Source Database       : whu_oliverjudger

Target Server Type    : MYSQL
Target Server Version : 80015
File Encoding         : 65001

Date: 2020-04-16 16:20:59
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
