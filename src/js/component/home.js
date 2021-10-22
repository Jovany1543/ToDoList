import React, { useState } from "react";

export function ToDoList() {
	const [myArr, setMyArr] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const handleKeyPress = e => {
		if (e.key === "Enter" && inputValue !== "") {
			setMyArr(
				myArr.concat({
					label: inputValue,
					done: false
				})
			);
			setInputValue("");
		}
	};

	const removeTodo = index => {
		setMyArr(myArr.filter((item, i) => index != i));
	};

	return (
		<div className="container">
			<h1>todos</h1>
			<ul className="todo-wrap list-unstyled">
				<li>
					<input
						type="text"
						onChange={e => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={e => handleKeyPress(e)}
					/>
				</li>

				{myArr.map((item, index) => (
					<li key={index}>
						{item.label}{" "}
						<button onClick={() => removeTodo(index)}>X</button>
					</li>
				))}
				<li className="item-counter">
					{myArr.length > 0
						? `${myArr.length} Items`
						: "No tasks, add a task"}

					<span
						role="button"
						tabIndex="0"
						onClick={() => setMyArr([])}>
						Clear list
					</span>
				</li>
			</ul>
		</div>
	);
}
