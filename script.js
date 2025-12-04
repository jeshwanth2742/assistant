const translator = {
    "హాయ్": "Hello",
    "నమస్కారం": "Hello",
    "ఆకలి": "Hunger",
    "నీరు": "Water",
    "ప్రేమ": "Love",
    "బాధ": "Sadness",
    "సంతోషం": "Happiness",
    "కోపం": "Anger",
    "నిద్ర": "Sleep",
    "స్నేహం": "Friendship",
    "పుస్తకం": "Book",
    "గురు": "Teacher",
    "పాఠశాల": "School",
    "కళాశాల": "College",
    "విద్యార్థి": "Student"
};

function translate() {
    const input = document.getElementById("teluguInput").value.trim();
    const output = document.getElementById("output");

    if (translator[input]) {
        output.innerText = "English: " + translator[input];
    } 
    else {
        output.innerText = "Word not found in dictionary!";
    }
}
