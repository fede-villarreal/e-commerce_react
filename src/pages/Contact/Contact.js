const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact__title">Contacte con el desarrollador:</h1>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/federico-villarreal/" target="_blank" rel="noreferrer">
                        <div className="contact__link">
                            <img className="contact__logo contact__logo--linkedin" alt="logo linkedin" src="/multimedia/icono_linkedin.png" />
                            <p className="contact__texto">LinkedIn</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="contact__link" href="https://github.com/fede-villarreal" target="_blank" rel="noreferrer">
                        <img className="contact__logo contact__logo--github" alt="logo github" src="/multimedia/icono_github.png" />
                        <p className="contact__texto">Github</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact