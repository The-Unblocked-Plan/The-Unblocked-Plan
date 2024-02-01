const iframe = document.querySelector('iframe');
iframe.addEventListener('load', function() {
    const originalHTML = iframe.contentWindow.document.documentElement.innerHTML;
    const observer = new MutationObserver((mutationsList, observer) => {
        if (iframe.contentWindow.document.documentElement.innerHTML !== originalHTML) {
            observer.disconnect();
            iframe.contentWindow.document.documentElement.innerHTML = originalHTML;
            observer.observe(iframe.contentWindow.document.documentElement, { childList: true, subtree: true });
        }
    });
    observer.observe(iframe.contentWindow.document.documentElement, { childList: true, subtree: true });
});