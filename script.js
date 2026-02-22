function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");
}

// LOGIN SYSTEM
function loginUser(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === "student" && pass === "1234") {
    document.getElementById("loginMsg").innerText = "Login Successful!";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid Credentials!";
  }
}

// ADMIN ADD ANNOUNCEMENT
function addAnnouncement() {
  const text = prompt("Enter new announcement:");
  if(text) {
    const div = document.createElement("p");
    div.innerText = "📢 " + text;
    document.getElementById("adminArea").appendChild(div);
  }
}

// FEEDBACK
function submitFeedback(e) {
  e.preventDefault();
  document.getElementById("feedbackMsg").innerText = "Thank you for your feedback!";
}

// CHART
const ctx = document.getElementById('eventChart');
if(ctx){
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Hackathon', 'Fest', 'Sports'],
        datasets: [{
            label: 'Participants',
            data: [120, 200, 150],
            backgroundColor: ['#0a1f44', '#00c3ff', '#1abc9c']
        }]
    }
});
}