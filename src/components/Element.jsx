import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Link } from "react-router-dom"

function Element(props) {
    const { data } = props
    const { title, url, id } = data
    
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id})
    
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    
    return (
            <div
                ref={setNodeRef}
                { ...attributes }
                { ...listeners }
                style={style}
                onClick={e => alert(data.title)}
                className='cursor-pointer font-semibold mx-[1em] text-[17px] '>
                    {data.title}
            </div>
        // <Link href="#" to={url}>
        // </Link>
    )
}

export default Element