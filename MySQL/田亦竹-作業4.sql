-- 1. 顯示所有員工的最高、最低、總和及平均薪資，依序將表頭命名為 Maximum, Minimum, Sum
-- 和 Average，請將結果顯示為四捨五入的整數。

USE demo;
SELECT  round(MAX(sal)) as "Maximum",round( MIN(sal) ) as "Minimum", round(SUM(sal) ) as "SUM", round(avg(sal) ) as "Average"
FROM emp;

-- 2. 顯示每種職稱的最低、最高、總和及平均薪水。
SELECT  job ,round(MAX(sal) ,2) as "MAX(sal)",round( MIN(sal) ,2) as "MIN(sal)", round(SUM(sal),2 ) as "SUM(sal)", round(AVG(sal),6 )as "AVG(sal)"
FROM emp
group by  job;

-- 3. 顯示每種職稱的人數。
SELECT  job ,count(*) 
FROM emp
group by  job;

-- 4. 顯示資料項命名為Number of Managers來表示擔任主管的人數。
SELECT  COUNT(distinct mgr) as "Number of Managers"
FROM emp;

-- 5. 顯示資料項命名為DIFFERENCE的資料來表示公司中最高和最低薪水間的差額。
SELECT  (MAX(sal) -MIN(sal)) as "DIFFERENCE"
FROM emp;

-- 6. 顯示每位主管的員工編號及該主管下屬員工最低的薪資，排除沒有主管和下屬員工最低薪資
-- 少於1000的主管，並以下屬員工最低薪資作降冪排列。
SELECT   distinct mgr , min(sal)
FROM emp
group by mgr 
having  mgr is  not null &&  min(sal) >1000
order by sal desc;


-- 7. 顯示在2010,2011,2012,2013年進公司的員工數量，並給該資料項一個合適的名稱。
SELECT  year(HIREDATE) as "HYear" , COUNT(empno) as "Number of People"
FROM emp
where year( HIREDATE) in ("2010","2011", "2012", "2013" )
group by  year(HIREDATE);
