import '../../Styles/input.scss';


const Input = ({handleInput}) => {

    return (
        <div className="container-input">

            <input className="input" type="text" placeholder='Search' onChange={handleInput} />
        </div>
    )

}


export default Input