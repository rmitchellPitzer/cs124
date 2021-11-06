import "../../css/sort_container.css"
import AddFilterButton from "./addFilterButton"
import CloseMenuButton from "./CloseMenuButton"
import {connect} from "react-redux"
import SortEntryContainer from "./SortEntry/SortEntryContainer"


function SortMenuContainer(props) {

    return (
        <div className="sort-container">
            <div className="sort-bar">
                <h2 className="sort-title"> Sort </h2>
                <div className='sort-section'>
                    <AddFilterButton sortingFields={props.sortingFields}/>
                    <CloseMenuButton/>
                </div>



            </div>
            <div class='field-container'>
                {
                    props.sortingFields.map((data,index) => {
                        return <SortEntryContainer key={index} index={index} {...data} />
                    })
                }
            </div>

        </div>
    )
}


function mapToState(state) {
    return {
        sortingFields: state.sortingFields
    }
}

export default connect(mapToState)(SortMenuContainer)