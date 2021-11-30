import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { usePropierties } from '../hooks/usePropierties'
import { PropiertyPreview } from './PropiertyPreview';
import * as PropiertiesListCSS from '../styles/PropiertiesList.module.css'
import { useFilter } from '../hooks/useFilter';

export const PropiertiesList = () => {
	const {category, FiltroUI} = useFilter();

	const propiertiesList = usePropierties();  
	const [filters, setFilters] = useState([])

	useEffect(() => {   
		if(category){ 
			const filters = propiertiesList.filter(propierty => propierty.category.name === category); 
			setFilters(filters);
		} else {
			setFilters(propiertiesList);
		}
	}, [category])

	return (
		<div>
			<h2 css={css`
				margin-top:5rem;
			`}>Our Propierties</h2>

			{FiltroUI()}

			<ul className={PropiertiesListCSS.propierties}>
				{
					filters.map(propierty=>(
						<PropiertyPreview
							key={propierty.id}
							propierty={propierty}
						/>
					))
				}
			</ul>
		</div>
	)
}
 