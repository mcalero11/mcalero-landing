import type { ReactElement } from 'react'

export default function Home(): ReactElement {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-4'>
			<h1 className='mb-6 text-4xl font-bold'>Welcome to My Website</h1>
			<p className='text-xl'>This is the home page of my application.</p>
		</main>
	)
}
