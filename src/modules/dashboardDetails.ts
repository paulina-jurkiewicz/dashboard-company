import { reactive }                     from 'vue';
import { dashboardDetailsMock }         from '@/mocks/mocks';
import { DashboardDetails }             from '@/interfaces/DashboardDetails';
import { DetailItem }                   from '@/interfaces/DetailItem';

export default function useDetails() {
    const state = reactive({
        details: [{
            id: 1,
            items: [
                {
                    type: 1,
                    label: '',
                    value: ''
                }
            ]
        }]
    })

    state.details = dashboardDetailsMock;

    function handleSelectedDashboardDetails( id: number ): DetailItem[] | [] {
        const details = state.details.find(( item: DashboardDetails ) => item.id === id )

        return details? details.items : [];
    }

    return { handleSelectedDashboardDetails }
}
