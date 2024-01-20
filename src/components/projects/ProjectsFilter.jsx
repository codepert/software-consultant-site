const selectOptions = [
    // {name: 'All Projects', status: true},
	// {name: 'Web Application', status: false},
	// {name: 'Mobile Application', status: false},
	// {name: 'UI/UX Design', status: false},
];

function ProjectsFilter({ setSelectProject }) {
	return (
        <ul className="flex flex-wrap justify-start list-none p-0 ">
            {selectOptions.map((option, i) => (
				<li className="text-normal sm:text-md mr-10 mb-5 hover:cursor-pointer" key={i} onClick={(e) => setSelectProject(selectOptions[i].name)}>
                      <input 
                        id={option.name} 
                        type="checkbox" 
                        checked={option.status}
                        className="hidden"
                        />
					{option.name}
				</li>
			))}
        </ul>
	);
}

export default ProjectsFilter;
