from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///../db/app.db"
db = SQLAlchemy(app)


class TestMessage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column("Message", db.String())

    def __repr__(self):
        return f"""<TestMessage ID: {self.id} Message: {self.message}>"""

