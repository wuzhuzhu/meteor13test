/**
 * Created by walter on 16/4/17.
 */
import { Categories } from '../../lib/categories';

const List = [
    {name:'日常',description:'日常生活的分类'},
    {name:'工作',description:'工作任务的分类'},
    {name:'学习',description:'学习事物的分类'},
    {name:'其他',description:'不太好分的分类'},
];

export default function () {
    if (!Categories.findOne()) {
        console.log('没有检测到分类内容.正在插入初始化信息.');
        List.forEach((item) => {
            console.log(item);
            Categories.insert(item);
        })
    }
}