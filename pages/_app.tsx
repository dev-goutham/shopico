import { NextPage } from "next"
import { AppProps } from "next/app"
import Meta from "@/components/Meta"

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Meta />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
