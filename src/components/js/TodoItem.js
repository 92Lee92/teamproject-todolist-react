import React from "react";
import '../css/TodoItem.css';


class TodoItem extends React.Component{
    //***Form.js에서 Hook(useState)사용으로 인해 제거 */
    // shouldComponentUpdate(nextProps,nextState){
    //     return this.props.isComplete !== nextProps.isComplelte;
    // }

    render(){
        const{content, isComplete,id,onToggle,onRemove} = this.props;
        console.log(id);

        return(
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="todo-item-remove" onClick={(e)=>{e.stopPropagation();
                onRemove(id);}
                }>
                    &times;
                </div>
                <div className={`todo-item-text ${isComplete && 'isComplete'}`}>
                    <div>
                        {content}
                    </div>
                </div>
                {
                    isComplete &&(<div className = "isComplete-mark">✔</div>)
                }
                </div>
        )
    }
}

export default TodoItem;