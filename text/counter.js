document.getElementById('documentInput').addEventListener('input', function() {
    const text = this.innerText;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;

    document.getElementById('wordCount').textContent = `Words: ${wordCount}`;
    document.getElementById('charCount').textContent = `Characters: ${charCount}`;
});

document.getElementById('checkGrammar').addEventListener('click', function() {
    const text = document.getElementById('documentInput').innerText;
    fetch('https://api.languagetool.org/v2/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `text=${encodeURIComponent(text)}&language=en-US`
    })
    .then(response => response.json())
    .then(data => {
        const grammarErrors = data.matches.map(match => {
            const errorText = text.substring(match.offset, match.offset + match.length);
            return `<p>Error: ${match.message} (at position ${match.offset})</p>`;
        }).join('');
        
        document.getElementById('grammarErrors').innerHTML = grammarErrors;

        let highlightedText = text;
        data.matches.reverse().forEach(match => {
            const errorText = text.substring(match.offset, match.offset + match.length);
            highlightedText = highlightedText.substring(0, match.offset) +
                `<span class="highlight-error">${errorText}</span>` +
                highlightedText.substring(match.offset + match.length);
        });

        document.getElementById('documentInput').innerHTML = highlightedText;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});