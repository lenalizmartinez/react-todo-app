import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  
    const { description, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onFormSubmit = (event) =>{
        event.preventDefault();
        if(description.length <=1) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        handleNewTodo(newTodo);
    }
  
    return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="New ToDo"
        className="form-control"
        name='description'
        value={ description }
        onChange={ onInputChange }
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Add
      </button>
    </form>
  );
};
