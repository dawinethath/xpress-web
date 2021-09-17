<template>
	<v-card
		class="mx-auto"
		max-width="344"
		outlined
	>
		<v-toolbar
			color="primary accent-4"
			cards
			dark
			flat
		>
			<v-btn icon>
				<v-icon>mdi-arrow-left</v-icon>
			</v-btn>

			<v-card-title class="text-h6 font-weight-regular">
				CUSTOMER
			</v-card-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</v-toolbar>
		
		<v-form
			ref="form"
			v-model="valid"
			lazy-validation
			class="pa-4 pt-6"
		>
			<v-text-field
				v-model="customer.name"
				label="Name"
				outlined
			></v-text-field>

			<v-text-field
				v-model="customer.phone"
				label="Phone"
				:rules="phoneRules"					
				required
				outlined
			></v-text-field>

			<v-text-field
				v-model="customer.address"
				label="Address"
				outlined
			></v-text-field>

			<v-select
				v-model="select"
				:items="items"
				:rules="[v => !!v || 'Item is required']"
				label="Item"
				required
				outlined
			></v-select>
		</v-form>

		<v-divider></v-divider>

		<v-card-actions>
			<v-btn
				class="ma-2"
				outlined
				color="error"
				@click="cancel"
			>
				Cancel
			</v-btn>

			<v-spacer></v-spacer>

			<v-btn
				class="ma-2"  
				outlined
				color="primary"
				@click="save"
			>
				Save
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import Customer from "@/api/models/customer";

export default {
	data: () => ({
		customer : new Customer(),
		/* Validation */
		valid: true,
		phoneRules: [
			v => !!v || 'Phone is required',
			v => (v && v.length >= 9) || 'Phone must be at least 9 digits',
		],
		select: null,
		items: [
			'Item 1',
			'Item 2',
			'Item 3',
			'Item 4',
		],
		checkbox: false,
	}),
	methods: {
		save () {
			this.$refs.form.validate()
		},
		cancel () {
			
		}
	},
}
</script>