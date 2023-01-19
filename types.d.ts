import type {
	Humidity_3304,
	Humidity_3304_urn,
	Location_6,
	Location_6_urn,
	Temperature_3303,
	Temperature_3303_urn,
} from '@nordicsemiconductor/lwm2m-types'
import type {
	AssetTrackerLwM2MConfigurationObject,
	ConfigurationURN,
} from './convertConfiguration'

export type NoValue = { noValue: boolean }
export type CoioteLwM2MObject = Record<string, Record<string, string | NoValue>>
export type CoioteLwM2M = Record<string, CoioteLwM2MObject>

export type AssetTrackerLwM2MObject = Record<string, number | string | boolean>
/**
 * Describes the general shape of the nRF Asset Tracker LwM2M JSON notation.
 *
 * Example:
 *
 * {
 * 	'3303:1.1': [
 * 		{
 * 			'5518': 1665149633,
 * 			'5601': 23.51,
 * 			'5602': 23.51,
 * 			'5603': -40,
 * 			'5604': 85,
 * 			'5700': 24.57,
 * 			'5701': 'Celsius degrees',
 * 		},
 * 	],
 * 	'3304:1.1': [
 * 		{
 * 			'5518': 1665149633,
 * 			'5601': 31.064,
 * 			'5602': 31.064,
 * 			'5603': 0,
 * 			'5604': 100,
 * 			'5700': 28.927,
 * 			'5701': '%',
 * 		},
 * 	],
 * }
 */
export type AssetTrackerLwM2MDocument = Record<
	string,
	Readonly<AssetTrackerLwM2MObject | Array<AssetTrackerLwM2MObject>>
>

export type LwM2MObject =
	| Record<string, number | string | boolean>
	| Array<Record<string, number | string | boolean>>
export type AssetTrackerLwM2MShadowDocument = {
	[Temperature_3303_urn]?: Temperature_3303
	[Humidity_3304_urn]?: Humidity_3304
	[Location_6_urn]?: Location_6
	[ConfigurationURN]?: AssetTrackerLwM2MConfigurationObject
}
