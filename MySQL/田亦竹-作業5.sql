-- 1. 顯示所有員工之姓名,所屬部門編號,部門名稱及部門所在地點。

USE DEMO;
SELECT e.ename , e.deptno , d.dname , d.loc
FROM dept d JOIN emp e ON d.deptno = e.deptno
order by deptno;

-- 2. 顯示所有有賺取佣金的員工之姓名,佣金金額,部門名稱及部門所在地點。
SELECT e.ename , e.comm , d.dname , d.loc 
FROM dept d JOIN emp e ON d.deptno = e.deptno
having comm is not null &&  comm >0;
-- 3. 顯示姓名中包含有”A”的員工之姓名及部門名稱。
SELECT e.ename , d.dname 
FROM dept d JOIN emp e ON d.deptno = e.deptno
WHERE e.ename LIKE '%A%';

-- 4. 顯示所有在”DALLAS”工作的員工之姓名,職稱,部門編號及部門名稱
SELECT e.ename ,e.job , e.deptno, d.dname 
FROM dept d JOIN emp e ON d.deptno = e.deptno
WHERE d.loc LIKE 'DALLAS';

-- 5. 顯示出表頭名為: Employee, Emp#, Manager, Mgr#，分別表示所有員工之姓名,員工編號,主
-- 管姓名, 主管的員工編號。
SELECT e.ename as 'Employee' ,  e.empno as 'Emp#', b.ename as 'Manager', e.mgr as 'Mgr#'
FROM emp e JOIN emp b ON e.mgr = b.empno
order by e.empno;


-- 6. 顯示出SALGRADE資料表的結構，並建立一查詢顯示所有員工之姓名,職稱,部門名稱,薪資及
-- 薪資等級。 , 
SELECT e.ename ,e.job , e.deptno, e.sal ,s.grade
FROM emp e, salgrade s, dept d 
WHERE e.sal  between s.losal and s.hisal and e.deptno = d.deptno;
-- SELECT GRADE  ,LOSAL ,HISAL
-- FROM SALGRADE;

-- 7. 顯示出表頭名為: Employee, Emp Hiredate, Manager, Mgr Hiredate的資料項，來顯示所有比
-- 他的主管還要早進公司的員工之姓名,進公司日期和主管之姓名及進公司日期。
SELECT e1.ename as 'Employee', e1.hiredate as 'Emp Hiredate', e2.ename as 'Manager', e2.hiredate as 'Mgr Hiredate'
FROM emp e1 JOIN emp e2 ON e1.mgr = e2.empno
WHERE e1.hiredate < e2.hiredate;

-- 8. 顯示出表頭名為: dname, loc, Number of People, Salary的資料來顯示所有部門之部門名稱,部
-- 門所在地點,部門員工數量及部門員工的平均薪資，平均薪資四捨五入取到小數第二位。
SELECT d.dname, d.loc, count(e.empno) as 'Number of People', round(avg(e.sal), 2) as 'Salary'	 
FROM dept d JOIN emp e ON e.deptno = d.deptno
group by d.dname;



