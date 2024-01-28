document.addEventListener('DOMContentLoaded', (event) => {
    const lineOfCode = '<!-- DO NOT REMOVE OR MODIFY THE COMMENT ABOVE SINCE THE FRAME BLOCKING FEATURE DEPENDS ON IT-->';

    setInterval(() => {
        const bodyHtml = document.documentElement.innerHTML;
        if (bodyHtml.includes(lineOfCode)) {
            document.documentElement.innerHTML = bodyHtml.replace(lineOfCode, '');
            console.log('Microsoft Defender SmartScreen bypassed!');
        }
    }, 1000);
});