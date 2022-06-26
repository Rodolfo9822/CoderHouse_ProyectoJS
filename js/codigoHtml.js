const nav = document.querySelector("#nav");
nav.innerHTML = "";

linksNombre.forEach( links => {
    const link = document.createElement("a");
    link.href = "#";
    link.classList.add("link--style");
    link.innerText = links;
    link.id = links + "Nav";
    nav.append(link);
}) 

