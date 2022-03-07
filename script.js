function textToSpeach(message) {
    message=document.getElementById("text").value;
    const speach = new SpeechSynthesisUtterance(message);
    [speach.voice] = speechSynthesis.getVoices();
    speechSynthesis.speak(speach);
}