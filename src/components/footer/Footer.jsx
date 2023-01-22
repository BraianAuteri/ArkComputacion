import FacebookIcon from '../Icons/FacebookIcon/FacebookIcon'
import InstagramIcon from '../Icons/InstagramIcon/InstagramIcon'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div>
                    <div>
                        <h3>Nuestras Redes:</h3>
                            <div className='redes justify-content-center'>
                                <a href="https://www.facebook.com" target="_blank"><FacebookIcon /></a>
                                <a href="https://www.instagram.com" target="_blank"> <InstagramIcon /></a>
                            </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer