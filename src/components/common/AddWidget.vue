<template>
    <BaseBox className="empty" @click="handleClickAddWidget">
        <div class="box-add-new">
            <IconAdd />

            <span>Add New Widget</span>
        </div>
    </BaseBox>
</template>


<script lang="ts">
import BaseBox      from '@/components/common/BaseBox';
import IconAdd      from '@/components/icons/IconAdd';

export default {
    name: 'AddWidget',
    components: { BaseBox, IconAdd },
    setup() {
        function handleClickAddWidget() {}

        return { handleClickAddWidget }
    }
}
</script>

<style scoped lang="scss">
    .box-add-new {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        min-height: rem(200);

        span {
            padding-left: rem(10);
            font-size: rem(16);
            font-weight: normal;
            line-height: 1.5;
            color: $font-color-primary;
        }
    }
</style>
