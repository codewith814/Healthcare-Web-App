
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# Get API key from environment
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY environment variable is not set")

GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"

@app.route('/symptom-checker', methods=['POST'])
def symptom_checker():
    data = request.get_json()
    symptoms = data.get("message", "")

    if not symptoms:
        return jsonify({"reply": "Please describe your symptoms."})

    try:
        prompt = f"""Act as a medical professional. The user reports these symptoms: {symptoms}. 
        Provide a professional assessment of possible conditions, but emphasize that this is not a diagnosis 
        and they should consult a doctor for proper evaluation. Keep the response concise and helpful and pointwise"""
        
        headers = {"Content-Type": "application/json"}
        payload = {
            "contents": [{
                "parts": [{
                    "text": prompt
                }]
            }]
        }

        response = requests.post(GEMINI_URL, json=payload, headers=headers)
        response.raise_for_status()  # Raises exception for 4XX/5XX status codes
        
        result = response.json()
        
        if 'candidates' in result and result['candidates']:
            reply = result['candidates'][0].get('content', {}).get('parts', [{}])[0].get('text', 
                      "Sorry, I couldn't process that. Please try again.")
            return jsonify({"reply": reply})
        
        return jsonify({"reply": "Error: Invalid response format from API"})

    except requests.exceptions.RequestException as e:
        print(f"API Request Error: {e}")
        return jsonify({"reply": f"Error connecting to the AI service: {str(e)}"})
    except Exception as e:
        print(f"Unexpected Error: {e}")
        return jsonify({"reply": f"Unexpected error: {str(e)}"})

if __name__ == '__main__':
    app.run(debug=True)
