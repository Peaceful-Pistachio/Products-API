-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Products'
--
-- ---

DROP TABLE IF EXISTS `Products`;

CREATE TABLE `Products` (
  `product_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL UNIQUE,
  `name` VARCHAR(255) NOT NULL,
  `slogan` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(2000) NULL DEFAULT NULL,
  `category` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  `default_price` INTEGER NOT NULL DEFAULT 0,
  `features` INTEGER NULL DEFAULT NULL,
  `styles` INTEGER NULL DEFAULT NULL,
  `related_products` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`)
);

-- ---
-- Table 'Styles'
--
-- ---

DROP TABLE IF EXISTS `Styles`;

CREATE TABLE `Styles` (
  `styles_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL UNIQUE,
  `name` MEDIUMTEXT NOT NULL DEFAULT 'NULL',
  `original_price` INTEGER NOT NULL DEFAULT NULL,
  `sale_price` INTEGER NULL,
  `default` bit NOT NULL DEFAULT NULL,
  `photos` INTEGER NULL DEFAULT NULL,
  `skus` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`styles_id`)
);

-- ---
-- Table 'features'
--
-- ---

DROP TABLE IF EXISTS `features`;

CREATE TABLE `features` (
  `features_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL UNIQUE,
  `feature` MEDIUMTEXT NOT NULL DEFAULT 'NULL',
  `value` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`features_id`)
);

-- ---
-- Table 'related_products'
--
-- ---

DROP TABLE IF EXISTS `related_products`;

CREATE TABLE `related_products` (
  `related_products_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL UNIQUE,
  `product_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`related_products_id`)
);

-- ---
-- Table 'photos'
--
-- ---

DROP TABLE IF EXISTS `photos`;

CREATE TABLE `photos` (
  `photo_id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL UNIQUE,
  `thumbnail_url` MEDIUMTEXT NOT NULL DEFAULT 'NULL',
  `url` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`photo_id`)
);

-- ---
-- Table 'skus'
--
-- ---

DROP TABLE IF EXISTS `skus`;

CREATE TABLE `skus` (
  `sku_id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL UNIQUE,
  `quantity` INTEGER NOT NULL,
  `size` INTEGER NOT NULL DEFAULT NULL,
  PRIMARY KEY (`sku_id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Products` ADD FOREIGN KEY (features) REFERENCES `features` (`features_id`);
ALTER TABLE `Products` ADD FOREIGN KEY (styles) REFERENCES `Styles` (`styles_id`);
ALTER TABLE `Products` ADD FOREIGN KEY (related_products) REFERENCES `related_products` (`related_products_id`);
ALTER TABLE `Styles` ADD FOREIGN KEY (photos) REFERENCES `photos` (`photo_id`);
ALTER TABLE `Styles` ADD FOREIGN KEY (skus) REFERENCES `skus` (`sku_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `related_products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `skus` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Products` (`product_id`,`name`,`slogan`,`description`,`category`,`default_price`,`features`,`styles`,`related_products`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Styles` (`styles_id`,`name`,`original_price`,`sale_price`,`default`,`photos`,`skus`) VALUES
-- ('','','','','','','');
-- INSERT INTO `features` (`features_id`,`feature`,`value`) VALUES
-- ('','','');
-- INSERT INTO `related_products` (`related_products_id`,`product_id`) VALUES
-- ('','');
-- INSERT INTO `photos` (`photo_id`,`thumbnail_url`,`url`) VALUES
-- ('','','');
-- INSERT INTO `skus` (`sku_id`,`quantity`,`size`) VALUES
-- ('','','');