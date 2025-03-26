from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    email = request.form['email']
    message = request.form['message']
    # Here, you can add code to handle the form submission (e.g., send an email, save to a database)
    return f"Thank you for reaching out! We will get back to you soon."

if __name__ == '__main__':
    app.run(debug=True)
