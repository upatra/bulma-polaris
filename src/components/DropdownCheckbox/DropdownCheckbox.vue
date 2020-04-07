<template>
    <div class="dropdown" :class="isActive ? 'is-active' : ''">
        <div class="dropdown-trigger" @click="onClick()">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>{{ dropDownTitle }}</span>
            <span class="icon is-small">
                <i class="fas" :class="isActive ? 'fa-angle-up' : 'fa-angle-down'" aria-hidden="true"></i>
            </span>
            </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                <div class="dropdown-item" v-bind:key="dropDownItem.value" v-for="dropDownItem in dropDownItems">
                    <label class="checkbox">
                        <input type="checkbox" v-model="checkedValue" :value='dropDownItem.value' @change="onChange($event)"> 
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
    name: 'DropdownCheckbox',
    props: ['dropDownTitle', 'dropDownItems'],
    data() {
        return {
            isActive: false,
            canClear: false,
            checkedValue: []
        }
    },
    methods: {
        onClick() {
            this.isActive = !this.isActive;
        },
        onChange(event) {        
            this.canClear = this.checkedValue.length > 0 ? true : false;
            this.$emit('checked', this.checkedValue);
        },
        clearCheckedValue() {
            this.checkedValue = [];
            this.canClear = false;
            this.$emit('clearChecked', this.checkedValue);
        }
    }    
}
</script>