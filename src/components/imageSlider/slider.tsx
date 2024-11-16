import { useRef, useEffect } from 'react'
import uuid from 'react-uuid'
import './slider.css'
import type {Image_Type } from '@/util/interface.tsx'; 

//takes in array of string pathways of the images
type SliderType = {
	images: Array<ImageMetadata> | Array<string>,
	darkMask?: boolean,
	name?: string
}
const Slider = (props: SliderType) => {
	const { images, darkMask = true, name } = props
	const slideRef = useRef<Array<HTMLDivElement>>(new Array())

	let current = 0
	const RunSlide = async () => {
		let oldSlide: HTMLDivElement | null = null
		const myInterval = await setInterval(() => {
			if (typeof document != undefined) {
				oldSlide = slideRef.current[current]
				if (current >= images.length - 1) {
					current = 0
				} else {
					current++
				}
				var nextSlide = slideRef.current[current]
				oldSlide?.classList.add('slide-fade-out')
				nextSlide?.classList.remove('slide-fade-out')
				nextSlide?.classList.add('slide-pan-forward')
				setTimeout(() => {
					oldSlide?.classList.remove('slide-pan-forward')
				}, 5000)
			}
		}, 3000)
	}

	useEffect(function () {
		RunSlide()
	}, [])

	useEffect(() => {
		if (slideRef.current[0]) {
			slideRef.current[0].classList.remove('slide-fade-out')
			slideRef.current[0].classList.add('slide-pan-forward')
		}
	}, [slideRef.current])
	return (
		<div className={`absolute left-0 right-0 top-0 h-full w-full ${darkMask ? 'darkMask' : ''}`}>
			<div className="relative m-0 h-full w-full">
				{images &&
					images.length > 0 &&
					images.map((img: ImageMetadata | string, index: number) => (
						<Slide image={img} key={uuid()} index={index} current={current} slideRef={slideRef} />
					))}
			</div>
		</div>
	)
}

export default Slider

type SlideProps = {
	image: ImageMetadata | string | Image_Type
	index: number
	current: number
	name?: string
	slideRef: {
		current: Array<HTMLDivElement>
	}
}

const Slide = (props: SlideProps) => {
	const { image, index, current, name, slideRef } = props
	return (
		<div
			ref={(element) => slideRef.current.push(element as HTMLDivElement)}
			id={`slide-${name}${index}`}
			className={`slideProp slide-fade-out absolute inset-0 block h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat`}
		>
			<img src={image.src} className="absolute inset-0 h-full w-full  object-cover" alt = {`${name} slide`} />
		</div>
	)
}
