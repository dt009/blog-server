-- MySQL dump 10.13  Distrib 5.7.22, for osx10.13 (x86_64)
--
-- Host: localhost    Database: blog_sql
-- ------------------------------------------------------
-- Server version	5.7.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_mysql_session_store`
--

DROP TABLE IF EXISTS `_mysql_session_store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_mysql_session_store`
--

LOCK TABLES `_mysql_session_store` WRITE;
/*!40000 ALTER TABLE `_mysql_session_store` DISABLE KEYS */;
INSERT INTO `_mysql_session_store` VALUES ('USER_SID:-Ka8Kc8-gO3Vcki1WQwyfYNM1ySxuyHi',1536808759184,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:4TH9CyH8Sk9Bw7WcSqzgvQDcr1otjg6b',1536737596428,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:4VcdLUaffEiixZAgIQ2WJ4GfBcCM5_iU',1536977281624,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:6N02n8Pv_9plBUtE5YIygfdQ1_a5v4kd',1535766688653,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:7HJR69RiC-vnmdK_uga9ogHtb52jOvKV',1536919997152,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:7Hy-lpZs_96GFtzgD_sn8e4i7Jkb3Msq',1535765367577,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:bGJMNjXvZ20AsMp2kkX9ujPJVTGfJpiQ',1535767726296,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:Bv3nCW3SxSnEZpGKCCJ2TE02j-utH9xr',1536742976706,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:cyzpKxCLj6hZsJjyuITzvknJK4uvpnar',1537408853281,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:eeCMWd8vHgr9IzK0uPOwom_TrcqUFpzX',1535767811547,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:eMIiisj5AZqcZs9gV8F37JCHyK-vuoTF',1536737357702,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:HDreULr9NnpojBMGPaFnmLlqb7I__PI1',1536745474759,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:jiTL7UU9xAPS2qN6eAQq96dyNkibkUAS',1536737523704,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:K5x4nV4G1RWOJdt_nw-qwK6OyEc6vr8w',1535772082423,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:kdGg-P3da96T_x6Cm6FFm3qmik8VXy9L',1536739014126,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:lOMPqYHLGlCMpiJ3GlhB_Sjg0Fw9xYE2',1536738022444,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:l_xjfHKVdCMq6Ex-FnHuuPf5oE3hsbe_',1535774148552,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:ma7-50sWPg5mbVv4311KdyVg3K3TWbHM',1536738909627,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:njFwcBbLl0ghluiaJFQVSacfiHn-U2cb',1536737128140,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:NQNCbpDVebgtiz1PGTuHHALm27we--qR',1535772120548,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:NVFvcTvijrq-PuSp-lLKuUrV6o1WEwWH',1535773926632,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:olEdq5PMfrhIl8o3dLSKWZO9XnVtNeCg',1535766942918,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:pL9VUU1JgwNai6j86gVWdE08OEBggL8f',1535771925776,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:qPMelSLNfbz4IWC-EkPwpzWco8zddi05',1535767803365,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:RihdffcXRruy2oiHQPvp96EC3IpS689I',1536026669612,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:s8LRVnvqaRmNis8EejAjbmRIgL4-3j2j',1535766768516,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:TPLKdNKfo9sjhZA-9dMuhKetmF9sauGn',1536906009872,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:tRMrSznfDHDapt7x5hw3GxAgGXHObYTL',1535765169101,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:ttUDX7yhtcgwi6b3HHKJO8ctHeOsiJLJ',1535765921445,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:Ui5UD5J8xHuR3aDERCa4IsxCs0CaRpdY',1535765257785,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:VNRTdkbTn9adO2BaWDRW5qkOWLNjQMdm',1535771862282,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:VtaPBxxKordfCJbO20VIkwpDIz5l5GdF',1536737658392,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:WFcHCuKvygxV9z01YM2D9kehZS6i2XLi',1535765929940,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:x4y5tev7fML7VCTdHFWL3vWL7_02aRtY',1536805761461,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:xafs_TM0UNoWWntt5x-0O2hLdwcOcKNQ',1535765203642,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:xVbr7jfrn_FvQnmWXj6NvzeWzpZD61m-',1536805137375,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:y1yO9fd47cq_wLZlxVu8BxsgyPtMjEFC',1535772172376,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:YA8C_Mzny4jn4H0dH5EHCMlWQ9vlaeSe',1535766837062,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}'),('USER_SID:ZeG_9hKRNABwILsrXSj7XR1XzetFDm1T',1536750562134,'{\"isLogin\":true,\"user\":\"dt009\",\"id\":1}');
/*!40000 ALTER TABLE `_mysql_session_store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `used_count` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'test','测试',0,'这是一个测试的分类');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `router`
--

