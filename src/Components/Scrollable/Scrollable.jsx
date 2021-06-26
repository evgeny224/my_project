import React, { useState, useEffect, useRef } from "react";


const Scrollable = (props) => {
    
    let ref =useRef()

    const [state, setState] = useState({
        isScrolling: false,
        clienX: 0,
        scrollX: 0
    })

    useEffect(() =>{
        const el = ref.current
        if(el){
            const onWheel = e => {
                e.preventDefault()
                el.scroll({
                    left: el.scrollleft + e.deltaY * 4,
                    behavior: 'smooth',
                })
            }

            el.addEventListener('wheel' , onWheel)

            return () => el.removeEventListener('wheel' , onWheel)
        }
    }, [])

    const onMouseMove = e => {
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()
    }

    const onMouseUp = e => {
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()

        setState({
            ...state,
            isScrolling: false,
        })
    }

    const onMouseDown = e => {
        if(ref && ref.current && !ref.current.contains(e.target)){
            return
        }
        e.preventDefault()

        setState({
            ...state,
            isScrolling: true,
            clientX: e.clienX
        })
    }

    return(
        <div
        ref={ref}
        className = { props._class }
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        >
            {
                React.Children.map(props.children, child => React.Children.only(child))
            }
        </div>
    )
}

export default Scrollable;