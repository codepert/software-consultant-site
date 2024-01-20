"use client"
// import { useState } from 'react';
import ProjectSingle from './ProjectSingle';
import { projectsSection } from '../../lib/content/projects';
import { useState, useEffect } from 'react';
import { getSectionAnimation } from '../../styles/animations';

import { Wrapper } from '@/components';

import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid() {
	const [selectProject, setSelectProject] = useState();

	// @todo - To be fixed
	// const searchProjectsByTitle = projectsData.filter((item) => {
	// 	const result = item.title
	// 		.toLowerCase()
	// 		.includes(searchProject.toLowerCase())
	// 		? item
	// 		: searchProject == ''
	// 		? item
	// 		: '';
	// 	return result;
	// });

	const selectProjectsByCategory = projectsSection.projects.filter((item) => {

		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<Wrapper id="projects" className="py-5 sm:py-10 mt-5 sm:mt-10" animate={false} {...getSectionAnimation}>
			<div className="text-left">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-slate-900 dark:text-white dark:text-ternary-light">
					Projects
				</p>
			</div>
			<div className="mt-10 sm:mt-16">
				<div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
                {selectProject
                ? selectProjectsByCategory.map((project, index) => {
                        return <ProjectSingle key={index} {...project} />;
                    })
                : projectsSection.projects.map((project, index) => (
                        <ProjectSingle key={index} {...project} />
                    ))}
			</div>
		</Wrapper>
	);
}

export default ProjectsGrid;
