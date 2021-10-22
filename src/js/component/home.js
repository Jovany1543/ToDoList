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
					<li key={index} className="spacing">
						{item.label}{" "}
						<span onClick={() => removeTodo(index)}>X</span>
					</li>
				))}
				<li className="spacing">
					{myArr.length > 1
						? `${myArr.length} Items`
						: myArr.length > 0
						? `${myArr.length} Item`
						: "No tasks, add a task"}

					<span role="span" tabIndex="0" onClick={() => setMyArr([])}>
						Clear list
					</span>
				</li>
			</ul>
		</div>
	);
}
