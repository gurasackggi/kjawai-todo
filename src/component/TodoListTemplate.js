// 이 컴포넌트는 함수형 컴포넌트이다

import React from 'react';
import './TodoListTemplate.css';

const TodoListRemplate = ({form, children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                오늘의 할일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                { children }
            </section>
        </main>
    );
};

export default TodoListRemplate;