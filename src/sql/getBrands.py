#!C:\Users\white\AppData\Local\Programs\Python\Python310\python.exe

from mysqlConnect import mysqlConnect
from mysqlClose import mysqlClose
import json
print('Access-Control-Allow-Origin: http://localhost:3000') #разрешение отправки данных с localhost:3000
print("Content-type: text/plain\n")

def getBrands():
    [cur, my_sql] = mysqlConnect() #подключение к базе данных
    sql = "select * from brands" # формирование запроса на вставку данных в базу данных
    cur.execute(sql) #выполнение запроса
    brands = cur.fetchall() #получение данных из базы данных
    brands = json.dumps(brands) #преобразование данных в строку
    mysqlClose(cur, my_sql) #завершение подключения к базе данных
    print(brands) #вывод ответа на запрос

getBrands()