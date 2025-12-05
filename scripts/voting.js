import { candidates } from "./candidates.js";

document.addEventListener("DOMContentLoaded", () => {
    let candidateHTML = "";

    candidates.forEach((candidate, index) => {
        candidateHTML += `
            <div class="vote-container">
                <img src="${candidate.image}" alt="${candidate.candidateName}">
                <h2 class="Candidate-name">${candidate.candidateName}</h2>
                <p class="party">${candidate.party}</p>
                <button type="button" id="vote-${index}">Vote</button>
            </div>
        `;
    });

    document.querySelector(".voteSection").innerHTML = candidateHTML;

    // ---------- CUSTOM ALERT SYSTEM ----------
    const overlay = document.getElementById("alertOverlay");
    const msg = document.getElementById("alertMessage");
    const okBtn = document.getElementById("alertOkBtn");

    const confirmButtons = document.getElementById("confirmButtons");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    function showAlert(message) {
        msg.textContent = message;
        confirmButtons.style.display = "none";
        okBtn.style.display = "block";

        overlay.style.display = "flex";

        return new Promise(resolve => {
            okBtn.onclick = () => {
                overlay.style.display = "none";
                resolve(true);
            };
        });
    }

    function showConfirm(message) {
        msg.textContent = message;
        confirmButtons.style.display = "flex";
        okBtn.style.display = "none";

        overlay.style.display = "flex";

        return new Promise(resolve => {
            yesBtn.onclick = () => {
                overlay.style.display = "none";
                resolve(true);
            };
            noBtn.onclick = () => {
                overlay.style.display = "none";
                resolve(false);
            };
        });
    }

    // ------------ VOTE FUNCTION --------------
    async function Vote(index) {
        if (index === 0) {
            await showAlert("Thank you for voting for Narendra Modi! Jitega to Modi hi 😎");
        }
        else if (index === 1) {
            let choice = await showConfirm("Are you sure you want to vote for Rahul Gandhi?");
            choice
                ? await showAlert("Wrong decision! Papu hai ye 😎")
                : await showAlert("Good choice!");
        }
        else if (index === 2) {
            let choice = await showConfirm("Are you sure you want to vote for Kejriwal?");
            choice
                ? await showAlert("Wrong Decision! Tumhari wajah se desh aage nhi ja rha 😎")
                : await showAlert("Good choice!");
        }
        else if (index === 3) {
            let choice = await showConfirm("Are you sure you want to vote for Mamata Banerjee?");
            choice
                ? await showAlert("Wrong decision! Hamba hamba damba damba 😎")
                : await showAlert("Good choice!");
        }
        else if (index === 4) {
            let choice = await showConfirm("Are you sure you want to vote for Priyanka Gandhi?");
            choice
                ? await showAlert("Wrong decision! Jitega to Modi hi 😎")
                : await showAlert("Good choice!");
        }
        else if (index === 5) {
            let choice = await showConfirm("Are you sure you want to vote for Tejashwi Yadav?");
            choice
                ? await showAlert("Wrong decision! Aapne to kuchh kaha bhi nhi 😎")
                : await showAlert("Good choice!");
        }

        document.body.innerHTML = voteCount();
    }

    // -------- Add Event Listeners --------
    candidates.forEach((candidate, index) => {
        document.getElementById(`vote-${index}`).addEventListener("click", () => {
            Vote(index);
        });
    });
});

// -------- Vote Count Function ----------
function voteCount() {
    let count = localStorage.getItem("voteCount") || 475000001;
    count = parseInt(count) + 1;
    localStorage.setItem("voteCount", count);

    return `
        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh;">
            <h1 style="font-size:3rem; color:green;">Thank you for voting!</h1>
            <p style="font-size:1rem; text-align:left;">Total Votes to Narendra Modi: ${Math.floor(count)}</p>
            <p style="font-size:1rem; text-align:left;">Total Votes to Kejriwal: ${Math.floor(count / 1119)}</p>
            <p style="font-size:1rem; text-align:left;">Total Votes to Rahul Gandhi: ${Math.floor(count / 2109)}</p>
            <p style="font-size:1rem; text-align:left;">Mamata Banerjee: NOTA se bhi kam 😎</p>
            <p style="font-size:1rem; text-align:left;">Tejashwi Yadav: ${Math.floor(count / 2009)}</p>
            <p style="font-size:1rem; text-align:left;">Priyanka Gandhi: ${Math.floor(count / 11334)}</p>
            <h1 style="font-size:3rem; color:orange;">Aap kisi ko vote do — Jitega to Modi hi 😎</h1>
        </div>
    `;
}
