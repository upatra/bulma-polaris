<template>
    <div class="dropdown" :class="isActive ? 'is-active' : ''" @blur="onBlur()">
        <div class="dropdown-trigger" @click="onClick()">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{{ dropdownTitle }}</span>
            <span class="icon is-small">
                <i class="fas" :class="isActive ? 'fa-angle-up' : 'fa-angle-down'" aria-hidden="true"></i>
            </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="dropdown-item" :key="dropDownItem.value" v-for="dropDownItem in dropdownItems">
                    <label class="checkbox">
                        <input type="checkbox" 
                            v-model="checkedValue" 
                            :value="dropDownItem.value"
                            @change="onChange"> 
                        {{ dropDownItem.text }}
                    </label>
                </div>
                <hr class="dropdown-divider" :class="canClear ? '': 'is-hidden'">
                <a class="dropdown-item" :class="canClear ? '': 'is-hidden'" @click="clearCheckedValue">
                    Clear
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PDropdownCheckbox',
    props: ['dropdownTitle', 'dropdownItems'],
    data() {
        return {
            isActive: false,
            canClear: false,
            checkedValue: []
        }
    },
    methods: {
        onBlur() {
            this.isActive = false
        },
        onClick() {
            this.isActive = !this.isActive;
        },
        onChange() {        
            this.canClear = this.checkedValue.length > 0 ? true : false;
            this.$emit('input', this.checkedValue);
        },
        clearCheckedValue() {
            this.checkedValue = [];
            this.canClear = false;
            this.$emit('input', this.checkedValue);
        },
    }    
}
</script>