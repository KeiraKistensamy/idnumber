function CheckID() {
    const idNumber = document.getElementById('idNumber').value; 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (idNumber.length !== 13 || isNaN(idNumber)) {
        resultDiv.innerHTML = '<p style="color: red;">ID number must be 13 numeric characters long.</p>';
        return;
    }

    const year = idNumber.substring(0, 2);
    const month = idNumber.substring(2, 4);
    const day = idNumber.substring(4, 6);
    const genderCode = idNumber.substring(6, 7);
    const gender = genderCode < 5 ? 'Female' : 'Male';

    const currentYear = new Date().getFullYear();
    const fullYear = (currentYear.toString().substring(2) < year ? '19' : '20') + year;

    resultDiv.innerHTML = `
        <p>Day: ${day}</p>
        <p>Month: ${month}</p>
        <p>Year: ${fullYear}</p>
        <p>Gender: ${gender}</p>
    `;
}

document.getElementById('idForm').addEventListener('submit', function(event) {
    event.preventDefault();
    CheckID();
});
