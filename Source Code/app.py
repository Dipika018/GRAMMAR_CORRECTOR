from flask import Flask, request, jsonify, render_template
import language_tool_python

app = Flask(__name__)
tool = language_tool_python.LanguageTool('en-US')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/correct', methods=['POST'])
def correct():
    data = request.get_json()
    text = data.get('text', '')
    print(f"Received text for correction: {text}")
    matches = tool.check(text)
    corrected_text = language_tool_python.utils.correct(text, matches)
    print(f"Corrected text: {corrected_text}")
    return jsonify({'corrected': corrected_text})

if __name__ == '__main__':
    app.run(debug=True)
