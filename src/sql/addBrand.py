#!C:\Users\white\AppData\Local\Programs\Python\Python310\python.exe

from mysqlConnect import mysqlConnect
from mysqlClose import mysqlClose
import sys
import json

print('Access-Control-Allow-Origin: http://localhost:3000') #разрешение отправки данных с localhost:3000
print("Content-type: text/plain\n")

def addBrand():
    data = sys.stdin.read() #считывание отправленных данных
    brand = json.loads(data) #преобразование данных в массив
    [cur, my_sql] = mysqlConnect() #подключение к базе данных
    sql = f"insert into brands values(id, '{brand['brand_name']}', '{brand['brand_logo']}', '{brand['brand']}')" # формирование запроса на вставку данных в базу данных
    cur.execute(sql) #выполнение запроса
    mysqlClose(cur, my_sql) #завершение подключения к базе данных

addBrand()