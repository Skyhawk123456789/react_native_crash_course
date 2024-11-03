from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes



@app.route('/api/submit', methods=['POST'])
def submit_data():
    # Get the JSON data from the request
    print("HIIIIIIIIII")
    data = request.get_json()

    if not data or 'accomplishment' not in data:
        return jsonify({'message': 'Invalid input'}), 400

    # Extract the input value
    user_input = data['accomplishment'] 
    
    # Here you can process the input as needed, e.g., saving it to a database
    print(f"Received input: {user_input}")

    # Respond with a success message
    return jsonify({'message': 'Input received successfully', 'input': user_input}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    #app.run(debug=True)

