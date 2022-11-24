import router from '../src/router'


export let jtcs = (comicid, sectionid ,arr,arr2) => {
    router.push({ path: '/readingStartView', query: { comicid: comicid, sectionid: sectionid,arr:arr,arr2:arr2 } })
}