<template>
    <div class="dropdown">
        <div class="dropdown__option">{{ selectedItemValue() }}</div>

        <div class="dropdown__button" @click="handleClickDropdown"><IconDots /></div>

        <div class="dropdown__list" v-if="isOpen">
            <ul>
                <li v-for="( option, index ) in optionList" :key="index" @click="handleSelectOption( option.id )" v-bind:class="{ 'active': isSelected(option.id)}">{{ option.value }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import IconDots                                     from '@/components/icons/IconDots';
import { getCurrentInstance, reactive, toRefs }     from 'vue';
import { DropdownOption }                           from '@/interfaces/DropdownOption';

export default {
    name: 'BaseDropdown',
    components: { IconDots },
    props: {
        optionList: {
            type: Array,
            default: null
        }
    },
    setup( props: any ) {
        const { emit } = getCurrentInstance();

        const state = reactive({
            selected: 1,
            isOpen: false
        })

        function handleSelectOption( id: number ): void {
            state.selected = id;
            state.isOpen = false;

            console.log('dupa')
            emit( 'change-dropdown-option', id );
        }

        function selectedItemValue(): string {
            return props.optionList.find(( item: DropdownOption ) => item.id === state.selected ).value;
        }

        function handleClickDropdown(): void {
            state.isOpen = !state.isOpen;
        }

        function isSelected( id: number ): boolean {
            return state.selected === id;
        }

        return { handleSelectOption, ...toRefs(state), selectedItemValue, handleClickDropdown, isSelected }
    }
}
</script>

<style lang="scss">
.dropdown {
    width: 100%;

    &__button {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
        width: rem(72);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: $border;
        color: $color-info;
        background-color: #fff;
        border-top-right-radius: $border-radius-sm;
        border-bottom-right-radius: $border-radius-sm;;
    }

    &__list {
        @include box-shadow(rem(25) rem(22) rem(55) rem(-22) rgba(0,0,0,0.53));

        position: absolute;
        background-color: #fff;
        border: 1px solid #ebebeb;
        width: 100%;
        right: 0;
        max-width: rem(260);
        top: rem(60);
        border-bottom-right-radius: $border-radius-sm;
        border-bottom-left-radius: $border-radius-sm;
        z-index: 9;
        font-size: rem(14);

        ul {
            margin: 0;
            padding: 0;

            li {
                list-style: none;
                padding: rem(10) rem(22);
                border-top: $border;
                cursor: pointer;

                &:first-child {
                    border-top: 0;
                }

                &.active,
                &:hover,
                &:focus,
                &:active {
                    background-color: $color-secondary;
                }
            }
        }
    }

    &__option {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 160px;

        @include media-smaller-up() {
            max-width: 100%;

        }
    }
}
</style>
