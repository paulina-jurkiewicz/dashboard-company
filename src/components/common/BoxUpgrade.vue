<template>
    <BaseBox className="primary-gradient without-padding">
        <div class="box-upgrade">
            <div class="box-upgrade__title">Upgrade your plan</div>
            <div class="box-upgrade__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut leo tincidunt, pellentesque turpis eget, posuere ex. Cras interdum velit id pretium semper.</div>

            <div class="box-upgrade__buttons">
                <BaseButton variant="default" @click="$emit('click-dismiss-upgrade-plan')">Dismiss</BaseButton>
                <BaseButton variant="primary-gradient" @click="$toast.show(`Feature in progress`)"><span>See Plans</span></BaseButton>
            </div>
        </div>
    </BaseBox>
</template>

<script>
import BaseBox      from '@/components/common/BaseBox';
import BaseButton   from '@/components/common/BaseButton';

export default {
    name: 'BoxUpgrade',
    components: { BaseBox, BaseButton }
}
</script>

<style scoped lang="scss">
    .box-upgrade {
        position: relative;
        padding: rem(32) rem(24);

        &__title {
            font-size: rem(24);
            font-weight: 300;
            line-height: 1.33;
            color: #ffffff;
            margin-bottom: rem(16);
        }

        &__content {
            font-size: rem(14);
            font-weight: 300;
            line-height: 1.71;
            color: #ffffff;
        }

        &__buttons {
            margin-top: rem(45);
            display: flex;
            justify-content: flex-end;

            button {
                &:last-child {
                    margin-left: rem(5);
                }
            }
        }
    }
</style>
