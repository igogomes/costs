import styles from './Company.module.css'

import LinkButton from '../layout/LinkButton'

function Company() {
    return (
        <div className={styles.company_container}>
            <div className={styles.title_container}>
                <h1>Sobre Nós</h1>
            </div>
            <div className={styles.content_container}>
                <div className={styles.main_content_container}>
                    <p>Integer scelerisque sed tellus ut maximus. Vestibulum in risus lacus. Curabitur urna ex, lacinia vitae rutrum in, fringilla sit amet sem. Cras vel aliquet lorem. Nullam blandit, augue vel facilisis mattis, lectus lectus faucibus ante, eu ultricies nisi libero non nibh. Suspendisse efficitur sem vel lorem tincidunt, sit amet placerat lorem sollicitudin. Aliquam non velit auctor, lacinia erat consequat, malesuada felis.</p>

                    <p>Nam viverra tortor ut condimentum porta. Proin in tempor libero, sit amet eleifend ligula. Donec vestibulum sed eros ut volutpat. Sed in scelerisque justo. In a ex metus. Donec quis justo id nunc tempor auctor.</p>

                    <p>Pellentesque sit amet tempor risus. Suspendisse aliquet lobortis massa, vitae scelerisque nisi fringilla ac. Cras vitae lectus eleifend, euismod nunc sed, finibus dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    <div className={styles.contact_call_to_action}>
                        <LinkButton to="/contact" text="Fale Conosco"/>
                    </div>
                </div>
                <div className={styles.image_content_container}>
                    <img src="https://picsum.photos/id/898/600/600" alt="Company"/>
                </div>
            </div>
        </div>
    );
}

export default Company