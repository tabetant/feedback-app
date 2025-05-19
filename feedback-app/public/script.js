var submit = document.getElementById("button");
var textBox = document.getElementById("textbox");
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
});
var table = document.querySelector(".submitted");

var submitFeedback = (textBox) => {
    fetch('http://localhost:3000/feedbacks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textBox.value })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Feedback submitted:", textBox.value);
            console.log("Server response:", data);
            textBox.value = '';
            return fetch('http://localhost:3000/feedbacks', {
                method: 'GET',
            })
        })


        .then(response => response.json())
        .then(feedbacks => {
            feedbacks.forEach(feedback => {
                const row = document.createElement("tr");
                const cell = document.createElement("td");
                cell.textContent = feedback.message;
                row.appendChild(cell);
                table.appendChild(row);
            });
        })
        .catch(err => { console.error("Error:", err.message); });
}

submit.addEventListener("click", () => submitFeedback(textBox));
