fetch("https://script.google.com/macros/s/AKfycbyVpWdFnuZAKOwZDBziwgQ2f59bLzDLaOifbZxuHHj3/dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "YourUsername",
      score: currentScore
    })
  })
  .then(response => response.text())
  .then(data => console.log(data));
  
