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

 Date: 11/04/2020 10:03:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Announcement
-- ----------------------------
DROP TABLE IF EXISTS `Announcement`;
CREATE TABLE `Announcement` (
  `Title` varchar(255) NOT NULL,
  `Content` varchar(1000) DEFAULT NULL,
  `Time` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of Announcement
-- ----------------------------
BEGIN;
INSERT INTO `Announcement` VALUES ('开发人员', '本项目的开发人员为石泽坤，陈添，黄文柯，指导老师何承达', '2020年3月27日');
INSERT INTO `Announcement` VALUES ('开服公告', '这个项目的使用人员需要为武汉大学学生哦', '2020年6月20日');
INSERT INTO `Announcement` VALUES ('新年快乐', '新年快乐baby', '2020年9月1日');
INSERT INTO `Announcement` VALUES ('武汉大学计算机学院', '武汉大学计算机学院好啊，快来报名', '2020年1月17日');
INSERT INTO `Announcement` VALUES ('添宝添宝', '添宝添宝添宝添宝添宝添宝添宝添宝', '2020年2月2日');
INSERT INTO `Announcement` VALUES ('昆宝昆宝', '昆宝昆宝昆宝昆宝昆宝昆宝昆宝昆宝', '2020年3月3日');
INSERT INTO `Announcement` VALUES ('柯宝柯宝', '柯宝柯宝柯宝柯宝柯宝柯宝柯宝柯宝', '2020年4月4日');
INSERT INTO `Announcement` VALUES ('何老师', '何老师何老师何老师何老师何老师何老师', '2020年5月5日');
INSERT INTO `Announcement` VALUES ('武汉大学', '武汉大学武汉大学武汉大学武汉大学武汉大学', '2020年6月6日');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
