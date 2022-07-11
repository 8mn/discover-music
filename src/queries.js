import { gql } from "@apollo/client";


export const GET_AVAILABLE_GENRES = gql`
	query MyQuery {
		spotify_Available_genres_sequence {
			genres
		}
	}
`;




export const GET_WEATHER_FROM_IP = gql`
	query MyQuery {
		ipApi_location_Auto {
			city
			country
			countryCode
			weather(units: metric) {
				current {
					# feels_like
					# temp
					weather {
						# description
						icon
						# id
						main
					}
				}
			}
		}
	}
`;



// export const FETCH_WEATHER = gql`
// 	query MyQuery($limit: Int!, $offset: Int!) {
// 		ipApi_location_Auto(lang: "en") {
// 			city
// 			continent
// 			country
// 			ip
// 			lat
// 			lon
// 			proxy
// 			district
// 			message
// 			mobile
// 			weather(units: metric) {
// 				lat
// 				lon
// 				current {
// 					clouds
// 					dew_point
// 					dt
// 					feels_like
// 					humidity
// 					pressure
// 					sunrise
// 					sunset
// 					temp
// 					uvi
// 					visibility
// 					weather {
// 						description
// 						icon
// 						id
// 						main
// 						weather_mood_music(limit: $limit, offset: $offset) {
// 							album
// 							artists
// 							disc_number
// 							duration_ms
// 							explicit
// 							external_ids
// 							external_urls
// 							href
// 							id
// 							is_local
// 							name
// 							popularity
// 							preview_url
// 							track_number
// 							type
// 							uri
// 							images {
// 								url
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `;




export const GET_RECOMMENDATION = gql`
	query MyQuery( $seed_artists: String!, $seed_tracks: String!, $seed_genres: String!, $market: String!) {
		spotify_Recommendation_Sequence(
			seed_artists: $seed_artists,
			seed_genres: $seed_genres,
			seed_tracks: $seed_tracks,
			market: $market
		) {
			tracks
		}
	}
`;



