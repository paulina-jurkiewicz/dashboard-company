import { reactive }                     from 'vue';
import { dashboardDescriptionMock }     from '@/mocks/mocks';
import { DashboardsDescription }        from '@/interfaces/DashboardsDescription';
import { DashboardDescription }         from '@/interfaces/DashboardDescription';

export default function useFiles() {
    const state = reactive({
        descriptions: [{
            id: 1,
            results: [{
                id: 1,
                header: [ '', '' ],
                title: '',
                content: [
                    {
                        items: [
                            {
                                value: ''
                            }
                        ]
                    }
                ]
            }]
        }]
    })

    state.descriptions = dashboardDescriptionMock;

    function handleSelectedDashboardDescription( id: number ): DashboardDescription[] | [] {
        const description = state.descriptions.find(( item: DashboardsDescription ) => item.id === id )

        return description? description.results : [];
    }


    return { handleSelectedDashboardDescription }
}
