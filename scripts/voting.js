import { candidates } from "./candidates.js";

document.addEventListener('DOMContentLoaded', () => {

    let candidateHTML = '';

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

    document.querySelector('.voteSection').innerHTML = candidateHTML;

    
    function Vote(index) {
        if(index === 0){
            alert("Thank you for voting for Narendra Modi! Jitega to Modi hi 😎");
        }
        else if(index === 1){
            let choice = confirm("Are you sure you want to vote for Rahul Gandhi?");
            if(choice){
                alert("Wrong decision! Papu hai ye😎");
            } else {
                alert("Good choice!");
            }
        }
        else if(index === 2){
            let choice = confirm("Are you sure you want to vote for Kejriwal?");
            if(choice){
                alert("Wrong decision! Tumhari wajah se desh aage nhi ja rha.😎");
            } else {
                alert("Good choice!");
            }
        }
        else if(index === 3){
            let choice = confirm("Are you sure you want to vote for Mamata Banerjee?");
            if(choice){
                alert("Wrong decision! Hamba hamba damba damba 😎");
            } else {
                alert("Good choice!");
            }
        }
        else if(index === 4){
            let choice = confirm("Are you sure you want to vote for Priyanka Gandhi?");
            if(choice){
                alert("Wrong decision! Jitega to Modi hi 😎");
            } else {
                alert("Good choice!");
            }
        }
        else if(index === 5){
            let choice = confirm("Are you sure you want to vote for Tejashwi Yadav?");
            if(choice){
                alert("Wrong decision! Aapne to kuchh kaha bhi nhi. Kam se kam kuchh to bole hote😎");
            } else {
                alert("Good choice!");
            }
        }
        return voteCount();
}


    // Add event listeners **after DOM is ready and buttons exist**
    candidates.forEach((candidate, index) => {
        document.getElementById(`vote-${index}`).addEventListener('click', () => {
            document.querySelector('body').innerHTML=Vote(index);
        });
    });

});
function voteCount(){
    let count = localStorage.getItem('voteCount') || 475000001;
    count = parseInt(count) + 1;
    localStorage.setItem('voteCount', count);
    return `<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh;">
                <h1 style="font-size:3rem; color:green;">Thank you for voting!</h1>
                <p style="font-size:1.5rem;color:black; font-style:italic">Total Votes Casted to Narendra Modi:${Math.floor(count)} </p>
                <p style="font-size:1.5rem;color:black; font-style:italic">Total Votes Casted to Kejriwal: ${Math.floor(count/1119)} </p>
                <p style="font-size:1.5rem;color:black; font-style:italic">Total Votes Casted to Rahul Gandhi:${Math.floor(count/2109)} </p>
                <p style="font-size:1.5rem;color:black; font-style:italic">Total Votes Casted to Mamta Banerjee: Inse aage to NOTA wale hai </p>
                <p style="font-size:1.5rem;color:black; font-style:italic">Total Votes Casted to Tejashwi Yadav: ${Math.floor(count/2009)} </p>
                <p style="font-size:1.5rem;color:black; font-style:italic">Total Votes Casted to Priyanka Gandhi: ${Math.floor(count/11334)} </p>
                <h1 style="font-size:3rem; color:orange;">Aap kisi ko vote do Jitega to Modi hi 😎</h1>
                <p>Hamara website hai kisi ko bhi jitayenge!</p>
            </div>`;


}