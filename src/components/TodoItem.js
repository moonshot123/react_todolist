import React,{Component} from 'react'

//text: todo 내용
//checked: 체크박스 상태
//id: todo 의 고유 아이디
//onToggle: 체크박스를 키고 끄는 함수
//onRemove: 아이템을 삭제시키는 함수

//e.stopPropagation  
//만약에 이 작업을 하지 않으면, × 를 눌렀을 때 onRemove 함수만 실행 되는것이 아니라, 해당 DOM의 부모의 클릭 이벤트에 연결되어있는 onToggle 이 실행되는데, onRemove → onToggle 이렇게 실행이 되면서 코드가 의도치 않게 작동하여 삭제가 제대로 진행되지 않습니다.
//e.stopPropagation() 은 이벤트의 “확산” 을 멈춰줍니다. 즉, 삭제부분에 들어간 이벤트가 해당 부모의 이벤트까지 전달되지 않도록 해줍니다. 따라서, onToggle 은 실행되지 않고 onRemove 만 실행되죠.


class TodoItem extends Component{
    
    
    render(){
        const{text,checked,id, onToggle,onRemove } =this.props;
        return (
            <div className="todo_item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => { e.stopPropagation(); onRemove(id) }} >
                    &times;
                </div>
                <div className={`todo-text ${ checked && 'checked'} `}>
                <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                 }
            </div>

        )
    }
}


export default TodoItem