let speech=new SpeechSynthesisUtterance();

let voices=[];
let voicesel=document.querySelector("select");
 
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i)=>(voicesel.options[i]=new Option(voice.name,i)));
};
voicesel.addEventListener("change",()=>{
    speech.voice=voices[voicesel.value];
})


document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})