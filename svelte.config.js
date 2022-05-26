import adapterAuto from '@sveltejs/adapter-auto'
import adapterStatic from '@sveltejs/adapter-static'

const dev = process.env.NODE_ENV === "development"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
	adapter: dev ? adapterAuto() : adapterStatic(),
	prerender: {
	    default: true,
	},
    }
}

export default config
