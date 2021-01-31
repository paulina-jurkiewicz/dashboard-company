<template>
    <BaseAddedFile :size="size" :type="file.type" :href="file.href">
        <template v-if="file.type === 'pdf'"><IconPdf /></template>

        <template v-if="file.type === 'docx'"><IconDocx /></template>

        <template v-if="file.type === 'csv'"><IconCsv /></template>

        <template v-if="file.type === 'img'"><img :src="require(`@/assets/images/${ file.href }`)" alt="Added image"></template>
    </BaseAddedFile>
</template>


<script lang="ts">
import BaseAddedFile        from '@/components/common/BaseAddedFile';
import IconPdf              from '@/components/icons/IconPdf';
import IconDocx             from '@/components/icons/IconDocx';
import IconCsv              from '@/components/icons/IconCsv';

export default {
    name: 'BaseThumbnailFile',
    components: { IconPdf, IconDocx, IconCsv, BaseAddedFile },
    props: {
        file: {
            type: Object,
            default: null
        },
        size: {
            type: String,
            default: null
        }
    },
    setup() {

        function getImageUrl( href: string ): string {
            return href;
        }

        return { getImageUrl }
    }
}
</script>

<style scoped lang="scss">
</style>
