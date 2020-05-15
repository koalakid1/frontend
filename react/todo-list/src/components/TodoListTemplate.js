import React from 'react';
import './TodoListTemplate.css';

//함수 컴포넌트. 화살표 함수로 작성
const TodoListTemplate = ({form, children}) => {
    return (
      <main className="todo-list-template">
        <div className="title">
          오늘 할 일
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

  export default TodoListTemplate;