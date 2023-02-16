#!C:\Users\white\AppData\Local\Programs\Python\Python310\python.exe

from mysqlConnect import mysqlConnect
from mysqlClose import mysqlClose
import sys
import json
print('Access-Control-Allow-Origin: http://localhost:3000') #разрешение отправки данных с localhost:3000
print("Content-type: text/plain\n")

def addUser():
    data = sys.stdin.read() #считывание отправленных данных
    user = json.loads(data) #преобразование данных в массив
    [cur, my_sql] = mysqlConnect() #подключение к базе данных
    sql = f"insert into users values(id, '{user['username']}', '{user['password']}', '{user['firstname']}', 'standard')" # формирование запроса на вставку данных в базу данных
    cur.execute(sql) #выполнение запроса
    mysqlClose(cur, my_sql) #завершение подключения к базе данных

addUser()