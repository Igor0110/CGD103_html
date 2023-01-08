SET SQL_SAFE_UPDATES = 0;
-- 需要設定，才可以修改
-- 1. 將下列的資料新增至MY_EMP 資料表中,不要列舉欄位。
INSERT INTO MY_EMP
values (1, 'Patel', 'Ralph', 'rpatel', 795);
SELECT * 
FROM MY_EMP;
-- 2. 使用列舉欄位方式,將下列的資料新增至 MY_EMP資料表中。
INSERT INTO MY_EMP(ID, LAST_NAME ,FIRST_NAME ,USERID ,SALARY)
values (2, 'Dancs', 'Betty', 'bdance', 860);
SELECT * 
FROM MY_EMP;
-- 3. 將下列的資料新增至 MY_EMP資料表中。
INSERT INTO MY_EMP
values (3, 'Biri', 'Ben', 'bbiri', 1100),
       (4, 'Newman', 'Chad', 'cnewman', 750);
SELECT * 
FROM MY_EMP;
-- 4. 將員工編號為3的名字(last name)更改為 Drexler 。
UPDATE MY_EMP
SET LAST_NAME =  'Drexler'
WHERE ID = 3;

SELECT * 
FROM MY_EMP;
-- 5. 將薪資低於900元的所有員工薪資調整為1000元。
UPDATE MY_EMP
SET SALARY =  1000
WHERE SALARY <= 900;

SELECT * 
FROM MY_EMP;
-- 6. 刪除 Betty Dancs 的資料。
DELETE FROM my_emp
WHERE LAST_NAME = 'Dancs' && FIRST_NAME = 'Betty';

-- 7. 啟動一個資料庫交易將所有員工的薪資調升10%
-- 設定一個交易儲存點  刪除所有MY_EMP資料表中的資料
-- 確認資料已被你刪光了
-- 放棄刪除資料的動作
-- 確認交易
START TRANSACTION;
update MY_EMP 
set salary = salary*1.1;
select * from my_emp;
SAVEPOINT SP1;
DELETE FROM my_emp;
select * from my_emp;
ROLLBACK TO SP1;
select * from my_emp;
COMMIT;
select * from my_emp;
