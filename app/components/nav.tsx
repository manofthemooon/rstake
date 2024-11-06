"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container relative flex items-center justify-between p-6 mx-auto">
					<div className="flex items-center gap-4">
						<Link
							href="/"
							className="z-10 duration-200 text-zinc-300 hover:text-zinc-100"
						>
							<ArrowLeft className="w-6 h-6" />
						</Link>

						<Link href="https://web3ali3n.vercel.app/">
							<img
								src="https://i.ibb.co/f0kTqbx/web3ali3n.png"
								alt="Web3 Ali3n Logo"
								className="h-8 w-8 object-contain md:hidden" 
							/>
						</Link>
					</div>

					<div className="absolute left-1/2 transform -translate-x-1/2 z-0 hidden md:block">
						<Link href="https://web3ali3n.vercel.app/">
							<img
								src="https://i.ibb.co/f0kTqbx/web3ali3n.png"
								alt="Web3 Ali3n Logo"
								className="h-10 w-10 object-contain md:h-16 md:w-16 lg:h-24 lg:w-24 my-2 sm:my-4"
							/>
						</Link>
					</div>

					<div className="flex gap-8 z-10">
						<Link
							href="/about"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							About Me
						</Link>
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};
