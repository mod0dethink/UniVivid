CREATE DATABASE IF NOT EXISTS UniVivid;

USE UniVivid;

-- ユーザ情報
CREATE TABLE User(
    User_ID INT AUTO_INCREMENT,
    Mail_Address varchar(254) NOT NULL UNIQUE,
    User_Name varchar(60) NOT NULL,
    Password varchar(60) NOT NULL,
    profile_image BLOB,

    PRIMARY KEY(User_ID)
);


-- 大学情報
CREATE TABLE University(
    Univ_ID INT AUTO_INCREMENT,
    Mail_Address VARCHAR(254) NOT NULL UNIQUE,
    Password VARCHAR(60) NOT NULL,
    Univ_Name VARCHAR(30) NOT NULL UNIQUE,
    info_name VARCHAR(60) NOT NULL,
    Univ_URL VARCHAR(2083) NOT NULL,
    donate_URL VARCHAR(2083),
    profile_image BLOB,

    PRIMARY KEY(Univ_ID)
);


-- カテゴリ
CREATE TABLE Category(
    Category_ID INT AUTO_INCREMENT,
    Category_Name VARCHAR(20) NOT NULL UNIQUE,

    PRIMARY KEY(Category_ID)
);


-- 講義
CREATE TABLE Seminar(
    Seminar_ID INT AUTO_INCREMENT, 
    Univ_ID INT NOT NULL,
    Category_ID INT NOT NULL,

    PRIMARY KEY(Seminar_ID),

    FOREIGN KEY(Univ_ID) REFERENCES University(Univ_ID) ON DELETE CASCADE,
);


CREATE TABLE seminar_in_person(
    Seminar_ID INT,
    Semi_name VARCHAR(50) NOT NULL,
    Prof_name VARCHAR(60),
    Start_Date DATETIME NOT NULL,
    offer_URL VARCHAR(2083) NOT NULL,
    Category_ID INT,
    thema_color VARCHAR(7) NOT NULL,
    Location CHAR(3) NOT NULL,
    content VARCHAR(200) NOT NULL,
    thumbnail MEDIUMBLOB NOT NULL,

    PRIMARY KEY(Seminar_ID),
    FOREIGN KEY(Seminar_ID) REFERENCES Seminar(Seminar_ID) ON DELETE CASCADE,
    FOREIGN KEY(Category_ID) REFERENCES Category(Category_ID)
);


CREATE TABLE Semi_videos(
    Seminar_ID INT,
    URL VARCHAR(2083) NOT NULL,
    Upload_time DATETIME NOT NULL,
    thumbnail MEDIUMBLOB NOT NULL,

    PRIMARY KEY(Seminar_ID),
    FOREIGN KEY(Seminar_ID) REFERENCES Seminar(Seminar_ID) ON DELETE CASCADE
);


-- ノート
CREATE TABLE Note(
    Note_ID INT AUTO_INCREMENT,
    Seminar_ID INT NOT NULL,
    User_ID INT NOT NULL,
    Note MEDIUMBLOB NOT NULL,
    Upload_time DATETIME NOT NULL,
    approve TINYINT(1) NOT NULL DEFAULT 0,

    PRIMARY KEY(Note_ID),
    FOREIGN KEY(User_ID) REFERENCES User(User_ID),
    FOREIGN KEY(Seminar_ID) REFERENCES Seminar(Seminar_ID) ON DELETE CASCADE
);


-- 興味
CREATE TABLE Interest(
    User_ID INT NOT NULL,
    Category_ID INT NOT NULL,

    FOREIGN KEY(User_ID) REFERENCES User(User_ID) ON DELETE CASCADE,
    FOREIGN KEY(Category_ID) REFERENCES Category(Category_ID)
);


-- 受講履歴
CREATE TABLE History(
    User_ID INT NOT NULL,
    Seminar_ID INT NOT NULL,

    FOREIGN KEY(User_ID) REFERENCES User(User_ID) ON DELETE CASCADE,
    FOREIGN KEY(Seminar_ID) REFERENCES Seminar(Seminar_ID) ON DELETE CASCADE
);


-- 高評価した講義
CREATE TABLE Fav_semi(
    User_ID INT NOT NULL,
    Seminar_ID INT NOT NULL,

    FOREIGN KEY(User_ID) REFERENCES User(User_ID) ON DELETE CASCADE,
    FOREIGN KEY(Seminar_ID) REFERENCES Seminar(Seminar_ID) ON DELETE CASCADE
);

-- 高評価したノート
CREATE TABLE Fav_note(
    User_ID INT NOT NULL,
    Note_ID INT NOT NULL,

    FOREIGN KEY(User_ID) REFERENCES User(User_ID) ON DELETE CASCADE,
    FOREIGN KEY(Note_ID) REFERENCES Note(Note_ID) ON DELETE CASCADE
);


-- ノートにするコメント
CREATE TABLE Note_comment(
    Note_ID INT NOT NULL,
    User_ID INT NOT NULL,
    Comment VARCHAR(200) NOT NULL,
    approve TINYINT(1) NOT NULL DEFAULT 0,

    FOREIGN KEY(Note_ID) REFERENCES Note(Note_ID) ON DELETE CASCADE,
    FOREIGN KEY(User_ID) REFERENCES User(User_ID) ON DELETE CASCADE
);


-- 大学コメント
CREATE TABLE Univ_comment(
    comment_ID INT AUTO_INCREMENT,
    Univ_ID INT NOT NULL,
    User_ID INT NOT NULL,
    Review VARCHAR(200) NOT NULL,
    approve TINYINT(1) NOT NULL DEFAULT 0,

    PRIMARY KEY(comment_ID),

    FOREIGN KEY(Univ_ID) REFERENCES University(Univ_ID) ON DELETE CASCADE,
    FOREIGN KEY(User_ID) REFERENCES User(User_ID) ON DELETE CASCADE
);

/*
ユーザーアカウントが消える→(大学コメント、ノートコメント、高評価、履歴、興味)が消える
大学アカウントが消える→(セミナー、大学コメント)が消える
セミナーが消える→(高評価、ノート)が消える
ノートが消える→(高評価、ノートコメント)が消える
*/