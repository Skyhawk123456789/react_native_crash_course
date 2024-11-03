from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/submit', methods=['POST'])
def submit_data():
    # Get the JSON data from the request
    data = request.get_json()

    if not data or 'input' not in data:
        return jsonify({'message': 'Invalid input'}), 400

    # Extract the input value
    user_input = data['input']
    
    # Here you can process the input as needed, e.g., saving it to a database
    print(f"Received input: {user_input}")

    # Respond with a success message
    return jsonify({'message': 'Input received successfully', 'input': user_input}), 200

if __name__ == '__main__':
    app.run(debug=True)
