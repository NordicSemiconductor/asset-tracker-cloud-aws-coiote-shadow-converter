import { LwM2MDocumentSchema } from '@nordicsemiconductor/lwm2m-types'
import { resourceNameToUrn } from './resourceNameToUrn'
import { convertObjectUsingSchema } from './schema-conversion/convertObjectUsingSchema'
import type { CoioteLwM2MObject, LwM2MObject } from './types'

export const convertRegisteredObject = (
	resourceName: string,
	value: CoioteLwM2MObject,
): LwM2MObject | null => {
	const urn = resourceNameToUrn(resourceName)
	if (urn === null) return null

	const objectSchema = LwM2MDocumentSchema.properties[urn]

	if (objectSchema !== undefined)
		return convertObjectUsingSchema(objectSchema, value)

	return null
}
