<template>
    <div class="dashboard">
        <div class="dashboard__top">
            <BasePageTitle title="Dashboard"/>

            <div class="top__buttons">
                <BaseButton variant="secondary" @click="$toast.show(`Feature in progress`)">CTA Button 1</BaseButton>

                <BaseButton variant="secondary-outline" @click="$toast.show(`Feature in progress`)">CTA Button 2</BaseButton>
            </div>
        </div>

        <BaseBox>
            <BaseDropdown :optionList="types" @change-dropdown-option="onChangeDashboardType"/>
        </BaseBox>

        <template v-if="details">
           <Details :details="details" />
        </template>

        <BaseBox className="overflow-hidden">
            <BaseTabs :description="description"/>
        </BaseBox>

        <div class="row row-3">
            <BoxFiles :files="files"/>

            <BoxUpgrade @click-dismiss-upgrade-plan="onClickDismissUpgradePlan" v-if="upgradePlaneEnable"/>

            <AddWidget @click="$toast.show(`Feature in progress`)"/>
        </div>
    </div>
</template>

<script lang="ts">
import BasePageTitle                        from '@/components/common/BasePageTitle';
import BaseBox                              from '@/components/common/BaseBox';
import BaseDropdown                         from '@/components/common/BaseDropdown';
import { reactive, toRefs }                 from 'vue';
import BaseTabs                             from '@/components/common/BaseTabs.vue';
import BoxFiles                             from '@/components/common/BoxFiles.vue';
import BoxUpgrade                           from '@/components/common/BoxUpgrade.vue';
import AddWidget                            from '@/components/common/AddWidget.vue';
import useDescription                       from '@/modules/dashboardDescription';
import useDetails                           from '@/modules/dashboardDetails';
import Details                              from '@/components/dashboard/Details.vue';
import BaseButton                           from '@/components/common/BaseButton.vue';
import useDashboardTypes                    from '@/modules/dashboardTypes';
import useFiles                             from '@/modules/dashboardFiles';

export default {
    name: 'Dashboard',
    components: { BaseButton, Details, AddWidget, BoxUpgrade, BaseTabs, BoxFiles, BasePageTitle, BaseBox, BaseDropdown },

    setup() {
        const state = reactive({
            boardType: 1,
            upgradePlaneEnable: true,
            description: [],
            files: [],
            details: []
        })

        const { types } = useDashboardTypes();
        const { handleSelectedDashboardDescription } = useDescription();
        const { handleSelectedDashboardDetails } = useDetails();
        const { handleSelectedDashboardFiles } = useFiles();

        updateState();

        function onChangeDashboardType( id: number ): void {
            state.boardType = id;

            updateState();
        }

        function updateState() {
            state.description = handleSelectedDashboardDescription( state.boardType );
            state.files = handleSelectedDashboardFiles( state.boardType );
            state.details = handleSelectedDashboardDetails( state.boardType );
        }

        function onClickDismissUpgradePlan(): void {
            state.upgradePlaneEnable = false;
        }

        return { ...toRefs(state), handleSelectedDashboardDetails, types, handleSelectedDashboardFiles, onChangeDashboardType, onClickDismissUpgradePlan }
    }
}
</script>


<style lang="scss">
.dashboard {
    box-sizing: border-box;

    &__top {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(24);
        align-items: center;
        flex-direction: column;

        @include media-smaller-up() {
            flex-direction: row;
        }

        .top__buttons {
            @include media-smaller-up() {
                display: flex;
            }

            button {
                margin-top: rem(12);

                @include media-smaller-up() {
                    margin-top: 0;
                    margin-left: rem(24);
                }
            }
        }
    }

    .row {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        &.row-3 {
            .base-box {
                flex: 0 100%;

                @include media-small-up() {
                    flex: 0 48%;
                }

                @include media-medium-up() {
                    flex: 0 32%;

                    &:first-child {
                        max-width: 400px;
                    }
                }
            }
        }
    }
}
</style>
