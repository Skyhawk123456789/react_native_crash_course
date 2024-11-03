from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from datetime import date

streaks = 0
app = Flask(__name__)
CORS(app)  # This enables CORS for all routes




def analysis(sentence):
    blob = TextBlob(sentence)
    sentiment = sia.polarity_scores(sentence)

    return {
        "sentence" : sentence,
        "sentiment" : sentiment["compound"],
        "subjectivity" : blob.subjectivity
    }

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

    nltk.download('vader_lexicon')
    sia = SentimentIntensityAnalyzer()

    blob = TextBlob(user_input)
    sentiment = sia.polarity_scores(user_input)["compound"]
    subjectivity = blob.subjectivity
    today = date.today()

    global streaks
    streaks += 1



    if (sentiment > 0.4):
        sentiment = "Sentiment: Positive"
    elif (sentiment < -0.4):
        sentiment = "Sentiment: Negative"
    else:
        sentiment = "Sentiment: Neutral"


    if (subjectivity > 0.4):
        subjectivity = "Personal"
    else:
        subjectivity = "Not Personal"

    user_input = str(today) + "   " +  str(streaks) + "🔥\n" + user_input + "\n" + sentiment + "\n" + subjectivity






    # Respond with a success message
    return jsonify({'message': 'Input received successfully', 'input': user_input}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    #app.run(debug=True)

