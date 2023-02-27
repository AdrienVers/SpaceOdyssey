import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/AllPages/Navbar";
import { Russo_One, Michroma } from "@next/font/google";

const russo = Russo_One({
	subsets: ["latin"],
	weight: "400",
});

const michroma = Michroma({
	subsets: ["latin"],
	weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className={michroma.className}>
				<Navbar />
			</main>
			<main className={russo.className}>
				<Component {...pageProps} />
			</main>
		</>
	);
}
