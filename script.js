document.getElementById('reportButton').addEventListener('click', function() {
    document.getElementById('reportModal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('reportModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('reportModal')) {
        document.getElementById('reportModal').style.display = 'none';
    }
});

document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const issueType = document.getElementById('issueType').value;
    const issueDescription = document.getElementById('issueDescription').value;

    if (issueType && issueDescription) {
        alert('Report Submitted Successfully');
        // Here you can add your code to handle the form data, such as sending it to a server
        document.getElementById('reportModal').style.display = 'none';
    } else {
        alert('Please fill out all fields');
    }
});
