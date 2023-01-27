import CardItem from "./CardsItem/CardsItem"
import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../ContextApi/Context";
import '../../Styles/card.scss'
import Input from "../Input/Input";

const Card = () => {



    const { job } = useContext(Context)
    const [value, setValue] = useState('')

    const searchLowerCase = value.toLowerCase()


    const search = searchMap()

    function searchMap() {
        const languages = job.filter(element => {
            const t = element.languages.filter(element => element.toLowerCase().includes(searchLowerCase))


            if (t && t.length > 0) return t
            else return null

        })

        if (languages && languages.length > 0) return languages

        const tools = job.filter(element => {
            const t = element.tools.filter(element => element.toLowerCase().includes(searchLowerCase))


            if (t && t.length > 0) return t
            else return null

        })

        if (tools && tools.length > 0) return tools







        return job.filter(element => element.company.toLowerCase().includes(searchLowerCase) || element.role.toLowerCase().includes(searchLowerCase) || element.level.toLowerCase().includes(searchLowerCase))

    }







    const handleInput = (e) => {
        setValue(e.target.value)
    }





    return (

        <div className="card-container">
            <Input handleInput={handleInput}></Input>


            {search.map((element, index) => {

                return (
                    <div key={index}>
                        <CardItem key={index} data={element}></CardItem>
                    </div>
                )
            })}

        </div>

    )
}


export default Card