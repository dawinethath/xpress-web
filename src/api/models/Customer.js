import CustomerType from "./CustomerType";

export default class Customer {
    constructor(data = {}) {
        this.id                 = data.id || ''        
        this.number             = data.number || ''
        this.name               = data.name || ''
        this.description        = data.description || ''
        this.type               = data.type || new CustomerType()
        this.address            = data.address || ''
        this.phone              = data.phone || ''
        this.status             = data.status || 0
        this.is_deleted         = data.is_deleted || 0

        // Trackable Entity
        this.created_by     = data.created_by || null
        this.modified_by    = data.modified_by || null
        this.created_date   = data.created_date || null
        this.modified_date  = data.modified_date || null
    }
    
    constuct(data) {
        this.constructor(data);
    }
}