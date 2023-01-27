
import '../../../Styles/cardItem.scss'






const CardItem = ({ data }) => {

    

    return (
        <div className="card-item-container" style={{borderLeft: data.featured ? `6px solid hsl(180, 29%, 50%)` : null}}>
            <div className="card-item-left">
                <div className="card-item-logo">
                    <img src={data.logo} alt={data.company}></img>
                </div>
                <div className="card-item-info">
                    <div className="card-item-label">
                        <div className="card-item-label-name-company">
                            <h3>{data.company}</h3>
                        </div>

                        {data.new && <div className="card-item-label-new">
                            <p>New!</p>
                        </div>}

                        {data.featured && <div className="card-item-label-featured">
                            <p>featured</p>
                        </div>}

                    </div>
                    <div className="card-item-text">
                        <h4 className='card-item-text-position'>{data.position}</h4>
                    </div>
                    <div className="card-item-subtitle">
                        <div className="card-item-subtitle-data">
                            <p>{data.postedAt}</p>
                        </div>
                        <div className="card-item-subtitle-expediente">
                            <p>{data.contract}</p>
                        </div>
                        <div className="card-item-subtitle-local">
                            <p>{data.location}</p>
                        </div>
                    </div>
                    <div className='traço-cinza'>

                    </div>
                </div>
            </div>

            <div className="card-item-right">
                <div className="card-item-right-level">
                    <span>{data.role}</span>
                </div>
                <div className="card-item-right-role">
                    <span>{data.level}</span>
                </div>
                <div className="card-item-right-label">
                    {data.languages.map((element, index) => {
                        return (
                            <div key={index} className='card-item-right-label-langtools'>
                                <span className='card-item-languages' key={index}>{element}</span>
                            </div>
                        )
                    })}

                    {data.tools.map((element, index) => {
                        return (
                            <div key={index} className='card-item-right-label-langtools'>
                                <span className='card-item-tools' key={index}>{element}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}


export default CardItem