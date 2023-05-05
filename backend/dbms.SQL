CREATE DATABASE novus;
USE novus;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE payments(
  id int NOT NULL AUTO_INCREMENT,
  fullName varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  addr varchar(100) NOT NULL,
  city varchar(20) NOT NULL,
  stat_e varchar(10) NOT NULL,
  zip int NOT NULL,
  cardName varchar(50) NOT NULL,
  cardNumbe int NOT NULL,
  expMonth int NOT NULL,
  expYear int NOT NULL,
  cvv int NOT NULL,
  amount decimal(10,2) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_a timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
CREATE TABLE startups (
  id int NOT NULL AUTO_INCREMENT,
  fullName varchar(50) NOT NULL,
  compEmail varchar(50) NOT NULL,
  founderLinkedIn varchar(100) NOT NULL,
  compName varchar(100) NOT NULL,
  companyLinkedIn varchar(100) NOT NULL,
  website varchar(100) NOT NULL,
  prevFund varchar(1000) NOT NULL,
  product varchar(600) NOT NULL,
  traction varchar(1000) NOT NULL,
  revenue varchar(1000) NOT NULL,
  teamSize varchar(100) NOT NULL,
  whyRaise varchar(1000) NOT NULL,
  whyNovus varchar(1000) NOT NULL,
  existingCommitments varchar(1000) NOT NULL,
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);