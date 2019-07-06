

import ModifyPass from '@/pages/sysmang/ModifyPass'
import sysmang from '@/pages/sysmang/sysmang'
import Config from '@/pages/sysmang/Config'
export default{
    path: '/sysmang/',
    component: sysmang,
    children:[
        {
            path: '',
            name: 'ModifyPass',
            component: ModifyPass,
        },
        {
            path: 'config',
            name: 'Config',
            component: Config,
        }
    ]
}