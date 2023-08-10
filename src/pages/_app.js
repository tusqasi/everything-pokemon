import '@/styles/globals.css'
import '@/styles/pokesprite-pokemon-gen8.css'
import { SessionProvider } from "next-auth/react"
import Layout from "./layout";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}
