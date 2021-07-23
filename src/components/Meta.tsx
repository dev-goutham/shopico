import React from "react"
import Head from "next/head"

import config from "../utils/config"

const Meta: React.FC = () => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" key="charset" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/logo.png"
					key="icon32"
				/>

				<link rel="icon" href="/logo.png" key="favicon" />
				<title>{`${config.site_name}`}</title>
				<meta
					name="description"
					content={config.description}
					key="description"
				/>

				<meta
					property="og:title"
					content={`${config.site_name}`}
					key="og:title"
				/>
				<meta
					property="og:description"
					content={config.description}
					key="og:description"
				/>
				<meta property="og:locale" content={config.locale} key="og:locale" />
				<meta
					property="og:site_name"
					content={config.site_name}
					key="og:site_name"
				/>
			</Head>
		</>
	)
}

export default Meta
