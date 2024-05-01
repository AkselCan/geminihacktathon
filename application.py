from flask import Flask, request, jsonify
from flask_cors import CORS
from youtube_transcript_api import YouTubeTranscriptApi
import google.generativeai as genai
import os

app = Flask(__name__)
CORS(app)

# Load environment variables
from dotenv import load_dotenv
load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

prompt = """You are a YouTube video summarizer. You will be taking the transcript text
and summarizing the entire video and providing the important summary in points
within 250 words. You will also compare the title and transcript provided and give a score from 0 to 5 telling the clickbait level of the video. 
Please provide the summary of the text given here:  """

def extract_transcript_details(video_id):
    transcript_text = YouTubeTranscriptApi.get_transcript(video_id)
    transcript = " ".join(item["text"] for item in transcript_text)
    return transcript

def generate_gemini_content(transcript_text):
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt + transcript_text)
    return response.text

@app.route('/summarize', methods=['POST'])
def summarize_video():
    data = request.get_json()
    video_id = data['url'].split('=')[1]
    transcript_text = extract_transcript_details(video_id)
    summary = generate_gemini_content(transcript_text)
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(debug=True)



