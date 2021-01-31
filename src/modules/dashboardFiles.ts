import { reactive }                     from 'vue';
import { dashboardsFilesMock }          from '@/mocks/mocks';
import { File }                         from '@/interfaces/File';

export default function useFiles() {
    const state = reactive({
        dashboardsFiles: [{
            id: 1,
            results: [{
                type: '',
                href: ''
            }]
        }]
    })

    state.dashboardsFiles = dashboardsFilesMock;

    function handleSelectedDashboardFiles( id: number ): File[] | undefined {
        const files = state.dashboardsFiles.find(( item ) => item.id === id )

        return files? files.results : [];
    }


    return { handleSelectedDashboardFiles }
}
