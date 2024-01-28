const oldHTML = document.documentElement.innerHTML;
console.log('Old HTML: ', oldHTML);
window.addEventListener('DOMContentLoaded', (event) => {
    const lineOfCode = '#document (chrome-error://chromewebdata/)';

    setInterval(() => {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            const iframeContent = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeContent && iframeContent.documentElement) {
                const iframeHtml = iframeContent.documentElement.innerHTML;
                if (iframeHtml.includes(lineOfCode)) {
                    iframeContent.documentElement.innerHTML = iframeHtml.replace(lineOfCode, '');
                    console.log('Line of code removed from iframe!');
                }
            }
        }
    }, 1000); // Check every 1000 milliseconds (1 second)
});