document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('checkDifference');

    button.addEventListener('click', function () {
        const firstText = document.getElementById('first').innerText;
        const secondText = document.getElementById('second').innerText;

        
        const diff = Diff.diffWords(firstText, secondText);

        
        let firstHTML = '';
        let secondHTML = '';

        diff.forEach(part => {
            const spanClass = part.added
                ? 'added'
                : part.removed
                ? 'removed'
                : 'unchanged';

            if (part.removed || !part.added) {
                firstHTML += `<span class="${spanClass}">${part.value}</span>`;
            }
            if (part.added || !part.removed) {
                secondHTML += `<span class="${spanClass}">${part.value}</span>`;
            }
        });

        document.getElementById('first').innerHTML = firstHTML;
        document.getElementById('second').innerHTML = secondHTML;
    });

    const buttonSecond = document.getElementById('restart')
    buttonSecond.addEventListener('click', function(){
        document.getElementById('first').innerHTML = ''
        document.getElementById('second').innerHTML = ''
    })
});
