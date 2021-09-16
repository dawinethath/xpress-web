<template>
	<v-card
		class="mx-auto"
		max-width="344"
		outlined
	>
		<v-card-title>
			Login
		</v-card-title>

		<v-card-subtitle>
			login with your username and password.
		</v-card-subtitle>

		<v-card-text>
			<v-form
				ref="form"
				v-model="valid"
				lazy-validation
			>
				<v-text-field
					v-model="username"
					:rules="[rules.required]"
					label="Username"
					required
					outlined
				></v-text-field>
				<v-text-field
					v-model="password"
					:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
					:rules="[rules.required, rules.min]"
					:type="showPassword ? 'text' : 'password'"
					label="Password"
					hint="At least 8 characters"
					@click:append="showPassword = !showPassword"
					outlined
				></v-text-field>
			</v-form>
		</v-card-text>

		<v-card-actions>
			<v-spacer></v-spacer>

			<v-btn
				class="ma-2"
				outlined
				color="teal"
				@click="login"
			>
				Login
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
	export default {
		data: () => ({
			username: '',
			password: '',
			showPassword: false,
			valid: true,
			rules: {
				required: value => !!value || 'Required.',
				min: v => v.length >= 8 || 'Min 8 characters',
			},
		}),
		methods: {
			login () {
				if(this.$refs.form.validate()){
					alert("login now")
				}
			},
		},
	}
</script>