DROP TABLE IF EXISTS `router`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `router` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `path` varchar(100) NOT NULL,
  `label` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `icon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `path` (`path`),
  UNIQUE KEY `label` (`label`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `router`
--

LOCK TABLES `router` WRITE;
/*!40000 ALTER TABLE `router` DISABLE KEYS */;
INSERT INTO `router` VALUES (11,'HomePage','/','主页','other','&#xe648;'),(12,'AboutPage','/about',' 关于我','other','&#xe602;'),(13,'TagsPage','/tags',' 标签','other','&#xe63e;'),(14,'CategoriesPage','/categories','分类','other','&#xe622;'),(15,'ArticleSearchPage','/article_search','搜索','other','&#xe658;'),(16,'BlogArticleManagePage','/blog_article_manage',' 文章管理','own','&#xe671;'),(17,'TagsManagePage','/tags_manage','标签管理','own','&#xe626;'),(18,'CategoriesManagePage','/categories_manage','分类管理','own','&#xe620;'),(19,'UserBaseInfoManagePage','/user_base_info_manage','用户信息管理','own','&#xe611;'),(20,'WebsiteBaseInfoManagePage','/website_base_info_manage','站点信息管理','own','&#xe61a;'),(21,'RouterManagePage','/router_manage','路由管理','own','&#xe60d;');
/*!40000 ALTER TABLE `router` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `used_count` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (2,'test','测试',0,'这是测试用的标签');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `gender` int(11) NOT NULL,
  `birthday` varchar(100) NOT NULL,
  `profession` varchar(100) NOT NULL,
  `education` varchar(100) NOT NULL,
  `contact_way` longtext NOT NULL,
  `skill` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId` (`userId`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,1,'dt009','段涛',1,'1992-03-14','web前端开发工程师','{\"isShow\":true,\"value\":\"5\"}','{\"contact_way\":[{\"label\":\"电话\",\"isShow\":true,\"value\":\"18363625031\"},{\"label\":\"邮箱\",\"isShow\":true,\"value\":\"18363625031@163.com\"},{\"label\":\"QQ\",\"isShow\":true,\"value\":\"2276969581\"},{\"label\":\"微信\",\"isShow\":true,\"value\":\"18363625031\"}]}','{\"skill\":[{\"label\":\"HTML\",\"isShow\":true,\"value\":4.5},{\"label\":\"CSS\",\"isShow\":true,\"value\":4.5},{\"label\":\"JavaScript\",\"isShow\":true,\"value\":4.5},{\"label\":\"NodeJs\",\"isShow\":true,\"value\":3.5}]}');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `moment` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dt009','Iamdt009','无图','2018-08-24');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `website_info`
--

DROP TABLE IF EXISTS `website_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `website_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `keyword` varchar(10000) NOT NULL,
  `contactList` longtext NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId` (`userId`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `website_info`
--

LOCK TABLES `website_info` WRITE;
/*!40000 ALTER TABLE `website_info` DISABLE KEYS */;
INSERT INTO `website_info` VALUES (2,1,'dt009','段涛的博客','段涛','博客=>blog=>学习=>交流=>JS=>Web前端=>node','{\"contactList\":[{\"icon\":\"&#xe634;\",\"name\":\" 18363625031\",\"link\":\"\",\"img\":\"http://owtyucuge.bkt.clouddn.com/weCaht.jpeg\"},{\"icon\":\"&#xe6b2;\",\"name\":\" 2276969581\",\"link\":\"\",\"img\":\"http://owtyucuge.bkt.clouddn.com/qq.png\"},{\"icon\":\"&#xe694;\",\"name\":\"18363625031@163.com\",\"link\":\"mailto:18363625031@163.com\",\"img\":\"\"},{\"icon\":\"&#xe712;\",\"name\":\"GitHub\",\"link\":\"https://github.com/dt009\",\"img\":\"\"},{\"icon\":\"&#xe60a;\",\"name\":\"CSDN 博客\",\"link\":\"https://me.csdn.net/dt_009\",\"img\":\"\"},{\"icon\":\"&#xe606;\",\"name\":\"18363625031\",\"link\":\"\",\"img\":\"\"}]}');
/*!40000 ALTER TABLE `website_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-19 16:48:14
