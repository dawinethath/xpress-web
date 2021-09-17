<template>
    <v-select
        :loading="loading"
        class="mt-1"
        placeholder="Select Customer Type"
        v-model="customerType"
        :items="customerTypes"
        item-text="name"
        item-value="id"
        @change="emitCustomerType();onChanged();"
        return-object
        outlined/>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'CustomerTypeDropDownList',
    props: {
        initCustomerType: {
            type: Object,
        },
    },
    data() {
        return {
            customerType : null,
            loading : false
        }
    },
    methods: {
        async loadData () {
            this.loading = true;

            // Call List
            await this.$store.dispatch('customerTypes/getList');

            this.loading = false;
        },
        emitCustomerType() {
            this.$emit('emitCustomerType', this.customerType);
        },
        onChanged() {
            this.$emit('onChanged');
        },
    },
    watch: {
        initCustomerType() {
            this.customerType = this.initCustomerType;
        }
    },
    computed: mapState({
        customerTypes: state => state.customerTypes.list
    }),
    created() {
        this.loadData();
    },
    mounted() {
        /* Initial Customer Type */
        this.customerType = this.initCustomerType;
    }
}
</script>