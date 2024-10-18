# Filename - server.py

# Import flask and datetime module for showing date and time
from flask_cors import CORS
from flask import Flask, request
import datetime


x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)

CORS(app, origins="http://localhost:5000")

# Route for seeing a data
@app.route('/register', methods=['POST'])
def register():
    # Returning an api for showing in  reactjs
    
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        error = None

        if not username:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'

        if error is not None:
            print('Got username and password')

    return {
            "data": "received"
        }

    
# Running app
# if __name__ == '__main__':
#     app.run(debug=True)
