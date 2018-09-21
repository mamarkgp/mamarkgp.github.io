// addEventListener support for IE8
function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}
// Send a message to the parent
var sendMessage = function (msg) {
    // Make sure you are sending a string, and to stringify JSON
    window.parent.postMessage(msg, '*');
};
var messageButton = document.getElementById('test-site');
// Send random message data on every button click
bindEvent(messageButton, 'click', function (e) {
    // alert('iframe clicked');
    sendMessage('');
});