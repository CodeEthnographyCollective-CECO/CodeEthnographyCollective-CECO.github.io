window.addEventListener("load", event => {
    shuffleMembers();
});

function shuffleMembers() {
    var members = document.getElementById('members');
    for (var i = members.children.length; i >= 0; i--) {
        members.appendChild(members.children[Math.random() * i | 0]);
    }
}
