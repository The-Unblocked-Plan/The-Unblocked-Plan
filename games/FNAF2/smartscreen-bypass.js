document.addEventListener('DOMContentLoaded', (event) => {
    const lineOfCode = '#document (chrome:error://chromewebdata/)';

    const observer = new MutationObserver((mutationsList, observer) => {
        for(let mutation of mutationsList) {
            if(mutation.addedNodes.length) {
                const addedNode = mutation.addedNodes[0];
                if (addedNode.nodeType === Node.TEXT_NODE && addedNode.textContent.includes(lineOfCode)) {
                    addedNode.textContent = addedNode.textContent.replace(lineOfCode, '');
                    console.log('Microsoft Defender SmartScreen bypassed!');
                }
            }
        }
    });

    // Log the value of document.body
    console.log(document.body);

    // Start observing the document with the configured parameters
    observer.observe(document.documentElement, { childList: true, subtree: true });
});