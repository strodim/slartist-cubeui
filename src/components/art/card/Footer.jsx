function Footer({ desc, frameColor, background }) {

    const style = {
        backgroundColor: background,
        border: `3px solid ${frameColor}`
    }

    return (
        <div className="art-card-footer">
            <div className="art-card-size">
                <h3>
                    {desc}
                </h3>
            </div>
        </div>
    );
}

export default Footer;