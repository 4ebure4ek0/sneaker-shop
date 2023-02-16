import MySQLdb
def mysqlConnect():

    my_sql = MySQLdb.connect(host="127.0.0.1",
                         port=7777,
                         user="root",
                         passwd="qwerty",
                         db="sneaker_shop"
    )
    my_sql.autocommit(True)

    cur = my_sql.cursor(MySQLdb.cursors.DictCursor)
    return [cur, my_sql]