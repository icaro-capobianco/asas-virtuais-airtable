import curry from "typed-curry";
import { Fetch } from "asas-virtuais-ts"

export const retrieve = curry( async ( url : string, query : string ) => {
	return ( await Fetch.json( url, {
		method: "POST",
		body: JSON.stringify({ query: `{${query}}` }),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	} ) ).data
} )
