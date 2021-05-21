from flask import Flask
from models import db, TestMessage, app


@app.route("/api/message")
def index():
    message = TestMessage.query.first()
    print(message)
    return f"Hello from Flask! \n{message.message}"


if __name__ == "__main__":
    db.drop_all()  # TODO: Remove!
    db.create_all()
    msg = TestMessage(message="Hello from SQLite!")
    db.session.add(msg)
    db.session.commit()

    app.run(debug=True, port=8000)
