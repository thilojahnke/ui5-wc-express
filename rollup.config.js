import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json';


export default {
	input: "src/bundle.esm.js",
	output: {
		dir: "public/bundle",
		format: "es"
	},
	plugins: [
		resolve(),
		 json(),
		 terser()
		
	]
};