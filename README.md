# GRAMMAR_GEEKS - GRAMMAR CORRECTOR

## Team Name: 
**GRAMMAR GEEKS** 

## Project Title : 
**GRAMMAR CORRECTOR** 

## Description
Grammar Corrector is a web app that fixes English grammar using LanguageTool. 

Users input sentences, click to correct, and view results in a clean, responsive interface powered by Flask, JavaScript, and Tailwind CSS.

## Group Members:
- Dipika Gurjar - [KU2407U397]  
- Jeeya Thakrar - [KU2407U409]
- Dhriti Soni - [KU2407U396]

---

## Project Overview: 
The Grammar Corrector is a web application designed to check and correct grammatical errors in English text. Users input sentences into a responsive, user-friendly interface, and the app processes the text using the LanguageTool library, returning corrected versions. Built with Flask for the backend, JavaScript for frontend interactivity, and Tailwind CSS for styling, it features a clean design, real-time feedback, input validation, and error handling. The app is lightweight, suitable for local development or deployment, and provides a seamless experience for improving text accuracy.

---

## Tools and Libraries Used:
- **Flask:** Python web framework that serves the webpage and handles grammar correction API requests in app.py.
- **language_tool_python:** Python library that checks and corrects English grammar in the backend using LanguageTool in app.py.
- **Tailwind CSS:** CSS framework (via CDN) that styles the responsive frontend interface in index.html.
- **Python:** Programming language that runs the Flask backend and grammar correction logic in app.py.
- **HTML:** Markup language that structures the webpage with a textarea, button, and result div in index.html.
- **JavaScript (Fetch API):** Language with Fetch API that manages user interactions and async backend requests in script.js.

---

## Key Features of Grammar Corrector

- **Text Input:** Users enter sentences in a multi-line textarea for grammar correction.
- **Grammar Correction:** LanguageTool-powered backend corrects English text via /correct API.
- **Interactive UI:** "Correct Grammar" button and Tailwind CSS-styled, responsive design.
- **Result Display:** Shows corrected text or errors with green/red backgrounds.
- **Input Validation:** Alerts on empty input ("Please enter a sentence.").
- **Error Handling:** Manages server errors with clear messages and console logs.
- **Responsive Design:** Mobile-friendly layout with Tailwind CSS.
- **Async API:** JavaScript fetch for smooth POST requests to backend.
- **Simple Backend:** Flask serves UI and API, logs text for debugging.

---

## How HTML, JS, and Python Work in Your Grammar Corrector

- **HTML (index.html):**
Creates the webpage with a textarea for text input, a "Correct Grammar" button, and a result area.
Uses Tailwind CSS for a clean, mobile-friendly design.
- **JavaScript (script.js):**
Listens for button clicks, grabs the input text, and sends it to the backend.
Shows "Checking...", displays corrected text or errors, and updates colors (green for success, red for errors).
- **Python (app.py):**
Runs the Flask server to serve the webpage and handle requests.
Uses LanguageTool to correct grammar and sends the fixed text back.
Together:

HTML shows the UI, JavaScript handles user actions and updates, and Python corrects grammar, creating a simple app to fix English text.

---

# Credits:
- Dipika: Built the Python backend, integrating Flask and language_tool_python for grammar correction in app.py.
- Jeeya: Developed the JavaScript functionality, implementing user interactions, API requests, and dynamic UI updates in script.js.
- Dhriti: Designed and structured the HTML frontend, creating the responsive user interface with Tailwind CSS in index.html.
