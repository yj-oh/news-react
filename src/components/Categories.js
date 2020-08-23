import React from "react";
import styled, { css } from "styled-components";

const categories = [
	{
		name: "all",
		text: "전체"
	},
	{
		name: "business",
		text: "비즈니스"
	},
	{
		name: "health",
		text: "건강"
	},
	{
		name: "science",
		text: "과학"
	},
	{
		name: "technology",
		text: "기술"
	}
];

const CategoriesBlock = styled.div`
	display: flex;
	padding: 1.5rem 1rem 1rem 1rem;
	width: calc(100% - 2rem);
	margin: 0 auto;
	background-color: rgb(245, 245, 245);
`;

const Category = styled.div`
    padding: 5px 10px;
    min-width: 35px;
	font-size: 1.02rem;
	text-align: center;
    color: #868686;
	background: #ffffff;
    border-radius: 20px;
	text-decoration: none;
	cursor: pointer;
	
	${props =>
		props.active && css`
			font-weight: bold;
			//border-bottom:2px solid #ff4343;
			color: #ff4343;
			&:hover {
				color: #ff4343;
			}`
	}
	
	& + & {
		margin-left: 0.6rem;
	}
`;

const Categories = ({ onSelect, category }) => {
	return (
		<CategoriesBlock>
			{categories.map(c => (
				<Category key={c.name}
				          active={category === c.name}
				          onClick={() => onSelect(c.name)}>
					{c.text}
				</Category>
			))}
		</CategoriesBlock>
	);
};

export default Categories;
