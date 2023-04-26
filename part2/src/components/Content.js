import React, { useState } from "react"
import Part from "./Part"

const Content = ({ parts }) => {
	const sum = parts.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.exercises
	}, 0)
	return (
		<>
			{parts.map((part) => {
				return (
					<Part
						key={part.id}
						name={part.name}
						exercises={part.exercises}
					/>
				)
			})}
			<p><b>Total of {sum} exercises</b></p>
		</>
	)
}

export default Content
