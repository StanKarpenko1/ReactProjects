import { useState } from "react";
import data from './data'
import "./styles.css";


export default function Accordian() {

    const [selected, setSelected] = useState(null);

    function handleSelection (getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    data && data.length > 0
                        ? data.map((dataItem) => (
                            <div className="item">
                                <div onClick={()=>handleSelection(dataItem.id)} className="title">
                                    <h3>{dataItem.question}</h3>
                                </div>
                                {
                                    selected === dataItem.id 
                                        ? <div className="content">{dataItem.answer}</div>
                                        : null
                                }
                            </div>
                        ))
                        : <div>NO DATA !</div>
                }
            </div>
        </div>
    )
}