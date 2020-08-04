import Resource from '../Resource'

export default class Webhooks extends Resource {
	constructor(endpoint: string, apiKey: string) {
		super(endpoint, apiKey)
	}

	async list(): Promise<WebhookResponse[]> {
		return await super.list({})
	}

	async fetch(id: number): Promise<WebhookResponse> {
		return await super.fetch(id)
	}

	async create(data: WebhookRequest): Promise<WebhookResponse> {
		return await super.create(data)
	}

	async delete(id: number) {
		return await super.delete(id)
	}
}

export type WebhookEventType =
	| 'account_created'
	| 'account_updated'
	| 'cadence_created'
	| 'cadence_deleted'
	| 'cadence_membership_created'
	| 'cadence_membership_updated'
	| 'cadence_updated'
	| 'call_created'
	| 'call_data_record_created'
	| 'call_data_record_updated'
	| 'call_updated'
	| 'email_updated'
	| 'link_swap'
	| 'person_created'
	| 'person_deleted'
	| 'person_updated'
	| 'success_create'

export interface WebhookRequest {
	callback_url: string
	callback_token: string
	event_type: WebhookEventType
}

export interface WebhookResponse {
	user_guid: string
	tenant_id: number
	id: number
	event_type: WebhookEventType
	callback_url: string
	callback_token: string
}
