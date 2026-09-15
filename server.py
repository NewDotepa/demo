import sqlite3


con = sqlite3.connect(r"magicshoes.db")

cur = con.cursor()

cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        is_admin BOOLEAN
    )""")

adminCheck = cur.execute("""SELECT login FROM users WHERE login = 'login'""")
checkAdmin = adminCheck.fetchone()

if checkAdmin is None:
    cur.execute("""INSERT INTO users (login, password, is_admin) VALUES ("login", "password", TRUE)""")
con.commit()


cur.execute("""
    CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT NOT NULL,
            price REAL NOT NULL,
            image TEXT NOT NULL,
            stock INTEGER NOT NULL)
    """)

cur.execute("""
    CREATE TABLE IF NOT EXISTS basket (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER,
            product_id INTEGER,
            quantity INTEGER,
            FOREIGN KEY(user_id) REFERENCES users(id),
            FOREIGN KEY(product_id) REFERENCES products(id)

    )
    """)

res = cur.execute("SELECT * FROM users")
result = res.fetchone()
print(result)
