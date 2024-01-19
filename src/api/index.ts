import http from './http'

export const loginApi=(data:any)=>http.post('/park/login',data)
export const listApi=(params:any)=>http.get('/parking/card/list',{params})
export const delApi=(id:any)=>http.delete(`/parking/card/${id}`)
export const menuApi=(params:any)=>http.get('/park/enterprise',{params})

