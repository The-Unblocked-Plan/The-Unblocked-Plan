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

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });