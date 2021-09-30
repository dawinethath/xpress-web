<template>
	<v-card
		class="mx-auto"
		max-width="600"
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
				BRANCHES	
			</v-card-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-close</v-icon>
			</v-btn>
		</v-toolbar>

		<div>
			<kendo-datasource ref="branchDS"
				:transport-read-url="urlPath"
				:transport-read-type="'GET'"
				:transport-read-data-type="'json'"
				:transport-update-url="urlPath"
				:transport-update-type="'POST'"
				:transport-update-data-type="'json'"
				:transport-create-url="urlPath"
				:transport-create-type="'POST'"
				:transport-create-data-type="'json'"
				:transport-parameter-map="parameterMap"
				:schema-model-id="'id'"
				:schema-model-fields="schemaModelFields"
				:schema-data="'data'"
				:batch='true'
				:page-size='20'>
			</kendo-datasource>

			<kendo-grid :height="600"
				:data-source-ref="'branchDS'"
				:pageable='true'
				:editable="'inline'"
				:toolbar="['create','save','cancel']">
				<kendo-grid-column 
					:field="'name'" 
					:title="'Name'">
				</kendo-grid-column>
				<kendo-grid-column 
					:field="'description'"
					:title="'Description'"
					:width="120">
				</kendo-grid-column>
				<kendo-grid-column 
					:field="'status'"
					:title="'Status'"
					:width="120">
				</kendo-grid-column>
				<kendo-grid-column 
					:command="['edit', 'destroy']"
					:title="'&nbsp;'"
					:width="200">
				</kendo-grid-column>
			</kendo-grid>
		</div>
	</v-card>
</template>

<script>
import kendo from '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

const api = require('@/api');

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn,
        'kendo-datasource': KendoDataSource
    },
   data: function () {
        return {
			urlPath : api.xpressUrl + '/branches',
            schemaModelFields: {
                id: { type: 'number', editable: false },
                name: { validation: { required: true } },
                description: { type: 'string' },
                status: { type: 'number' }
            }
        };
    },
    methods: {
        parameterMap: function(options, operation) {
            if (operation !== 'read' && options.models) {
                return { models: kendo.stringify(options.models) };
            }
        }
    }
}
</script>