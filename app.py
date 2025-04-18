from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    # Get form data
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    
    # Print the data to the console (you could save this to a database or email it)
    print(f"Name: {name}, Email: {email}, Message: {message}")
    
    return 'Thank you for your message!'

if __name__ == '__main__':
  app.run(host="0.0.0.0", port=5000)
