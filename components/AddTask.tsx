"use client";
import { useTodos } from "@/stores/tasks";
import React, { FormEvent, useState } from "react";

const AddTask = () => {
  const [credentials, setCredentials] = useState({
    title: "",
    description: "",
    status: "",
  });
  const { handleAddTodo, todos, handleDeleteTodo, handleEditTodo } = useTodos();

  const handelFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(credentials);
    setCredentials({
      title: "",
      description: "",
      status: "",
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex">
      <div className=" w-2/5 p-10">
        <h4 className={`text-2xl font-semibold`}>Add details here</h4>
        <p className={`mb-3 mt-2 text-2xl text-sm opacity-50`}>
          fill to add, edit, view and delete tasks
        </p>

        <form onSubmit={handelFormSubmit} className="">
          <div className="mb-6">
            <label
              htmlFor="Title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              name="title"
              value={credentials.title}
              onChange={onChange}
              type="text"
              id="Title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              value={credentials.description}
              onChange={onChange}
              name="description"
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Current Status
          </label>

          <select
            name="status"
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={onChange}
          >
            <option value="todo">To do</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <button
            type="submit"
            className="text-black mt-9 bg-white border border-white-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Submit
          </button>
        </form>
      </div>


      <div className="flex-1 bg-white h-screen text-black p-10">
        <h4 className={`text-3xl font-semibold`}>List Of Details:</h4>

        <div className="mt-8">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Update Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id} className="bg-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {todo.title}
                    </th>
                    <td className="px-6 py-4">{todo.description}</td>
                    <td className="px-6 py-4">{todo.status}</td>

                    <td className="px-6 py-4">
                      <select
                        name="status"
                        id="status"
                        className="bg-gray-50 w-32 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={todo.status}
                        onChange={(e) =>
                          handleEditTodo(todo.id, {
                            ...todo,
                            status: e.target.value,
                          })
                        }
                      >
                        <option value="todo">To do</option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
