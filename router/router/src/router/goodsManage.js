import Active from '@/pages/goodsManage/Active'
import Attribute from '@/pages/goodsManage/Attribute'
import goodsManage from '@/pages/goodsManage/goodsManage'

export default{
    path: '/goodsManage',
    // name: 'goodsManage',
    component: goodsManage,
    children:[
        {
            path: '',
            name: 'Attribute',
            component: Attribute,
        },
        {
            path: 'active',
            name: 'Active',
            component: Active,
        }
    ]
}