function afficherSection(id) {

    let sections = document.querySelectorAll("section");

    for (let section of sections) {
        section.style.display = "none";
    }

    document.getElementById(id).style.display = "block";

    let liens = document.querySelectorAll("nav a");

    for (let lien of liens) {
        lien.classList.remove("active");
    }

    document.querySelector('nav a[href="#' + id + '"]').classList.add("active");
}