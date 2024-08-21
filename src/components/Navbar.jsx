import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Bio } from '../data/en'
import {
	GithubIcon,
	InstagramIcon,
	LinkedInIcon,
	MoonIcon,
	SunIcon,
	TwitterIcon,
} from './Icons.jsx'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ to, title, offset }) => {
	return (
		<Link
			activeClass='text-primary dark:text-primaryDark transition-all duration-300'
			spy
			smooth
			to={to}
			offset={offset}
			className='group relative cursor-pointer rounded text-dark hover:text-primary dark:text-light dark:hover:text-primaryDark'
		>
			{title}
			<span className='ease absolute -bottom-0.5 left-0 inline-block h-[1px] w-0 bg-dark duration-300 group-hover:w-full dark:bg-light'>
				&nbsp;
			</span>
		</Link>
	)
}

const CustomMobileLink = ({ to, title, toggle, offset }) => {
	const handleClick = () => {
		toggle()
	}

	return (
		<Link
			activeClass='dark:text-primary text-primaryDark transition-all duration-300 [&>span]:w-full'
			spy
			smooth
			to={to}
			offset={offset}
			onClick={handleClick}
			className='group relative mr-4 rounded text-light lg:m-0 lg:my-2 dark:text-dark'
		>
			{title}
			<span className='ease absolute -bottom-0.5 left-0 inline-block h-[1px] w-0 bg-light transition-[width] duration-300 group-hover:w-full dark:bg-dark'>
				&nbsp;
			</span>
		</Link>
	)
}

function Navbar() {
	const [mode, setMode] = useThemeSwitcher()
	const [isOpen, setIsOpen] = useState(false)
	const [shadow, setShadow] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow)
	}, [])

	return (
		<header
			className={`sticky top-0 z-10 flex h-20 items-center justify-center bg-light text-base dark:bg-carDark ${
				shadow ? 'shadow-xl duration-300 ease-in-out' : ''
			}`}
		>
			<div className='z-[1] flex h-[60px] w-full max-w-[1200px] items-center justify-between px-6 py-0'>
				{/* Logo */}
				<Logo />
				<Link
					to='about'
					smooth
					offset={-90}
					className='flex w-2/3 items-center px-2 py-0 text-lg font-bold text-dark no-underline md:w-full dark:text-light'
				>
					<span className='cursor-pointer'>Portfolio</span>
				</Link>
				{/* Section Menu */}
				<ul className='flex w-full items-center justify-center gap-x-8 px-1.5 py-0 font-semibold md:hidden'>
					<CustomLink to='about' title='About' />
					<CustomLink to='experience' title='Experience' offset={-10} />
					<CustomLink to='projects' title='Projects' offset={-70} />
					<CustomLink to='skills' title='Skills' offset={-90} />
					<CustomLink to='education' title='Education' offset={-50} />
				</ul>
				{/* Profile Button & light/dark */}
				<div className='flex h-full w-4/5 items-center px-1.5 py-0 [justify-content:end] md:hidden'>
					<a
						href={Bio.github}
						target='_blank'
						rel='noreferrer'
						className='flex h-[70%] cursor-pointer items-center justify-center rounded-[20px] border-[1.8px] border-solid border-primary px-3 py-0 text-base font-medium text-primary no-underline transition-all duration-500 hover:bg-primary hover:text-light md:text-sm dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-light'
					>
						Github
					</a>
					<button
						type='button'
						onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
						className={`ease m-1 ml-3 flex h-6 w-6 items-center justify-center rounded-full p-1 sm:mx-1 ${
							mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
						}`}
					>
						{mode === 'dark' ? (
							<MoonIcon className='fill-dark' />
						) : (
							<SunIcon className='fill-dark' />
						)}
					</button>
				</div>
				{/* Button Menu */}
				<button
					type='button'
					className='hidden flex-col items-center justify-center md:flex'
					onClick={handleClick}
				>
					<span
						className={`block h-1 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
							isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
						}`}
					/>
					<span
						className={`block w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
							isOpen ? 'opacity-0' : 'h-1 opacity-100'
						} my-0.5`}
					/>
					<span
						className={`block h-1 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
							isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
						}`}
					/>
				</button>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							className='fixed left-1/2 top-1/2 z-50 hidden min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-md sm:min-w-[90vw] lg:flex dark:bg-light/75'
						>
							{/* links */}
							<nav className='flex flex-col items-center justify-center font-medium'>
								<CustomMobileLink
									to='about'
									title='About'
									toggle={handleClick}
									offset={110}
								/>
								<CustomMobileLink
									to='experience'
									title='Experience'
									toggle={handleClick}
								/>
								<CustomMobileLink
									to='projects'
									title='Projects'
									toggle={handleClick}
									offset={-70}
								/>
								<CustomMobileLink
									to='skills'
									title='Skills'
									toggle={handleClick}
									offset={-80}
								/>

								<CustomMobileLink
									to='education'
									title='Education'
									toggle={handleClick}
									offset={-40}
								/>
							</nav>
							{/* social media */}
							<nav className='mt-2 flex items-center justify-center'>
								<motion.a
									href={Bio.twitter}
									target='_blank'
									rel='noopener noreferrer'
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.9 }}
									className='m-1 mr-3 w-6 sm:mx-1'
								>
									<TwitterIcon />
								</motion.a>
								<motion.a
									href={Bio.github}
									target='_blank'
									rel='noopener noreferrer'
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.9 }}
									className='m-1 mx-3 w-6 rounded-full bg-light sm:mx-1 dark:bg-dark dark:text-light'
								>
									<GithubIcon />
								</motion.a>
								<motion.a
									href={Bio.linkedin}
									target='_blank'
									rel='noopener noreferrer'
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.9 }}
									className='m-1 mx-3 w-6 sm:mx-1'
								>
									<LinkedInIcon />
								</motion.a>
								<motion.a
									href={Bio.insta}
									target='_blank'
									rel='noopener noreferrer'
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.9 }}
									className='m-1 mx-3 w-6 sm:mx-1'
								>
									<InstagramIcon />
								</motion.a>
								<button
									type='button'
									onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
									className={`ease m-1 ml-3 flex h-6 w-6 items-center justify-center rounded-full p-1 sm:mx-1 ${
										mode === 'light'
											? 'bg-dark text-light'
											: 'bg-light text-dark'
									}`}
								>
									{mode === 'dark' ? (
										<MoonIcon className='fill-dark' />
									) : (
										<SunIcon className='fill-dark' />
									)}
								</button>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	)
}

export default Navbar
