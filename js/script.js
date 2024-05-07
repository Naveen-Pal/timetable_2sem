function getTimetable() {
    var rollNumber = document.getElementById("rollNumber").value.toUpperCase();
    
    // Assuming the images are in the "img" folder
    var imageUrl = "img/" + rollNumber + ".png";

    // Redirect to the timetable image
    window.location.href = imageUrl;
}

