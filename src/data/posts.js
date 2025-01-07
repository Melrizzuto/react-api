const posts = [
    {
        id: 1,
        title: "Danimarca",
        content: "Scopri la magia dei paesaggi danesi, tra coste mozzafiato, colline verdi e architettura affascinante.",
        image: "/danimarca.jpg",
        tags: ["trip", "landscape", "expansive"],
        published: true,
    },
    {
        id: 2,
        title: "Copenhagen",
        content: "La capitale della Danimarca, famosa per i suoi canali, il parco divertimenti Tivoli e la statua della Sirenetta.",
        image: "/copenhagen.jpg",
        tags: ["trip", "landscape", "expansive"],
        published: true,
    },
    {
        id: 3,
        title: "Aarhus",
        content: "Una città portuale sulla costa orientale, conosciuta per la sua scena culturale e l'architettura moderna.",
        image: "/aarhus.jpg",
        tags: ["trip", "landscape", "lowcost"],
        published: true,
    },
    {
        id: 4,
        title: "Aalborg",
        content: "Una città portuale sulla costa orientale, conosciuta per la sua scena culturale e l'architettura moderna.",
        image: "",
        tags: ["trip", "landscape"],
        published: false,
    },

    {
        id: 5,
        title: "Odense",
        content: "Una città portuale sulla costa orientale, conosciuta per la sua scena culturale e l'architettura moderna.",
        image: "",
        tags: ["trip", "landscape", "lowcost"],
        published: true,
    },
    {
        id: 6,
        title: "Copenhagen",
        content: "La capitale della Danimarca, famosa per i suoi canali, il parco divertimenti Tivoli e la statua della Sirenetta.",
        image: "/copenhagen.jpg",
        tags: ["trip", "landscape", "expansive"],
        published: true,
    },
    {
        id: 7,
        title: "Aalborg",
        content: "Una città portuale sulla costa orientale, conosciuta per la sua scena culturale e l'architettura moderna.",
        image: "",
        tags: ["trip", "landscape"],
        published: true,
    },
];

function tags() {
    let tagsList = [];
    posts.forEach((el) => {
        el.tags.forEach((tag) => {
            if (!tagsList.includes(tag)) {
                tagsList.push(tag);
            }
        });
    });
    return tagsList;
}

export { posts, tags };
