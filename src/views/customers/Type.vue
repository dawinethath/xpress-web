<template>
<div>
	<kendo-datasource ref="customerTypeDS"
		:transport-read-url="urlPath"
		:transport-read-data-type="'json'"
		:transport-update-url="urlPath"
		:transport-update-data-type="'json'"
		:transport-destroy-url="urlPath"
		:transport-destroy-data-type="'json'"
		:transport-create-url="urlPath"
		:transport-create-data-type="'json'"
		:transport-parameter-map="parameterMap"
		:schema-model-id="'id'"
		:schema-model-fields="schemaModelFields"
		:batch='true'
		:page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="600"
		:data-source-ref="'customerTypeDS'"
		:pageable='true'
		:editable="'inline'"
		:toolbar="['create']">
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
			:width="170">
		</kendo-grid-column>
    </kendo-grid>
</div>
</template>
<script>
import kendo from '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-grid-vue-wrapper';
import { KendoDataSource } from '@progress/kendo-datasource-vue-wrapper';

const urlPath = 'https://kh5zwuvxp6.execute-api.ap-southeast-1.amazonaws.com/dev/branch/bran-5738784641/customers'

export default {
    components: {
        'kendo-grid': Grid,
        'kendo-grid-column': GridColumn,
        'kendo-datasource': KendoDataSource
    },
   data: function () {
        return {
			urlPath : urlPath,
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