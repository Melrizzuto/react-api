import style from "./Footer.module.css";

function Footer() {
    return (
        <footer className={`bg-dark text-white text-center p-3 mt-auto ${style.footer}`}>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ab delectus quasi laborum quae quia qui omnis incidunt! Assumenda cumque ab omnis, dignissimos nesciunt rem distinctio quam reprehenderit. Veritatis quibusda.
            </p>
        </footer>
    );
}

export default Footer;