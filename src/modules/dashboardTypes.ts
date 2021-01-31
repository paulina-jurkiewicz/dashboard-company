import { reactive, toRefs }             from 'vue';
import { dashboardTypesMock }           from '@/mocks/mocks';

export default function useDashboardTypes() {
    const state = reactive({
        types: [ {
            id: 1,
            value: ''
        }]
    })

    state.types = dashboardTypesMock;

    return {
        ...toRefs( state )
    }
}
