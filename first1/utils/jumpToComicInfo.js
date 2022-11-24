import router from '../src/router'


export let jtci = (id)=> {
    router.push({ path: '/reading', query: { id: id } })
}