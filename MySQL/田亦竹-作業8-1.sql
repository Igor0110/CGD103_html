SET SQL_SAFE_UPDATES = 0;
-- 1.-- 利用下列資料來新建 DEPARTMENT 資料 表。
	create table DEPARTMENT(
		id INT NOT NULL,
		name VARCHAR(24) NOT NULL
	);
    SELECT * 
	FROM DEPARTMENT;
-- 2.-- 利用 DEPT 資料表中的資料 將資料新增至 DEPARTMENT 資料表中 只新增相對的資料欄 。
    SELECT * 
	FROM DEPT;
    
	INSERT INTO DEPARTMENT(id,name)
	select  deptno ,dname 
    From DEPT;
	
	SELECT * 
	FROM DEPARTMENT;

-- 3.-- 利用 下列資料來新建 EMPLOYEE 資料 表。
	create table EMPLOYEE(
		field INT NOT NULL,
		last_name  VARCHAR(24) NOT NULL,
        first_name  VARCHAR(24) ,
        dept_id int
	);
    SELECT * 
	FROM EMPLOYEE;

-- 4.-- 將 EMPLOYEE 資料表中 last_name 欄位的資料型態更改為 varchar(40 。
ALTER TABLE EMPLOYEE
modify column last_name varchar(40);
DESC EMPLOYEE;
-- 5.-- 使用 EMP 資料表的結構中之 EMPNO, ENAME,and DEPTNO 之定義來新建 EMPLOYEE2 資料表並將
-- 欄位名稱設定為 ID, LAST_NAME, and DEPT_ID 。
    SELECT * 
	FROM EMP;
    
create table EMPLOYEE2 
select empno, ename, deptno 
from emp;
alter table EMPLOYEE2 
change column empno ID INT NOT NULL,
change column ename LAST_NAME VARCHAR(10),
change column deptno DEPT_ID INT NOT NULL;
DESC EMPLOYEE2;

    SELECT * 
	FROM EMPLOYEE2;

-- 6.-- 刪除整個 EMPLOYEE 資料 表。

-- 7.-- 將 EMPLOYEE2 資料表改名為 EMPLOYEE 。
-- 8.-- 將 EMPLOYEE 資料表中的 LAST_NAME 欄位 刪除 。
-- 9.-- 修改 EMPLOYEE 資料表 新增一個欄位 SALARY 資料型態為 INT 。
-- 10.-- 修改 EMPLOYEE 資料表 使用 ID 欄位新增一個 Primary key 的限制條件 ( 並為他 命名。
-- 11.-- 在 EMPLOYEE 資料表新增一個 外來鍵 (foreign 以確保員工不會被分派到一個不存在的 部門 。