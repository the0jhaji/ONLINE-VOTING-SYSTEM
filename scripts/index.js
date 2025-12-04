function Proceed() {
    const name = document.getElementById("input-field").value;
    const adhar = document.getElementById("adhar-no").value;
    const dob = document.getElementById("age").value;

    if (!name || !adhar || !dob) {
        showCustomAlert("⚠ Please fill all fields! valid nhi hai to bhi chalega, par maza nhi ayega😎");
        return;
    }
    if (adhar.length !== 12 || isNaN(adhar)) {
        showCustomAlert("⚠ Please enter a valid 12-digit Aadhar number! valid nhi hai to bhi chalega, par maza nhi ayega😎");
        return;
    }
    if (isNaN(Date.parse(dob))) {
        showCustomAlert("⚠ Please enter a valid date of birth! valid nhi hai to bhi chalega, par maza nhi ayega😎");
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) age--;

    if (age >= 18) {
        window.location.href = "voting.html";
    } else {
        showCustomAlert(`❌ Ladle bada to ho ja! Abhi teri umar hi kya hai ${age} saal.`);
    }
}

// JavaScript for custom alert
function showCustomAlert(message) {
    const overlay = document.getElementById("alertOverlay");
    const msg = document.getElementById("alertMessage");
    const okBtn = document.getElementById("alertOkBtn");

    msg.textContent = message;
    overlay.style.display = "flex";

    okBtn.onclick = () => {
        overlay.style.display = "none";
    };
}
