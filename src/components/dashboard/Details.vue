<template>
    <div class="dashboard__details">
        <BaseBox v-for="( item, index ) in details" :key="index">
            <BaseInfoBox>
                <template #icon>
                    <template v-if="item.type === 1">
                        <BaseIcon variant="info"><IconEmployee /></BaseIcon>
                    </template>

                    <template v-if="item.type === 2">
                        <BaseIcon variant="success"><IconRequest /></BaseIcon>
                    </template>

                    <template v-if="item.type === 3">
                        <BaseIcon variant="warning"><IconActivity /></BaseIcon>
                    </template>

                    <template v-if="item.type === 4">
                        <BaseIcon variant="extra"><IconSolved /></BaseIcon>
                    </template>
                </template>

                <template #title>{{ item.label }}</template>

                <template #value>{{ item.value }}</template>
            </BaseInfoBox>
        </BaseBox>
    </div>
</template>

<script lang="ts">

import BaseBox          from '@/components/common/BaseBox.vue';
import BaseInfoBox      from '@/components/common/BaseInfoBox.vue';
import BaseIcon         from '@/components/common/BaseIcon.vue';
import IconActivity     from '@/components/icons/IconActivity.vue';
import IconSolved       from '@/components/icons/IconSolved.vue';
import IconRequest      from '@/components/icons/IconRequest.vue';
import IconEmployee     from '@/components/icons/IconEmployee.vue';


export default {
    name: 'Details',
    components: {
        BaseBox, BaseInfoBox, BaseIcon, IconEmployee, IconRequest, IconActivity, IconSolved
    },
    props: {
        details: {
            default: null,
            type: Array
        }
    }
}
</script>


<style lang="scss">
.dashboard__details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .base-box {
        flex: 0 100%;

        @include media-smaller-up() {
            flex: 0 48%;
        }
        @include media-medium-up() {
            flex: 0 23%;
        }
    }
}
</style>
