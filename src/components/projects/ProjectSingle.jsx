import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href={props.url}
				as={props.url}
				aria-label="Single Project"
				passHref
			>
				<div className="rounded-sm shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark p-2">
					<div className='flex flex-row'>
						<div className='w-[100%]'>
								<Image
										src={`${props.img}`}
										// src='/grust.png'
										className="border-none"
										alt="Single Project"
										layout="responsive"
										width={50}
										height={90}
								/>
							</div>
					</div>
					<div className="text-left px-4 py-6">
                        <p className="font-general-medium text-sm md:text-xl text-lg dark:text-slate-200 text-white dark:text-ternary-light mb-2 font-bold">
                            {props.name}
                        </p>
                        {/* <p className='text-xs text-ternary-dark text-slate-900 dark:text-slate-200 mb-2'>
                            {props.description}
                        </p> */}
                        <p className="font-general-medium text-xl md:text-2xl text-slate-900 dark:text-slate-200  mb-2">
                            {props.title}
                        </p>
                    <span className="text-lg text-ternary-dark text-slate-400 text-sm dark:text-ternary-light text-right">
                        {props.tags.join(" | ")}
                    </span>
						{/* {props.tags.map((tag, i) => (
			 				<span key={i} className="text-lg text-ternary-dark text-slate-400 text-sm dark:text-ternary-light text-right">{tag}</span>
    				  ))} */}
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
