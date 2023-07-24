from flask import Flask ,render_template
from flask_bootstrap import Bootstrap
app = Flask(__name__)
Bootstrap(app)
@app.route("/")
def SayHello():
    # print("Two")
    return render_template("index.html")
@app.route("/Chapter2")
def Chapter2():
    return render_template('Chapter2.html')
@app.route("/Chapter3")
def Chapter3(): 
    return render_template("Chapter3.html")
@app.route("/Chapter4")
def Chapter4():
    return render_template("Chapter4.html")
@app.route("/Chapter5")
def Chapter5():
    return render_template("Chapter5.html")

if __name__ == "__main__":
    app.run()