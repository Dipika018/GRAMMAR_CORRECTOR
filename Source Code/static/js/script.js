document.getElementById('correctBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value.trim();
    const resultDiv = document.getElementById('result');
    console.log('Button clicked. Input:', inputText);
    if (!inputText) {
        resultDiv.textContent = 'Please enter a sentence.';
        resultDiv.classList.remove('hidden', 'bg-green-100', 'text-green-800');
        resultDiv.classList.add('bg-red-100', 'text-red-800');
        return;
    }
    resultDiv.textContent = 'Checking...';
    resultDiv.classList.remove('hidden', 'bg-red-100', 'text-red-800');
    resultDiv.classList.add('bg-green-100', 'text-green-800');

    try {
        const response = await fetch('/correct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: inputText })
        });
        const data = await response.json();
        console.log('Response data:', data);
        resultDiv.textContent = data.corrected;
        resultDiv.classList.remove('hidden');
    } catch (error) {
        console.error('Error:', error);
        resultDiv.textContent = 'Error occurred while correcting grammar.';
        resultDiv.classList.remove('bg-green-100', 'text-green-800');
        resultDiv.classList.add('bg-red-100', 'text-red-800');
        resultDiv.classList.remove('hidden');
    }
});
