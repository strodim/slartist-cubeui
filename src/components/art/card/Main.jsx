function Main({ item }) {
    return (
        <div className="art-card-main">
            <img style={{ borderColor: `${item.frameColor}` }} className='art-card-pic' src={item.imgUrl} width={item.imgWidth} height={item.imgHeight} title={item.title} alt={item.title} />
        </div>
    );
}

export default Main;