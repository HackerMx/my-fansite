from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.json.get('message')
    response = "This is a placeholder response."  # Replace with your chatbot logic
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
